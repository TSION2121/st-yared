import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Grid, Container } from '@mui/material';

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
                                <Typography variant="body2">
                                    Abstract: {paper.abstractText}
                                </Typography>
                                <Typography variant="body2">
                                    Section: {paper.section}
                                </Typography>
                                <Typography variant="body2">
                                    Conclusion: {paper.conclusion}
                                </Typography>
                                <Typography variant="body2">
                                    Reference: {paper.reference}
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
