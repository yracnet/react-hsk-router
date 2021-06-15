import React, { FC } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ContainerProps } from './Container'

export const NotContainer: FC<any> = ({ children }) => {
    return children
}

export const NotFound: FC<any> = () => {
    const { pathname } = useLocation();
    return (
        <div className="not-found">
            <h1>Rule Not Found</h1>
            <h3>The <b>{pathname}</b> not found</h3>
        </div>
    )
}

export const NotDefined: FC<any> = () => {
    const { pathname } = useLocation();
    return (
        <div className="not-defined">
            <h1>Component Not Defined</h1>
            <h3>The <b>{pathname}</b> does not defined a component</h3>
        </div>
    )
}


export const TabContainer: FC<ContainerProps> = (props) => {
    const { value = [], children } = props
    return (
        <div>
            <nav className="nav nav-tabs">
                {value.map(it => (
                    <NavLink key={it.path}
                        to={it.path}
                        exact={it.exact}
                        className="nav-item nav-link">
                        {it.title || it.path}
                    </NavLink>
                ))}
            </nav>
            <div className="tab-content">
                {children}
            </div>
        </div>
    )
}
