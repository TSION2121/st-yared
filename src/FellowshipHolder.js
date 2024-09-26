import React, {useEffect, useState} from 'react';
import {AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, Box, CardMedia} from '@mui/material';
import { styled, keyframes } from '@mui/system';
import axios from "axios";
import {Link} from "react-router-dom";
import StYared from './assets/st-Yared-1.png';
import { useTranslation } from 'react-i18next';



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

const paperItems = [
    {
        title: 'Details of news item 1...',
        image:   StYared
    },
    {
        title: 'Details of news item 2...',
        image:   StYared
    },
    {
        title: 'Details of news item 3...',
        image:   StYared
    },
   ];
const FellowshipHolder = () => {
    const [papers, setPapers] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        const fetchPapers = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/research/papers');
                setPapers(response.data);
            } catch (error) {
                console.error('Error fetching research papers:', error);
            }
        };

        fetchPapers();
    }, []);

    return (
        <div>
            <Container>
                <Typography variant="h4">
                    {t('fellowships.title')}
                </Typography>
                <Typography variant="body1">
                    {t('fellowships.description')}
                </Typography>

        <Box>
                <Typography variant="h4">
                    {t('fellowships.open_for_registration')}

                </Typography>

            <Grid container spacing={4}>
                {papers.map((paperItem) => (

                    <Grid item key={paperItem.id} xs={12} sm={6} md={4}>

                        <StyledCard>
                            <StyledCardMedia
                                image={`data:image/jpeg;base64,${paperItem.image}`}
                                title={paperItem.title}
                            />
                            <StyledCardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    <Link to={`/fellowships/${paperItem.title.replace(/\s+/g, '-').toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        {paperItem.title}
                                    </Link>
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {paperItem.date}
                                </Typography>
                                <Typography>
                                    {paperItem.description}
                                </Typography>
                            </StyledCardContent>
                        </StyledCard>
                    </Grid>
                ))}
            </Grid>
        </Box>

        <Box>
            <Typography variant="h4">
                {t('fellowships.all_fellowships')}

            </Typography>

            <Grid container spacing={4}>
                {papers.map((paperItem) => (

                    <Grid item key={paperItem.id} xs={12} sm={6} md={4}>

                        <StyledCard>
                            <StyledCardMedia
                                image={`data:image/jpeg;base64,${paperItem.image}`}
                                title={paperItem.title}
                            />
                            <StyledCardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {paperItem.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {paperItem.date}
                                </Typography>
                                <Typography>
                                    {paperItem.description}
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

export default FellowshipHolder
