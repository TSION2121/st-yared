import React from 'react';
import {Typography, Box, Container, Grid, Card, CardContent, CardMedia, useTheme} from '@mui/material';
import { styled } from '@mui/system';




const StyledCardContent = styled(CardContent)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    '&:last-child': {
        paddingBottom: '16px',
    },
});

const StyledContainer = styled(Container)({
    paddingTop: '40px',
    paddingBottom: '40px',
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    borderRadius: '15px',
    boxShadow: '0 3px 5px 2px rgba(33, 150, 243, .3)',
});

const StyledCardMedia = styled(CardMedia)({
    height: '140px',
    backgroundSize: 'contain',
});

// DirectorComponent
const DirectorComponent = () => {
    const theme = useTheme();

// Styled components
    const StyledCard = styled(Card)({
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
    return (
        <StyledContainer>
            <Typography variant="h4" gutterBottom style={{ color: '#fff' }}>
                Director & Activities
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <StyledCard>
                        <StyledCardContent>
                            <Typography variant="h5" component="div" gutterBottom>
                                Director's Role
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                The director leads the promotion of science, research, and education about the Ethiopian Orthodox Tewahedo Church (EOTC).
                            </Typography>
                            {/* Add more points as needed */}
                        </StyledCardContent>
                        <StyledCardMedia
                            // Add your image URL here
                            image="path-to-your-image.jpg"
                            title="Director Image"
                        />
                    </StyledCard>
                </Grid>
                <Grid item xs={12} md={6}>
                    <StyledCard>
                        <StyledCardContent>
                            <Typography variant="h5" component="div" gutterBottom>
                                Association Activities
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                The association is dedicated to:
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                - Creating a dynamic academy for professional development.
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                - Conducting research on EOTC's influence on culture and history.
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                - Preserving and restoring EOTC's written heritage.
                            </Typography>
                            {/* Add more points as needed */}
                        </StyledCardContent>
                    </StyledCard>
                </Grid>
                {/* Add more Grid items as needed for additional sections */}
            </Grid>
        </StyledContainer>
    );
};

export default DirectorComponent;
