export const getContacts = () =>
  fetch("http://localhost:8080/").then((res) => res.json());

export const createContact = (contact) =>
  fetch("http://localhost:8080/create", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  });

export const updateContact = (contact, id) =>
  fetch(`http://localhost:8080/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  });

export const deleteContact = (id) =>
  fetch(`http://localhost:8080/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

export const getContact = (id) =>
  fetch(`http://localhost:8080/${id}`).then((res) => res.json());
