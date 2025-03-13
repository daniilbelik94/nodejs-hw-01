const fs = require('fs').promises;
const { PATH_DB } = require('../constants/contacts.js');

async function writeContacts(contacts) {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
  } catch (error) {
    throw error;
  }
}

module.exports = writeContacts;