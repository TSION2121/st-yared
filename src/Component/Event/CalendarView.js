import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dayjs from 'dayjs'; // Import Day.js
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { TextField, Typography, Box, Button } from '@mui/material';
import {DateCalendar} from "@mui/x-date-pickers/DateCalendar";

export default function CalendarView() {
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [dateFilter, setDateFilter] = useState(new Date()); // Initialize with Day.js object




    const handleDateChange = async (date) => {
        setDateFilter(date);
        try {
            const response = await axios.get(`/api/events?date=${date.toISOString().split('T')[0]}`);
            setEvents(response.data);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    const resetFilters = () => {
        setDateFilter(new Date()); // Reset to the current date
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

            <DateCalendar
                label="Filter by Date"
                inputFormat="MM/dd/yyyy"
                // value={dateFilter}
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
