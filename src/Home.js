import React from 'react';
import { Box, Grid } from "@mui/material";
import Footer from "./Footer";
import AdsCarousel from "./AdsCarousel";
import NewsSection from "./NewsSection";
import Fellowships from "./Fellowships";

const HomePage = ({ darkMode }) => {
    return (
        <Box>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={4}>
                    <NewsSection darkMode={darkMode} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <AdsCarousel />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Fellowships />
                </Grid>
            </Grid>
        </Box>
    );
};

export default HomePage;
