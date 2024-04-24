import React from 'react';
import {Typography, Box, Container, Grid, Card, CardMedia, useTheme} from '@mui/material';
import { styled, keyframes } from '@mui/system';

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
                About St. Yared Academy
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <StyledCard>
                        <StyledBox>
                            <Typography variant="h4" component="div" gutterBottom>
                                Mission
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                St. Yared Academy is dedicated to promoting science, research, and education about the Ethiopian Orthodox Tewahedo Church (EOTC). Our mission is realized by:
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                - Creating a dynamic & accessible academy for the professional development of university graduates and all interested individuals.
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                - Preserving and disseminating research results about the EOTC from various scientific research institutions.
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                - Conducting research on the influence of EOTC on the environment, culture, art, welfare architecture, literature, philosophy, music, language, and national history.
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                - Collecting, preserving, and restoring unique and valuable written heritage of EOTC through digital means and artifacts.
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                - Creating an accessible learning environment for academics and interested individuals of all ages to provide knowledge and experiences about EOTC.
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
