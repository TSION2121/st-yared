import React, { useState } from 'react';
import axios from 'axios';
import {TextField, Button, Grid, Paper, TextareaAutosize, useTheme} from '@mui/material';
import {Box} from "@mui/joy";

const NewsPostForm = () => {
    const theme = useTheme();
    const [newsItem, setNewsItem] = useState({
        title: '',
        content: '',
        imageUrl: '',
        date: '',
    });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
        setNewsItem({ ...newsItem, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newsItem)
        };



        try {
            const response = await fetch('http://localhost:8080/api/news/submit', requestOptions);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log('Paper submitted:', data);
            setNewsItem({
                title: '',
                content: '',
                imageUrl: '',
                date: '',
            });
            setFormSubmitted(true);

        } catch (error) {
            console.error("There was an error posting the news!", error.message);
        }
    };

    return (
        <Box  sx={{
            mt: 1,
            display: 'grid',
            gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr ', md: '   1fr' },
            gap: 2,
            alignItems:'center',
            padding: '10px',
            borderRadius: '8px',
            backgroundColor:
                theme.palette.mode === 'dark'
                    ? theme.palette.background.paper
                    : 'lavender',
            color: theme.palette.mode === 'dark' ? theme.palette.text.primary : 'light',            border: '2px solid #888',
            margin: '10px',
            width: '70%',
            boxSizing: 'border-box',
            '& .MuiTextField-root': { m: 1 },
        }}>
            {formSubmitted && (
                <Box sx={{ backgroundColor: 'lightgreen', color: 'black' , }}>
                    News added successfully!
                </Box>
            )}
            <form onSubmit={handleSubmit} >
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
                            name="imageUrl"
                            id="imageUrl"
                            type="text"
                            placeholder="Image URL"
                            onChange={handleChange}
                            value={newsItem.imageUrl}
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
        </Box>
    );
};

export default NewsPostForm;
