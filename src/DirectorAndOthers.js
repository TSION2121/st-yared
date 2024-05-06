import React from 'react';
import { Typography, Box, Container, Grid, Card, CardContent, CardMedia, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import { useTranslation } from 'react-i18next';

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
    margin: '20px 0',
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
    const { t } = useTranslation();

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
                {t('director.director_and_activities')}
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <StyledCard>
                        <StyledCardContent>
                            <Typography variant="h5" component="div" gutterBottom>
                                {t('director.directors_role')}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {t('director.directors_role_description')}
                            </Typography>
                            {/* Add more points as needed */}
                        </StyledCardContent>
                        <StyledCardMedia
                            // Add your image URL here
                            image="path-to-your-image.jpg"
                            title={t('director.directors_role')}
                        />
                    </StyledCard>
                </Grid>
                <Grid item xs={12} md={6}>
                    <StyledCard>
                        <StyledCardContent>
                            <Typography variant="h5" component="div" gutterBottom>
                                {t('director.association_activities')}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {t('director.association_activities_description')}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {t('director.activity_1')}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {t('director.activity_2')}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {t('director.activity_3')}
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
