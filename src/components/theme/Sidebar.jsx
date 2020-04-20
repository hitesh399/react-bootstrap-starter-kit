import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import classNames from 'classnames'
import { changeSidebarStatus } from "../../actions/sidebar.action";
import { Button } from "react-bootstrap";

class Sidebar extends React.PureComponent {
    static propTypes = {
        sidebarStatus: PropTypes.oneOf(['open', 'close', 'mini'])
    }
    toggleSidebar(e) {
        e.stopPropagation()
        this.props.dispatch(changeSidebarStatus(this.props.sidebarStatus === 'mini' ? 'open' : 'mini'))
    }
    render() {
        const { sidebarStatus } = this.props
        return (<div className={classNames({ 'main-sidebar': true, [`main-sidebar--${sidebarStatus}`]: true })}>
            {this.props.sidebarStatus}
            <Button variant="link" type="button" className="sidebar-status-btn" onClick={(e) => this.toggleSidebar(e)}>
                <span className={classNames({ oi: true, 'oi-chevron-left': sidebarStatus === 'open', 'oi-chevron-right': sidebarStatus === 'mini', })} title="menu" aria-hidden="true"></span>
            </Button>
        </div>)
    }
}
export const SidebarComponent = connect(function (state) {
    return {
        sidebarStatus: state.sidebar.status
    }
})(Sidebar)