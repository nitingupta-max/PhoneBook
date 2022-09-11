import React from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.css";
export const ContactForm = ({ contact, onSubmit }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: contact ? contact.name : "",
      email: contact ? contact.email : "",
      number: contact ? contact.number : "",
    },
  });

  const submitHandler = handleSubmit((data) => {
    onSubmit(data);
  });

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group mt-4">
        <label htmlFor="text">Name:</label>
        <input
          className="form-control"
          {...register("name", { required: true })}
          autoComplete="off"
          type="text"
          name="name"
          id="name"
        />
      </div>
      <div className="form-group mt-4">
        <label htmlFor="text">Phone No. :</label>
        <input
          className="form-control"
          {...register("number", { required: true })}
          autoComplete="off"
          type="text"
          name="number"
          id="number"
        />
      </div>
      <div className="form-group mt-4">
        <label htmlFor="text">Email:</label>
        <input
          className="form-control"
          autoComplete="off"
          {...register("email", { required: true })}
          type="email"
          name="email"
          id="email"
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary mt-4">
          Save Contact
        </button>
      </div>
    </form>
  );
};
