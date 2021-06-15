import React from 'react'
import { BrowserRouter, NavLink } from 'react-router-dom'
import { NavContainer } from '../module'



const modRoutes = [
    { path: '/mod1', component: () => <h1>MOD 1 {Math.random()}</h1> },
    { path: '/mod2', component: () => <h1>MOD 2 {Math.random()}</h1> },
    { path: '/mod3', component: () => <h1>MOD 3 {Math.random()}</h1> },
]

const ModNav = (props: any) => <NavContainer value={modRoutes} container={TabContainer} {...props} />

const rootRoutes = [
    { path: '/root1', component: () => <h1>Root 1 {Math.random()}</h1> },
    { path: '/root2', component: () => <h1>Root 2 {Math.random()}</h1> },
    { path: '/root3', component: ModNav },
]

const RootNav = (props: any) => <NavContainer value={rootRoutes} defaultTo="/root1" container={TabContainer} {...props} />


export const App = () => {
    return (
        <BrowserRouter>
            <RootNav />
        </BrowserRouter>
    )
}
const TabContainerRaw = (props: any) => {
    const { value = [], children } = props
    console.log('Render....', value);
    const x = Math.random()
    return (
        <div>
            <h3>{x}</h3>
            <nav className="nav nav-tabs">
                {value.map((it: any) => (
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

//const TabContainer = React.memo(TabContainer2)
const TabContainer = TabContainerRaw


