import readContacts from '../utils/readContacts';

async function getAllContacts() {
  try {
    const contacts = await readContacts();
    console.log('All contacts:', contacts);
    return contacts;
  } catch (error) {
    console.error('Error getting contacts:', error);
  }
}

getAllContacts();