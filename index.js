const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, postContact } = require("./controller");

app.get("/api/compliment", getCompliment);

app.post("/api/contact", postContact);

app.listen(4000, () => console.log("Server running on 4000"));
