import React from 'react';
import {Box, Card, CardContent, Grid, Link, Paper, Typography} from '@mui/material';

const newsItems = [
    {
        details: 'Details of news item 1...',
    },
    {
        details: 'Details of news item 2...',
    },
    {
        details: 'Details of news item 3...',
    },
    {
        details: 'Details of news item 4...',
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
                            <CardContent sx={{borderBottom: '5px solid blue',  "&:last-child": { paddingBottom: 0 } }
                            } variant="body1">
                            {content.details}

                        </CardContent>))}
                        <Box sx={{ textAlign: 'center', padding: 2 }}>
                            <Link href="/src/News" sx={{ textDecoration: 'none' }}>
                                More...
                            </Link>
                        </Box>
                    </Card>
                </Grid>
        </Grid>
    </Box>
);

export default NewsSection;
