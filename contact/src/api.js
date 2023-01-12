export const getContacts = () =>
  fetch("https://phonebook-t50d.onrender.com/").then((res) => res.json());

export const createContact = (contact) =>
  fetch("https://phonebook-t50d.onrender.com/create", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  });

export const updateContact = (contact, id) =>
  fetch(`https://phonebook-t50d.onrender.com/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  });

export const deleteContact = (id) =>
  fetch(`https://phonebook-t50d.onrender.com/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

export const getContact = (id) =>
  fetch(`https://phonebook-t50d.onrender.com/${id}`).then((res) => res.json());
