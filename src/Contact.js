// ContactUs.js
import React, { useState } from 'react';
import {Container, Grid, TextField, Button, Typography, Box, useTheme} from '@mui/material';
import ReCAPTCHA from 'react-google-recaptcha';
import {styled} from "@mui/system";


const ContactUs = () => {
    const theme = useTheme();

// Styled components
    const StyledCard = styled(Box)({
        margin: '20px',
        padding: '20px',
        transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
        '&:hover': {
            boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
            transform: 'translateY(-5px)',
        },
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        borderRadius: '8px',

    });
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        affiliation: '',
        email: '',
        comment: ''
    });

    const [recaptchaValue, setRecaptchaValue] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleRecaptcha = (value) => {
        setRecaptchaValue(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the form submission, such as sending data to a backend server
        console.log('Form data submitted:', formData);
        console.log('ReCAPTCHA value:', recaptchaValue);
    };

    return (
        <Container maxWidth="md">
            <StyledCard><Box sx={{ marginTop: 4, marginBottom: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Contact Us
                </Typography>
                <form onSubmit={handleSubmit} noValidate autoComplete="off">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                label="First Name"
                                name="firstName"
                                fullWidth
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                label="Last Name"
                                name="lastName"
                                fullWidth
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                label="Affiliation"
                                name="affiliation"
                                fullWidth
                                value={formData.affiliation}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                type="email"
                                label="Email"
                                name="email"
                                fullWidth
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Comment"
                                name="comment"
                                fullWidth
                                multiline
                                rows={4}
                                value={formData.comment}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <ReCAPTCHA
                                sitekey="6LeMsr8pAAAAAMdvdDGpDlvukFRpk-HouCvCJr8S" // Replace with your reCAPTCHA site key
                                onChange={handleRecaptcha}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary" fullWidth>
                                Send
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box></StyledCard>
        </Container>
    );
};

export default ContactUs;
