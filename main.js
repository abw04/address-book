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

function addContact(contact) {
  if (validateContact(contact) === "contact validated") {
    const newContact = { id: `${contacts.length + 1}`, ...contact };
    contacts.push(newContact);
    saveContacts(contacts);
    console.log(contacts);
  }
}

function saveContacts(contacts) {
  localStorage.setItem("contactskey", JSON.stringify(contacts));
}

function loadContacts(key) {
  const rawdata = localStorage.getItem(key);
  const parsed = rawdata ? JSON.parse(rawdata) : [];
  return parsed;
}

function findContact(name) {
  const contacts = loadContacts("contactskey");
  const n = name.toLowerCase();
  const nameSearch = contacts.filter(
    (contact) => contact.fullName.toLowerCase().includes(n) == true,
  );
  console.log(nameSearch);
}

function sortContact(text) {
  const contacts = loadContacts("contactskey");
  const sortedContact = [...contacts];
  sortedContact.sort((a, b) => a.fullName.localeCompare(b.fullName));
  console.log(sortedContact);
}

function formatContacts(array) {
  const contacts = loadContacts("contactskey");
  for (let i = 0; i < contacts.length; i++) {
    console.log(
      `${contacts[i].id}. ${contacts[i].fullName}, ${contacts[i].phone}, ${contacts[i].email}, in ${contacts[i].location}`,
    );
  }
}

function deleteContact(id) {
    const contacts = loadContacts("contactskey");
  const filtered = contacts.filter((contact) => contact.id !== id);
  saveContacts(filtered)
  console.log(filtered);
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

formatContacts(contacts);

saveContacts(contacts);

findContact("ar");

sortContact(contacts);

deleteContact(3);

fetch("https://pokeapi.co/api/v2/pokemon/heracross")
  .then((response) => response.json())
  .then((json) => console.log(json));
