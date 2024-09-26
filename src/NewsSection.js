import React, { useEffect, useState } from 'react';
import { Box, Card, CardContent, Grid, Typography, useTheme, Pagination } from '@mui/material';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useTranslation } from 'react-i18next';


const NewsSection = ({ darkMode, showPagination }) => {
    const theme = useTheme();
    const [newsItems, setNewsItems] = useState([]); // State to hold news data
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Set the number of items per page
    const { t } = useTranslation();

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/news');
                const sortedNews = response.data.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort news by date
                setNewsItems(sortedNews); // Set the sorted news data in state
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, []);

    // Calculate the current items to display
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = newsItems.slice(indexOfFirstItem, indexOfLastItem);

    // Change page handler
    const handleChangePage = (event, value) => {
        setCurrentPage(value);
    };

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
                        <Typography variant="h5" component="div" gutterBottom bgcolor={'#000000'} color={'#ffffff'}>
                            {t('news.latest_news')}
                        </Typography>
                        {currentItems.map((news, index) => (
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
                                {t('news.more')}
                            </Link>
                        </Box>

                    </Card>
                    {/* Pagination control */}
                    {showPagination && (
                        <Pagination
                            count={Math.ceil(newsItems.length / itemsPerPage)}
                            page={currentPage}
                            onChange={handleChangePage}
                            color="primary"
                            sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}
                        />
                    )}
                </Grid>
            </Grid>
        </Box>
    );
};

export default NewsSection;
