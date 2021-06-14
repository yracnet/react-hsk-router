import React from "react"
import { NavContainer } from "react-config-nav"
import { History } from './History'
import { Mission } from './Mission'

export const routes = [
    { path: '/history', title: 'History', component: History },
    { path: '/mission', title: 'Mission', component: Mission }
]

export const Component = (props) => <NavContainer value={routes} {...props} defaultTo="/history" />;