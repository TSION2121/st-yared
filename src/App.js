import React, { useState } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import {
    AppBar,
    Switch, FormControlLabel, useTheme
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Footer from "./Footer";

import NavigationBar from "./Component/NavigationBar";
import Routing from "./Component/Routing";
import MenuAppBar from "./Component/MenuAppBar";
import ClickNavigationBar from "./Component/ClickNavigationBar";
import {StyledAppBar, StyledContainer, StyledMainContent} from "./Styles/StyleComponent";
import {color} from "@mui/system";
import {red} from "@mui/material/colors";
import {I18nextProvider, useTranslation} from "react-i18next";
// App.js
import i18n from './Component/i18n';
import {AuthProvider} from "./Context/AuthContext"; // The path to your i18n.js file

// Styled components



const App = () => {

const [darkMode, setDarkMode] = useState(false);
    const { t } = useTranslation();

// Use the `t` function to get the translated text
//     console.log(t('welcome_message'));


const lightTheme = createTheme({
    palette: {
        mode: 'light',
        light: 'lightskyblue',


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
    const handleLanguageToggle = () => {
        const newLanguage = i18n.language === 'en' ? 'de' : 'en';
        i18n.changeLanguage(newLanguage);
    };
    console.log(i18n);

    return (
<I18nextProvider i18n={i18n}>
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <StyledContainer>
            <StyledMainContent>
        {/*<Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>*/}
        {/*    <Box component="main" sx={{ flexGrow: 1, overflowY: 'auto' }}> */}
                <>
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
                    <FormControlLabel
                        control={<Switch checked={i18n.language === 'de'} onChange={handleLanguageToggle} />}
                        label={i18n.language === 'de' ? 'DE' : 'EN'}
                        style={{ marginLeft: 'auto' }} // Position to the right
                    />
                    <StyledAppBar position="relative">
                    <NavigationBar/>
                    {/*    <ClickNavigationBar />*/}
                        {/*<MenuAppBar />*/}
                </StyledAppBar>
                  </>
                    <AuthProvider>
                        <Routing />
                    </AuthProvider>
            </StyledMainContent>
            <Footer />
        </StyledContainer>
    </ThemeProvider></I18nextProvider>
    );
};


export default App;
