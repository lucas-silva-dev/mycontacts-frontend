/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-nested-ternary */
import {
  useEffect, useState, useMemo, useCallback,
} from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  InputSearchContainer,
  Header,
  ListFilter,
  CardList,
  Card,
  ErrorContainer,
  EmptyListContainer,
  SearchNotFoundContainer,
} from './styles';

import Modal from '../../components/Modal';
import Loader from '../../components/Loader';
import Button from '../../components/Button';

import formatPhone from '../../utils/formatPhone';
import ContactsService from '../../services/ContactsService';

import arrowIcon from '../../assets/images/icons/arrow.svg';
import editIcon from '../../assets/images/icons/edit.svg';
import trashIcon from '../../assets/images/icons/trash.svg';
import sadImg from '../../assets/images/sad.svg';
import emptyBox from '../../assets/images/empty-box.svg';
import magnifierQuestion from '../../assets/images/magnifier-question.svg';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [contactId, setContactId] = useState('');
  const [hasError, setHasError] = useState(false);

  const filteredContacts = useMemo(
    () => contacts.filter((contact) => (
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    )),
    [contacts, searchTerm],
  );

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true);

      const contactsList = await ContactsService.listContacts(orderBy);

      setHasError(false);
      setContacts(contactsList);
    } catch (error) {
      // eslint-disable-next-line
      console.error(error.response);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  const handleToggleOrderBy = () => {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  };

  const handleChangeSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDeleteContact = (id) => {
    setIsVisible(true);
    setContactId(id);
  };

  const handleTryAgain = () => {
    loadContacts();
  };

  return (
    <Container>
      <Loader isLoading={isLoading} />
      <Modal danger id={contactId} isVisible={isVisible} />

      {contacts.length > 0 && (
        <InputSearchContainer>
          <input
            type="text"
            placeholder="Pesquisar contato"
            value={searchTerm}
            onChange={handleChangeSearchTerm}
          />
        </InputSearchContainer>
      )}

      <Header
        justifyContent={
          hasError
            ? 'flex-end'
            : contacts.length > 0
              ? 'space-between'
              : 'center'
        }
      >
        {!hasError && contacts.length > 0 && (
          <strong>
            {filteredContacts.length}
            {filteredContacts.length === 1 ? ' contato' : ' contatos'}
          </strong>
        )}
        <Link to="/new">Novo contato</Link>
      </Header>

      {hasError && (
        <ErrorContainer>
          <img src={sadImg} alt="sad" />
          <div className="details">
            <strong>Ocorreu um erro ao obter os seus contatos!</strong>

            <Button type="button" onClick={handleTryAgain}>
              Tentar novamente
            </Button>
          </div>
        </ErrorContainer>
      )}

      {!hasError && (
        <>
          {(contacts.length < 1 && !isLoading) && (
            <EmptyListContainer>
              <img src={emptyBox} alt="Empty box" />

              <p>
                Você ainda não tem nenhum contato cadastrado!
                Clique no botão <strong>&ldquo;Novo contato&rdquo;</strong> à cima para
                cadastrar o seu primeiro!
              </p>
            </EmptyListContainer>
          )}

          {(contacts.length > 0 && filteredContacts.length < 1) && (
            <SearchNotFoundContainer>
              <img src={magnifierQuestion} alt="Magnifier Question" />
              <span>
                Nenhum resultado foi encontrado para
                <strong> &ldquo;{searchTerm}&rdquo;</strong>
              </span>
            </SearchNotFoundContainer>
          )}

          {filteredContacts.length > 1 && (
            <ListFilter orderBy={orderBy}>
              <button type="button" onClick={handleToggleOrderBy}>
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
                    {contact.category_name && (
                      <small>{contact.category_name}</small>
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
                    onClick={() => handleDeleteContact(contact.id)}
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
      )}
    </Container>
  );
}
