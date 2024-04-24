import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Card, CardContent } from '@mui/material';

// Mock data for fellowships
const fellowshipDetails = [
    {
        title: 'Title of fellowship 1',
        description: 'Description for fellowship 1...',
        image: 'https://th.bing.com/th/id/OIG2.WSSy5rOyS9yPsD7xf2zI?pid=ImgGn',
    },
    // ... add more fellowship details as needed
];

const FellowshipDetail = () => {
    const { title } = useParams();
    const formattedTitle = title.replace(/-/g, ' '); // Convert hyphens back to spaces

    // Find the corresponding fellowship detail by title
    const detail = fellowshipDetails.find(
        (fellowship) => fellowship.title.toLowerCase() === formattedTitle.toLowerCase()
    );

    if (!detail) {
        return <Typography variant="h6">Fellowship not found</Typography>;
    }

    return (
        <Box sx={{ padding:3 }}>
            <Card>
                <CardContent>
                    <Typography variant="h5">{detail.title}</Typography>
                    <img src={detail.image} alt={detail.title} style={{ width: '100%', height: 'auto' }} />
                    <Typography variant="body1" sx={{ marginTop:2 }}>{detail.description}</Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default FellowshipDetail;
