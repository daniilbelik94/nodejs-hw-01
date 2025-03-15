
import readContacts from '../utils/readContacts.js';
import writeContacts from '../utils/writeContacts.js';

async function removeLastContact() {
  try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
      console.log('Нет контактов для удаления');
      return;
    }
    const updatedContacts = contacts.slice(0, -1);
    await writeContacts(updatedContacts);
    console.log('Last contact removed');
  } catch (error) {
    console.error('Error removing last contact:', error);
    throw error;
  }
}

removeLastContact();