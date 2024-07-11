import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DatePicker } from '@mui/x-date-pickers';
import { TextField, Button, Box, Container, Card, useTheme } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function EventDetail() {
    const [events, setEvents] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());

    useEffect(() => {
        // Fetch events based on the selected date
        axios.get(`http://localhost:8080/api/events?date=${selectedDate.toISOString()}`)
            .then((response) => {
                setEvents(response.data);
            })
            .catch((error) => {
                console.error('Error fetching events:', error);
            });
    }, [selectedDate]); // Trigger the effect whenever the selected date changes

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div>
            <h2>Events</h2>
            <DatePicker
                value={selectedDate}
                onChange={handleDateChange}
                renderInput={(params) => <TextField {...params} label="Select Date" fullWidth />}
            />
            <ul>
                {events.map((event) => (
                    <li key={event.id}>
                        <strong>{event.eventName}</strong> - {event.eventDescription} ({event.eventDate})
                    </li>
                ))}
            </ul>
        </div>
    );
}
