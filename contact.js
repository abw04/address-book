export function validateContact(contact) {
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

export function addContact(contacts, contact) {
  if (validateContact(contact) == true) {
    const newContact = { id: crypto.randomUUID(), ...contact };
    contacts.push(newContact);
    saveContacts(contacts);
    console.log(contacts);
  }
}

export function saveContacts(contacts) {
  localStorage.setItem("contactskey", JSON.stringify(contacts));
}

export function loadContacts(key) {
  const rawdata = localStorage.getItem(key);
  const parsed = rawdata ? JSON.parse(rawdata) : [];
  return parsed;
}

export function findContact(name) {
  const contacts = loadContacts("contactskey");
  const n = name.toLowerCase();
  const nameSearch = contacts.filter(
    (contact) => contact.fullName.toLowerCase().includes(n) == true,
  );
  return nameSearch;
}

export function sortContact(text) {
  const contacts = loadContacts("contactskey");
  const sortedContact = [...contacts];
  sortedContact.sort((a, b) => a.fullName.localeCompare(b.fullName));
  console.log(sortedContact);
}

export function formatContacts(array) {
  const contacts = loadContacts("contactskey");
  for (let i = 0; i < contacts.length; i++) {
    console.log(
      `${contacts[i].id}. ${contacts[i].fullName}, ${contacts[i].phone}, ${contacts[i].email}, in ${contacts[i].location}`,
    );
  }
}

export function deleteContact(id) {
  const contacts = loadContacts("contactskey");
  const filtered = contacts.filter((contact) => contact.id !== id);
  saveContacts(filtered);
  console.log(filtered);
  return filtered;
}

export function render(contacts, listElement) {
  listElement.innerHTML = "";
  for (let i = 0; i < contacts.length; i++) {
    let list = document.createElement("contactContainer");
    list.innerHTML = `<div class = "p-2"> 
    <ul>
    <li>Name: ${contacts[i].fullName}</li>
     <li>Phone: ${contacts[i].phone}</li> 
     <li>Email: ${contacts[i].email}</li> 
     <li>Location: ${contacts[i].location}</li> </ul>
     <button class = "del-button"> delete contact </button></div>`;
    list.querySelector(".del-button").addEventListener("click", () => {
      let contactlist = deleteContact(contacts[i].id);
      contacts = loadContacts("contactskey");
      render(contactlist, listElement);
    });
    listElement.appendChild(list);
  }
}
