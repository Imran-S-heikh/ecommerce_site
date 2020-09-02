import React from 'react'
import { useEffect } from 'react'

export default function Dashboard() {
    useEffect(()=>{
        console.log('count this initial render')
    },[]);
    return (
        <div>
            This is dash board component
        </div>
    )
}
