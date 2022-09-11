require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./connection/connection");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const { Contact } = require("./models/model");

// middlewares
connectDB();

app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 8080;

// CRUD API

app.get("/", (req, res) => {
  Contact.find((err, contacts) => {
    if (err) {
      console.log(err);
    } else {
      res.json(contacts);
    }
  });
});

app.post("/create", (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be emtpy!" });
    return;
  }
  // new user
  const user = new Contact({
    name: req.body.name,
    email: req.body.email,
    number: req.body.number,
  });
  // save user in the database
  user
    .save()
    .then((contact) => {
      res.json(contact);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
  // const contact = new Contact(req.body);
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  Contact.findById(id, (err, contact) => {
    res.json(contact);
  });
});

app.delete("/:id", async (req, res) => {
  const id = req.params.id;
  // Contact.findById(id, (err, contact) => {
  //   res.json(contact);
  // });

  await Contact.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` });
      } else {
        res.send({
          message: "User was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete User with id=" + id,
      });
    });
});

app.post("/:id", (req, res) => {
  const id = req.params.id;
  Contact.findById(id, (err, contact) => {
    if (!contact) {
      res.status(404).send("Contact not found");
    } else {
      contact.name = req.body.name;
      contact.email = req.body.email;
      contact.number = req.body.number;
      contact
        .save()
        .then((contact) => {
          res.json(contact);
        })
        .catch((err) => res.status(500).send(err.message));
    }
  });
});

app.listen(port, () =>
  console.log(`Server is Running on PORT : http://localhost:${port}`)
);
