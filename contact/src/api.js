export const getContacts = () => fetch("/contact").then((res) => res.json());

export const createContact = (contact) =>
  fetch("/contact/create", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  });

export const updateContact = (contact, id) =>
  fetch(`/contact/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  });

export const deleteContact = (id) =>
  fetch(`/contact/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

export const deleteMultiContact = (array) =>
  fetch(`/contact/multi`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ array: array }),
  });

export const getContact = (id) =>
  fetch(`/contact/${id}`).then((res) => res.json());
