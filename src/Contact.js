// ContactUs.js
import React from 'react';
import { Container, Grid, TextField, Button, Typography } from '@mui/material';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  padding: 50px 0;
`;

const ContactUs = () => (
    <StyledContainer maxWidth="md">
        <Typography variant="h4" gutterBottom>
            Contact Us
        </Typography>
        <form noValidate autoComplete="off">
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField label="First Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Last Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                    <TextField type="email" label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Message" variant="outlined" fullWidth multiline rows={4} required />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" type="submit" fullWidth>
                        Send Message
                    </Button>
                </Grid>
            </Grid>
        </form>
    </StyledContainer>
);

export default ContactUs;