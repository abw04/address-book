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

export function addContact(contacts, contact, editID) {
  if (validateContact(contact) == true) {
    // adding a new contact
    if (editID == null) {
      const newContact = { id: crypto.randomUUID(), ...contact };
      contacts.push(newContact);
      saveContacts(contacts);
      console.log(contacts);
    // editing a contact
    } else {
      const index = contacts.findIndex((contact) => contact.id === editID)
      const newContact = { id: editID, ...contact };
      contacts[index] = newContact
      saveContacts(contacts);
      console.log(contacts);
    }
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

export function editContact(id, contacts) {
  const contactData = contacts.find((contact) => id === contact.id);
  document.querySelector("#full-name").value = contactData.fullName;
  document.querySelector("#phone").value = contactData.phone;
  document.querySelector("#email").value = contactData.email;
  document.querySelector("#location").value = contactData.location;
}

export function deleteContact(id) {
  const contacts = loadContacts("contactskey");
  const filtered = contacts.filter((contact) => contact.id !== id);
  saveContacts(filtered);
  console.log(filtered);
  return filtered;
}

export function render(contacts, listElement, editClick) {
  listElement.innerHTML = "";
  for (let i = 0; i < contacts.length; i++) {
    let list = document.createElement("contactContainer");
    list.innerHTML = `<div class = "p-2 border m-5 rounded bg-blue-100"> 
    <ul>
    <li>Name: ${contacts[i].fullName}</li>
     <li>Phone: ${contacts[i].phone}</li> 
     <li>Email: ${contacts[i].email}</li> 
     <li>Location: ${contacts[i].location}</li> </ul>
     <button class = "edit-button mt-2 border border-black box-border p-0.5 px-1 rounded text-white text-sm bg-blue-800"> Edit Contact </button>
     <button class = "del-button mt-2 border border-black box-border p-0.5 px-1 rounded text-white text-sm bg-blue-800"> Delete Contact </button></div>`;
    list.querySelector(".del-button").addEventListener("click", () => {
      let contactlist = deleteContact(contacts[i].id);
      contacts = loadContacts("contactskey");
      render(contactlist, listElement, editClick);
    });
    list.querySelector(".edit-button").addEventListener("click", () => {
      editClick(contacts[i].id);
      editContact(contacts[i].id, contacts);
    });
    listElement.appendChild(list);
  }
}
