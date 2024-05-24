import axios from "axios";

axios.defaults.baseURL = "https://sample-form-backend.onrender.com/api/v1/";

export function getUsers() {
  return axios
    .get("users")
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

export function createForm(data) {
  return axios
    .post("form", data, {
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

export function getForms() {
  return axios
    .get("form")
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}

export function getUser(userId) {
  return axios
    .get(`form/?userId=${userId}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}
//https://sample-form-backend.onrender.com/api/v1/form/:formid
export function getForm(formId) {
  return axios
    .get(`form/${formId}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}
export function submitForm(data) {
  return axios
    .post("response", data, {
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
}
