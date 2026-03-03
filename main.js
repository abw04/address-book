import {
  addContact,
  loadContacts,
  findContact,
  sortContact,
  deleteContact,
  render,
} from "./contact.js";

let contacts = loadContacts("contactskey");

const listElement = document.getElementById("contact");
const searchElement = document.getElementById("search");
const contactFormElement = document.getElementById("contact-form");
const searchBarElement = document.getElementById("search-bar");

render(contacts, listElement);

searchElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = searchBarElement.value;
  const results = findContact(query);
  render(results, listElement);
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
  addContact(contacts, newContact);
  render(contacts,listElement);
  contactFormElement.reset();
});
