import React from 'react';
import { Typography, Paper, Container, Grid } from '@mui/material';
import { styled } from '@mui/system';

// Styled components
const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    margin: 'auto',
    marginBottom: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'


}));

const StyledGrid = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
    },
    padding : '50px 0'
}));

// LocationComponent
const Location = () => {
    return (
        <Container>
            <StyledGrid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <StyledPaper>
                        <Typography variant="h5" gutterBottom>
                            We're located at
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            St. Yared Academy of the Ethiopian Orthodox Tewahedo Church is located in Germany e.V.
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Address: C/o Emmi.Ruben Weg 15b
                            21147 Hamburg
                        </Typography>
                    </StyledPaper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div style={{ height: '300px', width: '100%' }}>
                        <iframe
                            title="St. Yared Academy Location"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                            src="https://maps.google.com/maps?&q=Hamburg+Germany&output=embed"

                        ></iframe>
                    </div>
                </Grid>
            </StyledGrid>
        </Container>
    );
};

export default Location;
