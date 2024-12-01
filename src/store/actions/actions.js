import { ActionTypes } from "../actionTypes/actionTypes";

export const getUsers = (users) => {
  return {
    type: ActionTypes.GET_USERS,
    payload: users,
  };
};

export const createForm = (forms) => {
  return {
    type: ActionTypes.CREATE_FORM,
    payload: forms,
  };
};

export const getForms = (forms) => {
  return {
    type: ActionTypes.GET_FORMS,
    payload: forms,
  };
};

export const getUser = (user) => {
  return {
    type: ActionTypes.GET_USER,
    payload: user,
  };
};

export const getForm = (form) => {
  return {
    type: ActionTypes.GET_FORM,
    payload: form,
  };
};
