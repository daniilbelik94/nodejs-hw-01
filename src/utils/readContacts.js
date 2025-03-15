import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

async function readContacts() {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    if (!data || data.trim() === '') {
      return [];
    }
    return JSON.parse(data);
  } catch (error) {
    console.error('Error getting contacts:', error);
    return [];
  }
}

export default readContacts;