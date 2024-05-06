import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/system';

// Styled components using @mui/system
const StyledAppBar = styled(AppBar)(({ theme }) => ({
    position: 'static',
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    justifyContent: 'space-between',
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    marginRight: theme.spacing(2),
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
    flexGrow: 1,
}));

const StyledMenu = styled(Menu)(({ theme }) => ({
    marginTop: theme.spacing(5),
}));

export default function MenuAppBar() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <StyledAppBar>
            <StyledToolbar>
                <StyledIconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenu}>
                    <MenuIcon />
                </StyledIconButton>
                <StyledTitle variant="h6">
                    St. Yared Academy
                </StyledTitle>
                <Button color="inherit">Events</Button>
                <Button color="inherit">Contact</Button>
            </StyledToolbar>
            <StyledMenu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Programs</MenuItem>
                <MenuItem onClick={handleClose}>Projectors</MenuItem>
                <MenuItem onClick={handleClose}>Publications</MenuItem>
                <MenuItem onClick={handleClose}>Resources</MenuItem>
                <MenuItem onClick={handleClose}>Study on the Web</MenuItem>
                <MenuItem onClick={handleClose}>Study at the Academy</MenuItem>
            </StyledMenu>
        </StyledAppBar>
    );
}
