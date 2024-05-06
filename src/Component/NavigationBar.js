import React, {useEffect, useState} from 'react';
import {  Link } from 'react-router-dom';
import {Toolbar, useMediaQuery, useTheme, IconButton, Drawer, Tab, Typography,Box, Menu}
    from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../ligu-logo.png';
import {StyledLogo, StyledMenuItem, StyledMenus, StyledVerticalTabs} from "../Styles/StyleComponent";
import {color} from "@mui/system";
import {red} from "@mui/material/colors";


const NavigationBar = () => {


    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [drawerOpen, setDrawerOpen] = useState(false);
    // const blue = color.name = red;

const blue = 'ffff00';


    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const [resourceMenuAnchorEl, setResourceMenuAnchorEl] = useState(null);
    const [aboutMenuAnchorEl, setAboutMenuAnchorEl] = useState(null);
    const [programsMenuAnchorEl, setProgramsMenuAnchorEl] = useState(null);


    const handleProgramsMenuOpen = (event) => {
        setProgramsMenuAnchorEl(event.currentTarget);
    };


    const handleResourceMenuOpen = (event) => {
        setResourceMenuAnchorEl(event.currentTarget);
    };

    const handleAboutMenuOpen = (event) => {
        setAboutMenuAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
            setResourceMenuAnchorEl(null);
            setAboutMenuAnchorEl(null);
            setProgramsMenuAnchorEl(null);

    };

    const drawer = (
        <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={handleDrawerToggle}
            PaperProps={{ style: { width: 'auto' , } }}
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
        <Toolbar
            sx= {{         backgroundColor: theme.palette.light,
                color: theme.palette.mode === 'light' ? 'darkblue' : '#white',


            }}
        >

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
                            <Tab label="Programs" component={Link} to="/research"
                                 aria-controls="programs-menu"
                                 aria-haspopup="true"
                                 onClick={handleProgramsMenuOpen} // Open on hover
                                 onMouseEnter={handleProgramsMenuOpen} // Open on click
                            />
                            <StyledMenus open={Boolean(programsMenuAnchorEl)}
                                         onMouseLeave={handleMenuClose} // Add this line to close the menu when the mouse leaves its region

                            >
                                <Menu
                                    id="programs-menu"
                                    anchorEl={programsMenuAnchorEl}
                                    keepMounted
                                    open={Boolean(programsMenuAnchorEl)}
                                    onClose={handleMenuClose}
                                    MenuListProps={{
                                        onMouseLeave: handleMenuClose, // Close when mouse leaves the menu
                                    }}

                                >
                                    <StyledMenuItem onClick={handleMenuClose} component={Link} to="/projects">Projects</StyledMenuItem>
                                    <StyledMenuItem onClick={handleMenuClose} component={Link} to="/publications">Publications</StyledMenuItem>
                                </Menu>
                            </StyledMenus>

                            <Tab label="Resources" component={Link} to="/resources"
                                 aria-controls="resource-menu"
                                 aria-haspopup="true"
                                 onClick={handleResourceMenuOpen} // Open on hover
                                 onMouseEnter={handleResourceMenuOpen} // Open on hover
                            />
                            <StyledMenus  open={Boolean(resourceMenuAnchorEl)}
                                          onMouseLeave={handleMenuClose} // Add this line to close the menu when the mouse leaves its region

                            >
                                {resourceMenuAnchorEl && (
                                    <Menu
                                        id="resource-menu"
                                        anchorEl={resourceMenuAnchorEl}
                                        keepMounted
                                        open={Boolean(resourceMenuAnchorEl)}
                                        onClose={handleMenuClose}
                                        MenuListProps={{
                                            onMouseLeave: handleMenuClose, // Close when mouse leaves the menu
                                        }}
                                    >
                                        <StyledMenuItem onClick={handleMenuClose} component={Link} to="/resources-and-history">Study at the academy</StyledMenuItem>
                                        <StyledMenuItem onClick={handleMenuClose} component={Link} to="/resources-mission">Study on the web</StyledMenuItem>
                                    </Menu>
                                )}


                            </StyledMenus>

                            <Tab label=" Events" component={Link} to="/events" />
                            <Tab label="About " component={Link} to="/about-and-history"
                                 aria-controls="about-menu"
                                 aria-haspopup="true"
                                 onMouseEnter={handleAboutMenuOpen} // Open on hover
                                 onClick={handleAboutMenuOpen} // Open on hover
                            />
                            <StyledMenus
                                open={Boolean(aboutMenuAnchorEl)}
                                onMouseLeave={handleMenuClose} // Add this line to close the menu when the mouse leaves its region
                            >
                                {aboutMenuAnchorEl && (
                                <Menu
                                id="about-menu"
                                anchorEl={aboutMenuAnchorEl}
                                keepMounted
                                open={Boolean(aboutMenuAnchorEl)}
                                onClose={handleMenuClose}
                                MenuListProps={{
                                    onMouseLeave: handleMenuClose, // Close when mouse leaves the menu
                                }}
                            >
                                <StyledMenuItem onClick={handleMenuClose} component={Link} to="/about-and-history">History</StyledMenuItem>
                                <StyledMenuItem onClick={handleMenuClose} component={Link} to="/about-and-mission">Our Mission</StyledMenuItem>
                                <StyledMenuItem onClick={handleMenuClose} component={Link} to="/director-and-others">Director And Others</StyledMenuItem>
                                <StyledMenuItem onClick={handleMenuClose} component={Link} to="/location">Our Location </StyledMenuItem>


                                {/* Add more MenuItem components as needed for additional submenus */}
                            </Menu>
                                )}

                            </StyledMenus>

                            <Tab label="Contact" component={Link} to="/contact" />
                            <Tab label="Login" component={Link} to="/login" />
                        </Typography>
                    </Box>

                </>
            )}
            {drawer}
        </Toolbar>
    );
};


export default NavigationBar;
