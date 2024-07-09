import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import formatPhone from '../../../../utils/formatPhone';

import arrowIcon from '../../../../assets/images/icons/arrow.svg';
import editIcon from '../../../../assets/images/icons/edit.svg';
import trashIcon from '../../../../assets/images/icons/trash.svg';

import { Card, CardList, ListFilter } from './styles';

export default function ContactsList({
  filteredContacts,
  orderBy,
  onToggleOrderBy,
  onDeleteContact,
}) {
  return (
    <>
      {filteredContacts.length > 1 && (
        <ListFilter orderBy={orderBy}>
          <button type="button" onClick={onToggleOrderBy}>
            <span>Nome</span>
            <img src={arrowIcon} alt="arrow icon" />
          </button>
        </ListFilter>
      )}

      <CardList>
        {filteredContacts.map((contact) => (
          <Card key={contact.id}>
            <div className="info">
              <div className="contact-name">
                <strong>{contact.name}</strong>
                {contact.category.name && (
                  <small>{contact.category.name}</small>
                )}
              </div>
              <span>{contact.email}</span>
              <span>{formatPhone(contact.phone)}</span>
            </div>
            <div className="actions">
              <Link to={`/edit/${contact.id}`} aria-label="Edit Icon">
                <img
                  src={editIcon}
                  alt="edit icon"
                  title="Editar contato"
                />
              </Link>
              <button
                type="button"
                aria-label="Delete Button"
                onClick={() => onDeleteContact(contact)}
              >
                <img
                  src={trashIcon}
                  alt="delete icon"
                  title="Apagar contato"
                />
              </button>
            </div>
          </Card>
        ))}
      </CardList>
    </>
  );
}

ContactsList.propTypes = {
  filteredContacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
    phone: PropTypes.string,
    category: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }),
  })).isRequired,
  orderBy: PropTypes.string.isRequired,
  onToggleOrderBy: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
