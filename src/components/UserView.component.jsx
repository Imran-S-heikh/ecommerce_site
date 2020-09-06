import React from 'react'
import { Container, makeStyles, Box, Paper, Typography, Avatar, Input, Dialog, TextField, MenuItem, IconButton, Tooltip } from '@material-ui/core'
import { useRecoilState } from 'recoil';
import { userState, editUserState } from '../recoil/user/user.atoms';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import Hide from '../molecules/Hide.mole';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import PublishIcon from '@material-ui/icons/Publish';
import { useSetRecoilState } from 'recoil';
import { alertSnackbarState, loaderState } from '../recoil/atoms';
import ImageUpload from './ImageUpload.component';


const createStyles = makeStyles(theme => ({
    root: {

    },
    imageContainer: {
        position: 'absolute',
        bottom: -20,
        left: 40,
        [theme.breakpoints.down('sm')]: {
            top: '60%',
            left: '50%',
            transform: 'translate(-50%,0)'
        }
    },
    avatar: {
        width: 200,
        height: 200
    }
}))

const select = ['role']


export default function UserView({ uploadHandler }) {
    const classes = createStyles();
    const setAlert = useSetRecoilState(alertSnackbarState)
    const [focus, setFocus] = useState(null)
    const [editMode, setEditMode] = useState(false)
    const [user, setuser] = useRecoilState(editUserState)
    const [textEditPopup, setTextEditPopup] = useState(false)

    useEffect(() => {
        console.log(focus)
    }, [focus])



    const handleChange = (e) => {
        const newUser = { ...user }
        newUser[focus] = e.target.value
        setuser(newUser)
        setTextEditPopup(true)

    }

    const handleFieldClick = (val) => {
        if (editMode) {
            setFocus(val)
            setTextEditPopup(true)
        }
    }


    const handleSave = () => {
        // setAlert({ open: true, message: 'Changes Saved Successfully', severity: 'success' });
        setEditMode(false)
        if(user._id){
            uploadHandler(user);
        }
    }

    const imageHandler = (_, url) => {
        setuser({ ...user, avatar: url })
    }

    return (
        <div>
            <Container maxWidth="md">
                <Box style={{ backgroundImage: `url${user.backgroundImage}` }} position="relative">
                    <Box height={300}>
                        <Paper style={{ height: '100%' }}></Paper>
                    </Box>
                    <div className={classes.imageContainer}>
                        <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }}>
                            <Box position="relative">
                                <Avatar
                                    classes={{ root: classes.avatar }}
                                    variant="square"
                                    src={user.avatar}
                                />
                                <Hide hide={!editMode}>
                                    <Box position="absolute" top={0} right={0}>
                                        <ImageUpload onUpload={imageHandler} button={
                                            <Tooltip title="Change Profile Picture">
                                                <IconButton>
                                                    <Box fontSize={25}>
                                                        <PublishIcon fontSize="inherit" />
                                                    </Box>
                                                </IconButton>
                                            </Tooltip>
                                        } />
                                    </Box>
                                </Hide>
                            </Box>
                            <Box display="flex" justifyContent="end" mb={4} ml={2} mt={2} flexDirection="column">
                                <Box display="flex">
                                    <Typography onClick={() => handleFieldClick('name')} variant="h4">
                                        {user.name}
                                    </Typography>
                                    <Typography onClick={() => handleFieldClick('role')} color="primary">
                                        {user.role}
                                    </Typography>
                                </Box>
                                <Typography color="textSecondary">
                                    {user.email}
                                </Typography>
                            </Box>
                        </Box>

                    </div>
                    <Box top={10} right={10} position="absolute">
                        <Hide hide={editMode} fallback={
                            <Tooltip arrow={true} title="Save Changes">
                                <IconButton onClick={handleSave} color="primary">
                                    <DoneIcon />
                                </IconButton>
                            </Tooltip>
                        }>
                            <Tooltip arrow={true} title="Edit Profile">
                                <IconButton onClick={() => setEditMode(true)} color="secondary">
                                    <EditIcon />
                                </IconButton>
                            </Tooltip>
                        </Hide>
                    </Box>
                </Box>

            </Container>
            <Dialog open={textEditPopup} onClose={() => setTextEditPopup(false)}>
                <Box m={4}>
                    {
                        select.includes(focus) ?
                            <TextField
                                value={user[focus]}
                                onChange={handleChange}
                                select
                                onChange={handleChange}
                            >
                                {['user', 'moderator', 'admin'].map(role =>
                                    <MenuItem key={role} value={role}>
                                        {role}
                                    </MenuItem>
                                )}
                            </TextField> :
                            <TextField value={user[focus]} onChange={handleChange} />
                    }
                </Box>
            </Dialog>

        </div>
    )
}
