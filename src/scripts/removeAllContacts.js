import writeContacts from '../utils/writeContacts.js';

async function removeAllContacts() {
  try {
    await writeContacts([]);
    console.log('All contact removed');
  } catch (error) {
    console.error('Error removing all contacts:', error);
    throw error;
  }
}

removeAllContacts();
