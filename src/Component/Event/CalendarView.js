import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dayjs from 'dayjs'; // Import Day.js
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { TextField, Typography, Box, Button } from '@mui/material';

export default function CalendarView() {
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [roleFilter, setRoleFilter] = useState('');
    const [dateFilter, setDateFilter] = useState(dayjs()); // Initialize with Day.js object

    useEffect(() => {
        // Fetch events from your API
        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/events');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setEvents(data);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);

    useEffect(() => {
        // Filter events by role and date
        const filtered = events.filter((event) => {
            const roleMatch = roleFilter ? event.role.toLowerCase() === roleFilter.toLowerCase() : true;
            const dateMatch = dateFilter ? dayjs(event.date).isSame(dateFilter, 'day') : true; // Compare Day.js objects
            return roleMatch && dateMatch;
        });
        setFilteredEvents(filtered);
    }, [roleFilter, dateFilter, events]);

    const handleRoleChange = (event) => {
        setRoleFilter(event.target.value);
    };

    const handleDateChange = (newValue) => {
        setDateFilter(newValue); // Set the Day.js object directly
    };

    const resetFilters = () => {
        setDateFilter(dayjs()); // Reset to the current date
        setRoleFilter('');
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box>
                <Typography variant="h5" sx={{ textAlign: 'center', margin: '2px' }}>
                    View Calendar Events
                </Typography>
            </Box>

            <Button variant="contained" onClick={resetFilters} size="small">
                Clear Filters
            </Button>

            <DesktopDatePicker
                label="Filter by Date"
                inputFormat="MM/dd/yyyy"
                value={dateFilter}
                onChange={handleDateChange}
                renderInput={(params) => <TextField {...params} size="small" />}
            />

            <div>
                {filteredEvents.length > 0 ? (
                    <ul>
                        {filteredEvents.map((event, index) => (
                            <li key={index}>
                                {event.date} - {event.description} - {event.role}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <Typography variant="subtitle1" sx={{ textAlign: 'center', mt: 2, width: '100%' }}>
                        No events found for the selected filters.
                    </Typography>
                )}
            </div>
        </LocalizationProvider>
    );
}
