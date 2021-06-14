import React from "react"
import { NavContainer } from "react-config-nav"
import { Service1 } from './Service1'
import { Service2 } from './Service2'

export const routes = [
    { path: '/s1', title: 'Servicio 1', component: Service1 },
    { path: '/s2', title: 'Servicio 2', component: Service2 },
    { path: '/s3', title: 'Servicio X' }
]

export const Component = (props) => <NavContainer value={routes} {...props} />;