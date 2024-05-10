import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        token: sessionStorage.getItem('token'),
        userId: sessionStorage.getItem('userId'),
        username: sessionStorage.getItem('username'),
    });

    const login = (token, userId, username) => {
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('userId', userId);
        sessionStorage.setItem('username', username);
        setAuthState({ token, userId, username });
    };

    const logout = () => {
        sessionStorage.clear();
        setAuthState({});
    };

    return (
        <AuthContext.Provider value={{ ...authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
