// EventForm.js

import React, { useState } from 'react';
import {
    TextField,
    Button,
    Box,
    Container,
    Card,
    useTheme,
    FormControl,
    InputLabel,
    Select,
    MenuItem, FormLabel, RadioGroup, Radio
} from '@mui/material';
import {DatePicker} from "@mui/x-date-pickers";
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import {
    LocalizationProvider,
} from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import axios from "axios";
import FormControlLabel from "@mui/material/FormControlLabel";



//for admin
function Label({ text }) {
    return (
        <span>
            <strong>{text}</strong>
        </span>
    );
}
export default function EventForm({ onAddEvent }) {
    const [eventName, setEventName] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [eventDate, setEventDate] = useState(new Date()); // Initialize with today's date
    const [events, setEvents] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [eventType, setEventType] = useState('oneDay');
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
            eventDate: eventType === 'oneDay' ? eventDate : null,
            startDate: eventType === 'continuous' ? startDate : null,
            endDate: eventType === 'continuous' ? endDate : null,
        };

        // Send a POST request to your backend to save the event
        // Adjust the API endpoint as needed
        axios.post('http://localhost:8080/api/events', newEvent).then((response) => {
            // Update events list
            setEvents([...events, response.data]);

            // Clear input fields
            setEventName('');
            setEventDescription('');
            setEventDate(new Date());
            setStartDate(new Date());
            setEndDate(new Date());

            // Update the eventDate state with the newly created event's date
            // setEventDate(response.data.eventDate);
        });

        // Call the parent component's callback to add the event
        onAddEvent(newEvent);
    };

    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: "space-between",
                rowGap: '20px',
                padding: '20px',
                backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.paper : 'lavender',
                color: theme.palette.mode === 'dark' ? theme.palette.text.primary : 'light',
                width: '100%', // Ensure full width on small screens
                maxWidth: '500px', // Limit max width for better readability
                margin: '0 auto', // Center align on larger screens
                boxSizing: 'border-box', // Ensure padding is included in the width

            }}
        >
            <FormControl component="fieldset">
                <FormLabel component="legend">Event Type</FormLabel>
                <RadioGroup row aria-label="eventType" name="eventType" value={eventType} onChange={(e) => setEventType(e.target.value)}>
                    <FormControlLabel value="oneDay" control={<Radio />} label="One-Day Event" />
                    <FormControlLabel value="continuous" control={<Radio />} label="Continuous Event" />
                </RadioGroup>
            </FormControl>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                    {eventType === 'oneDay' ? (
                        <DemoItem label={<Label componentName="DatePicker" text="Event Date" valueType="date" />}>
                            <DatePicker onChange={(date) => setEventDate(date)} renderInput={(params) => <TextField {...params} label="Event Date" fullWidth />} />
                        </DemoItem>
                    ) : (
                        <>
                            <DemoItem label={<Label componentName="DatePicker" text="Start Date" valueType="start date" />}>
                                <DatePicker onChange={(date) => setStartDate(date)} renderInput={(params) => <TextField {...params} label="Start Date" fullWidth />} />
                            </DemoItem>
                            <DemoItem label={<Label componentName="DatePicker" text="End Date" valueType="end date" />}>
                                <DatePicker onChange={(date) => setEndDate(date)} renderInput={(params) => <TextField {...params} label="End Date" fullWidth />} />
                            </DemoItem>
                        </>
                    )}
                </DemoContainer>
            </LocalizationProvider>

            <TextField
                label="Event Name"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                size="small"
            />
            <TextField
                label="Event Description"
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
                size="small"
                fullWidth
                multiline // Make it a text area
                 // Set the number of rows for the text area
            />

            <Button variant="contained" size="small" onClick={handleAddEvent}>
                Add Event
            </Button>
        </Card>
    );
}
