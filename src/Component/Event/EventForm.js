// EventForm.js

import React, { useState } from 'react';
import {TextField, Button, Box, Container, Card, useTheme} from '@mui/material';
import {DatePicker} from "@mui/x-date-pickers";
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import {
    LocalizationProvider,
} from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import axios from "axios";



//for admin
function Label() {
    const content = (
        <span>
      <strong> Add Calendar</strong>
    </span>
    );



    return content;
}
export default function EventForm({ onAddEvent }) {
    const [eventName, setEventName] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [eventDate, setEventDate] = useState(new Date()); // Initialize with today's date
    const [events, setEvents] = useState([]);

    const theme = useTheme();

    const handleAddEvent = () => {

        // Validate input (you can add more validation logic)
        if (!eventName || !eventDescription) {
            alert('Please fill in all fields.');
            return;
        }

        // Assuming you have an API endpoint to add events
        const newEvent = {
            eventName,
            eventDescription,
            eventDate,
        };

        // Send a POST request to your backend to save the event
        // Adjust the API endpoint as needed
        axios.post('http://localhost:8080/api/events', newEvent).then((response) => {
            // Update events list
            setEvents([...events, response.data]);

            // Clear input fields
            setEventName('');
            setEventDescription('');

            // Update the eventDate state with the newly created event's date
            setEventDate(response.data.eventDate);
        });

        // Call the parent component's callback to add the event
        onAddEvent(newEvent);
    };

    return (
        <Card
        sx={{ display:'flex' , flexDirection:'column', justifyContent:"space-between", rowGap:'20px', padding:'20px', backgroundColor:
                theme.palette.mode === 'dark'
                    ? theme.palette.background.paper
                    : 'lavender',
            color: theme.palette.mode === 'dark' ? theme.palette.text.primary : 'light',
        }}
        >

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                    components={[
                        'DatePicker',
                    ]}
                >
                    <DemoItem label={<Label componentName="DatePicker" valueType="date" />}>
                        <DatePicker
                            onChange={(date) => setEventDate(date)}
                            renderInput={(params) => <TextField {...params} label="Event Date" fullWidth />}
                        />
                    </DemoItem>


                </DemoContainer>
            </LocalizationProvider>
            <TextField
                label="Event Name"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                fullWidth
            />
            <TextField
                label="Event Description"
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
                fullWidth
            />


            <Button variant="contained"  fullWidth onClick={handleAddEvent}>
                Add Event
            </Button>


        </Card>
    );
}
