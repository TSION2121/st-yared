import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Box, Card, Typography, Button } from '@mui/material';
import dayjs from 'dayjs';

const EventViewer = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [currentMonth, setCurrentMonth] = useState(dayjs());
    const [events, setEvents] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const eventsPerPage = 5;

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
    const isDateInRange = (date, startDate, endDate) => {
        return date.isAfter(startDate) && date.isBefore(endDate);
    };

    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
    const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    return (
        <Box sx={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="h4" component="h2" gutterBottom>
                Events for {selectedDate ? formatDate(selectedDate) : currentMonth ? formatMonthYear(currentMonth) : 'Current Month'}
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', gap: '20px', margin: '20px 0' }}>
                    <DateCalendar
                        selected={selectedDate}
                        onChange={handleDateChange}
                        onMonthChange={handleMonthChange}
                        renderDay={(day, _value, DayComponentProps) => {
                            const isInRange = events.some(event =>
                                event.startDate && event.endDate && isDateInRange(dayjs(day), dayjs(event.startDate), dayjs(event.endDate))
                            );
                            const isSelected = events.some(event =>
                                event.startDate && event.endDate && dayjs(day).isBetween(dayjs(event.startDate), dayjs(event.endDate), null, '[]')
                            );
                            return (
                                <div style={{ backgroundColor: isSelected ? 'lightblue' : undefined }}>
                                    <DayComponentProps.Day {...DayComponentProps} />
                                </div>
                            );
                        }}
                    />
                    <Card sx={{ backgroundColor: 'royalblue', color: 'lavender', padding: '20px', width: { xs: '100%', md: 'fit-content' }, boxSizing: 'border-box' }}>
                        {currentEvents.length > 0 ? (
                            <ul style={{ listStyle: 'numbered', padding: '0 30px' }}>
                                {currentEvents.map((event) => (
                                    <li key={event.id}>
                                        <Typography variant="h6" component="strong">{event.eventName}</Typography>
                                        <Typography>{event.eventDescription}</Typography>
                                        {event.startDate && event.endDate && (
                                            <Typography variant="body2">
                                                (Continuous: {dayjs(event.startDate).format('MMMM D, YYYY')} - {dayjs(event.endDate).format('MMMM D, YYYY')})
                                            </Typography>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <Typography>No events scheduled for the selected date or month.</Typography>
                        )}
                        {currentEvents.length > 0 && (
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                                <Button variant="contained" onClick={handlePreviousPage} disabled={currentPage === 1}>
                                    Previous
                                </Button>
                                <Button variant="contained" onClick={handleNextPage} disabled={indexOfLastEvent >= events.length}>
                                    Next
                                </Button>
                            </Box>
                        )}
                    </Card>
                </Box>
            </LocalizationProvider>
        </Box>
    );
};

export default EventViewer;
