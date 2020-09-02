import React from 'react'
import { useLocation } from 'react-router-dom'

export default function HideComponentOnRoute({children,route}) {
    const location = useLocation();
    if(location.pathname === route)return null;
    return (
        <>
          {children}  
        </>
    )
}
