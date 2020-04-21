import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import { guidGenerator } from '../../utils';
import { Button } from 'react-bootstrap';

function checkMatchInChilddren(currentPath, items, checkInKey = "path") {
    return items.some(item => item[checkInKey] === currentPath || (item.children && checkMatchInChilddren(currentPath, item.children)))
}

export function SidebarSingleNavItem({ item, sidebarStatus, activeRackId, changeMenuRack }) {
    const _children = item.children ? item.children : []
    const match = useRouteMatch(item.path)
    const location = useLocation()
    const [open, setOpen] = useState(false)

    // console.log('I am here...')

    useEffect(() => {
        if (checkMatchInChilddren(location.pathname, _children)) {
            setOpen(true)
        }
        return () => {
        }
    }, [item, sidebarStatus, _children, location.pathname])

    useEffect(() => {
        const activeIdInChild = checkMatchInChilddren(activeRackId, _children, '_id')
        if (activeRackId && activeRackId !== item._id && open && !activeIdInChild) {
            setOpen(false)
        }
    }, [activeRackId, _children, item, open])

    useEffect(() => {
        if (sidebarStatus === 'mini' && open) {
            setOpen(false)
        }
    }, [sidebarStatus, open])

    const matched = checkMatchInChilddren(location.pathname, _children)

    //
    return (
        <li title={item.title} className={classNames({ 'has-children': !!_children.length, 'active': match && match.isExact, open: open || (sidebarStatus === 'mini' && matched) })}>
            {!_children.length
                ? <Link to={item.path} onClick={() => { if (sidebarStatus === 'open') { changeMenuRack(item._id, true) } }}>
                    <Icon icon={item.icon} />
                    <span className="nav-title">
                        {item.title}
                    </span>
                </Link>
                : <Button variant="link" onClick={(e) => { e.preventDefault(); if (sidebarStatus === 'open') { setOpen(!open); changeMenuRack(item._id, !open) } }}>
                    <Icon icon={item.icon} />
                    <span className="nav-title">
                        {item.title}
                    &nbsp;
                    {sidebarStatus === 'open'
                            ? <Icon className="indicator" icon={`fa-chevron-${open ? 'up' : 'down'}`} />
                            : <Icon className="indicator" icon="fa-chevron-right" />
                        }
                    </span>
                </Button>
            }
            {_children.length ? <div className="sub-menu-wrapper"><SidebarNavItem level={2} sidebarStatus={sidebarStatus} className="sub-menu" items={_children} /></div> : null}
        </li>
    )
}

function Icon({ icon, className }) {
    if (!icon) return null;
    return (
        <span className={`fa ${icon} ${className}`} aria-hidden="true"></span>
    )
}
export class SidebarNavItem extends React.PureComponent {
    _items = []
    constructor(props) {
        super(props)
        this._items = this.props.items.slice()
        this._items.map(i => i._id = guidGenerator())
        this.state = {
            activeRackId: null
        }
        this.changeMenuRack = this.changeMenuRack.bind(this)
    }
    changeMenuRack(_id, open) {
        console.log('I am dggg', open, _id)
        if (open) {
            this.setState({ activeRackId: _id })
        }
    }
    render() {
        const { className, sidebarStatus, level } = this.props
        const { activeRackId } = this.state
        return (
            <ul className={`list-unstyled ${className}`}>
                {this._items.map(item => <SidebarSingleNavItem changeMenuRack={this.changeMenuRack} activeRackId={activeRackId} sidebarStatus={sidebarStatus} lavel={level ? level : 1} item={item} key={`_menu_${item._id}`}></SidebarSingleNavItem>)}
            </ul >
        )
    }
}