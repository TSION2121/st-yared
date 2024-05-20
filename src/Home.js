import React from 'react';
// Import the NavigationBar if you have it ready
// import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import AdsCarousel from "./AdsCarousel";
import NewsSection from "./NewsSection";
import Fellowships from "./Fellowships";
import { Box, Grid } from "@mui/material";
import {dark} from "@mui/material/styles/createPalette";

const HomePage = ({darkMode}) => {
    return (
        <Box>
            {/* Include the NavigationBar for better navigation */}
            {/*<NavigationBar />*/}
            <AdsCarousel />
            <Grid container justifyContent="flex-end"  rowGap={2}>
                {/* Use Box instead of Grid for better spacing control */}
                <Box sx={{ width: '30%', mr: 0.5 }}>
                    <NewsSection darkMode={darkMode} />
                </Box>
                <Box sx={{ width: '30%', ml: 0.5 }}>
                    <Fellowships />
                </Box>
            </Grid>
            {/* Include the Footer for additional information */}
            {/*<Footer />*/}
        </Box>
    );
};

export default HomePage;
