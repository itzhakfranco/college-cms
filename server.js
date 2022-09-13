const express = require("express");
const cors = require("cors");

const lecturers = require("./routes/lecturers");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/lecturers/", lecturers);

const PORT = 7777;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
