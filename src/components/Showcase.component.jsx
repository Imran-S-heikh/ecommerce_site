import React, { Suspense, lazy } from 'react'
import { Container, Grid, Typography, makeStyles } from '@material-ui/core'
import LazySkeleton from './LazySkeleton.component';
import Skeleton from '@material-ui/lab/Skeleton';
import LazyLoad from 'react-lazyload';

const createStyles = makeStyles(theme => ({
    header: {
        margin: '40px 0',
        '& > *': {
            textAlign: 'center'
        }
    }
}))

const GridLayout = lazy(() => import('./GridLayout.component'));

export default function Showcase({ items, component, title, subTitle, breakPoints, spacing = 2, fallback }) {

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
            <Suspense fallback={fallback || <div>Loading...</div>}>
                <LazyLoad offset={300} placeholder={fallback || <div>Loading...</div>}>
                    <GridLayout items={items} component={component} breakPoints={breakPoints} spacing={spacing} />
                </LazyLoad>
            </Suspense>
        </Container>
    )
}
