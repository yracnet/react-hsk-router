import React from 'react'
import { Switch } from 'react-router-dom'
import { NotContainer } from './Default'
import { createRelative, Relative } from './Relative'
import { NavConfig, NavItem } from './Config'

import { NavRoute, NavRouteDefault } from './NavRoute'

export interface ContainerProps {
    value: NavConfig;
    relative: NavConfig;
    [prop: string]: any;
}

export interface NavContainerProps {
    value: NavConfig | NavItem;
    basename?: string;
    defaultTo?: string;
    container?: React.FC<any>;
    notFound?: React.FC<any>;
    notDefined?: React.FC<any>;
    [prop: string]: any;
}

const NavContainerRaw: React.FC<NavContainerProps> = ({ container, defaultTo, ...props }) => {
    let { value, basename, notFound, notDefined } = props
    const relative = createRelative(basename)
    defaultTo = relative.path(defaultTo)
    const config: NavConfig = relative.config(value);
    const Container = container || NotContainer
    //const Container = React.memo(ContainerRaw, areEqualContainer)
    return (
        <Relative.Provider value={relative}>
            <Container key="container" {...props} value={config} relative={value}>
                <Switch>
                    {config.map(it => <NavRoute key={it.path} {...it} notDefined={notDefined} />)}
                    <NavRouteDefault redirectTo={defaultTo} content={notFound} />
                </Switch>
            </Container>
        </Relative.Provider>
    )
}


const areEqualNavContainer = (a: NavContainerProps, b: NavContainerProps) => {
    //console.log('areEqualNavContainer--->', a, b);
    return a.value === b.value &&
        a.basename === b.basename &&
        a.defaultTo === b.defaultTo &&
        a.container === b.container &&
        a.notFound === b.notFound &&
        a.notDefined === b.notDefined;
}
export const NavContainer = React.memo(NavContainerRaw, areEqualNavContainer)


//const areEqualContainer = (a: ContainerProps, b: ContainerProps) => {
//    console.log('areEqualContainer--->', a, b);
//    return true;
//}
