import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Toolbar, useMediaQuery, useTheme, IconButton, Drawer, Tab, Typography, Box, Menu, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../ligu-logo.png';
import { StyledLogo, StyledMenuItem, StyledMenus, StyledVerticalTabs } from "../Styles/StyleComponent";
import { AuthContext } from "../Context/AuthContext";

const NavigationBar = () => {
    const { t } = useTranslation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [drawerOpen, setDrawerOpen] = useState(false);
    const { isAuthenticated, logout, isAdmin } = useContext(AuthContext);

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
            PaperProps={{ style: { width: 'auto' } }}
        >
            <StyledVerticalTabs
                orientation="vertical"
                variant="scrollable"
                scrollButtons="auto"
                position="relative"
            >
                <Tab icon={<StyledLogo src={Logo} alt={t('navigation.logo_alt')} />} component={Link} to="/" onClick={handleDrawerToggle} />
                <Tab label={t('navigation.home')} component={Link} to="/" onClick={handleDrawerToggle} />
                <Tab label={t('navigation.programs')} component={Link} to="/research" onClick={handleDrawerToggle} />
                <Tab label={t('navigation.resources')} component={Link} to="/resources" onClick={handleDrawerToggle} />
                <Tab label={t('navigation.events')} component={Link} to="/events" onClick={handleDrawerToggle} />
                <Tab label={t('navigation.about')} component={Link} to="/about-and-history" onClick={handleDrawerToggle} />
                <Tab label={t('navigation.contact')} component={Link} to="/contact" onClick={handleDrawerToggle} />
                {isAuthenticated ? (
                    <Tab label={t('navigation.logout')} onClick={logout} />
                ) : (
                    <Tab label={t('navigation.login')} component={Link} to="/login" onClick={handleDrawerToggle} />
                )}
            </StyledVerticalTabs>
        </Drawer>
    );

    return (
        <Toolbar
            sx= {{ backgroundColor: theme.palette.light, color: theme.palette.mode === 'light' ? 'darkblue' : '#white' }}
        >
            <Tab icon={<StyledLogo src={Logo} alt={t('navigation.logo_alt')} />} component={Link} to="/" />
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
                {t('navigation.academy_name')}
            </Typography>
            {isAuthenticated ? (
                isAdmin ? (
                    <Button component={Link} to="/admin/dashboard">
                        {t('navigation.dashboard')}
                    </Button>
                ) : null
            ) : null}
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
                        <Typography>
                            <Tab label={t('navigation.programs')} component={Link} to="/research"
                                 aria-controls="programs-menu"
                                 aria-haspopup="true"
                                 onClick={handleProgramsMenuOpen}
                                 onMouseEnter={handleProgramsMenuOpen}
                            />
                            <StyledMenus open={Boolean(programsMenuAnchorEl)}
                                         onMouseLeave={handleMenuClose}
                            >
                                <Menu
                                    id="programs-menu"
                                    anchorEl={programsMenuAnchorEl}
                                    keepMounted
                                    open={Boolean(programsMenuAnchorEl)}
                                    onClose={handleMenuClose}
                                    MenuListProps={{
                                        onMouseLeave: handleMenuClose,
                                    }}
                                >
                                    <StyledMenuItem onClick={handleMenuClose} component={Link} to="/projects">{t('navigation.programs_submenu.projects')}</StyledMenuItem>
                                    <StyledMenuItem onClick={handleMenuClose} component={Link} to="/fellowships-detail">{t('navigation.programs_submenu.publications')}</StyledMenuItem>
                                </Menu>
                            </StyledMenus>

                            <Tab label={t('navigation.resources')} component={Link} to="/resources"
                                 aria-controls="resource-menu"
                                 aria-haspopup="true"
                                 onClick={handleResourceMenuOpen}
                                 onMouseEnter={handleResourceMenuOpen}
                            />
                            <StyledMenus  open={Boolean(resourceMenuAnchorEl)}
                                          onMouseLeave={handleMenuClose}
                            >
                                {resourceMenuAnchorEl && (
                                    <Menu
                                        id="resource-menu"
                                        anchorEl={resourceMenuAnchorEl}
                                        keepMounted
                                        open={Boolean(resourceMenuAnchorEl)}
                                        onClose={handleMenuClose}
                                        MenuListProps={{
                                            onMouseLeave: handleMenuClose,
                                        }}
                                    >
                                        <StyledMenuItem onClick={handleMenuClose} component={Link} to="/resources-academy">{t('navigation.resources_submenu.study_at_academy')}</StyledMenuItem>
                                        <StyledMenuItem onClick={handleMenuClose} component={Link} to="/resources-web">{t('navigation.resources_submenu.study_on_web')}</StyledMenuItem>
                                    </Menu>
                                )}
                            </StyledMenus>

                            <Tab label={t('navigation.events')} component={Link} to="/events" />
                            <Tab label={t('navigation.about')} component={Link} to="/about-and-history"
                                 aria-controls="about-menu"
                                 aria-haspopup="true"
                                 onMouseEnter={handleAboutMenuOpen}
                                 onClick={handleAboutMenuOpen}
                            />
                            <StyledMenus
                                open={Boolean(aboutMenuAnchorEl)}
                                onMouseLeave={handleMenuClose}
                            >
                                {aboutMenuAnchorEl && (
                                    <Menu
                                        id="about-menu"
                                        anchorEl={aboutMenuAnchorEl}
                                        keepMounted
                                        open={Boolean(aboutMenuAnchorEl)}
                                        onClose={handleMenuClose}
                                        MenuListProps={{
                                            onMouseLeave: handleMenuClose,
                                        }}
                                    >
                                        <StyledMenuItem onClick={handleMenuClose} component={Link} to="/about-and-history">{t('navigation.about_submenu.history')}</StyledMenuItem>
                                        <StyledMenuItem onClick={handleMenuClose} component={Link} to="/about-and-mission">{t('navigation.about_submenu.our_mission')}</StyledMenuItem>
                                        <StyledMenuItem onClick={handleMenuClose} component={Link} to="/director-and-others">{t('navigation.about_submenu.director_and_others')}</StyledMenuItem>
                                        <StyledMenuItem onClick={handleMenuClose} component={Link} to="/location">{t('navigation.about_submenu.our_location')}</StyledMenuItem>
                                    </Menu>
                                )}
                            </StyledMenus>

                            <Tab label={t('navigation.contact')} component={Link} to="/contact" />
                            {isAuthenticated ? (
                                <Button onClick={logout}>{t('navigation.logout')}</Button>
                            ) : (
                                <Button component={Link} to="/login">{t('navigation.login')}</Button>
                            )}
                        </Typography>
                    </Box>
                </>
            )}
            {drawer}

        </Toolbar>
    );
};

export default NavigationBar;
