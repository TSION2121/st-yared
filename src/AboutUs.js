import React from 'react';
import {Typography, Box, Container, Grid, Card, CardMedia, useTheme} from '@mui/material';
import { styled, keyframes } from '@mui/system';
import {useTranslation} from "react-i18next";

// Image URL
const churchImage = 'https://yt3.ggpht.com/a/AGF-l7-LQkmghwCr0bIbKdlr7R2yfgKr9cyZeWvvoQ=s900-c-k-c0xffffffff-no-rj-mo';

// Keyframes for animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled components


const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
    width: '300px',
    height: '200px',
    [theme.breakpoints.down('md')]: {
        width: '100%',
    },
}));

const StyledBox = styled(Box)(({ theme }) => ({
    margin: '20px',
    padding: '20px',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '10px',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[4],
    color: theme.palette.text.primary,

}));

// AboutUs component
const AboutUs = () => {
    const theme = useTheme();
    const { t } = useTranslation();



    const StyledCard = styled(Card)(({ theme }) => ({
        margin: '20px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
            transform: 'scale(1.03)',
        },
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
        animation: `${fadeIn} 0.8s ease-out`,
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',

    }));
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                {t('about_us.about_title')}
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <StyledCard>
                        <StyledBox>
                            <Typography variant="h4" component="div" gutterBottom>
                                {t('about_us.mission')}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {t('about_us.mission_description')}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {t('about_us.mission_point_1')}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {t('about_us.mission_point_2')}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {t('about_us.mission_point_3')}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {t('about_us.mission_point_4')}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {t('about_us.mission_point_5')}
                            </Typography>
                            {/* Add more points as needed */}
                        </StyledBox>
                        <StyledCardMedia
                            image={churchImage}
                            title="Ethiopian Orthodox Tewahedo Church"
                        />
                    </StyledCard>
                </Grid>
                {/* ... other Grid items */}
            </Grid>
        </Container>
    );
};

export default AboutUs;
