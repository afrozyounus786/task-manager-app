// AuthProvider.jsx
import React, { createContext, useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        setLocalStorage();
        const storedData = getLocalStorage();
        setEmployees(storedData.employees || []);
    }, []);

    return (
        <AuthContext.Provider value={{ employees, setEmployees }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
