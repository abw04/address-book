import {
  addContact,
  loadContacts,
  findContact,
  deleteContact,
  render,
} from "./contact.js";

let contacts = loadContacts("contactskey");
let editID = null;

const listElement = document.getElementById("contact");
const searchElement = document.getElementById("search");
const contactFormElement = document.getElementById("contact-form");
const searchBarElement = document.getElementById("search-bar");
const cancelElement = document.getElementById("cancel-button");
const handleEdit =(id) => {
  editID =id;
}

render(contacts, listElement, handleEdit);

searchElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = searchBarElement.value;
  const results = findContact(query);
  render(results, listElement, handleEdit);
});

contactFormElement.addEventListener("submit", (event) => {
  event.preventDefault();
  contacts = loadContacts("contactskey");
  const contactData = new FormData(contactFormElement);
  const newContact = {
    fullName: contactData.get("full-name"),
    phone: contactData.get("phone"),
    email: contactData.get("email"),
    location: contactData.get("location"),
  };
  addContact(contacts, newContact, editID);
  render(contacts, listElement, handleEdit);
  contactFormElement.reset();
  editID = null;
});

cancelElement.addEventListener("click", (event) => {
  event.preventDefault();
  contactFormElement.reset();
  editID = null;
});
