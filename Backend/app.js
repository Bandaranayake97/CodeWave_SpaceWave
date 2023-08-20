const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const planetRoutes = require("./routes/Planet");
const agencyRoutes = require("./routes/Agency");
const SeatDetailsRoutes = require("./routes/Seat_Details");
const ShuttleDetailsRoutes = require("./routes/Shuttle_Details");
const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());
// Parse URL-encoded bodies (for form data)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use("/api", planetRoutes); //http://localhost:8080/api/planets
app.use("/api", agencyRoutes); //http://localhost:8080/api/agencies
app.use("/api", SeatDetailsRoutes); //http://localhost:8080/api/seatdetails
app.use("/api", ShuttleDetailsRoutes);
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to SpaceWave - Backend!!!" });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}.`);
});
