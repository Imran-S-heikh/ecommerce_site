import React from 'react'
import { useRecoilValue } from 'recoil'
import { dashboardRouteState } from '../recoil/atoms'
import { routes } from '../utils';
import CreateProduct from './CreateProduct.component';
import Dashboard from './Dashboard.component';

export default function DashboardRoutes() {

    const route = useRecoilValue(dashboardRouteState);

    if(route === routes.CREATE_PRODUCT){
        return <CreateProduct/>
    }
    if(route === routes.DASHBOARD){
        return <Dashboard/>
    }
    return null;

}
