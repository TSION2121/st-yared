import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    useMediaQuery,
    useTheme,
    IconButton,
    Drawer,
    Menu,
    MenuItem,
    Tab,
    Typography,
    Tabs,
    Box
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../ligu-logo.png';

const ClickNavigationBar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [programsMenuAnchorEl, setProgramsMenuAnchorEl] = useState(null);
    const [resourcesMenuAnchorEl, setResourcesMenuAnchorEl] = useState(null);
    const [aboutMenuAnchorEl, setAboutMenuAnchorEl] = useState(null);

    const handleMenuOpen = (event, menuSetter) => {
        menuSetter(event.currentTarget);
    };

    const handleMenuClose = () => {
        setProgramsMenuAnchorEl(null);
        setResourcesMenuAnchorEl(null);
        setAboutMenuAnchorEl(null);
    };

    const drawerContent = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setDrawerOpen(false)}
            onKeyDown={() => setDrawerOpen(false)}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={false}
            >
                <Tab label="Home" component={Link} to="/" />
                <Tab label="Programs" component={Link} to="/programs" />
                <Tab label="Resources" component={Link} to="/resources" />
                <Tab label="Events" component={Link} to="/events" />
                <Tab label="About" component={Link} to="/about" />
                <Tab label="Contact Us" component={Link} to="/contact" />
                <Tab label="Login" component={Link} to="/login" />
            </Tabs>
        </Box>
    );

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    {isMobile ? (
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={() => setDrawerOpen(!drawerOpen)}
                        >
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <>
                            <Tab icon={<img src={Logo} alt="EOTC Academy Logo" style={{ height: '50px', marginRight: '20px' }} />} component={Link} to="/" />
                            <Typography variant="h6" sx={{ flexGrow: 1 }}>
                                St. Yared Academy
                            </Typography>
                            <Box sx={{ display: { xs: 'none', sm: 'flex' }, ml: '2px', mx: 2 }}>
                                <Tab label="Programs" component={Link} to="/programs" onMouseOver={(e) => handleMenuOpen(e, setProgramsMenuAnchorEl)} />
                                <Menu
                                    id="programs-menu"
                                    anchorEl={programsMenuAnchorEl}
                                    keepMounted
                                    open={Boolean(programsMenuAnchorEl)}
                                    onClose={handleMenuClose}
                                >
                                    <MenuItem component={Link} to="/projects">Projects</MenuItem>
                                    <MenuItem component={Link} to="/publications">Publications</MenuItem>
                                    <MenuItem component={Link} to="/study-at-the-academy">Study at the Academy</MenuItem>
                                    <MenuItem component={Link} to="/study-on-the-web">Study on the Web</MenuItem>
                                </Menu>
                                <Tab label="Resources" component={Link} to="/resources" onMouseOver={(e) => handleMenuOpen(e, setResourcesMenuAnchorEl)} />
                                <Menu
                                    id="resources-menu"
                                    anchorEl={resourcesMenuAnchorEl}
                                    keepMounted
                                    open={Boolean(resourcesMenuAnchorEl)}
                                    onClose={handleMenuClose}
                                >
                                    <MenuItem component={Link} to="/resources-and-history">Resources and History</MenuItem>
                                    <MenuItem component={Link} to="/resources-mission">Resources Mission</MenuItem>
                                </Menu>
                                <Tab label="Events" component={Link} to="/events" />
                                <Tab label="About" component={Link} to="/about-and-history" onMouseOver={(e) => handleMenuOpen(e, setAboutMenuAnchorEl)} />
                                <Menu
                                    id="about-menu"
                                    anchorEl={aboutMenuAnchorEl}
                                    keepMounted
                                    open={Boolean(aboutMenuAnchorEl)}
                                    onClose={handleMenuClose}
                                >
                                    <MenuItem component={Link} to="/about-and-history">History</MenuItem>
                                    <MenuItem component={Link} to="/about-and-mission">Our Mission</MenuItem>
                                    <MenuItem component={Link} to="/director-and-others">Director And Others</MenuItem>
                                    <MenuItem component={Link} to="/location">Our Location</MenuItem>
                                </Menu>
                                <Tab label="Contact" component={Link} to="/contact" />
                                <Tab label="Login" component={Link} to="/login" />
                            </Box>
                        </>
                    )}
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                {drawerContent}
            </Drawer>
        </>
    );
};

export default ClickNavigationBar;
