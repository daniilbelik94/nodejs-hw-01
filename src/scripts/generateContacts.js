import { faker } from  '@faker-js/faker';
import readContacts from '../utils/readContacts.js';
import writeContacts from '../utils/writeContacts.js';
import createFakeContact from '../utils/createFakeContact.js';

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