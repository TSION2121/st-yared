import  {useState, useContext, useEffect} from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
    Toolbar,
    useMediaQuery,
    useTheme,
    IconButton,
    Drawer,
    Tab,
    Typography,
    Box,
    Menu,
    Button,
    List, ListItem, ListItemText, Collapse
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../ligu-logo.png';
import { StyledLogo, StyledMenuItem, StyledMenus, StyledVerticalTabs } from "../Styles/StyleComponent";
import { AuthContext } from "../Context/AuthContext";
import {ExpandLess, ExpandMore} from "@mui/icons-material";

const NavigationBar = () => {
    const { t } = useTranslation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [drawerOpen, setDrawerOpen] = useState(false);
    const { isAuthenticated, logout, isAdmin, login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [aboutOpen, setAboutOpen] = useState(false);
    const [programsOpen, setProgramsOpen] = useState(false);
    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const [resourceMenuAnchorEl, setResourceMenuAnchorEl] = useState(null);
    const [aboutMenuAnchorEl, setAboutMenuAnchorEl] = useState(null);
    const [programsMenuAnchorEl, setProgramsMenuAnchorEl] = useState(null);


    const handleLogout = () => {
        logout();
        navigate('/');
    };
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

    const handleAboutClick = () => {
        setAboutOpen(!aboutOpen);
    };

    const handleProgramsClick = () => {
        setProgramsOpen(!programsOpen);
    };
    useEffect(() => {
        console.log('NavigationBar - Authenticated:', isAuthenticated, 'Is Admin:', isAdmin);
    }, [isAuthenticated, isAdmin]);

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
                {/*<Tab label={t('navigation.home')} component={Link} to="/" onClick={handleDrawerToggle} />*/}
                {/*<Tab label={t('navigation.programs')} component={Link} to="/research" onClick={handleDrawerToggle} />*/}
                <ListItem button onClick={handleProgramsClick}>
                    <ListItemText primary={t('navigation.programs')} />
                    {programsOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={programsOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button component={Link} to="/fellowships-detail" onClick={handleDrawerToggle}>
                            <ListItemText primary={t('navigation.programs_submenu.research')} />
                        </ListItem>
                        <ListItem button component={Link} to="/training" onClick={handleDrawerToggle}>
                            <ListItemText primary={t('navigation.programs_submenu.training')} />
                        </ListItem>
                        <ListItem button component={Link} to="/publications" onClick={handleDrawerToggle}>
                            <ListItemText primary={t('navigation.programs_submenu.publications')} />
                        </ListItem>
                    </List>
                </Collapse>
                {/*<Tab label={t('navigation.resources')} component={Link} to="/resources" onClick={handleDrawerToggle} />*/}
                <Tab label={t('navigation.events')} component={Link} to="/events" onClick={handleDrawerToggle} />
                {/*<Tab label={t('navigation.about')} component={Link} to="/about-and-history" onClick={handleDrawerToggle} />*/}
                <ListItem button onClick={handleAboutClick}>
                    <ListItemText primary={t('navigation.about')} />
                    {aboutOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={aboutOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button component={Link} to="/about-and-history" onClick={handleDrawerToggle}>
                            <ListItemText primary={t('navigation.about_submenu.history')} />
                        </ListItem>
                        <ListItem button component={Link} to="/about-and-mission" onClick={handleDrawerToggle}>
                            <ListItemText primary={t('navigation.about_submenu.our_mission')} />
                        </ListItem>
                        <ListItem button component={Link} to="/director-and-others" onClick={handleDrawerToggle}>
                            <ListItemText primary={t('navigation.about_submenu.director_and_others')} />
                        </ListItem>
                        <ListItem button component={Link} to="/location" onClick={handleDrawerToggle}>
                            <ListItemText primary={t('navigation.about_submenu.our_location')} />
                        </ListItem>
                    </List>
                </Collapse>

                <Tab label={t('navigation.contact')} component={Link} to="/contact" onClick={handleDrawerToggle} />
                {isAuthenticated ? (
                    <Tab label={t('navigation.logout')} onClick={handleLogout} />
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
                                    <StyledMenuItem onClick={handleMenuClose} component={Link} to="/fellowships-detail">{t('navigation.programs_submenu.research')}</StyledMenuItem>
                                    <StyledMenuItem onClick={handleMenuClose} component={Link} to="/training">{t('navigation.programs_submenu.training')}</StyledMenuItem>
                                    <StyledMenuItem onClick={handleMenuClose} component={Link} to="/publications">{t('navigation.programs_submenu.publications')}</StyledMenuItem>

                                </Menu>
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
                            {/*{isAuthenticated ? (*/}
                            {/*    <Button onClick={handleLogout}>{t('navigation.logout')}</Button>*/}
                            {/*) : (*/}
                            {/*    <Button component={Link} to="/login"  >{t('navigation.login')}</Button>*/}
                            {/*)}*/}
                            {isAuthenticated ? (
                                <Button onClick={handleLogout}>{t('navigation.logout')}</Button>
                            ) : (
                                " "
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
