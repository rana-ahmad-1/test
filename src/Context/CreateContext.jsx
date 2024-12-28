import React, { createContext, useState } from 'react';

const UserContext = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    items: [], // List of selected items
    total: 0,  // Total bill
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, ContextProvider };
