import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Grid, Tabs, Tab, useMediaQuery, useTheme, IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';
import Logo from './logo.png';
import Research from "./Research";
import Home, {
    Courses,
    DigitalArchive,
    Dissemination,
    Ecumenism,
    Education,
    Integration, InternationalCooperation,
    Networks,
    Publicity
} from "./Components";

// Styled components
const StyledAppBar = styled(AppBar)`
  margin-bottom: 30px;
`;

const StyledTabs = styled(Tabs)`
  margin-left: auto;
  @media (max-width: 768px) {
    display: none; // Hide horizontal tabs on smaller screens
  }
`;

const StyledVerticalTabs = styled(Tabs)`
  display: none; // Hide vertical tabs on larger screens
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const StyledLogo = styled('img')`
  height: 50px;
  margin-right: 20px;
`;

const NavigationBar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const drawer = (
        <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={handleDrawerToggle}
            PaperProps={{ style: { width: 'auto' } }}
        >
            <StyledVerticalTabs
                orientation="vertical"
                variant="scrollable"
                scrollButtons="auto"
            >
                <Tab icon={<StyledLogo src={Logo} alt="EOTC Academy Logo" />} component={Link} to="/" />
                <Tab label="Home" component={Link} to="/" />
                <Tab label="Research" component={Link} to="/research" />
                <Tab label="Events" component={Link} to="/events" />
                <Tab label="Digital Archive" component={Link} to="/digital-archive" />
                <Tab label="Education" component={Link} to="/education" />
                <Tab label="Integration" component={Link} to="/integration" />
                {/*<Tab label="Ecumenism" component={Link} to="/ecumenism" />*/}
                {/*<Tab label="Dissemination" component={Link} to="/dissemination" />*/}
                {/*<Tab label="Publicity" component={Link} to="/publicity" />*/}
                <Tab label="Courses" component={Link} to="/courses" />
                <Tab label="Networks" component={Link} to="/networks" />
                <Tab label="International Cooperation" component={Link} to="/international-cooperation" />            </StyledVerticalTabs>
        </Drawer>
    );

    return (
        <Toolbar>
            <Tab icon={<StyledLogo src={Logo} alt="EOTC Academy Logo" />} component={Link} to="/" />
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
                EOTC Academy
            </Typography>
            {isMobile ? (
                <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleDrawerToggle}
                >
                    <MenuIcon />
                </IconButton>
            ) : (
                <>
                    <StyledTabs
                        variant="scrollable"
                        scrollButtons="auto"
                    >
                            {/*<Tab icon={<StyledLogo src={Logo} alt="EOTC Academy Logo" />} component={Link} to="/" />*/}
                            <Tab label="Home" component={Link} to="/" />
                            <Tab label="Research" component={Link} to="/research" />
                            <Tab label="Events" component={Link} to="/events" />
                            <Tab label="Digital Archive" component={Link} to="/digital-archive" />
                            <Tab label="Education" component={Link} to="/education" />
                            <Tab label="Integration" component={Link} to="/integration" />
                            {/*<Tab label="Ecumenism" component={Link} to="/ecumenism" />*/}
                            {/*<Tab label="Dissemination" component={Link} to="/dissemination" />*/}
                            {/*<Tab label="Publicity" component={Link} to="/publicity" />*/}
                            <Tab label="Courses" component={Link} to="/courses" />
                            <Tab label="Networks" component={Link} to="/networks" />
                            <Tab label="International Cooperation" component={Link} to="/international-cooperation" />
                    </StyledTabs>
                    <StyledVerticalTabs
                        variant="scrollable"
                        scrollButtons="auto"
                    >
                        {/* Your tabs */}

                    </StyledVerticalTabs>
                </>
            )}
            {drawer}
        </Toolbar>
    );
};

const App = () => (
    <Router>
        <StyledAppBar position="static">
            <NavigationBar />
        </StyledAppBar>
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/research" element={<Research />} />
                        {/*<Route path="/events" element={<Events />} />*/}
                        <Route path="/digital-archive" element={<DigitalArchive />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/integration" element={<Integration />} />
                        <Route path="/ecumenism" element={<Ecumenism />} />
                        <Route path="/dissemination" element={<Dissemination />} />
                        <Route path="/publicity" element={<Publicity />} />
                        <Route path="/courses" element={<Courses />} />
                        <Route path="/networks" element={<Networks />} />
                        <Route path="/international-cooperation" element={<InternationalCooperation />} />
                    </Routes>
                </Grid>
            </Grid>
        </Container>
    </Router>
);

export default App;
