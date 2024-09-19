import React, {useState, useEffect, useContext} from 'react';

import {Dialog, Box, useTheme, Card} from '@mui/material';
import styled from 'styled-components';
import EventForm from "./EventForm";
import EventViewer from "./EventViewer";
import {AuthContext} from "../../Context/AuthContext"; // Assuming you have a CalendarView component

const StyledDiv = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.paper : 'white',
    color: theme.palette.mode === 'dark' ? theme.palette.text.primary : 'light',
    margin: '20px 0',
    width: '100%',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
}));

export default function Calendar() {
    const theme = useTheme();
    const [events, setEvents] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const { isAuthenticated, logout, isAdmin } = useContext(AuthContext);


    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleAddEvent = (newEvent) => {
        // Add the new event to the events array
        setEvents([...events, newEvent]);
        setFormSubmitted(true);

    };

    return (
        <StyledDiv theme={theme}
                   // sx={{ display:'flex' , flexDirection:'column'}}

        >

    <Box
                sx={{ display:'flex' , flexDirection:'row'}}

            >


    <EventViewer events={events} />



                <Dialog open={openModal} onClose={handleCloseModal}>
                    {/* EventList component */}
                </Dialog>
            {/* EventForm component */}

                <Card
                    sx={{ display:'flex' , flexDirection:'column', justifyContent:"space-around", padding:'20px'}}
                >      {formSubmitted && (
                    <Box sx={{ backgroundColor: 'lightgreen', color: 'black' }}>
                        Event added successfully!
                    </Box>
                )}
                    {
                        isAuthenticated && isAdmin ? (

            <EventForm onAddEvent={handleAddEvent} />
                        ) : null}
            </Card>

        </Box>
        </StyledDiv>
    );
}
