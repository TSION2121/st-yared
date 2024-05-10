import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const ResearchPaperForm = () => {
    const [paper, setPaper] = useState({
        header: '',
        title: '',
        abstractText: '',
        section: '',
        conclusion: '',
        reference: ''
    });

    const handleChange = (e) => {
        setPaper({ ...paper, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
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
                abstractText: '',
                section: '',
                conclusion: '',
                reference: ''
            });
        } catch (error) {
            console.error('Error submitting paper:', error.message);
            // Handle error (e.g., show error message)
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="header"
                label="Header"
                name="header"
                value={paper.header}
                onChange={handleChange}
                autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                value={paper.title}
                onChange={handleChange}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="abstractText"
                label="Abstract"
                name="abstractText"
                value={paper.abstractText}
                onChange={handleChange}
                multiline
                rows={4}
            />
            {/* Repeat for section, conclusion, and reference */}
            <TextField
                margin="normal"
                required
                fullWidth
                id="section"
                label="Section"
                name="section"
                value={paper.section}
                onChange={handleChange}
                multiline
                rows={4}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="conclusion"
                label="Conclusion"
                name="conclusion"
                value={paper.conclusion}
                onChange={handleChange}
                multiline
                rows={4}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="reference"
                label="Reference"
                name="reference"
                value={paper.reference}
                onChange={handleChange}
                multiline
                rows={4}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Submit Paper
            </Button>
        </Box>
    );
};

export default ResearchPaperForm;
