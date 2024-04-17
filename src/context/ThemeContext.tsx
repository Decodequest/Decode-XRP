
import React, { createContext, useContext, useState } from 'react';

// interface State {
//     account: any;
//     handleAccount: any
//     userDeatils: any
//     setUserDetails: any
// }

// Create a context with initial state
const StateContext = createContext<any | undefined>(undefined);
// Provider component to wrap your app with
export const StateProvider: any = ({ children }: any) => {
  // Initialize state
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState();
  const [chainId, setChainId] = useState();
  const [firebaseDb, setfirebaseDb] = useState()
  const [accountDetails, setAccountDetails] = useState<any>({
    account: "",
    balance: "",
    chainId: "",
  });
  const [userDeatils, setUserDetails] = useState({
    Account: account,
    Name: "",
    Goal: "",
    Skills: "",
    Intrest: "",
    RankXRPL: 0,
    NFTExists: false,
    PropertiesXRPL: {
      Accuracy: 0,
      Speed: 0,
      Strength: 0
    },
    // XrpCourse: {
    //   course1: 0,
    //   course2: 0,
    //   course3: 0,
    //   total: 0,
    // }
  });

  // Define functions to update the state
  const handleAccount: any = (id: any) => {
    setAccount(id);
  };
  // Provide the state and updater functions to the context
  return (
    <StateContext.Provider value={{ account, handleAccount, setUserDetails, userDeatils, balance, setBalance, setChainId, chainId, setfirebaseDb, firebaseDb, setAccount }}>
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

