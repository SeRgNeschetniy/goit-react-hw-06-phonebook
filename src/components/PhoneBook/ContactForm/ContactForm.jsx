import { nanoid } from 'nanoid';
import { ContactsWrapp } from './ContactForm.module';
import { useState } from 'react';

export default function ContactForm({ addContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameId = nanoid();
  const numberId = nanoid();

  const handelChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    addContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <ContactsWrapp>
      <form onSubmit={handleSubmit}>
        <div className="contacts__name">
          <label htmlFor={nameId}>Name</label>
          <input
            id={nameId}
            value={name}
            onChange={handelChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>

        <div className="contacts__phone">
          <label htmlFor={numberId}>Number</label>
          <input
            id={numberId}
            value={number}
            onChange={handelChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>
        <button className="contacts__button">Add contact</button>
      </form>
    </ContactsWrapp>
  );
}
