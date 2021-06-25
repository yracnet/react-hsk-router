import { Service1 } from './Service1'
import { Service2 } from './Service2'

export const route = {
    path: '/service',
    title: 'Service',
    children: [
        { path: '/s1', title: 'Servicio 1', component: Service1 },
        { path: '/s2', title: 'Servicio 2', component: Service2 },
        { path: '/s3', title: 'Servicio X' }
    ]
}