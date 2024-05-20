import React, { useEffect, useState } from 'react';
import { Box, Card, CardContent, Grid, Typography, useTheme } from '@mui/material';
import { Link } from "react-router-dom";
import axios from 'axios';

const NewsSection = ({ darkMode }) => {
    const theme = useTheme();
    const [newsItems, setNewsItems] = useState([]); // State to hold news data

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/news');
                setNewsItems(response.data); // Set the news data in state
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, []);

    return (
        <Box sx={{
            backgroundColor: 'transparent', color: 'white', padding: 2, display: 'flex', flexDirection: 'row'
        }}>
            <Grid container sx={{ backgroundColor: 'transparent', marginTop: "4vh" }}>
                <Grid item xs={6} md={10}>
                    <Card
                        sx={{
                            marginBottom: 2,
                        }}
                    >
                        <Typography variant="h5" gutterBottom bgcolor={'#000000'} color={'#ffffff'}>
                            Latest News
                        </Typography>
                        {newsItems.map((news, index) => (
                            <CardContent key={index}
                                         sx={{ borderBottom: '5px solid blue', "&:last-child": { paddingBottom: 0 } }}
                                         variant="body1">
                                <Link
                                    style={{
                                        color: theme.palette.mode === 'dark' ? 'white' : 'black',
                                        textDecoration: 'none'
                                    }}
                                    to={`/news/${news.title.replace(/\s+/g, '-').toLowerCase()}`}>
                                    {news.title}
                                </Link>
                            </CardContent>))}
                        <Box sx={{ textAlign: 'center', padding: 2 }}>
                            <Link to="/news-detail" sx={{ textDecoration: 'none' }}>
                                More...
                            </Link>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default NewsSection;
