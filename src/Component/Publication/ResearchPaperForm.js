import React, { useState } from 'react';
import {TextField, Button, Box, Grid, Container, useTheme, Card} from '@mui/material';
import styled from "styled-components";
import {StyledCard} from "../../Styles/StyleComponent";

const ResearchPaperForm = () => {
    const theme = useTheme();


    const [paper, setPaper] = useState({
        header: '',
        title: '',
        imageUrl: '',
        abstractText: '',
        section: '',
        conclusion: '',
        reference: ''
    });
    const [formSubmitted, setFormSubmitted] = useState(false);


    const handleChange = (e) => {
        setPaper({ ...paper, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (paper.abstractText.length > 1000) { // Replace 1000 with your column's max length
            console.error('Error: Abstract text is too long.');
            return;
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(paper)
        };

        try {
            // Replace 'http://localhost:8080' with the base URL of your server
            const response = await fetch('http://localhost:8080/api/research/submit', requestOptions);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log('Paper submitted:', data);
            // Handle success (e.g., show a message, clear form)
            setPaper({
                header: '',
                title: '',
                imageUrl: '',
                abstractText: '',
                section: '',
                conclusion: '',
                reference: ''
            });
            setFormSubmitted(true);

        } catch (error) {
            console.error('Error submitting paper:', error.message);
            // Handle error (e.g., show error message)
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

            <form onSubmit={handleSubmit}

            > {formSubmitted && (
                <Box sx={{ backgroundColor: 'lightgreen', color: 'black' }}>
                    Paper added successfully!
                </Box>
            )}
                <Grid container spacing={2} >
                <Grid item xs={12} sm={4}>
                    <TextField
                        size="small"
                        margin="normal"
                        required
                        // fullWidth
                        id="header"
                        label="Header"
                        name="header"
                        value={paper.header}
                        onChange={handleChange}
                        autoFocus
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        size="small"
                        margin="normal"
                        required
                        // fullWidth
                        id="title"
                        label="Title"
                        name="title"
                        value={paper.title}
                        onChange={handleChange}
                    />
                </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            size="small"
                            margin="normal"
                            // fullWidth
                            name="imageUrl"
                            id="imageUrl"
                            type="text"
                            placeholder="Image URL"
                            onChange={handleChange}
                            value={paper.imageUrl}
                        />
                    </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        size="small"
                        margin="normal"
                        required
                        fullWidth
                        id="abstractText"
                        label="Abstract"
                        multiline
                        name="abstractText"
                        value={paper.abstractText}
                        onChange={handleChange}
                        rows={2}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        size="small"
                        margin="normal"
                        required
                        fullWidth
                        multiline
                        id="section"
                        label="Section"
                        name="section"
                        value={paper.section}
                        onChange={handleChange}
                        // multiline
                        rows={2}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        size="small"
                        margin="normal"
                        required
                        fullWidth
                        multiline
                        id="conclusion"
                        label="Conclusion"
                        name="conclusion"
                        value={paper.conclusion}
                        onChange={handleChange}
                        rows={2}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        size="small"
                        margin="normal"
                        required
                        fullWidth
                        id="reference"
                        label="Reference"
                        name="reference"
                        value={paper.reference}
                        onChange={handleChange}
                        // multiline
                        rows={4}
                    />
                </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Submit Paper
            </Button>
            </form>        </Card>
</Container> );
};

export default ResearchPaperForm;
