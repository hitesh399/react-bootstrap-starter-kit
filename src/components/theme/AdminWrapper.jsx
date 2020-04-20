import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames'
import { connect } from "react-redux";

class AdminTheme extends React.Component {
  static propTypes = {
    sidebarStatus: PropTypes.oneOf(['open', 'close', 'mini'])
  }
  render() {
    const { sidebarStatus } = this.props
    return <div className={classNames({ 'admin-wrapper': true, [`sidebar-${sidebarStatus}`]: true })}>
      {this.props.children}
    </div>
  }
}
export const AdminThemeWrapper = connect(function (state) {
  return {
    sidebarStatus: state.sidebar.status
  }
})(AdminTheme)

