use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    guest_name: "Jane Doe",
    guest_email: "jane@gmail.com",
    check_in_status: true
  },
  {
    guest_name: "Chris Smith",
    guest_email: "CSmith@gmail.com",
    check_in_status: true
  },
  {
    guest_name: "Allan Mill",
    guest_email: "Allan@gmail.com",
    check_in_status: false
  }
]);
