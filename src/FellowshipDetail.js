import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {Container, Paper, Typography, Box, Grid, Card, CardContent, CardMedia, Divider} from '@mui/material';

const FellowshipDetail = () => {
    const { title } = useParams(); // Get the title parameter from the URL

    const fellowshipDetails = {
        "title-of-fellowship-1": {
            description: "Description for Fellowship 1",
            image: 'https://th.bing.com/th/id/OIG2.WSSy5rOyS9yPsD7xf2zI?pid=ImgGn',
            deadline: 'Application Deadline: January 31, 2024',
            eligibility: 'Eligibility: Open to all graduate students',
            amount: 'Fellowship Amount: $10,000',
            contact: 'Contact: fellowship1@example.com',
            // ...other details
        },
        "title-of-fellowship-2": {
            description: "Description for Fellowship 2",
            image: 'https://th.bing.com/th/id/OIG2.WSSy5rOyS9yPsD7xf2zI?pid=ImgGn',
            // ...other details
        },
        "title-of-fellowship-3": {
            description: "Description for Fellowship 3",
            image: 'https://th.bing.com/th/id/OIG2.WSSy5rOyS9yPsD7xf2zI?pid=ImgGn',
            // ...other details
        },
        "title-of-fellowship-4": {
            description: "Description for Fellowship 4",
            image: 'https://th.bing.com/th/id/OIG2.WSSy5rOyS9yPsD7xf2zI?pid=ImgGn',
            // ...other details
        },
        // ...add as many fellowships as needed
    };

    const detail = fellowshipDetails[title];

    return (
        <Container>
            <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={detail ? detail.image : ''}
                            alt={title}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CardContent>
                            <Typography variant="h4">
                                {detail ? detail.title : 'Fellowship Detail'}
                            </Typography>
                            <Typography variant="body1" style={{ marginTop: "20px" }}>
                                {detail ? detail.description : ''}
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
                <Box sx={{ flexGrow: 1, p: 3 }}>
                    <Card sx={{ maxWidth: 600, mx: 'auto', mb: 2 }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {title.replace(/-/g, ' ')}
                            </Typography>
                            <Divider sx={{ my: 1 }} />
                            <Typography variant="body1" color="text.secondary">
                                {detail.description}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                {detail.deadline}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                {detail.eligibility}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                {detail.amount}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                <Link href={`mailto:${detail.contact}`} color="inherit">
                                    {detail.contact}
                                </Link>
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Paper>
        </Container>
    );
};

export default FellowshipDetail;
