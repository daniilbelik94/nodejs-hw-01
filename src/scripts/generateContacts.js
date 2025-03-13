const { faker } = require('@faker-js/faker');
const readContacts = require('../utils/readContacts.js');
const writeContacts = require('../utils/writeContacts.js');
const createFakeContact = require('../utils/createFakeContact.js');

async function generateContacts(count = 5) {
  try {
    const currentContacts = await readContacts();
    const newContacts = Array.from({ length: count }, createFakeContact);
    const updatedContacts = [...currentContacts, ...newContacts];
    await writeContacts(updatedContacts);
    console.log(`Generated ${count} new contacts`);
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
}


generateContacts();