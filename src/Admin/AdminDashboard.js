import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import {Container, Paper, Box, Typography, Button, Grid} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const { isAdmin } = useContext(AuthContext);
    const navigate = useNavigate();

    if (!isAdmin) {
        return null; // Or redirect to a "Not Authorized" or "404 Not Found" page
    }

    return (
        <Container  >
            <Box sx={{ my: 2 }}>
                <Typography variant="h4">Admin Dashboard</Typography>
            </Box>
    <Grid sx={{ display:'flex', flexDirection:"row", flexGrow:1, justifyContent:"space-evenly", flexWrap:"wrap" }}>

            <Paper sx={{ my: 2, p: 2 }}>
                <Typography variant="h6">Project Submission</Typography>
                <Button variant="contained" color="primary" onClick={() => navigate('/submitPaper')}>Submit Project</Button>            </Paper>

            <Paper sx={{ my: 2, p: 2 }}>
                <Typography variant="h6">News Poster</Typography>
                <Button variant="contained" color="primary" onClick={() => navigate('/newsPost')}>Post News</Button>
            </Paper>
        <Paper sx={{ my: 2, p: 2 }}>
            <Typography variant="h6"> News Manager </Typography>
            <Button variant="contained" color="primary" onClick={() => navigate('/newsItem')}>Manage News</Button>
        </Paper>
            <Paper sx={{ my: 2, p: 2 }}>
                <Typography variant="h6">Event Poster</Typography>
                <Button variant="contained" color="primary" onClick={() => navigate('/addCalendar')}
                >Create Event</Button>
            </Paper>

            <Paper sx={{ my: 2, p: 2 }}>
                <Typography variant="h6">Read Contact Message</Typography>
                <Button variant="contained" color="primary" onClick={() => navigate('/Contactview')}>Get Contact us Messages</Button>
            </Paper></Grid>
        </Container>
    );
};

export default AdminDashboard;
