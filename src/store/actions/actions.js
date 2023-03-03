import { ActionTypes } from "../actionTypes/actionTypes";

export const getUsers = (users) => {
  return {
    type: ActionTypes.GET_USERS,
    payload: users,
  };
};

export const createForm = (forms) => {
  //  console.log(form)
  return {
    type: ActionTypes.CREATE_FORM,
    payload: forms,
  };
};

export const getForms = (forms) => {
  //  console.log(form)
  return {
    type: ActionTypes.GET_FORMS,
    payload: forms,
  };
};

export const getUser = (user) => {
  //  console.log(form)
  return {
    type: ActionTypes.GET_USER,
    payload: user,
  };
};
