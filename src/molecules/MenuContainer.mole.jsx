import React from 'react'
import {Collapse, Paper } from '@material-ui/core'

export default function MenuContainer({ open, children }) {
    return (
        <Paper style={{position: 'absolute',right: '-50%'}}>
            <Collapse in={open} timeout={300}>
                {children}
            </Collapse>
        </Paper>
    )
}
