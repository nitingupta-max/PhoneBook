import React, { useState, useEffect } from "react";
import { ContactForm } from "./ContactForm";
import { useParams, useNavigate } from "react-router-dom";
import { getContact, updateContact } from "../api";
import Navbar from "../Navbar";

const EditContact = () => {
  const match = useParams();
  // console.log(match);
  const [contact, setContact] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContact = async () => {
      const contact = await getContact(match.id);
      setContact(contact);
    };
    fetchContact();
  }, []);

  const onSubmit = async (data) => {
    await updateContact(data, match.id);
    navigate("/");
  };

  return contact ? (
    <>
      <Navbar />
      <div className="container">
        <div className="mt-3">
          <h3>Edit Contact Details</h3>
          <ContactForm contact={contact} onSubmit={onSubmit} />
        </div>
      </div>
    </>
  ) : (
    <>
      <Navbar />
      <div>Loading...</div>
    </>
  );
};

export default EditContact;
