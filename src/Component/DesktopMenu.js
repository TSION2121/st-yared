import {Box} from "@mui/joy";
import {Menu, MenuItem, Tab, Tabs, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import React, {useState} from "react";
import {StyledMenuItem, StyledMenus} from "../Styles/StyleComponent";


const DesktopMenu = ({ handleProgramsMenuOpen, handleResourceMenuOpen, handleAboutMenuOpen , handleMenuClose }) => {
    const [resourceMenuAnchorEl, setResourceMenuAnchorEl] = useState(null);
    const [aboutMenuAnchorEl, setAboutMenuAnchorEl] = useState(null);
    const [programsMenuAnchorEl, setProgramsMenuAnchorEl] = useState(null);
    return (
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, ml: '2px', mx:2 }}>
            <Typography  >
                {/*<Tab icon={<StyledLogo src={Logo} alt="EOTC Academy Logo" />} component={Link} to="/" />*/}
                <Tab label="Programs" component={Link} to="/research"
                     aria-controls="programs-menu"
                     aria-haspopup="true"
                     onMouseOver={handleProgramsMenuOpen} // Open on hover
                />
                <StyledMenus open={Boolean(programsMenuAnchorEl)}>
                    <Menu
                        id="programs-menu"
                        anchorEl={programsMenuAnchorEl}
                        keepMounted
                        open={Boolean(programsMenuAnchorEl)}
                        onClose={handleMenuClose}
                        MenuListProps={{
                            onMouseEnter: handleResourceMenuOpen, // Keep open when mouse enters the menu
                            onMouseLeave: handleMenuClose, // Close when mouse leaves the menu
                        }}
                    >
                        <StyledMenuItem onMouseOut={handleMenuClose} component={Link} to="/projects">Projects</StyledMenuItem>
                        <StyledMenuItem onMouseOut={handleMenuClose} component={Link} to="/publications">Publications</StyledMenuItem>
                    </Menu>
                </StyledMenus>

                <Tab label="Resources" component={Link} to="/resources"
                     aria-controls="resource-menu"
                     aria-haspopup="true"
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
                            <StyledMenuItem onMouseOut={handleMenuClose} component={Link} to="/resources-and-history">Study at the academy</StyledMenuItem>
                            <StyledMenuItem onMouseOut={handleMenuClose} component={Link} to="/resources-mission">Study on the web</StyledMenuItem>
                        </Menu>
                    )}


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
                        onMouseEnter: handleResourceMenuOpen, // Keep open when mouse enters the menu
                        onMouseLeave: handleMenuClose, // Close when mouse leaves the menu
                    }}
                >
                    <StyledMenuItem onMouseOut={handleMenuClose} component={Link} to="/about-and-history">History</StyledMenuItem>
                    <StyledMenuItem onMouseOut={handleMenuClose} component={Link} to="/about-and-mission">Our Mission</StyledMenuItem>
                    <StyledMenuItem onMouseOut={handleMenuClose} component={Link} to="/director-and-others">Director And Others</StyledMenuItem>
                    <StyledMenuItem onMouseOut={handleMenuClose} component={Link} to="/location">Our Location </StyledMenuItem>


                    {/* Add more MenuItem components as needed for additional submenus */}
                </Menu></StyledMenus>

                <Tab label="Contact" component={Link} to="/contact" />
                <Tab label="Login" component={Link} to="/login" />
            </Typography>
        </Box>
    );
};
 export default DesktopMenu;