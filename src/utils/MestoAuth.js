export const BASE_URL = "https://api.mesto.students.nomoredomains.work";

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }

  return res.json().then((data) => {
    throw new Error(console.log(data));
  });
};



export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    credentials: 'include',
  }).then(checkResponse);
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json" },
      credentials: 'include',
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
};

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
    'Accept': 'application/json',
    "Content-Type": "application/json" },
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
};

