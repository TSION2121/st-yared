import React from 'react';
import { Container, Grid, Typography, useTheme } from '@mui/material';
import styled from 'styled-components';

const StyledFooter = styled('footer')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.paper : 'royalblue',
    color: theme.palette.mode === 'dark' ? theme.palette.text.primary : 'white',
    padding: '20px 0',
    marginTop: '80px',

    width: '100%',
}));

const Footer = () => {
    const theme = useTheme();

    return (
        <StyledFooter theme={theme}>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h7">St. Yared Academy of the EOTC  in Germany</Typography>
                        <Typography>
                            Ancient - Apostolic - Revered
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6">Quick Links</Typography>
                        {/* Add your quick links here */}
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6">Get in Touch</Typography>
                     <Typography>
                         St. Yared Academy of Ethiopian Orthodox Tewahido Church in Germany
                     </Typography>

                        <Typography>

                         Emmi-Ruben-Weg 15a </Typography>
                        <Typography> 21147 Hamburg</Typography>
                        <Typography>
                            Email: office@yared-academy.org
                        </Typography>
                        <Typography> Bank: Deutsche Skatbank</Typography>
                        <Typography>  IBAN: DE06 8306 5408 0005 3525 92</Typography>
                        <Typography>   BIC: GENODEF1SLR</Typography>


                         {/*Add more contact details if necessary */}
                    </Grid>
                </Grid>
            </Container>

        </StyledFooter>
    );
};

export default Footer;
