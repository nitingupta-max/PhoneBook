import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteContact, getContacts } from "../api";
import Navbar from "../Navbar";
import ModeEditTwoToneIcon from "@mui/icons-material/ModeEditTwoTone";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";

const ContactList = () => {
  const [items, setItems] = useState([]);
  // const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const fetchItems = async () => {
      const contacts = await getContacts();
      setItems(contacts);
    };
    fetchItems();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="mt-3">
          <h3>Contact List</h3>
          <table className="table table-striped mt-3">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone No.</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((contact) => (
                <tr key={contact._id}>
                  <td>{contact.name}</td>
                  <td>{contact.number}</td>
                  <td>{contact.email}</td>
                  <td>
                    <Link to={`/edit/${contact._id}`}>
                      <button className="btn">
                        <ModeEditTwoToneIcon />
                      </button>
                    </Link>{" "}
                    <button
                      className="btn"
                      onClick={(e) => {
                        e.preventDefault();
                        deleteContact(contact._id);
                        window.location.reload();
                        // setRefresh(!refresh);
                      }}
                    >
                      <DeleteForeverTwoToneIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ContactList;
