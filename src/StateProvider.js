import React, { createContext, useContext, useReducer } from "react";

// data layer
export const StateContext = createContext();

// build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
