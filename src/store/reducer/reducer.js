import { ActionTypes } from "../actionTypes/actionTypes";

const intialState = {
  users: [],
  forms: [],
  user: [],
};

export const userReducer = (state = intialState, action) => {
  // console.log(state)
  switch (action.type) {
    case ActionTypes.GET_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case ActionTypes.CREATE_FORM:
      return {
        ...state,
        forms: [...state.forms, action.payload],
      };

    case ActionTypes.GET_FORMS:
      return {
        ...state,
        forms: [...action.payload],
      };
    case ActionTypes.GET_USER:
      return {
        ...state,
        user: [...action.payload],
      };

    default:
      return state;
  }
};
