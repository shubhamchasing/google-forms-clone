import { ActionTypes } from "../actionTypes/actionTypes";

const initialState = {
  users: [],
  forms: [],
  user: [],
  //form from reducer is not in use anywhere
  form: {
    form_id: null,
    form_name: "Untitled form",
    form_description: "A short description",
    form_fields: [
      {
        id: 1,
        question: "",
        type: "text",
        options: [{ id: 1, value: "Option" }],
        isRequired: true,
      },
    ],
    users_assigned: [],
  },
};

export const userReducer = (state = initialState, action) => {
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

    case ActionTypes.GET_FORM:
      return {
        ...state,
        form: { ...action.payload },
      };

    default:
      return state;
  }
};
