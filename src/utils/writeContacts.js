import fs from 'fs/promises';
import path from 'path';
import { PATH_DB } from '../constants/contacts.js';

async function writeContacts(contacts) {
  try {
    await fs.mkdir(path.dirname(PATH_DB), { recursive: true }); 
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
  } catch (error) {
    console.error('Error getting contacts:', error);
    throw error;
  }
}

export default writeContacts;