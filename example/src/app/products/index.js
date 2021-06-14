import React from "react"
import { NavContainer } from "react-router-nav"
import { NotFound } from "./NotFound"
import { NotDefined } from "./NotDefined"
import { Product1 } from './Product1'
import { Product2 } from './Product2'

export const routes = [
    { path: '/p1', title: 'Producto 1', component: Product1 },
    { path: '/p2', title: 'Producto 2', component: Product2 },
    { path: '/pp', title: 'Producto X' }
]

export const Component = (props) => <NavContainer value={routes} {...props} notFound={NotFound} notDefined={NotDefined} />;