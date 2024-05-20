import React, { useState, useEffect } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import { Container, Paper, Typography, Grid, Divider } from '@mui/material';
import Button from "@mui/material/Button";

const FellowshipDetail = () => {
    const { title } = useParams();
    const navigate = useNavigate(); // Hook to access the navigate function
    const [fellowshipDetail, setFellowshipDetail] = useState(null);

    useEffect(() => {
        const fetchPapers = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/research/papers');
                const decodedTitle = decodeURIComponent(title).replace(/-/g, ' ');
                const matchedPaper = response.data.find(paper => paper.title === decodedTitle);
                if (matchedPaper) {
                    setFellowshipDetail(matchedPaper);
                } else {
                    console.log('No matching paper found');
                }
            } catch (error) {
                console.error('Error fetching papers:', error);
            }
        };
        fetchPapers();
    }, [title]);
    const handleBack = () => {
        navigate(-1); // This will take the user back to the previous page
    };

    return (
        <Container maxWidth="lg">
            <Button onClick={handleBack} style={{ margin: '20px 0' }}>
                Back
            </Button>
            <Paper elevation={3} sx={{ padding: "20px", marginTop: "20px", flexGrow: 1 }}>
                {fellowshipDetail ? (
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4}>
                            <img
                                style={{
                                    width: '100%', // Adjust the width as needed
                                    height: 'auto',
                                    objectFit: 'cover', // This will cover the area without stretching the image
                                    objectPosition: 'left' // This will align the image to the left
                                }}
                                src={fellowshipDetail.imageUrl}
                                alt={fellowshipDetail.title}
                            />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Typography gutterBottom variant="h5" component="div">
                                {fellowshipDetail.title}
                            </Typography>
                            <Divider sx={{ my: 1 }} />
                            <Typography color="text.secondary" variant="h5" gutterBottom>
                                {fellowshipDetail.header} <br/> <br/>
                            </Typography>
                            <Typography variant="body2" style={{ textAlign: 'justify' }}>
                                {fellowshipDetail.abstractText}
                           <br/> <br/>
                            </Typography>
                            <Typography variant="body2" gutterBottom style={{ textAlign: 'justify' }}>
                                {fellowshipDetail.section}
                           <br/> <br/>
                            </Typography>
                            <Typography variant="body2" style={{ textAlign: 'justify' }}>
                                {fellowshipDetail.conclusion}
                           <br/> <br/>
                            </Typography>
                            <Typography variant="caption" style={{ textAlign: 'justify' }}>
                                {fellowshipDetail.reference}
                            </Typography>

                        </Grid>
                    </Grid>
                ) : (
                    <Typography variant="body1">Paper details are not available.</Typography>
                )}
            </Paper>
        </Container>
    );
};

export default FellowshipDetail;
