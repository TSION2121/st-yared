import React from 'react';
import {AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, Box, CardMedia} from '@mui/material';
import { styled, keyframes } from '@mui/system';


// Keyframes for animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const StyledCard = styled(Card)(({ theme }) => ({
    margin: '20px 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
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

const StyledCardMedia = styled(CardMedia)`
  padding-top: 56.25%; // 16:9 aspect ratio
`;

const StyledCardContent = styled(CardContent)`
  flex-grow: 1;
`;

const newsItems = [
    {
        title: 'Details of news item 1...',
        image: 'https://th.bing.com/th/id/OIG2.WSSy5rOyS9yPsD7xf2zI?pid=ImgGn'
    },
    {
        title: 'Details of news item 2...',
        image: 'https://th.bing.com/th/id/OIG2.WSSy5rOyS9yPsD7xf2zI?pid=ImgGn'
    },
    {
        title: 'Details of news item 3...',
        image: 'https://th.bing.com/th/id/OIG2.WSSy5rOyS9yPsD7xf2zI?pid=ImgGn'
    },
   ];
const Fellowship = () => {
    return (
        <div>
            <Container>
                <Typography variant="h4">Fellowships</Typography>
                <Typography variant="body1">
                    The Center for the Study of Christianity provides fellowship opportunities for scholars, students, and researchers interested in researching various aspects of Christianity. These fellowships aim to support individuals in exploring the history, theology, culture, and societal impact of the Christian faith. Applications are currently open for various types of fellowships.
                </Typography>

        <Box>
                <Typography variant="h4">Fellowships open for registration</Typography>

            <Grid container spacing={4}>
                {newsItems.map((newsItem) => (

                    <Grid item key={newsItem.id} xs={12} sm={6} md={4}>

                        <StyledCard>
                            <StyledCardMedia
                                image={newsItem.image}
                                title={newsItem.title}
                            />
                            <StyledCardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {newsItem.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {newsItem.date}
                                </Typography>
                                <Typography>
                                    {newsItem.description}
                                </Typography>
                            </StyledCardContent>
                        </StyledCard>
                    </Grid>
                ))}
            </Grid>
        </Box>

        <Box>
            <Typography variant="h4">All Fellowships</Typography>

            <Grid container spacing={4}>
                {newsItems.map((newsItem) => (

                    <Grid item key={newsItem.id} xs={12} sm={6} md={4}>

                        <StyledCard>
                            <StyledCardMedia
                                image={newsItem.image}
                                title={newsItem.title}
                            />
                            <StyledCardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {newsItem.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {newsItem.date}
                                </Typography>
                                <Typography>
                                    {newsItem.description}
                                </Typography>
                            </StyledCardContent>
                        </StyledCard>
                    </Grid>
                ))}
            </Grid>
        </Box>
            </Container>
        </div>
    );
}

export default Fellowship
