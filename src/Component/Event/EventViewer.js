// EventViewer.js

import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
        <div>
            <h2>Events for {selectedDate.toDateString()}</h2>
            <DatePicker selected={selectedDate} onChange={handleDateChange} />
            <ul>
                {events.map((event) => (
                    <li key={event.id}>
                        <strong>{event.eventName}</strong>: {event.eventDescription}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventViewer;
