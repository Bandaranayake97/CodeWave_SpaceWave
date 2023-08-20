const express = require("express");
const Shuttle_Details = require("../models/Shuttle_Details");
const { Op } = require("sequelize");

const router = express.Router();

router.get("/shuttles", async (req, res) => {
  try {
    const shuttles = await Shuttle_Details.findAll();
    res.status(200).json(shuttles);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching shuttles." });
  }
});

router.get("/shuttles/:id", async (req, res) => {
  try {
    const shuttle = await Shuttle_Details.findByPk(req.params.id);
    if (shuttle) {
      res.status(200).json(shuttle);
    } else {
      res.status(404).json({ error: "Shuttle not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching shuttle." });
  }
});

//router to add a shuttle
router.post("/shuttles/add", async (req, res) => {
  try {
    console.log("Function called");
    const shuttle = await Shuttle_Details.create(req.body);
    res.status(201).json(shuttle);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating shuttle." });
  }
});

//router to update a shuttle
router.put("/shuttles/update/:id", async (req, res) => {
  try {
    console.log("Function called");
    const shuttle = await Shuttle_Details.update(req.body, {
      where: {
        Shuttle_ID: req.params.id,
      },
    });
    res.status(201).json(shuttle);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while updating shuttle." });
  }
});

//router to fetch shuttle details that match the source and destination agency
router.get("/shuttles/:source/:destination", async (req, res) => {
  try {
    const targetDate = new Date();
    console.log("Function called");
    const shuttle = await Shuttle_Details.findAll({
      where: {
        Source_Agency_ID: req.params.source,
        Destination_Agency_ID: req.params.destination,
        Departure_Date_Time: {
          [Op.lte]: targetDate,
        },
      },
    });
    res.status(201).json(shuttle);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching shuttle." });
  }
});

module.exports = router;
