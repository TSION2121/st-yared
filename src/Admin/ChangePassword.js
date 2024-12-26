import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from "../Context/AuthContext";
import { Card, CardContent, Grid, Typography, Button, TextField, Stack, Box } from "@mui/material";

const ChangePasswordForm = () => {
    const [editFormValues, setEditFormValues] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [message, setMessage] = useState('');
    const { userId, token } = useContext(AuthContext);

    const handleFormChange = (event) => {
        setEditFormValues({
            ...editFormValues,
            [event.target.name]: event.target.value
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        if (editFormValues.newPassword !== editFormValues.confirmPassword) {
            setMessage('New Password and Confirm New Password do not match.');
            return;
        }

        try {
            const response = await axios.put(`http://localhost:8080/api/users/changePass/${userId}`, {
                oldPassword: editFormValues.oldPassword,
                newPassword: editFormValues.newPassword,
                confirmPassword: editFormValues.confirmPassword
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            setMessage(response.data);
        } catch (error) {
            setMessage(error.response?.data || 'An error occurred while changing the password.');
        }
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
                <Card sx={{ height: "auto" }}>
                    <CardContent>
                        <Typography variant="h5">Change Password</Typography>
                        {message && <Typography color="green">{message}</Typography>}<br/>
                        <form onSubmit={handleFormSubmit}>
                            <Stack spacing={2} direction="column">
                                <TextField name="oldPassword" label="Old Password" type="password" value={editFormValues.oldPassword} onChange={handleFormChange} required />
                                <TextField name="newPassword" label="New Password" type="password" value={editFormValues.newPassword} onChange={handleFormChange} required />
                                <TextField name="confirmPassword" label="Confirm New Password" type="password" value={editFormValues.confirmPassword} onChange={handleFormChange} required />
                                <Button type="submit">Submit</Button>
                            </Stack>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default ChangePasswordForm;
