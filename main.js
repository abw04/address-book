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

// thought: non-correct validation return message is unused
function validateContact(contact) {
  if (!contact.fullName) {
    return "name is empty";
  }
  if (!contact.phone) {
    return "phone is empty";
  }
  if (!contact.email) {
    return "email is empty";
  }
  if (!contact.location) {
    return "location is empty";
  } else {
    return "contact validated";
  }
}

// TODO: id should be generated from the start, not a separate function call
function addContact(contact) {
  if (validateContact(contact) === "contact validated") {
    // TODO: contact should contain id before pushing to contacts here
    contacts.push(contact);
    console.log(contacts);
  }
}

function generateID(contacts) {
  for (let i = 0; i < contacts.length; i++) {
    contacts[i].id = `${i + 1}`;
  }
}

function findContact(name) {
  const n = name.toLowerCase();
  const nameSearch = contacts.filter(
    (contact) => contact.fullName.toLowerCase().includes(n) == true,
  );
  console.log(nameSearch);
}

function sortContact(contacts) {
  const sortedContact = contacts;
  sortedContact.sort((a, b) => a.fullName.localeCompare(b.fullName));
  console.log(sortedContact);
}

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

addContact({
  fullName: "IGD Arya",
  phone: "0857805022",
  email: "igdarya@gmail.com",
  location: "depok",
});


generateID(contacts);

formatContacts(contacts);

findContact("ar");

sortContact(contacts);

