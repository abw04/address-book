const contacts = [
  {
    id: 1,
    fullName: "Ardanu W",
    phone: "085780570715",
    email: "ardanuw@gmail.com",
    location: "Jakarta",
  },
  {
    id: 2,
    fullName: "Haidar H",
    phone: "081234567890",
    email: "mhaidarhanif@gmail.com",
    location: "Jakarta",
  },
  {
    id: 3,
    fullName: "Ben N",
    phone: "08987654321",
    email: "bentinata@gmail.com",
    location: "Kediri",
  },
];

addContact({
  fullName: "Dimas A",
  phone: "0857805088",
  email: "dimasa@gmail.com",
  location: "Bali",
});

addContact({
  fullName: "IGD Arya",
  phone: "0857805022",
  email: "igdarya@gmail.com",
  location: "depok",
});

formatContacts(contacts);

saveContacts(contacts);

findContact("ar");

sortContact(contacts);

render(contacts);
