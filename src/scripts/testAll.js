import readContacts from '../utils/readContacts.js';
import writeContacts from '../utils/writeContacts.js';
import createFakeContact from '../utils/createFakeContact.js';

async function testAll() {
  try {
    console.log('Step 1: Clearing all contacts...');
    await writeContacts([]);
    console.log('All contacts deleted');

    console.log('Step 2: Adding one contact...');
    let contacts = await readContacts();
    const newContact = createFakeContact();
    contacts = [...contacts, newContact];
    await writeContacts(contacts);
    console.log('Contact added:', newContact);

    console.log('Step 3: Generating 5 contacts...');
    const newContacts = Array.from({ length: 5 }, createFakeContact);
    contacts = [...contacts, ...newContacts];
    await writeContacts(contacts);
    console.log('Generated 5 new contacts');

    console.log('Step 4: Counting contacts...');
    contacts = await readContacts();
    console.log('Number of contacts:', contacts.length);

    console.log('Step 5: Getting all contacts...');
    console.log('All contacts:', contacts);

    console.log('Step 6: Removing the last contact...');
    if (contacts.length > 0) {
      contacts = contacts.slice(0, -1);
      await writeContacts(contacts);
      console.log('Last contact removed');
    } else {
      console.log('No contacts to remove');
    }

    console.log('Step 7: Clearing all contacts again...');
    await writeContacts([]);
    console.log('All contacts deleted');
  } catch (error) {
    console.error('Error during test execution:', error);
  }
}

testAll();