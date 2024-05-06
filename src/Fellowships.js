import React from 'react';
import {Box, Card, CardContent, Grid,  Paper, Typography} from '@mui/material';
import {Link} from "react-router-dom";

const newsItems = [
    {
        title: 'Title of fellowship 1',
        image: 'https://th.bing.com/th/id/OIG2.WSSy5rOyS9yPsD7xf2zI?pid=ImgGn'
    },
    {
        title: 'Title of fellowship 2',
        image: 'https://th.bing.com/th/id/OIG2.WSSy5rOyS9yPsD7xf2zI?pid=ImgGn'
    },
    {
        title: 'Title of fellowship 3',
        image: 'https://th.bing.com/th/id/OIG2.WSSy5rOyS9yPsD7xf2zI?pid=ImgGn'
    },
    {
        title: 'Title of fellowship 4',
        image: 'https://th.bing.com/th/id/OIG2.WSSy5rOyS9yPsD7xf2zI?pid=ImgGn'
    },
];

const Fellowships = () => (
    <Box sx={{  flexGrow: 1, backgroundColor: 'transparent', color: 'white', padding: 2 ,display:'flex', flexDirection:'row'
    }}>

        <Grid container   sx= {{  backgroundColor: 'transparent', marginTop:"4vh"}}  >

            <Grid item xs={6} md={8}  >
                <Card
                    sx={{
                        // backgroundColor: 'rgba(0, 0, 0, 0.3)', // Transparent black background
                        padding: 0,
                        marginBottom: 0,
                    }}
                >
                    <Typography variant="h5" gutterBottom bgcolor={'#000000'} color={'#ffffff'}>
                        Open Fellowships
                    </Typography>
                    {newsItems.map((content, index) => (
                        <CardContent sx={{borderBottom: '5px solid blue', "&:last-child": { paddingBottom: 0 }
                        }} variant="body1">
                            <Link to={`/fellowships/${content.title.replace(/\s+/g, '-').toLowerCase()}`}>
                                {/* Replace spaces with hyphens and convert to lowercase */}
                                {content.title}
                            </Link>
                            {/*{content.title}*/}
                        </CardContent>))}
                    <Box sx={{ textAlign: 'center', padding: 2 }}>
                        <Link to="/fellowships-detail" sx={{ textDecoration: 'none' }}>
                            More...
                        </Link>
                    </Box>
                </Card>
            </Grid>
        </Grid>
    </Box>
);

export default Fellowships;
