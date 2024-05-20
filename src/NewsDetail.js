import React, {useEffect, useState} from 'react';
import {Card, CardContent, Typography, Grid, Paper, Box} from '@mui/material';
import NewsSection from "./NewsSection";
import Fellowships from "./Fellowships";
import axios from "axios";
import {Link} from "react-router-dom";

const NewsDetail = ({darkMode}) => {
    const [newsPosted, setNewsPosted] = useState([]);

    // Demo news item data

 useEffect(() => {
        const fetchPapers = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/news');
                setNewsPosted(response.data);
            } catch (error) {
                console.error('Error fetching research news:', error);
            }
        };

        fetchPapers();
    }, []);
    return (
        <Paper elevation={3} style={{ padding: '20px', margin: '20px 120px',  }}>

            <Grid justifyContent="center" container spacing={2}>

                <Grid  xs={6} md={8}>
                    {newsPosted.map((key) => (
                        <Grid  spacing={50}  item xs={12} key={key}>
                            <Grid container sx={{marginBottom:"30px"}} rowGap={20}>
                                <Grid item xs={4} sm={6}>
                                    <img
                                        src={key.imageUrl}
                                        alt="News"
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                </Grid>
                                <Grid item xs={8} sm={6}>
                                    <Card>
                                        <CardContent>

                                            <Typography gutterBottom variant="h5" component="h2">
                                                <Link to={`/news/${key.title.replace(/\s+/g, '-').toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                                    {key.title}
                                                </Link>
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {key.content}
                                            </Typography>

                                            <Typography variant="overline" display="block" gutterBottom>
                                                {new Date(key.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>

                            </Grid>
                        </Grid>

                    ))}                </Grid>
                <Grid xs={6} md={4}>
                    <Grid container  md={12}   rowGap={2}>
                        {/* Use Box instead of Grid for better spacing control */}
                        <Box sx={{backgroundColor:"skyblue" ,width: '100%',flexGrow: 1 }}>
                            <NewsSection darkMode={darkMode} showPagination={true} />
                        </Box>
                    </Grid>
                </Grid>

            </Grid>

        </Paper>    );
};

export default NewsDetail;
