import axios from "./request";

export function getUsers() {
  return axios.get("users").then((res) => res.data);
}

export function createForm(data) {
  return axios
    .post("form", data, {
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => res.data);
}

export function getForms() {
  return axios.get("form").then((res) => res.data);
}

export function getUser(userId) {
  return axios.get(`form/?userId=${userId}`).then((res) => res.data);
}

export function getForm(formId) {
  return axios.get(`form/${formId}`).then((res) => res.data);
}

export function submitForm(data) {
  return axios
    .post("response", data, {
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => res.data);
}
