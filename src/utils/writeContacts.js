import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

async function writeContacts(contacts) {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
  } catch (error) {
    throw error;
  }
}

export default writeContacts;