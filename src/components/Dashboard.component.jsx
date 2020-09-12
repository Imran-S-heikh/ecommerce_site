import { Avatar, Box, Button, ButtonGroup, Container, Divider, Grid, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, makeStyles, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { useEffect } from 'react'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { blue, deepOrange, deepPurple, green, grey, orange, purple, red } from '@material-ui/core/colors';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import PersonIcon from '@material-ui/icons/Person';
import { AvatarGroup, Rating, TabContext, TabPanel } from '@material-ui/lab';
import  XAxis from 'recharts/es6/cartesian/XAxis';
import  YAxis from 'recharts/es6/cartesian/YAxis';
import  Tooltip from 'recharts/es6/component/Tooltip';
import  LineChart from 'recharts/es6/chart/LineChart'; 
import Line from 'recharts/es6/cartesian/Line';
import CartesianGrid from 'recharts/es6/cartesian/CartesianGrid';

const getColor = (color, mode, value = 2, contrast) => {
    return {
        backgroundColor: mode === 'light' ? color[100 * value] : color[100 * (10 - value)],
        color: mode === 'light' ? contrast(color[100 * value]) : contrast(color[100 * (10 - value)])
    }
}

const data = [
    {
        month: 'Jan',
        sold: 30 
    },
    {
        month: 'Fev',
        sold: 40 
    },
    {
        month: 'Mar',
        sold: 35
    },
    {
        month: 'Apr',
        sold: 24 
    },
    {
        month: 'May',
        sold: 50 
    },
    {
        month: 'Jun',
        sold: 30 
    },
    {
        month: 'Jul',
        sold: 60 
    },
    {
        month: 'Aug',
        sold: 70 
    },
    {
        month: 'Sep',
        sold: 75 
    }
]



const createStyles = makeStyles(function (theme) {
    const isLight = theme.palette.type === 'light';
    const mode = theme.palette.type;
    const { getContrastText } = theme.palette;
    // theme.palette.getHello()

    return {
        avatarSize: {
            width: 50,
            height: 50,
            color: theme.palette.primary.main,
            backgroundColor: isLight ? getContrastText(deepPurple[300]) : getContrastText(deepPurple[700])

        },
        orderBox: getColor(deepPurple, mode, 2, getContrastText),
        incomeBox: getColor(green, mode, 3, getContrastText),
        expenseBox: getColor(blue, mode, 3, getContrastText),
        userBox: getColor(deepOrange, mode, 3, getContrastText),
    }
})

export default function Dashboard() {

    const classes = createStyles();
    const [currentTab, setCurrentTab] = useState(0);
    useEffect(() => {
        console.log('count this initial render')
    }, []);


    const handleTabChange = (_, nxt) => {
        setCurrentTab(nxt)
    }

    return (
        <Box mt={3}>
            <Container maxWidth="lg">
                <Grid container justify="space-between">
                    <Grid item>
                        <Typography variant="h4">Dashboard</Typography>
                    </Grid>

                    <Grid item>
                        <ButtonGroup>
                            <Button>Day</Button>
                            <Button>Week</Button>
                            <Button>Month</Button>
                            <Button>Year</Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
                <Box mt={3}>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            {/* <Paper> */}
                            <Box className={classes.orderBox} p={2}>
                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                    <Box >
                                        <Typography>NEW ORDERS</Typography>
                                        <Typography variant="h4">3478</Typography>
                                        <Typography color="textSecondary">+2.5%(30 Days)</Typography>
                                    </Box>
                                    <Box>
                                        <Avatar className={classes.avatarSize}>
                                            <ShoppingBasketIcon color="inherit" />
                                        </Avatar>
                                    </Box>
                                </Box>
                                <Box></Box>
                            </Box>
                            {/* </Paper> */}
                        </Grid>
                        <Grid item xs={3}>
                            <Box className={classes.incomeBox} p={2}>
                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                    <Box >
                                        <Typography>Total Income</Typography>
                                        <Typography variant="h4">56545</Typography>
                                        <Typography color="textSecondary">+2.5%</Typography>
                                    </Box>
                                    <Box>
                                        <Avatar className={classes.avatarSize}>
                                            <AttachMoneyIcon color="inherit" />
                                        </Avatar>
                                    </Box>
                                </Box>
                                <Box></Box>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box className={classes.expenseBox} p={2}>
                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                    <Box >
                                        <Typography>Total Expense</Typography>
                                        <Typography variant="h4">4355</Typography>
                                        <Typography color="textSecondary">+2.5%(30 Days)</Typography>
                                    </Box>
                                    <Box>
                                        <Avatar className={classes.avatarSize}>
                                            <FeaturedPlayListIcon color="inherit" />
                                        </Avatar>
                                    </Box>
                                </Box>
                                <Box></Box>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box className={classes.userBox} p={2}>
                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                    <Box >
                                        <Typography>NEW USERS</Typography>
                                        <Typography variant="h4">467</Typography>
                                        <Typography color="textSecondary">+2.5%(30 Days)</Typography>
                                    </Box>
                                    <Box>
                                        <Avatar className={classes.avatarSize}>
                                            <PersonIcon color="inherit" />
                                        </Avatar>
                                    </Box>
                                </Box>
                                <Box></Box>
                            </Box>
                        </Grid>
                        {/* ************************** */}
                        <Grid item xs={6}>
                            <Paper>
                                <Box p={2}>
                                    <Box my={2}>
                                        <Typography variant="h5" gutterBottom>Summary</Typography>
                                    </Box>
                                    {/* <Divider /> */}
                                    <Box>
                                        <TabContext value={currentTab}>
                                            <Paper square>
                                                <Tabs
                                                    value={currentTab}
                                                    onChange={handleTabChange}
                                                    // variant="fullWidth"
                                                >
                                                    {/* <Tab label="Products" /> */}
                                                    <Tab value={0} label="Sales" />
                                                    <Tab value={1} label="Cost" />
                                                    <Tab value={2} label="Revenue" />
                                                </Tabs>

                                            </Paper>
                                            <TabPanel value={0} >
                                                <Box>
                                                    <LineChart width={400} height={300} data={data}>
                                                        <Line type="monotone" dataKey="sold" stroke={blue[500]} />
                                                        <CartesianGrid stroke={grey[300]} strokeDasharray="5 5" />
                                                        <XAxis dataKey="month" />
                                                        <YAxis/>
                                                        <Tooltip/>
                                                    </LineChart>
                                                </Box>
                                            </TabPanel>
                                            <TabPanel value={1} >
                                                <Box>
                                                    Second Tab Panel
                                                </Box>
                                            </TabPanel>
                                            <TabPanel value={2} >Third Tab Panel</TabPanel>
                                        </TabContext>
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper>
                                <Box p={2}>
                                    <Box my={2}>
                                        <Typography variant="h5" gutterBottom>Top Selling Products</Typography>
                                    </Box>
                                    <Divider />
                                    <Box>
                                        <List>
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar src="https://cdn.shopify.com/s/files/1/0036/4806/1509/products/s1071627_1000x1000@2x.jpg?v=1584135740" variant="square" />
                                                </ListItemAvatar>
                                                <ListItemText primary={
                                                    <Box display="flex">
                                                        <Typography>Google Home</Typography>
                                                        <Rating
                                                            value={4}
                                                            size="small"
                                                        />
                                                    </Box>
                                                } secondary="USB Wireless" />
                                                <ListItemSecondaryAction>
                                                    <Typography variant="h6">
                                                        $129.0
                                                    </Typography>
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                            <Divider />
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar src="https://cdn.shopify.com/s/files/1/0036/4806/1509/products/s1071627_1000x1000@2x.jpg?v=1584135740" variant="square" />
                                                </ListItemAvatar>
                                                <ListItemText primary={
                                                    <Box display="flex">
                                                        <Typography>Google Home</Typography>
                                                        <Rating
                                                            value={4}
                                                            size="small"
                                                        />
                                                    </Box>
                                                } secondary="USB Wireless" />
                                                <ListItemSecondaryAction>
                                                    <Typography variant="h6">
                                                        $129.0
                                                    </Typography>
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                            <Divider />
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar src="https://cdn.shopify.com/s/files/1/0036/4806/1509/products/s1071627_1000x1000@2x.jpg?v=1584135740" variant="square" />
                                                </ListItemAvatar>
                                                <ListItemText primary={
                                                    <Box display="flex">
                                                        <Typography>Google Home</Typography>
                                                        <Rating
                                                            value={4}
                                                            size="small"
                                                        />
                                                    </Box>
                                                } secondary="USB Wireless" />
                                                <ListItemSecondaryAction>
                                                    <Typography variant="h6">
                                                        $129.0
                                                    </Typography>
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                            {/* <Divider/> */}
                                        </List>
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper>
                                <Box p={2}>
                                    <Box my={2}>
                                        <Typography variant="h5" gutterBottom>Recent Activity</Typography>
                                    </Box>
                                    <Divider />
                                    <Box>
                                        <List>
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar />
                                                </ListItemAvatar>
                                                <ListItemText primary="Delivered" />
                                                <ListItemSecondaryAction>
                                                    <Typography color="textSecondary">
                                                        25mins ago
                                                    </Typography>
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                        </List>
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper>
                                <Box p={2}>
                                    <Box my={2}>
                                        <Typography variant="h5" gutterBottom>Recent Products</Typography>
                                    </Box>
                                    <Divider />
                                    <Box>
                                        <List>
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar src="https://cdn.shopify.com/s/files/1/0036/4806/1509/products/s1071627_1000x1000@2x.jpg?v=1584135740" variant="square" />
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={
                                                        <Typography>Google Home</Typography>
                                                    }
                                                    secondary={
                                                        <Typography variant="h6">
                                                            $129.0
                                                        </Typography>
                                                    }
                                                />

                                            </ListItem>
                                        </List>
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper>
                                <Box p={2}>
                                    <Box my={2}>
                                        <Typography variant="h5" gutterBottom>Recent bayers</Typography>
                                    </Box>
                                    <Divider />
                                    <Box>
                                        <List>
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar src="https://mattersindia.com/wp-content/uploads/2020/09/bieber.jpg"  />
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={
                                                        <Typography>Justin Bieber</Typography>
                                                    }
                                                    secondary={
                                                        <Typography color="textSecondary">
                                                            12 Sept,2020
                                                        </Typography>
                                                    }
                                                />
                                                <ListItemSecondaryAction>
                                                    <AvatarGroup >
                                                        <Avatar src="https://timesofindia.indiatimes.com/thumb/msid-73984558,width-1200,height-900,resizemode-4/.jpg" />
                                                        <Avatar src="https://i.pinimg.com/originals/2d/43/1f/2d431f765ad31dae82a632aa8246d28c.jpg" />
                                                    </AvatarGroup>
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                        </List>
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>

            </Container>
        </Box>
    )
}
