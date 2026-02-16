const contacts = [
  {
    fullName: "Ardanu W",
    phone: "085780570715",
    email: "ardanuw@gmail.com",
    location: "Jakarta",
  },
  {
    fullName: "Haidar H",
    phone: "081234567890",
    email: "mhaidarhanif@gmail.com",
    location: "Jakarta",
  },
  {
    fullName: "Ben N",
    phone: "08987654321",
    email: "bentinata@gmail.com",
    location: "Kediri",
  },
];

function addContact(contact) {
  contacts.push(contact);
  console.log(contacts);
}

function generateID(contacts) {
  for (let i = 0; i < contacts.length; i++) {
    contacts[i].id = `${i + 1}`;
  }
}

function findContact(name) {
  const nameSearch = contacts.filter((contact) => contact.fullName.includes(name) == true);
  console.log(nameSearch);
}
//todo: allow search to be not case-sensitive

function formatContacts(contacts) {
  for (let i = 0; i < contacts.length; i++) {
    console.log(
      `${contacts[i].id}. ${contacts[i].fullName}, ${contacts[i].phone}, ${contacts[i].email}, in ${contacts[i].location}`,
    );
  }
}

addContact({
  fullName: "Dimas A",
  phone: "0857805088",
  email: "dimasa@gmail.com",
  location: "Bali",
});

generateID(contacts);

formatContacts(contacts);

findContact("H")


