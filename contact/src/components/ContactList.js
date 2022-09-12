import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteContact, getContacts, deleteMultiContact } from "../api";
import Navbar from "../Navbar";
import ModeEditTwoToneIcon from "@mui/icons-material/ModeEditTwoTone";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";

const ContactList = () => {
  const [items, setItems] = useState([]);
  const [checked, setChecked] = useState([]);
  // const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const fetchItems = async () => {
      const contacts = await getContacts();
      setItems(contacts);
    };
    fetchItems();
    // setItems([
    //   { _id: "1", name: "name", number: "412", email: "21yug3" },
    //   { _id: "2", name: "name", number: "412", email: "21yug3" },
    // ]);
  }, []);

  // useEffect(() => {
  //   console.log(checked);
  // }, [checked]);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="mt-3">
          <h3>Contact List</h3>
          <Button
            variant="contained"
            className="btn mb-4"
            onClick={(e) => {
              e.preventDefault();
              deleteMultiContact(checked);
              window.location.reload();
              // setRefresh(!refresh);
            }}
          >
            Multi Delete
          </Button>
          <table className="table table-striped mt-3">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Phone No.</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((contact) => (
                <tr key={contact._id}>
                  <Checkbox
                    onChange={(e) => {
                      e.preventDefault();
                      if (e.target.checked) {
                        setChecked([...checked, contact._id]);
                      } else {
                        setChecked([
                          ...checked.filter((ele) => ele !== contact._id),
                        ]);
                      }
                    }}
                  />
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
