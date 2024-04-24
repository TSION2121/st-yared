import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    Grid,
    Tabs,
    Tab,
    useMediaQuery,
    useTheme,
    IconButton,
    Drawer,
    Switch, FormControlLabel, Menu, MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';
import Logo from './logo.png';
// import Logo from './ligu-logo.png'; for dark mode

import Research from "./Research";
import {
    Courses,
    DigitalArchive,
    Dissemination,
    Ecumenism,
    Education,
    Integration, InternationalCooperation,
    Networks,
    Publicity, Resources
} from "./Components";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import {Box} from "@mui/joy";
import SignInSide from "./Login";
import SignUp from "./Register";
import Footer from "./Footer";
import ContactUs from "./Contact";
import Home from "./Home";
import AboutUs from "./AboutUs";
import DirectorAndOthers from "./DirectorAndOthers";
import Location from "./Location";
import News from "./News";
import Fellowships from "./Fellowships";
import Fellowship from "./Fellowship";
import Layout from "./layout/Layout";
import LayoutNews from "./layout/LayoutNews";
import FellowshipDetail from "./FellowshipDetail";
// Styled components
const StyledAppBar = styled(AppBar)`
  margin-bottom: 30px;
  overflow: hidden;

`;

const StyledMainContent = styled(Box)`
  flex-grow: 1;
`;
const StyledMenus = styled(Menu)`
//margin: 10vh;
//  height: 30vh;
color: red`;

const StyledContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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

export const NavigationBar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [drawerOpen, setDrawerOpen] = useState(false);

    // const [anchorEl, setAnchorEl] = useState(null);
    // const open = Boolean(anchorEl);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const [resourceMenuAnchorEl, setResourceMenuAnchorEl] = useState(null);
    const [aboutMenuAnchorEl, setAboutMenuAnchorEl] = useState(null);

    const handleResourceMenuOpen = (event) => {
        setResourceMenuAnchorEl(event.currentTarget);
    };

    const handleAboutMenuOpen = (event) => {
        setAboutMenuAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setResourceMenuAnchorEl(null);
        setAboutMenuAnchorEl(null);
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
                position="relative"
            >
                <Tab icon={<StyledLogo src={Logo} alt="EOTC Academy Logo" />} component={Link} to="/"   onClick={handleDrawerToggle}  />
                <Tab label="Home" component={Link} to="/"   onClick={handleDrawerToggle}  onClick={handleDrawerToggle}  />
                <Tab label="Programs" component={Link} to="/research" onClick={handleDrawerToggle}  />
                <Tab label="Resources" component={Link} to="/resources" onClick={handleDrawerToggle}  />
                <Tab label=" Events" component={Link} to="/events" onClick={handleDrawerToggle}  />
                <Tab label="About " component={Link} to="/about-and-history" onClick={handleDrawerToggle}  />
                <Tab label="Contact Us" component={Link} to="/contact" onClick={handleDrawerToggle}  />
                <Tab label="Login" component={Link} to="/login" onClick={handleDrawerToggle}  />
            </StyledVerticalTabs>
        </Drawer>
    );

    return (
        <Toolbar>
            <Tab icon={<StyledLogo src={Logo} alt="EOTC Academy Logo" />} component={Link} to="/" />
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
                St. Yared Academy
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
                    <Box sx={{ display: { xs: 'none', sm: 'flex' }, ml: '2px', mx:2 }}>

                    <Typography  >
                            {/*<Tab icon={<StyledLogo src={Logo} alt="EOTC Academy Logo" />} component={Link} to="/" />*/}
                            <Tab label="Programs" component={Link} to="/research" />
                        <Tab label="Resources" component={Link} to="/resources"
                             aria-controls="resource-menu"
                             aria-haspopup="true"
                             onMouseOver={handleResourceMenuOpen} // Open on hover
                        />
                       <StyledMenus  open={Boolean(resourceMenuAnchorEl)}>
                           <Menu sx={{ top:'3vh'}}
                            id="resource-menu"
                            anchorEl={resourceMenuAnchorEl}
                            keepMounted
                            open={Boolean(resourceMenuAnchorEl)}
                            onClose={handleMenuClose}
                            MenuListProps={{
                                onMouseLeave: handleMenuClose, // Close when mouse leaves the menu
                            }}
                        >
                            <MenuItem onMouseOut={handleMenuClose} component={Link} to="/resources-and-history">Study at the academy</MenuItem>
                            <MenuItem
                                onMouseOut={handleMenuClose} component={Link} to="/resources-mission">Study on the web</MenuItem>
                            {/* Add more MenuItem components as needed for additional submenus */}
                        </Menu>
                    </StyledMenus>

                        <Tab label=" Events" component={Link} to="/events" />
                            <Tab label="About " component={Link} to="/about-and-history"
                                 aria-controls="about-menu"
                                 aria-haspopup="true"
                                 onMouseOver={handleAboutMenuOpen} // Open on hover
                            />
                       <StyledMenus                             open={Boolean(aboutMenuAnchorEl)}
                       > <Menu
                            id="about-menu"
                            anchorEl={aboutMenuAnchorEl}
                            keepMounted
                            open={Boolean(aboutMenuAnchorEl)}
                            onClose={handleMenuClose}
                            MenuListProps={{
                                onMouseLeave: handleMenuClose, // Close when mouse leaves the menu
                            }}
                        >
                            <MenuItem onMouseOut={handleMenuClose} component={Link} to="/about-and-history">History</MenuItem>
                            <MenuItem onMouseOut={handleMenuClose} component={Link} to="/about-and-mission">Our Mission</MenuItem>
                           <MenuItem onMouseOut={handleMenuClose} component={Link} to="/director-and-others">Director And Others</MenuItem>
                           <MenuItem onMouseOut={handleMenuClose} component={Link} to="/location">Our Location </MenuItem>


                           {/* Add more MenuItem components as needed for additional submenus */}
                        </Menu></StyledMenus>

                            <Tab label="Contact" component={Link} to="/contact" />
                            <Tab label="Login" component={Link} to="/login" />
                  </Typography>
                    </Box>
                <StyledVerticalTabs
                        variant="scrollable"
                        scrollButtons="auto"
                        position="relative"
                    >
                        {/* Your tabs */}

                    </StyledVerticalTabs>
                </>
            )}
            {drawer}
        </Toolbar>
    );
};


