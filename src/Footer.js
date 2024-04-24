

// Footer.js
import React from 'react';
import { Container, Grid, Typography, Link } from '@mui/material';
import styled from 'styled-components';

const StyledFooter = styled('footer')`
  background-color: #333;
  color: white;
  padding: 20px 0;
  //position: relative;
  //bottom: 0;
  width: 100%;
`;

const Footer = () => (
    <StyledFooter>
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h7">St. Yared Academy of the EOTC  in Germany</Typography>
                    <Typography>
                        Empowering through education and research.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6">Quick Links</Typography>
                    {/* Add your quick links here */}
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6">Get in Touch</Typography>
                    <Typography>
                        Email: office@yared-academy.org
                    </Typography>
                    <Typography>
                        Phone: +123 456 7890
                    </Typography>
                    {/* Add more contact details if necessary */}
                </Grid>
            </Grid>
        </Container>
    </StyledFooter>
);

export default Footer;
