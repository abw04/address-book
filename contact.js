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

function addContact(contact) {
  if (validateContact(contact) == true) {
    const newContact = { id: contacts.length + 1, ...contact };
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
  return nameSearch
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
  saveContacts(filtered);
  console.log(filtered);
  return filtered;
}

const listElement = document.getElementById("contact");
const searchElement = document.getElementById("search");
const contactFormElement = document.getElementById("contact-form");
const searchBarElement = document.getElementById("search-bar");
const editElement = document.getElementById("edit-button");
const deleteElement = document.getElementById("del-button");

function render(contacts) {
  listElement.innerHTML = "";
  for (let i = 0; i < contacts.length; i++) {
    list = document.createElement("li");
    list.innerHTML = `<ul>
    <li>Name: ${contacts[i].fullName}</li>
     <li>Phone: ${contacts[i].phone}</li> 
     <li>Email: ${contacts[i].email}</li> 
     <li>Location: ${contacts[i].location}</li> </ul>
     <button id = "edit-button"> edit contact </button>
     <button id = "del-button"> delete contact </button>`;
    list.querySelector("#del-button").addEventListener("click", () => {
      contactlist = deleteContact(contacts[i].id);
      saveContacts(contactlist);
      render(contactlist);
    });
    listElement.appendChild(list);
  }
}

searchElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = searchBarElement.value;
  const results = findContact(query);
  render(results);
});

contactFormElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const contactData = new FormData(contactFormElement);
  const newContact = {
    fullName: contactData.get("full-name"),
    phone: contactData.get("phone"),
    email: contactData.get("email"),
    location: contactData.get("location"),
  };
  addContact(newContact);
  render(contacts);
  contactFormElement.reset();
});
