import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { getCookie } from '../../utils';
import { getUserProfile } from '../../actions/auth-action';
import { SidebarComponent } from './Sidebar';

import { HeaderComponent } from './Header';
import { FooterComponent } from './Footer';
import { deleteCookie } from '../../utils/index';
import { ThemeSkeletonComponent } from './ThemeSkeleton';

export class AdminTheme extends React.PureComponent {
  static propTypes = {
    sidebarStatus: PropTypes.oneOf(['open', 'close', 'mini']),
  };

  isLogin() {
    return !!getCookie('ACCESS-TOKEN');
  }
  fetchUserProfile() {
    console.log('Call to fetch User Data...');
    const { dispatch, history } = this.props;
    dispatch(getUserProfile())
      .then(() => {
        console.log('Profile has been fetched successfully.');
      })
      .catch(() => {
        this.logout();
        history.push('/');
      });
  }

  componentWillReceiveProps(newProps) {
    this.validateUser(newProps);
  }

  logout() {
    deleteCookie('ACCESS-TOKEN');
  }

  componentDidMount() {
    this.validateUser(this.props);
  }

  validateUser(props) {
    const { authId, history, role } = props;
    if (!this.isLogin()) {
      this.logout();
      history.push('/');
      return;
    }
    if (!authId) {
      this.fetchUserProfile();
      return;
    }
    /**
     * User Is not Admin
     */
    if (role !== 'admin') {
      this.logout();
      history.push('/');
      return;
    }
  }

  render() {
    const { sidebarStatus, children, authId } = this.props;
    /**
     * When Fetching the user Data from user
     */
    if (!this.isLogin() || !authId) return <ThemeSkeletonComponent />;

    return (
      <div
        className={classNames({
          'admin-wrapper': true,
          [`sidebar-${sidebarStatus}`]: true,
        })}
      >
        <SidebarComponent />
        <div className="main-content">
          <HeaderComponent></HeaderComponent>
          <section className="router-action-area">{children}</section>
          <FooterComponent />
        </div>
      </div>
    );
  }
}
export const AdminThemeWrapper = connect(function (state) {
  return {
    sidebarStatus: state.sidebar.status,
    authId: state.auth && state.auth.id ? state.auth.id : null,
    name: state.auth && state.auth.name ? state.auth.name : null,
    email: state.auth && state.auth.email ? state.auth.email : null,
    role: state.auth && state.auth.role ? state.auth.role : null,
  };
})(AdminTheme);
