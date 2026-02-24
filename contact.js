// TODO: move *contact to a new contact.js file, then import it here
function validateContact(contact) {
  if (
    !contact.fullName ||
    !contact.phone ||
    !contact.email ||
    !contact.location
  ) {
    return false;
  } else {
    return true;
  }
}

// TODO: move *contact to a new contact.js file, then import it here
function addContact(contact) {
  if (validateContact(contact) == true) {
    const newContact = { id: `${contacts.length + 1}`, ...contact };
    contacts.push(newContact);
    saveContacts(contacts);
    console.log(contacts);
  }
}

// TODO: move *contact to a new contact.js file, then import it here
function saveContacts(contacts) {
  localStorage.setItem("contactskey", JSON.stringify(contacts));
}

// TODO: move *contact to a new contact.js file, then import it here
function loadContacts(key) {
  const rawdata = localStorage.getItem(key);
  const parsed = rawdata ? JSON.parse(rawdata) : [];
  return parsed;
}

// TODO: move *contact to a new contact.js file, then import it here
function findContact(name) {
  const contacts = loadContacts("contactskey");
  const n = name.toLowerCase();
  const nameSearch = contacts.filter(
    (contact) => contact.fullName.toLowerCase().includes(n) == true,
  );
  console.log(nameSearch);
}

// TODO: move *contact to a new contact.js file, then import it here
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

// TODO: move *contact to a new contact.js file, then import it here
function deleteContact(id) {
  const contacts = loadContacts("contactskey");
  const filtered = contacts.filter((contact) => contact.id !== id);
  saveContacts(filtered);
  console.log(filtered);
}

function render(contact) {
  const nameElement = document.createElement("p");
  nameElement.innerHTML = `Name: ${contact.fullName}`;

  const phoneElement = document.createElement("p");
  phoneElement.innerHTML = `Phone: ${contact.phone}`;

  const mailElement = document.createElement("p");
  mailElement.innerHTML = `Email: ${contact.email}`;

  const divContact = document.getElementById("contact");
  divContact.appendChild(nameElement);
  divContact.appendChild(phoneElement);
  divContact.appendChild(mailElement);
}
