import React, { useState } from 'react';
import {Button, Container, TextField, Snackbar} from '@mui/material';


export default function SubmitPaperForm() {
    const [paper, setPaper] = useState({ title: '', summary: '', content: '' });
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Post the paper to the Spring Boot backend
        const response = await fetch('/api/papers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(paper),
        });
        if (response.ok) {
            setOpenSnackbar(true);

            // Handle successful submission
        } else {
            // Handle errors
        }
    };

    return (<Container>
        <form onSubmit={handleSubmit}>
            <TextField
                label="Title"
                value={paper.title}
                onChange={(e) => setPaper({ ...paper, title: e.target.value })}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Summary"
                value={paper.summary}
                onChange={(e) => setPaper({ ...paper, summary: e.target.value })}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Content"
                value={paper.content}
                onChange={(e) => setPaper({ ...paper, content: e.target.value })}
                fullWidth
                margin="normal"
                multiline
                rows={4}
            />
            <Button type="submit" variant="contained" color="primary">
                Submit Paper
            </Button>
        </form>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={() => setOpenSnackbar(false)}
                message="Paper submitted successfully"
            />
    </Container>

    );
}
