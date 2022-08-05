import { useState, useEffect } from 'react';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { Section } from './Section/Section';
import { nanoid } from 'nanoid';
import { Contacts } from './Contacts/Contacts';
import { FindByName } from './FindByName/FindByName';

export const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('localContacts')) || []
  );

  useEffect(() => {
    localStorage.setItem('localContacts', JSON.stringify(contacts));
  }, [contacts]);

  const handlerSubmit = contact => {
    const isHere = contacts.some(({ name }) => name === contact.name);
    const obj = { ...contact, id: nanoid() };
    if (isHere) {
      alert(`Name already in contacts`);
      return;
    }
    setContacts(ps => [...ps, obj]);
  };

  const handleChange = event => {
    const { value } = event.target;
    setFilter(value);
  };

  const handleFilters = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleDelete = id => {
    setContacts(ps => ps.filter(el => el.id !== id));
  };

  return (
    <>
      <Section title="phonebook">
        <PhonebookForm onSubmit={handlerSubmit} />
      </Section>
      <Section title="Contacts">
        <FindByName value={filter} onChange={handleChange} />
        <Contacts contact={handleFilters()} onDelete={handleDelete} />
      </Section>
    </>
  );
};
