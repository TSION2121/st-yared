import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import axios from "axios";

export default function EventList({ selectedDate }) {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Fetch events when selectedDate changes
        if (selectedDate) {
            const fetchEvents = async () => {
                try {
                    const response = await axios.get(
                        `http://localhost:8080/api/events?date=${selectedDate}`
                    );
                    setEvents(response.data); // Assuming your API returns events for the selected date
                } catch (error) {
                    console.error('Error fetching events:', error);
                }
            };

            fetchEvents();
        }
    }, [selectedDate]);

    // Filter events based on the selected date
    const filteredEvents = events.filter((event) => {
        return event.eventDate.toDateString() === selectedDate.toDateString();
    });

    // Log events and selected date
    console.log('Selected Date:', selectedDate);
    console.log('Filtered Events:', filteredEvents);

    if (filteredEvents.length === 0) {
        return (
            <Typography variant="body1">No events for this date.</Typography>
        );
    }

    return (
        <List>
            {filteredEvents.map((event) => (
                <ListItem key={event.id}>
                    <ListItemText
                        primary={event.eventName}
                        secondary={event.eventDescription}
                    />
                </ListItem>
            ))}
        </List>
    );
}