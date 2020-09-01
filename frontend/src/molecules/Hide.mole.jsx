import React from 'react'

export default function Hide({open,children}) {
    if(!open)return null;
    return (
        <>
          {children}  
        </>
    )
}
