import React from 'react';
import { Box } from '@mui/material';
import Header from './Header'; // Assuming you have a Header component
import Footer from './Footer'; // Assuming you have a Footer component

const CommonLayout = ({ children }) => {
    return (
        <Box>
            <Header />
            {children}
            <Footer />
        </Box>
    );
};

export default CommonLayout;
