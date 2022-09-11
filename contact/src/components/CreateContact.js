import React from "react";
import { ContactForm } from "./ContactForm";
import { createContact } from "../api";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import "bootstrap/dist/css/bootstrap.css";

const CreateContact = () => {
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    await createContact(data);
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="mt-3">
          <h3>Create Contact</h3>
          <ContactForm onSubmit={onSubmit} />
        </div>
      </div>
    </>
  );
};

export default CreateContact;
