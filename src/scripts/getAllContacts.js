import readContacts from '../utils/readContacts.js';

async function getAllContacts() {
  try {
    const contacts = await readContacts();
    console.log('Все контакты:', contacts);
    return contacts;
  } catch (error) {
    console.error('Error getting contacts:', error);
    throw error;
  }
}

getAllContacts();



