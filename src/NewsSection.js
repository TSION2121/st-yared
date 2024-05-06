import React from 'react';
import {Box, Card, CardContent, Grid, Paper, Typography} from '@mui/material';
import {Link} from "react-router-dom";

const newsItems = [
    {
        title: 'Details of news item 1',
    },
    {
        title: 'Details of news item 2',
    },
    {
        title: 'Details of news item 3',
    },
    {
        title: 'Details of news item 4',
    },


    // Add more news items as needed
];

const NewsSection = () => (
    <Box sx={{ backgroundColor: 'transparent', color: 'white', padding: 2 ,display:'flex', flexDirection:'row'
    }}>
        <Grid container   sx= {{  backgroundColor: 'transparent', marginTop:"4vh"}}  >
                <Grid item xs={6} md={8}  >
                    <Card
                        sx={{
                            // backgroundColor: 'rgba(0, 0, 0, 0.3)', // Transparent black background
                            // padding: 2,
                            marginBottom: 2,
                        }}
                    >
                        <Typography variant="h5" gutterBottom bgcolor={'#000000'} color={'#ffffff'}>
                        Latest News
                        </Typography>
                        {newsItems.map((content, index) => (
                            <CardContent key={index} sx={{borderBottom: '5px solid blue',  "&:last-child": { paddingBottom: 0 } }
                            } variant="body1">
                                <Link to={`/news/${content.title.replace(/\s+/g, '-').toLowerCase()}`}>
                                    {/* Replace spaces with hyphens and convert to lowercase */}
                                    {content.title}
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

export default NewsSection;
