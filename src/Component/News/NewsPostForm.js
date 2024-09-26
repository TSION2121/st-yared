import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {TextField, Button, Grid, useTheme, Container, Card} from '@mui/material';
import { Box } from "@mui/joy";

const NewsPostForm = () => {
    const theme = useTheme();
    const [newsItem, setNewsItem] = useState({
        title: '',
        content: '',
        image: null,
        date: '',
    });
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        setNewsItem(prevState => ({ ...prevState, date: today }));
    }, []);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
            setNewsItem({ ...newsItem, image: files[0] });
        } else {
            setNewsItem({ ...newsItem, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', newsItem.title);
        formData.append('content', newsItem.content);
        formData.append('date', newsItem.date);
        if (newsItem.image) {
            formData.append('image', newsItem.image);
        }

        try {
            const response = await axios.post('http://localhost:8080/api/news/submit', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('News submitted:', response.data);
            setNewsItem({
                title: '',
                content: '',
                image: null,
                date: '',
            });
            setFormSubmitted(true);
        } catch (error) {
            console.error("There was an error posting the news!", error.message);
        }
    };

    return (
        <Container maxWidth="md">
            <Card
                sx={{ display:'flex' , flexDirection:'column', justifyContent:"space-between", rowGap:'10px', padding:'20px',
                    backgroundColor:
                        theme.palette.mode === 'dark'
                            ? theme.palette.background.paper
                            : 'lavender',
                    color: theme.palette.mode === 'dark' ? theme.palette.text.primary : 'light',
                }}
            >
            {formSubmitted && (
                <Box sx={{ backgroundColor: 'lightgreen', color: 'black' }}>
                    News added successfully!
                </Box>
            )}
            <form onSubmit={handleSubmit}>
                <Grid container alignItems="flex-start" spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            size="small"
                            fullWidth
                            required
                            id="title"
                            name="title"
                            type="text"
                            placeholder="Title"
                            value={newsItem.title}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            size="small"
                            fullWidth
                            required
                            id="date"
                            name="date"
                            type="date"
                            placeholder="Date"
                            value={newsItem.date}
                            onChange={handleChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            size="small"
                            fullWidth
                            name="image"
                            id="image"
                            type="file"
                            placeholder="Image"
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            size="small"
                            fullWidth
                            required
                            id="content"
                            name="content"
                            type="text"
                            multiline
                            placeholder="Content"
                            onChange={handleChange}
                            value={newsItem.content}
                        />
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: 16 }}>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Post News
                        </Button>
                    </Grid>
                </Grid>
            </form>
            </Card>
        </Container>     );
};

export default NewsPostForm;
