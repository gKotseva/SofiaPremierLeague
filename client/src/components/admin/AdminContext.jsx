import React, { createContext, useState } from 'react';

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [headers, setHeaders] = useState([]);
    const [dataType, setDataType] = useState('');

    const fetchData = async (endpoint, headers, type) => {
        try {
            const response = await endpoint();
            setData(response);
            setHeaders(headers);
            setDataType(type);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <AdminContext.Provider value={{ data, headers, dataType, fetchData }}>
            {children}
        </AdminContext.Provider>
    );
};
