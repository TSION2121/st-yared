// EventViewer.js

import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {DateCalendar} from "@mui/x-date-pickers/DateCalendar";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {Box, Card, Typography} from "@mui/material";

const EventViewer = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [events, setEvents] = useState([]);

    const handleDateChange = async (date) => {
        setSelectedDate(date);
        try {
            const response = await axios.get(`/api/events?date=${date.toISOString().split('T')[0]}`);
            setEvents(response.data);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    return (
        <Box

        >

            {/*<h2>Events for {selectedDate.toISOString().split('T')[0]}</h2>*/}
            <h2>Events for {selectedDate.toISOString().split('T')[0]}</h2>

            <LocalizationProvider dateAdapter={AdapterDayjs}>

                <Box
                    sx={{ display:'flex' , flexDirection:'row' , justifyContent:'space-evenly' , gap:'70px',
                }}
                >
<Card
sx={{
    backgroundColor:'royalblue',
    alignItems:'space-around',
    color:'lavender'

}}
>

                    <ul style={{    listStyle:'numbered'   , padding:' 0 30px', width:'fit-content'

                    }}>
                        {events.map((event) => (

                            <li key={event.id}>
                                <strong>{event.eventName}</strong>:
                                <Typography>
                                {event.eventDescription}

                            </Typography>
                            </li>
                        ))}
                    </ul> </Card>

                <DateCalendar selected={selectedDate} onChange={handleDateChange} />

                </Box>

</LocalizationProvider>




        </Box>
    );
};

export default EventViewer;
