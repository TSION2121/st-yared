import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Card, CardContent, Grid, Typography, Button, TextField, Stack, Box} from "@mui/material";

const NewsItem = ({ news={}, onRemove }) => {
    const [editId, setEditId] = useState(null);
    const [editFormValues, setEditFormValues] = useState({});
    const [newsPosted, setNewsPosted] = useState([]);

    useEffect(() => {
        const fetchPapers = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/news');
                setNewsPosted(response.data);
            } catch (error) {
                console.error('Error fetching research news:', error);
            }
        };

        fetchPapers();
    }, []);

    const handleEdit = (id) => {
        const newsItem = newsPosted.find(news => news.id === id);
        setEditFormValues(newsItem);
        setEditId(id);
    };

    const handleDelete = async (id) => {
        const response = await axios.delete(`http://localhost:8080/api/news/${id}`);
        setNewsPosted(newsPosted.filter(news => news.id !== id));
    };

    const handleFormChange = (event) => {
        setEditFormValues({
            ...editFormValues,
            [event.target.name]: event.target.value
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.put(`http://localhost:8080/api/news/${editFormValues.id}`, editFormValues);
        setNewsPosted(newsPosted.map(news => news.id === editFormValues.id ? editFormValues : news));
        setEditId(null);
    };

    return (
        <div>
            <Grid  container spacing={3}>
                {newsPosted.map((paper) => (
                    <Grid item key={paper.id} xs={12} md={6} lg={4}>
                        <Card sx={{ height:"auto"}}>
                            <CardContent>
                                {editId === paper.id ? (
                                    <form onSubmit={handleFormSubmit}>
                                        <Stack spacing={2} direction="column">
                                            <TextField name="title" label="Title" value={editFormValues.title} onChange={handleFormChange} />
                                            <TextField name="content" label="Content" value={editFormValues.content} onChange={handleFormChange} />
                                            <TextField name="imageUrl" label="Image URL" value={editFormValues.imageUrl} onChange={handleFormChange} />
                                            <TextField name="date" label="Date" value={editFormValues.date} onChange={handleFormChange} />
                                            <Button type="submit">Submit</Button>
                                        </Stack>
                                    </form>
                                ) : (
                                    <>
                                        <Box sx={{
                                            display: "flex",
                                            justifyContent: "right"
                                        }}>
                                        <Button onClick={() => handleEdit(paper.id)}>Edit</Button>
                                        <Button onClick={() => handleDelete(paper.id)}>Delete</Button>  </Box>
                                        <Typography variant="h5" >
                                            {paper.title}
                                        </Typography>
                                        <Typography variant="body2">
                                            {/*{paper.date.substring(0,10)}*/}
                                            {new Date(paper.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}

                                        </Typography>
                                        <Box sx={{
                                            display: "flex",
                                            justifyContent: "right"
                                        }}>
                                        <Box
                                            sx={{display: "flex", flexDirection:"row" , flexWrap:"wrap", width: '40%', height: 'auto',justifyContent: "center"
                                        }}
                                            component={"img"}  src={paper.imageUrl}
                                            >
                                        </Box>

                                        <Typography color="text.secondary" gutterBottom>
                                            {paper.content}
                                        </Typography>
                                        </Box>
                                    </>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default NewsItem;
