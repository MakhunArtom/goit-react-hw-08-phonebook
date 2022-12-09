import PropTypes from 'prop-types';
import { getFilterValue } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { ContactUl, ContactItem } from './ContactList.styled';
import { useGetContactsQuery } from '..//../redux/contactsSliceApi';
import Contact from 'components/ContactItem/ContactItem';

export default function ContactList() {
  const filterValue = useSelector(getFilterValue);

  const { data: contacts, error, isLoading } = useGetContactsQuery();
  // console.log('data:', contacts);
  // console.log('error:', error);
  // console.log('isLoading:', isLoading);

  let getVisibleContacts = (contacts, filter) => {
    if (contacts)
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
  };

  const visibleContacts = getVisibleContacts(contacts, filterValue);

  return (
    <>
      {error && <p>Помилка завантаження, спробуйте ще раз </p>}

      {isLoading ? (
        <b>Завантаження</b>
      ) : (
        <ContactUl>
          {visibleContacts.map(({ name, phone, id }) => (
            <ContactItem
              key={id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <Contact name={name} phone={phone} id={id} />
            </ContactItem>
          ))}
        </ContactUl>
      )}
    </>
  );
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 11111314).toString(16)}`;
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
};

// 36177215