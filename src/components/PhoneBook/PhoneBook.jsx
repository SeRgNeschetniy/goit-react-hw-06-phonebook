import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { useState } from 'react';
import FormAddContacts from './ContactForm/ContactForm';
import PhoneBookList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Container } from './PhoneBook.module';

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default function PhoneBook() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const addContact = data => {
    if (isDuplicate(data)) {
      return alert(`${data.name} is alreay in contacts.`);
    }

    setContacts(prev => {
      const newContact = {
        id: nanoid(),
        ...data,
      };
      return [...prev, newContact];
    });
  };

  const handleChange = e => {
    const value = e.target.value;
    setFilter(value);
  };

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }

    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(({ name, number }) => {
      const normalizedName = name.toLocaleLowerCase();
      const result =
        normalizedName.includes(normalizedFilter) ||
        number.includes(normalizedFilter);
      return result;
    });

    return filteredContacts;
  };

  const removeContact = id => {
    setContacts(prev => {
      const newContacts = prev.filter(item => item.id !== id);
      return newContacts;
    });
  };

  const isDuplicate = ({ name, number }) => {
    const result = contacts.find(
      item => item.name === name && item.number === number
    );
    return result;
  };

  const filteredContacts = getFilteredContacts();

  return (
    <Container>
      <div className="block">
        <h1>PhoneBook</h1>
        <FormAddContacts addContact={addContact} />
      </div>
      <div className="block">
        <h2>Contacts</h2>
        <Filter filter={filter} handleChange={handleChange} />
        <PhoneBookList items={filteredContacts} removeContact={removeContact} />
      </div>
    </Container>
  );
}
