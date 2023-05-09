/*==================================================
/database/utils/seedDB.js

It seeds the database with several initial students and campuses.
==================================================*/
const { Campus, Student } = require("../models"); // Import database models

// Seed database
const seedDB = async () => {
  // Create a new campus
  const dummy_campus = await Campus.create({
    name: "Hunter College",
    imageUrl:
      "https://s29068.pcdn.co/wp-content/uploads/hunter-new-york-city-street-view.jpg",
    address: "695 Park Ave, New York, NY 10065",
    description: "This is a school in New York, New York.",
  });
  // Create a new campus
  const dummy_campus2 = await Campus.create({
    name: "Queens College",
    imageUrl:
      "https://macaulay.cuny.edu/wp-content/uploads/2016/07/qc10_bg_000056-1920x1080.jpg",
    address: "65-30 Kissena Blvd, Queens, NY 11367",
    description: "This is a school in Queens, New York.",
  });
  // Create a new campus
  const dummy_campus3 = await Campus.create({
    name: "Brooklyn College",
    imageUrl:
      "https://www.brooklyn.cuny.edu/web/com_socialImages/BrooklynCollegeLibrary_1200x628.jpg",
    address: "2900 Bedford Ave, Brooklyn, NY 11210",
    description: "This is a school in Brooklyn, New York.",
  });

  // Create a new student for a campus
  const dummy_student = await Student.create({
    firstname: "Joe",
    lastname: "Smith",
    email: "JSmith@gg.com",
    imageUrl:
      "https://www.pngarts.com/files/10/Default-Profile-Picture-Transparent-Image.png",
    gpa: 0.0,
  });
  // Create a new student for a campus
  const dummy_student2 = await Student.create({
    firstname: "Mary",
    lastname: "Johnson",
    email: "MJohnson@gg.com",
    imageUrl:
      "https://www.pngarts.com/files/10/Default-Profile-Picture-Transparent-Image.png",
    gpa: 0.0,
  });

  // Add students to campuses
  await dummy_student.setCampus(dummy_campus);
  await dummy_student2.setCampus(dummy_campus2);
};

// Export the database seeding function
module.exports = seedDB;
