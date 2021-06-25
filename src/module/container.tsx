import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useRelative } from './context'
//@ts-ignore
import { ObjectInspector } from 'react-inspector'

export const NotContainer: React.FC<any> = ({ children }) => {
    return children
}


export const NotFound: React.FC = () => {
    const { pathname } = useLocation();
    return (
        <div className="not-found">
            <h1>Rule Not Found</h1>
            <h3>The <b>{pathname}</b> not found</h3>
        </div>
    )
}

export const NotDefined: React.FC = () => {
    const { pathname } = useLocation();
    return (
        <div className="not-defined">
            <h1>Component Not Defined</h1>
            <h3>The <b>{pathname}</b> does not defined a component</h3>
        </div>
    )
}

export const DebugContainer: React.FC = ({ children }) => {
    const instance = useRelative();
    const { current, rule } = instance
    const random = Math.random();
    return (
        <div className="m-2">
            <div>
                <ObjectInspector data={instance} />
                <i>{random}</i>
            </div>
            <div className="card">
                <div className="card-header">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <b className="nav-link disabled">{current.title || current.path}</b>
                        </li>
                        {
                            current.views.map(it => (
                                <li key={it.path} className="nav-item">
                                    <NavLink to={it.uri}
                                        {...rule}
                                        className="nav-link">{it.title || it.path}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="card-body">
                    {children}
                </div>
            </div >
        </div >
    )
}
