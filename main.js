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
  }
];

function formatContact(contact) {
  for (let i = 0; i < contacts.length; i++) {
    console.log(
      `${i+1}. ${contacts[i].fullName}, ${contacts[i].phone}, ${contacts[i].email}, in ${contacts[i].location}`,
    );
  }
}

formatContact(contacts)