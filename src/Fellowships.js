import React, {useEffect, useState} from 'react';
import {Box, Card, CardContent, Grid, Paper, Typography, useTheme} from '@mui/material';
import {Link} from "react-router-dom";
import axios from "axios";
import { useTranslation } from 'react-i18next';


const Fellowships = () => {
    const theme = useTheme();
    const [papers, setPapers] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        const fetchPapers = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/research/papers');
                console.log('Fetched papers:', response.data); // Log fetched data
                const sortedPapers = response.data.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort papers by date
                console.log('Sorted papers:', sortedPapers); // Log sorted data
                setPapers(sortedPapers); // Set the sorted papers data in state
            } catch (error) {
                console.error('Error fetching research papers:', error);
            }
        };

        fetchPapers();
    }, []);


    return (
        <Box sx={{
            flexGrow: 1,
            backgroundColor: 'transparent',
            color: 'white',
            padding: 2,
            display: 'flex',
            flexDirection: 'row'
        }}>

            <Grid container sx={{backgroundColor: 'transparent', marginTop: "4vh"}}>

                <Grid item xs={6} md={8}>
                        <Card
                        sx={{
                            // backgroundColor: 'rgba(0, 0, 0, 0.3)', // Transparent black background
                            padding: 0,
                            marginBottom: 0,
                        }}
                    >
                        <Typography variant="h5" gutterBottom bgcolor={'#000000'} color={'#ffffff'}>
                            {t('fellowships.open_fellowships')}
                        </Typography>
                            {papers.map((paper) => (
                                <CardContent sx={{
                                borderBottom: '5px solid blue', "&:last-child": {paddingBottom: 0}
                            }} variant="body1">
                                <Link
                                    style={{
                                        color: theme.palette.mode === 'dark' ? 'white' : 'black',
                                        textDecoration: 'none'
                                    }}
                                    to={`/fellowships/${paper.title.replace(/\s+/g, '-').toLowerCase()}`}>
                                    {/* Replace spaces with hyphens and convert to lowercase */}
                                    {paper.title}
                                </Link>
                                {/*{paper.title}*/}
                            </CardContent> ))}
                            <Box sx={{textAlign: 'center', padding: 2}}>
                            <Link to="/fellowships-detail" sx={{textDecoration: 'none'}}>
                                {t('fellowships.more')}
                            </Link>
                        </Box>
                    </Card>
                     </Grid>

            </Grid>
        </Box>
    )
};

export default Fellowships;
