import React, { useState, useContext } from 'react';
import { LanguageContext } from './LanguageContext'; // You need to create this context
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

const LanguageToggle = () => {
    const { language, setLanguage } = useContext(LanguageContext);
    const isGerman = language === 'de';

    const toggleLanguage = () => {
        setLanguage(isGerman ? 'en' : 'de');
    };

    return (
        <FormControlLabel
            control={<Switch checked={isGerman} onChange={toggleLanguage} />}
            label={isGerman ? 'DE' : 'EN'}
        />
    );
};

export default LanguageToggle;
