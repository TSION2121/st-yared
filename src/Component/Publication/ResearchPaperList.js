import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Card, CardContent, Typography, Grid, Container, Box} from '@mui/material';

const ResearchPapersList = () => {
    const [papers, setPapers] = useState([]);

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
        <Container>
            <Typography variant="h2" gutterBottom>
                Research Papers
            </Typography>
            <Grid container spacing={3}>
                {papers.map((paper) => (
                    <Grid item key={paper.id} xs={12} md={6} lg={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {paper.title}
                                </Typography>
                                <Typography color="text.secondary" gutterBottom>
                                    {paper.header}
                                </Typography>
                                <img
                                style={{display: "flex", flexDirection:"row" , flexWrap:"wrap", width: '40%', height: 'auto',justifyContent: "center"
                                }}
                              src={paper.imageUrl}/>
                                <Typography variant="body2">
                                  {paper.abstractText}
                                </Typography>
                                <Typography variant="body2">
                                   {paper.section}
                                </Typography>
                                <Typography variant="body2">
                                    {paper.conclusion}
                                </Typography>
                                <Typography variant="body2">
                                 {paper.reference}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ResearchPapersList;
