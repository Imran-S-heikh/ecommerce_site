import React from 'react'
import { Box, Paper, Typography, TextField, Button } from '@material-ui/core'

export default function Signup() {
    return (
        <Box my={6}>
            <Typography variant="h4" gutterBottom align="center">Create an Account</Typography>
            <Box width="max-content" maxWidth={400} margin="auto">
                <Paper>
                    <Box p={4}>
                        <Typography variant="h5">Personal Information</Typography>
                        <Box >
                            <TextField style={{marginBottom: 15}} label="Enter First Name" required fullWidth  />
                            <TextField style={{marginBottom: 15}} label="Enter Last Name" fullWidth  />
                            <TextField style={{marginBottom: 15}} label="Email Address" required fullWidth  />
                            <TextField style={{marginBottom: 15}} label="Password" required fullWidth  />
                            <TextField style={{marginBottom: 15}} label="Confirm Password" required fullWidth  />
                        </Box>
                        <Box mt={3}>
                            <Button  variant="outlined" color="primary">
                                Create Account
                            </Button>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </Box>
    )
}
