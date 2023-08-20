const sequelize = require("./config/sequelize");

const Planet = require("./models/Planet");
const Agency = require("./models/Agency");
const Passenger = require("./models/Passenger");
const User = require("./models/User");
const Travel_Class = require("./models/Travel_Class");
const Shuttle_Service = require("./models/Shuttle_Service");
const Shuttle_Details = require("./models/Shuttle_Details");
const Seat_Details = require("./models/Seat_Details");
const Reservation = require("./models/Reservation");
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

    const passenger = await Passenger.create({
      User_ID: User.User_ID,
      FirstName: "supun",
      LastName: "silva",
      Address: "unuwinna",
      PhoneNumber: 1234567860,
      City: "kandy",
      State: "State",
      Zipcode: "12345",
      Country: "srilanka",
    });
    const passenger1 = await Passenger.create({
      User_ID: User1.User_ID,
      FirstName: "Peter",
      LastName: "Parker",
      Address: "1001 Queens Blvd",
      PhoneNumber: 1234567890,
      City: "New York",
      State: "NY",
      Zipcode: "10011",
      Country: "USA",
    });
    const passenger3 = await Passenger.create({
      User_ID: User3.User_ID,
      FirstName: "Peter",
      LastName: "Johnson",
      Address: "789 Oak St",
      PhoneNumber: 3210987654,
      City: "Townsville",
      State: "NY",
      Zipcode: "12346",
      Country: "Canada",
    });
    const passenger4 = await Passenger.create({
      User_ID: User4.User_ID,
      FirstName: "Mary",
      LastName: "Williams",
      Address: "1012 Maple St",
      PhoneNumber: 5432109876,
      City: "Lakeview",
      State: "TX",
      Zipcode: "12347",
      Country: "Mexico",
    });
    const passenger5 = await Passenger.create({
      User_ID: User5.User_ID,
      FirstName: "David",
      LastName: "Brown",
      Address: "1234 5th Ave",
      PhoneNumber: 7654321098,
      City: "New York City",
      State: "NY",
      Zipcode: "12348",
      Country: "USA",
    });

    const User1 = await User.create({
      Email: "2314sdfr@gmail.com",
      password: "987",
      user_Role: "passenger",
    });
    const User2 = await User.create({
      Email: "sdfr2435@gmail.com",
      password: "123Admin",
      user_Role: "Addmin",
    });
    const User3 = await User.create({
      Email: "reoi@gmail.com",
      password: "123",
      user_Role: "pasenger",
    });
    const User4 = await User.create({
      Email: "marywilliams@gmail.com",
      password: "password012",
      user_Role: "passenger",
    });
    const User5 = await User.create({
      Email: "davidbrown@gmail.com",
      password: "password345",
      user_Role: "pasengera",
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
      Passenger_ID: passenger2.Passenger_ID,
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
