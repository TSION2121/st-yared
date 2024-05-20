import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        token: sessionStorage.getItem('token'),
        userId: sessionStorage.getItem('userId'),
        username: sessionStorage.getItem('username'),
        isAdmin: sessionStorage.getItem('isAdmin') === 'true', // Assuming 'isAdmin' is stored as a string

    });
    const isAuthenticated = Boolean(authState.token);


    const login = (token, userId, username,isAdmin) => {
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('userId', userId);
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('isAdmin', isAdmin);
        setAuthState({ token, userId, username, isAdmin });    };

    const logout = () => {
        sessionStorage.clear();
        setAuthState({});
    };

    return (
        <AuthContext.Provider value={{ ...authState,isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
