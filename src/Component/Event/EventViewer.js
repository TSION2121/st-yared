import React, {useEffect, useState} from 'react';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';
import {DateCalendar} from "@mui/x-date-pickers/DateCalendar";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {Box, Card, Typography} from "@mui/material";
import dayjs from 'dayjs';

const EventViewer = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [currentMonth, setCurrentMonth] = useState(dayjs());
    const [events, setEvents] = useState([]);

    const fetchEvents = async (date, month) => {
        try {
            const response = date
                ? await axios.get(`/api/events?date=${date.toISOString().split('T')[0]}`)
                : await axios.get(`/api/events/current-month?month=${month.month() + 1}&year=${month.year()}`);
            setEvents(response.data);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    useEffect(() => {
        fetchEvents(selectedDate, currentMonth);
    }, [selectedDate, currentMonth]);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setCurrentMonth(null); // Clear the month selection
        fetchEvents(date, null);
    };

    const handleMonthChange = (month) => {
        setCurrentMonth(month);
        setSelectedDate(null); // Clear the date selection
        fetchEvents(null, month);
    };

    const formatMonthYear = (month) => {
        return month.format('MMMM YYYY');
    };
    const formatDate = (date) => {
        return date.format('MMMM D, YYYY');
    };


    return (
        <Box>
            <h2>Events for {selectedDate ? formatDate(selectedDate) : currentMonth ? formatMonthYear(currentMonth) : 'Current Month'}</h2>            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', gap: '70px' }}>
                    <Card sx={{ backgroundColor: 'royalblue', alignItems: 'space-around', color: 'lavender' }}>
                        {events.length > 0 ? (
                            <ul style={{ listStyle: 'numbered', padding: '0 30px', width: 'fit-content' }}>
                                {events.map((event) => (
                                    <li key={event.id}>
                                        <strong>{event.eventName}</strong>:
                                        <Typography>{event.eventDescription}</Typography>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <Typography>No events scheduled for the selected date or month.</Typography>
                        )}
                    </Card>
                    <DateCalendar
                        selected={selectedDate}
                        onChange={handleDateChange}
                        onMonthChange={handleMonthChange}
                    />
                </Box>
            </LocalizationProvider>
        </Box>
    );
};

export default EventViewer;
