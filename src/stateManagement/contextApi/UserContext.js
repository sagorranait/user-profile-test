import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [selectedUser, setSelectedUser] = useState(null);

  const setUser = (user) => {
    setSelectedUser(user);
  };

  const clearUser = () => {
    setSelectedUser(null);
  };

  return (
    <UserContext.Provider value={{ selectedUser, setUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
}