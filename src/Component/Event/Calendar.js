import React, { useState, useEffect, useContext } from 'react';
import { Dialog, Box, useTheme, Card } from '@mui/material';
import styled from 'styled-components';
import EventForm from "./EventForm";
import EventViewer from "./EventViewer";
import { AuthContext } from "../../Context/AuthContext";

const StyledDiv = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.paper : 'white',
    color: theme.palette.mode === 'dark' ? theme.palette.text.primary : 'light',
    margin: '20px 0',
    width: '100%',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column', // Ensure column layout for better responsiveness
    alignItems: 'center',
}));

export default function Calendar() {
    const theme = useTheme();
    const [events, setEvents] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const { isAuthenticated, logout, isAdmin } = useContext(AuthContext);

    useEffect(() => {
        console.log('Calendar - Authenticated:', isAuthenticated, 'Is Admin:', isAdmin);

        // This will trigger a re-render when the authentication state changes
    }, [isAuthenticated, isAdmin]);

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleAddEvent = (newEvent) => {
        setEvents([...events, newEvent]);
        setFormSubmitted(true);
    };

    return (
        <StyledDiv theme={theme}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column', // Stack components vertically
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {isAuthenticated ? (
                    isAdmin ? (
                        <Card
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: "space-around",
                                width: { xs: '100%', md: '50%' }, // Responsive width
                                marginBottom: '20px', // Margin for spacing
                            }}
                        >
                            {formSubmitted && (
                                <Box sx={{ backgroundColor: 'lightgreen', color: 'black' }}>
                                    Event added successfully!
                                </Box>
                            )}
                            <EventForm onAddEvent={handleAddEvent} />
                        </Card>
                    ) : null
                ) : null}

                <EventViewer events={events} />

                <Dialog open={openModal} onClose={handleCloseModal}>
                    {/* EventList component */}
                </Dialog>
            </Box>
        </StyledDiv>
    );
}
