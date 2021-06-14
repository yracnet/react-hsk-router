import React from "react"
import { NavContainer } from "react-config-nav"
import { PageContainer, MainContainer } from "./Container"
import { Component as About } from './about'
import { Component as Product } from './products'
import { Component as Service } from './services'

export const routes = [
    { path: '/about', component: About, container: MainContainer, title: 'About' },
    { path: '/product', component: Product, container: MainContainer, title: 'Product' },
    { path: '/service', component: Service, container: MainContainer, title: 'Service' }
]

export const AppComponent = (props) => <NavContainer value={routes} {...props} defaultTo="/about" container={PageContainer} />;