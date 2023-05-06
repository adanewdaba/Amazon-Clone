import React, { createContext, useContext, useReducer } from 'react';

// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Push and Pull information from the data layer
export const useStateValue = () => useContext(StateContext);


//Explanation for the above code:

// The above code imports some modules from the React library, including createContext, useContext, and useReducer. It also defines three exports: StateContext, StateProvider, and useStateValue.

// StateContext is created using the createContext function from React, which creates a context object to be used for sharing data between components.

// StateProvider is a component that takes in three props: reducer, initialState, and children. It wraps the children components with the StateContext.Provider component, which provides a value to the context. The value is obtained by calling the useReducer hook, which takes in the reducer function and initialState as arguments. The reducer function is used to update the state, and the initialState is the initial value of the state.

// useStateValue is a custom hook that calls useContext with StateContext as the argument, which returns the current context value. This hook allows components to easily access the state from the StateContext object without needing to pass it down through multiple layers of components using props.

// Together, these exports are used to create a global state management system in a React app, where the StateProvider component wraps the entire app, and components can access the global state using the useStateValue hook.