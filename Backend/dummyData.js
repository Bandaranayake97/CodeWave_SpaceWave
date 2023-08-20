const sequelize = require("./config/sequelize");

const Planet = require("./models/Planet");
const Agency = require("./models/Agency");
const Passenger = require("./models/Passenger");
const User = require("./models/User");
const Travel_Class = require("./models/Travel_Class");
const Shuttle_Service = require("./models/Shuttle_Service");
const Shuttle_Details = require("./models/Shuttle_Details");
const Seat_Details = require("./models/Seat_Details");
const Payment_Status = require("./models/Payment_Status");
const Shuttle_Cost = require("./models/Shuttle_Cost");
const Service_Offering = require("./models/Shuttle_Service");
const Reservation = require("./models/Reservation");

// Create dummy data
async function createDummyData() {
  try {
    await sequelize.sync({}); // This will recreate tables

    const planet = await Planet.create({
      PlanetName: "Earth",
      Temperature: 20,
      PlanetDescription: "Blue planet",
    });
    const planet1 = await Planet.create({
      PlanetName: "Mars",
      Temperature: -80,
      PlanetDescription:
        'Mars is the fourth planet and the furthest terrestrial planet from the sun. The reddish color of surface is due to finely grained iron (iii)oxide dust in the soil, giving it the nickname "the Red Planet',
    });
    const planet2 = await Planet.create({
      PlanetName: "Jupiter",
      Temperature: -145,
      PlanetDescription:
        "Jupiter: Largest planet, fifth from the Sun. Gas giant with Great Red Spot storm. Hydrogen-helium atmosphere, distinct bands. Massive size, strong magnetic field. Moons, including Galilean moons. Significant gravitational influence on solar system.",
    });
    const planet3 = await Planet.create({
      PlanetName: "OGLE-2014-BLG",
      Temperature: -90,
      PlanetDescription:
        "As we venture towards OGLE-2014-BLG-0124L b, our journey spans a staggering 13,300 light-years through the cosmic expanse. This remote gas giant, with a mass akin to half of Jupiters, beckons exploration to unravel the mysteries of its distant realm, offering a glimpse into the diversity of planetary systems beyond our own.",
    });
    const planet4 = await Planet.create({
      PlanetName: "Kepler-452b",
      Temperature: -9,
      PlanetDescription:
        "Kepler-452b is a super-Earth exoplanet orbiting within the inner edge of the habitable zone of the sun-like star Kepler-452 and is the only planet in the system discovered by Kepler. It is located about 1,800 light-years from Earth in the constellation of Cygnus",
    });
    const planet5 = await Planet.create({
      PlanetName: "Neptune",
      Temperature: -218,
      PlanetDescription:
        "Neptune is dark, cold, and very windy. Its the last of the planets in our solar system. Its more than 30 times as far from the Sun as Earth is. Neptune is very similar to Uranus.",
    });

    const agency = await Agency.create({
      Planet_ID: planet.Planet_ID,
      AgencyName: "Space Travel Inc.",
      AgencyLocation: "Space City",
    });
    const agency1 = await Agency.create({
      Planet_ID: planet1.Planet_ID,
      AgencyName: "Babylon 5",
      AgencyLocation: "Space Station Alpha",
    });
    const agency2 = await Agency.create({
      Planet_ID: planet2.Planet_ID,
      AgencyName: "Space Station Alpha",
      AgencyLocation: "The Axiom",
    });
    const agency3 = await Agency.create({
      Planet_ID: planet3.Planet_ID,
      AgencyName: "The Death Star",
      AgencyLocation: "Star Wars",
    });
    const agency4 = await Agency.create({
      Planet_ID: planet4.Planet_ID,
      AgencyName: "The Nostromo",
      AgencyLocation: "The Expanse",
    });
    const agency5 = await Agency.create({
      Planet_ID: planet5.Planet_ID,
      AgencyName: "Space Travel Inc.",
      AgencyLocation: "WALL-E",
    });

    const travelClass = await Travel_Class.create({
      Travel_Class_Name: "Economy",
      Travel_Class_Capacity: 200,
    });
    const travelClass1 = await Travel_Class.create({
      Travel_Class_Name: "Business",
      Travel_Class_Capacity: 100,
    });
    const travelClass2 = await Travel_Class.create({
      Travel_Class_Name: "First Class",
      Travel_Class_Capacity: 50,
    });
    const shuttleDetails = await Shuttle_Details.create({
      Shuttle_Name: "The Enterprise",
      Source_Agency_ID: agency.Agency_ID,
      Destination_Agency_ID: agency.Agency_ID,
      RoundTrip: "Y",
      Departure_Date_Time: new Date(),
      Arrival_Date_time: new Date(),
      Shuttle_Type: "Regular",
    });
    const shuttleDetails1 = await Shuttle_Details.create({
      Shuttle_Name: "The Space Shuttle",
      Source_Agency_ID: agency.Agency_ID,
      Destination_Agency_ID: agency2.Agency_ID,
      RoundTrip: "Y",
      Departure_Date_Time: new Date(),
      Arrival_Date_time: new Date(),
      Shuttle_Type: "Military",
    });
    const shuttleDetails2 = await Shuttle_Details.create({
      Shuttle_Name: "The Planet Express Ship",
      Source_Agency_ID: agency1.Agency_ID,
      Destination_Agency_ID: agency4.Agency_ID,
      RoundTrip: "Y",
      Departure_Date_Time: new Date(),
      Arrival_Date_time: new Date(),
      Shuttle_Type: "Cargo",
    });
    const shuttleDetails3 = await Shuttle_Details.create({
      Shuttle_Name: "The Millennium Falcon",
      Source_Agency_ID: agency5.Agency_ID,
      Destination_Agency_ID: agency.Agency_ID,
      RoundTrip: "N",
      Departure_Date_Time: new Date(),
      Arrival_Date_time: new Date(),
      Shuttle_Type: "Exploration",
    });
    const shuttleDetails4 = await Shuttle_Details.create({
      Shuttle_Name: "The Serenity",
      Source_Agency_ID: agency4.Agency_ID,
      Destination_Agency_ID: agency1.Agency_ID,
      RoundTrip: "N",
      Departure_Date_Time: new Date(),
      Arrival_Date_time: new Date(),
      Shuttle_Type: "Medical",
    });
    const seatDetails = await Seat_Details.create({
      Travel_Class_ID: travelClass.Travel_Class_ID,
      shuttle_ID: shuttleDetails.Shuttle_ID,
    });
    const seatDetails1 = await Seat_Details.create({
      Travel_Class_ID: travelClass1.Travel_Class_ID,
      shuttle_ID: shuttleDetails1.Shuttle_ID,
    });
    const seatDetails2 = await Seat_Details.create({
      Travel_Class_ID: travelClass2.Travel_Class_ID,
      shuttle_ID: shuttleDetails4.Shuttle_ID,
    });
    const seatDetails3 = await Seat_Details.create({
      Travel_Class_ID: travelClass.Travel_Class_ID,
      shuttle_ID: shuttleDetails2.Shuttle_ID,
    });

    const Reservation1 = await Reservation.create({
      Passenger_ID: passenger.Passenger_ID,
      Seat_ID: seatDetails2.Seat_ID,
      Date_Of_Reservation: new Date(),
    });
    const Reservation2 = await Reservation.create({
      Passenger_ID: passenger1.Passenger_ID,
      Seat_ID: seatDetails1.Seat_ID,
      Date_Of_Reservation: "2023.08.23",
    });
    const Reservation3 = await Reservation.create({
      Passenger_ID: passenger3.Passenger_ID,
      Seat_ID: seatDetails3.Seat_ID,
      Date_Of_Reservation: new Date(),
    });

    const Reservation4 = await Reservation.create({
      Passenger_ID: passenger4.Passenger_ID,
      Seat_ID: seatDetails2.Seat_ID,
      Date_Of_Reservation: "2023.08.30",
    });
    const paymentStatus = await Payment_Status.create({
      Payment_Status_YN: "Y",
      Payment_Due_Date: "2023.08.21",
      Payment_Amount: "20000",
      Reservation_ID: Reservation.Reservation_ID,
    });
    const paymentStatus1 = await Payment_Status.create({
      Payment_Status_YN: "Y",
      Payment_Due_Date: "2023.08.25",
      Payment_Amount: "50000",
      Reservation_ID: Reservation1.Reservation_ID,
    });
    const paymentStatus2 = await Payment_Status.create({
      Payment_Status_YN: "N",
      Payment_Due_Date: "2023.08.26",
      Payment_Amount: "20000",
      Reservation_ID: Reservation3.Reservation_ID,
    });
    const paymentStatus3 = await Payment_Status.create({
      Payment_Status_YN: "N",
      Payment_Due_Date: "2023.08.28",
      Payment_Amount: "20000",
      Reservation_ID: Reservation4.Reservation_ID,
    });

    const shuttleCost = await Shuttle_Cost.create({
      Seat_ID: seatDetails.Seat_ID,
      Valid_From_Date: new Date(),
      Valid_To_Date: "2023.08.30",
      Cost: "20000",
    });
    const shuttleCost1 = await Shuttle_Cost.create({
      Seat_ID: seatDetails2.Seat_ID,
      Valid_From_Date: new Date(),
      Valid_To_Date: "2023.08.25",
      Cost: "50000",
    });

    console.log("Dummy data created successfully");
  } catch (error) {
    console.error("Error creating dummy data:", error);
  } finally {
    sequelize.close();
  }
}

createDummyData();
