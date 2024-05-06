import React from 'react';
import { Card, CardContent, Typography, Grid, Paper } from '@mui/material';

const NewsDetail = () => {
    // Demo news item data
    const newsItems = {
        "details-of-news-item-1": {
            description: "Description for Fellowship 1",
            imageUrl: 'https://th.bing.com/th/id/OIG2.WSSy5rOyS9yPsD7xf2zI?pid=ImgGn',
            title: 'Congratulations to Yitzhak Mec',
            content: 'Undergraduate in third year after being awarded the prestigious ERC-StG Nein Horensohn Doctoral Fellowship.',
            date: '14 August 2020',
            // ...other details
        },
        "details-of-news-item-2": {
            description: "Description for Fellowship 1",
            imageUrl: 'https://th.bing.com/th/id/OIG2.WSSy5rOyS9yPsD7xf2zI?pid=ImgGn',
            title: 'Congratulations to Yitzhak Mec',
            content: 'Undergraduate in third year after being awarded the prestigious ERC-StG Nein Horensohn Doctoral Fellowship.',
            date: '14 August 2020',
            // ...other details
        },"details-of-news-item-3": {
            description: "Description for Fellowship 1",
            imageUrl: 'https://th.bing.com/th/id/OIG2.WSSy5rOyS9yPsD7xf2zI?pid=ImgGn',
            title: 'Congratulations to Yitzhak Mec',
            content: 'Undergraduate in third year after being awarded the prestigious ERC-StG Nein Horensohn Doctoral Fellowship.',
            date: '14 August 2020',
            // ...other details
        },
        // ...other news items
    };
    const latestNewsItems = [
        'Congratulations to Yitzhak Mec undergraduate third year after being awarded prestigious ERC-StG Nein Horensohn Doctoral Fellowship;14 August ,2020',
        'Congratulations Drs. Pechtaltia Roman Catholic Priesthood Jerusalem upon his appointment as Auxiliary Bishop ;16 August ,2020',
        // ...other latest news items
    ];
    return (
        <Paper elevation={3} style={{ padding: '20px', margin: '20px' }}>
            <Grid container spacing={2}>
                {Object.keys(newsItems).map((key) => (
                    <Grid item xs={12} key={key}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={4}>
                                <img
                                    src={newsItems[key].imageUrl}
                                    alt="News"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <Card>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {newsItems[key].title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {newsItems[key].content}
                                        </Typography>
                                        <Typography variant="overline" display="block" gutterBottom>
                                            {newsItems[key].date}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6" gutterBottom>
                                    Latest News:
                                </Typography>
                                {latestNewsItems.map((item, index) => (
                                    <Typography variant="body2" gutterBottom key={index}>
                                        {item}
                                    </Typography>
                                ))}
                            </Grid>

                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Paper>    );
};

export default NewsDetail;
