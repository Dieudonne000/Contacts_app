const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const Contact = require("./contactmodel");

const app = express();
app.use(cors());
app.use(express.json());


app.post("/api/contacts", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    const savedContact = await newContact.save();
    res.status(201).send(savedContact);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

app.get("/api/contacts", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.send(contacts);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.get("/api/contacts/:id", async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (contact) {
      res.send(contact);
    } else {
      res.status(404).send({ message: "Contact not found" });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.put("/api/contacts/:id", async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (updatedContact) {
      res.send(updatedContact);
    } else {
      res.status(404).send({ message: "Contact not found" });
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

app.delete("/api/contacts/:id", async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (deletedContact) {
      res.send(deletedContact);
    } else {
      res.status(404).send({ message: "Contact not found" });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://thisoneforme321:FqtejfbM49RsEZ8t@contact.asboqyr.mongodb.net/?retryWrites=true&w=majority&appName=Contact"
  )
  .then(() => {
    app.listen(3001, () => {
      console.log("Server running on port 3001");
    });
    console.log("Connected to database!");
  })
  .catch((error) => {
    console.log("Failed to connect to database:", error.message);
  });
