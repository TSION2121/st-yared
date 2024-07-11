// ContactUs.js
import React, { useState } from 'react';
import {Container, Grid, TextField, Button, Typography, Box, useTheme, Card} from '@mui/material';
import {styled} from "@mui/system";
import {StyledCard} from "../../Styles/StyleComponent";
import axios from "axios";


const ContactUs = () => {
    const theme =useTheme();
    console.log(theme);


    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        affiliation: '',
        email: '',
        comment: ''
    });

    // const [recaptchaValue, setRecaptchaValue] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

    };

    // const handleRecaptcha = (value) => {
    //     setRecaptchaValue(value);
    // };

    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/contact/submit', formData);
            console.log(response.data.message);
            setFormData({ firstName: '', lastName: '', affiliation: '', email: '', comment: '' }); // Clear the form
            setSuccess(true); // Set the success state to true
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    return (
        <Container  maxWidth="md"
        sx={{
            padding: '10px',
            justifyContent:'center',
            borderRadius: '8px',
            border: '2px solid #888',
            // margin: '10px'
        }}
        >
            {success && <p>Form successfully submitted!</p>
            // navigate("/")
            }

            <Card><Box sx={{
                backgroundColor:
                    theme.palette.mode === 'dark'
                        ? theme.palette.background.paper
                        : 'white',
                color: theme.palette.mode === 'dark' ? theme.palette.text.primary : 'light',            }}>
                <Typography variant="h4" gutterBottom>
                    Contact Us
                </Typography>
                <form onSubmit={handleSubmit} >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                label="First Name"
                                name="firstName"
                                id="firstName"
                                fullWidth
                                value={formData.firstName}
                                onChange={handleChange}
                                size="small"

                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                size="small"
                                required
                                label="Last Name"
                                name="lastName"
                                id="lastName"
                                fullWidth
                                value={formData.lastName}
                                onChange={handleChange}
                                size="small"

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                label="Affiliation"
                                name="affiliation"
                                id="affiliation"
                                fullWidth
                                value={formData.affiliation}
                                onChange={handleChange}
                                size="small"

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                type="email"
                                label="Email"
                                name="email"
                                id="email"
                                fullWidth
                                value={formData.email}
                                onChange={handleChange}
                                size="small"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Comment"
                                name="comment"
                                id="comment"
                                fullWidth
                                multiline
                                rows={3}
                                value={formData.comment}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary" fullWidth>
                                Send
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box></Card>
        </Container>
    );
};

export default ContactUs;
