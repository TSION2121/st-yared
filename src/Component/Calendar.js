import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import {useTheme} from "@mui/material";
import styled from "styled-components";

const StyledDiv = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.paper : 'white',
    color: theme.palette.mode === 'dark' ? theme.palette.text.primary : 'light',
    margin: '20px 0',
    width: '100%',
    justifyContent:'center'
}));

export default function Calendar() {
    const theme = useTheme();

    return (
        <StyledDiv theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar />
        </LocalizationProvider></StyledDiv>
    );
}