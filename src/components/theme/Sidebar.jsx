import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { changeSidebarStatus } from '../../actions/sidebar.action';
import { Button } from 'react-bootstrap';
import menus from '../../menus/admin.menu.json';
import { SidebarNavItem } from './SidebarNavItem';
import { DeviceScreenContext } from '../DeviceScreenProvider';

class Sidebar extends React.PureComponent {
  static propTypes = {
    sidebarStatus: PropTypes.oneOf(['open', 'close', 'mini']),
  };
  toggleSidebar(e) {
    e.stopPropagation();
    this.props.dispatch(
      changeSidebarStatus(this.props.sidebarStatus === 'mini' ? 'open' : 'mini')
    );
  }
  render() {
    const { sidebarStatus } = this.props;
    return (
      <div
        className={classNames({
          'main-sidebar': true,
          [`main-sidebar--${sidebarStatus}`]: true,
        })}
      >
        <div className="sidebar-top">
          <div className="logo d-flex justify-content-center">
            <em className="fa fa-user user-icon"></em>
          </div>
        </div>
        <div className="main-nav-wrapper">
          <SidebarNavItem
            sidebarStatus={sidebarStatus}
            items={menus}
            className="main-menu"
          ></SidebarNavItem>
        </div>
        <DeviceScreenContext.Consumer>
          {(device) => {
            if (device.width <= 600) return null
            return (
              <Button
                variant="link"
                type="button"
                className="sidebar-status-btn"
                onClick={(e) => this.toggleSidebar(e)}
              >
                <span
                  className={classNames({
                    oi: true,
                    'oi-chevron-left': sidebarStatus === 'open',
                    'oi-chevron-right': sidebarStatus === 'mini',
                  })}
                  title="menu"
                  aria-hidden="true"
                ></span>
              </Button>
            );
          }}
        </DeviceScreenContext.Consumer>
      </div>
    );
  }
}
export const SidebarComponent = connect(function (state) {
  return {
    sidebarStatus: state.sidebar.status,
  };
})(Sidebar);
