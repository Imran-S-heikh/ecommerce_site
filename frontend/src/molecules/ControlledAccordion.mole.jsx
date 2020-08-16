import React, { useState } from 'react'
import { Accordion, AccordionSummary, Typography, AccordionDetails, Box, InputBase, Button, Divider } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

export default function ControlledAccordion({children,title}) {

    const [expandable, setExpandable] = useState(true);


    return (
        <Accordion style={{marginBottom: 2}} expanded={!expandable} onChange={() => setExpandable(!expandable)}>
            <AccordionSummary
                expandIcon={expandable ? <AddIcon /> : <RemoveIcon />}
            >
                <Typography variant="h6">
                    {title}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                {children}
            </AccordionDetails>
        </Accordion>
    )
}
