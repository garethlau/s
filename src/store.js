import React, { createContext, useReducer } from "react";

const initialState = {
  page: 0,
  firstName: "",
  age: "",
  primaryReason: "",
  personalityType: 0,
};

const actions = {
  NEXT_PAGE: "NEXT_PAGE",
  PREV_PAGE: "PREV_PAGE",
  SET_FIRST_NAME: "SET_FIRST_NAME",
  SET_AGE: "SET_AGE",
  SET_PRIMARY_REASON: "SET_PRIMARY_REASON",
  SET_PERSONALITY_TYPE: "SET_PERSONALITY_TYPE",
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case actions.NEXT_PAGE:
      let nextPage = state.page + 1;
      return {
        ...state,
        page: nextPage,
      };
    case actions.PREV_PAGE:
      let prevPage = state.page - 1;
      return {
        ...state,
        page: prevPage,
      };
    case actions.SET_FIRST_NAME:
      return {
        ...state,
        firstName: action.payload,
      };
    case actions.SET_AGE:
      return {
        ...state,
        age: action.payload,
      };
    case actions.SET_PRIMARY_REASON:
      return {
        ...state,
        primaryReason: action.payload,
      };
    case actions.SET_PERSONALITY_TYPE:
      return {
        ...state,
        personalityType: action.payload,
      };
    default:
      return state;
  }
}

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider, actions };
