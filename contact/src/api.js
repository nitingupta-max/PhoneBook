export const getContacts = () =>
  fetch("https://phnebook.heroku.com/").then((res) => res.json());

export const createContact = (contact) =>
  fetch("https://phnebook.heroku.com/create", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  });

export const updateContact = (contact, id) =>
  fetch(`https://phnebook.heroku.com/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  });

export const deleteContact = (id) =>
  fetch(`https://phnebook.heroku.com/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

export const getContact = (id) =>
  fetch(`https://phnebook.heroku.com/${id}`).then((res) => res.json());
