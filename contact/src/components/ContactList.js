import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteContact, getContacts, deleteMultiContact } from "../api";
import Navbar from "../Navbar";
import ModeEditTwoToneIcon from "@mui/icons-material/ModeEditTwoTone";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

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

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>
                    <CheckBoxOutlineBlankIcon />
                  </StyledTableCell>
                  <StyledTableCell align="left">Name</StyledTableCell>
                  <StyledTableCell align="left">Phone No.</StyledTableCell>
                  <StyledTableCell align="left">Email</StyledTableCell>
                  <StyledTableCell align="left">Action</StyledTableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {items.map((contact) => (
                  <StyledTableRow key={contact._id}>
                    <StyledTableCell
                      key={contact._id}
                      component="th"
                      scope="row"
                    >
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
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {contact.name}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {contact.number}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {contact.email}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <Link to={`/edit/${contact._id}`}>
                        <Button className="btn">
                          <ModeEditTwoToneIcon />
                        </Button>
                      </Link>{" "}
                      <Button
                        className="btn"
                        onClick={(e) => {
                          e.preventDefault();
                          deleteContact(contact._id);
                          window.location.reload();
                        }}
                      >
                        <DeleteForeverTwoToneIcon />
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}

                {/* {items.map((contact) => (
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
                ))} */}
              </TableBody>
            </Table>
          </TableContainer>

          {/* <table className="table table-striped mt-3"> */}
          {/* <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Phone No.</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead> */}
          {/* <tbody> */}
          {/* {items.map((contact) => (
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
              ))} */}
          {/* </tbody> */}
          {/* </table> */}
        </div>
      </div>
    </>
  );
};

export default ContactList;
