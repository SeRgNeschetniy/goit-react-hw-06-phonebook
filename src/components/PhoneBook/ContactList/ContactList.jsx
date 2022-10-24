import PropTypes from 'prop-types';

export default function PhoneBookList({ items, removeContact }) {
  const elements = items.map(({ name, number, id }) => {
    return (
      <li key={id}>
        {name}: {number}{' '}
        <button type="submit" onClick={() => removeContact(id)}>
          Delete
        </button>
      </li>
    );
  });
  return <ul>{elements}</ul>;
}

PhoneBookList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  removeContact: PropTypes.func.isRequired,
};
