import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { DummyData } from '../dummyData';
const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [allTickets, setAllTickets] = useState(
    DummyData()[4].map((ticket) => ({ ...ticket, qty: 0 }))
  );
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedTickets, setSelectedTickets] = useState([]);
  const setDefaultValues = () => {
    setUser(JSON.parse(localStorage.getItem('userInfo')));
    setSelectedTickets(JSON.parse(localStorage.getItem('selectedTickets')));
    localStorage.getItem('allTickets') &&
      setAllTickets(JSON.parse(localStorage.getItem('allTickets')));
    localStorage.getItem('selectedTickets') &&
      setSelectedTickets(JSON.parse(localStorage.getItem('selectedTickets')));
    setLoading(false);
    setError(null);
  };
  useEffect(() => {
    setDefaultValues();
  }, []);

  const value = {
    user,
    loading,
    error,
    selectedTickets,
    setSelectedTickets,
    allTickets,
    setAllTickets,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContext;
