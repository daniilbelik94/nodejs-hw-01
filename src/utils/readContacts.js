const fs = require('fs/promises');
const path = require('path');

async function readContacts() {
  const filePath = path.join(__dirname, '../db/db.json');
  try {
    const data = await fs.readFile(filePath, 'utf8');
    if (!data || data.trim() === '') {
      return [];
    }
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading contacts:', error);
    return [];
  }
}

module.exports = readContacts;