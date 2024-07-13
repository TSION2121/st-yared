import React from 'react';
import { Typography, Box, Card, CardMedia, CardContent, Grid } from '@mui/material';

const MoreCourses = () => {
    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h4" gutterBottom>
                More Courses
            </Typography>
            <Grid container spacing={4}>
                {/* Add more Grid items as needed */}
                {/* Example for a course */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="180"
                            image="https://th.bing.com/th?id=OIP.4fuCEk_JVPmEhbCYdqfhugHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2" // replace with your image path
                            alt="Course Image"
                        />
                        <CardContent>
                            <Typography variant="h6">Course Name</Typography>
                            <Typography variant="body2">
                                Course description.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {/* ... */}
            </Grid>
        </Box>
    );
};

export default MoreCourses;
