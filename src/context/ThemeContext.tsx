
import React, { createContext, useContext, useState } from 'react';

interface State {
    account: any;
    handleAccount: any
}

// Create a context with initial state
const StateContext = createContext<State | undefined>(undefined);
// Provider component to wrap your app with
export const StateProvider: any = ({ children }: any) => {
  // Initialize state
  const [account, setAccount] = useState<any>();
  // Define functions to update the state
  const handleAccount: any = (id: any) => {
    setAccount(id);
  };
  // Provide the state and updater functions to the context
  return (
    <StateContext.Provider value={{ account, handleAccount }}>
      {children}
    </StateContext.Provider>
  );
};

// Custom hook to consume the state
export const useStateContext = () => {
  // Access the context value containing the state
  const context = useContext(StateContext);
  // Throw an error if context is accessed outside the provider
  if (context === undefined) {
    throw new Error('useStateContext must be used within a StateProvider');
  }
  // Return the context value
  return context;
};

