
// HomePage.js
import React from 'react';
// import NavigationBar from "./NavigationBar"; // Assuming you have this component
import Footer from "./Footer";
import AdsCarousel from "./AdsCarousel";
import NewsSection from "./NewsSection";
import Fellowships from "./Fellowships";
import {Box, Grid} from "@mui/material";
// import Fellowships from "./Fellowships"; // Assuming you have this component

const HomePage = () => {
    return (
        <div>
            {/*<NavigationBar />*/}
            <AdsCarousel />
            <Grid container style={{ justifyContent: 'flex-end' }}>
            {/* Set fixed widths for the NewsSection and Fellowships components */}
            <Grid item style={{ width: 'calc(50% - 1px)', marginRight: '1px' }}>
                <NewsSection />
            </Grid>
            <Grid item style={{ width: 'calc(50% - 1px)', marginLeft: '1px' }}>
                <Fellowships />
            </Grid>
        </Grid>

        </div>
    );
};

export default HomePage;
