import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const contacts = await readContacts();
  const contactCount = contacts.length;
  console.log(`Total number of contacts: ${contactCount}`);
  return contactCount;
};

console.log(await countContacts());
