import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [authState, setAuthState] = useState({
        token: sessionStorage.getItem('token'),
        refreshToken: sessionStorage.getItem('refreshToken'),
        userId: sessionStorage.getItem('userId'),
        username: sessionStorage.getItem('username'),
        isAdmin: sessionStorage.getItem('isAdmin') === 'true',
    });

    const isAuthenticated = Boolean(authState.token);

    const login = (token, refreshToken, userId, username, isAdmin) => {
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('refreshToken', refreshToken);
        sessionStorage.setItem('userId', userId);
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('isAdmin', isAdmin ? 'true' : 'false');
        setAuthState({ token, refreshToken, userId, username, isAdmin });

        // Redirect based on role
        if (isAdmin) {
            navigate('/admin/dashboard');
        } else {
            navigate('/user/dashboard');
        }
    };

    const logout = () => {
        console.log('Logging out');
        sessionStorage.clear();
        setAuthState({
            token: null,
            refreshToken: null,
            userId: null,
            username: null,
            isAdmin: false,
        });
        console.log('AuthState after logout:', authState);
        navigate('/login');
    };


    const refreshToken = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/auth/refresh-token', {
                refreshToken: authState.refreshToken,
            });
            const newToken = response.data;
            login(newToken, authState.refreshToken, authState.userId, authState.username, authState.isAdmin);
        } catch (error) {
            console.error('Failed to refresh token', error);
            logout();
        }
    };

    useEffect(() => {
        const storedToken = sessionStorage.getItem('token');
        const storedRefreshToken = sessionStorage.getItem('refreshToken');
        const storedUserId = sessionStorage.getItem('userId');
        const storedUsername = sessionStorage.getItem('username');
        const storedIsAdmin = sessionStorage.getItem('isAdmin') === 'true';

        console.log('Stored values:', {
            storedToken,
            storedRefreshToken,
            storedUserId,
            storedUsername,
            storedIsAdmin,
        });

        if (storedToken) {
            setAuthState({
                token: storedToken,
                refreshToken: storedRefreshToken,
                userId: storedUserId,
                username: storedUsername,
                isAdmin: storedIsAdmin,
            });
        }

        // Refresh token periodically
        const interval = setInterval(refreshToken, 15 * 60 * 1000); // Refresh every 15 minutes
        return () => clearInterval(interval);
    }, [refreshToken]);

    return (
        <AuthContext.Provider value={{ ...authState, isAuthenticated, login, logout, refreshToken }}>
            {children}
        </AuthContext.Provider>
    );
};
