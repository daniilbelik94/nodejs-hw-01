const readContacts = require('../utils/readContacts');
const writeContacts = require('../utils/writeContacts');

async function removeLastContact() {
  try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
      console.log('No contacts to remove');
      return;
    }
    const updatedContacts = contacts.slice(0, -1);
    await writeContacts(updatedContacts);
    console.log('Last contact removed');
  } catch (error) {
    console.error('Error removing last contact:', error);
  }
}

removeLastContact();