const App = () => {

const [darkMode, setDarkMode] = useState(false);

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        // ... other light theme customizations
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        // ... other dark theme customizations
    },
});

const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
};
    return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <StyledContainer>
            <StyledMainContent>
        {/*<Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>*/}
        {/*    <Box component="main" sx={{ flexGrow: 1, overflowY: 'auto' }}> */}
                <Router>


                <FormControlLabel
                    labelPlacement={"start"}
                    control={<Switch
                        // sx={{ ml: 1 }}
                        sx={{
                            '--Switch-thumbSize': '46px',
                            height:'40px',padding:"7px"
                        }}
                                     size="lg"
                                     checked={darkMode}
                                     onChange={handleDarkModeToggle}
                                     icon={<Brightness4Icon fontSize={"small"} />} // Light mode icon
                                     checkedIcon={<DarkModeIcon />} // Dark mode icon
                    />}
                    label={darkMode ? 'Dark Mode' : 'Light Mode'}

                />
                    <StyledAppBar position="relative">
                    <NavigationBar/>
                </StyledAppBar>
                <Container maxWidth="lg" position="relative">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Routes>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/research" element={<Research/>}/>
                                {/*<Route path="/events" element={<Events />} />*/}
                                <Route path="/login" element={<SignInSide />} />
                                <Route path="/register" element={<SignUp />} />
                                <Route path="/digital-archive" element={<DigitalArchive/>}/>
                                <Route path="/about-and-mission" element={<AboutUs/>}/>
                                <Route path="/director-and-others" element={<DirectorAndOthers/>}/>
                                <Route path="/integration" element={<Integration/>}/>
                                <Route path="/ecumenism" element={<Ecumenism/>}/>
                                <Route path="/dissemination" element={<Dissemination/>}/>
                                <Route path="/resources" element={<Resources/>}/>
                                <Route path="/courses" element={<Courses/>}/>
                                <Route path="/networks" element={<Networks/>}/>
                                <Route path="/international-cooperation" element={<InternationalCooperation/>}/>
                                <Route path="/contact" element={<ContactUs />} />
                                <Route path="/location" element={<Location />} />
                                <Route path="/news" element={<News />} />
                                <Route path="/fellowships" element={<Fellowships />} />
                                <Route path="/fellowships-detail" element={<Fellowship />} />
                                <Route path="/layout" element={<Layout />} />
                                <Route path="/layout-news" element={<LayoutNews />} />
                                <Route path="/layout" element={<Layout />} />
                                <Route path="/layout" element={<Layout />} />

                                <Route path="/fellowships/:title" component={<FellowshipDetail/>} />










                            </Routes>
                                           </Grid>
                    </Grid>

                </Container>
            </Router>
{/*    </Box>*/}
{/*</Box>*/}
            </StyledMainContent>
            <Footer />
        </StyledContainer>
    </ThemeProvider>
    );
};


export default App;
