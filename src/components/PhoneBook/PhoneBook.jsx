import FormAddContacts from './ContactForm/ContactForm';
import PhoneBookList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Container } from './PhoneBook.module';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/itemsSlice';
import { getFilteredContacts } from 'redux/itemsSelector';
import { getFilter, setFilter } from 'redux/filterSlice';

export default function PhoneBook() {
  const contacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onAddContact = data => {
    if (isDuplicate(data)) {
      return alert(`${data.name} is alreay in contacts.`);
    }
    const action = addContact(data);
    dispatch(action);
  };

  const handleChange = e => {
    const value = e.target.value;
    dispatch(setFilter(value));
  };

  const isDuplicate = ({ name, number }) => {
    const result = contacts.find(
      item => item.name === name && item.number === number
    );
    return result;
  };

  return (
    <Container>
      <div className="block">
        <h1>PhoneBook</h1>
        <FormAddContacts addContact={onAddContact} />
      </div>
      <div className="block">
        <h2>Contacts</h2>
        <Filter filter={filter} handleChange={handleChange} />
        <PhoneBookList items={contacts} />
      </div>
    </Container>
  );
}
