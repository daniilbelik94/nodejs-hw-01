const readContacts = require('../utils/readContacts.js');
const writeContacts = require('../utils/writeContacts.js');
const createFakeContact = require('../utils/createFakeContact.js');

async function addOneContact() {
  try {
    const contacts = await readContacts();
    const newContact = createFakeContact();
    const updatedContacts = [...contacts, newContact];
    await writeContacts(updatedContacts);
    console.log('Added one new contact:', newContact);
  } catch (error) {
    console.error('Error adding contact:', error);
  }
}

addOneContact();