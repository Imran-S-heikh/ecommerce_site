import React from 'react'
import { Container, Grid, Typography, makeStyles } from '@material-ui/core'

const createStyles = makeStyles(theme => ({
    header: {
        margin: '40px 0',
        '& > *': {
            textAlign: 'center'
        }
    }
}))

export default function Showcase({ items, component, title, subTitle, breakPoints, spacing = 2 }) {

    const classes = createStyles();


    return (
        <Container maxWidth="lg">
            {title &&
                <div className={classes.header}>
                    <Typography variant="h5">
                        {title}
                    </Typography>
                    <Typography>
                        {subTitle}
                    </Typography>
                </div>
            }
            <Grid container spacing={Number(spacing)}>
                {items.map((item, i) =>
                    <Grid key={i} item xs={breakPoints?.xs || 12} sm={breakPoints?.sm || 4} md={breakPoints?.md || 3} lg={breakPoints?.lg || 3}>
                        {React.cloneElement(component, item)}
                    </Grid>
                )}
            </Grid>
        </Container>
    )
}
