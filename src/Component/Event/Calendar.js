import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dayjs from 'dayjs'; // Import Day.js
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import {Dialog, Box, useTheme, Card} from '@mui/material';
import styled from 'styled-components';
import CalendarView from './CalendarView';
import EventForm from "./EventForm";
import EventViewer from "./EventViewer"; // Assuming you have a CalendarView component

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
    const [selectedDate, setSelectedDate] = useState(null);
    const [events, setEvents] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    // Other state variables...

    // useEffect(() => {
    //     // Fetch events when selectedDate changes
    //     if (selectedDate) {
    //         const fetchEvents = async () => {
    //             try {
    //                 const response = await axios.get(
    //                     `http://localhost:8080/api/events?date=${selectedDate}`
    //                 );
    //                 setEvents(response.data); // Assuming your API returns events for the selected date
    //             } catch (error) {
    //                 console.error('Error fetching events:', error);
    //             }
    //         };
    //
    //         fetchEvents();
    //     }
    // }, [selectedDate]);


    const handleDateClick = (date) => {
        setSelectedDate(date);
        setOpenModal(true);
    };

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
            {/*<LocalizationProvider dateAdapter={AdapterDayjs}>*/}
            {/*    <DateCalendar onDateClick={handleDateClick} selected={selectedDate} />*/}
            {/*    /!*<DateCalendar defaultValue={dayjs('2024-07-11')} readOnly />*!/*/}


            {/*</LocalizationProvider>*/}



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
            <EventForm onAddEvent={handleAddEvent} />

            </Card>

        </Box>
        </StyledDiv>
    );
}
