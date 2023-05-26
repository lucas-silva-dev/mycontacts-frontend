import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { Container } from './styles';

import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';
import Loader from '../../components/Loader';

import ContactsService from '../../services/ContactsService';

export default function EditContact() {
  const { id } = useParams();
  const [contact, setContact] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const contactsList = await ContactsService.showContact(id);

        setContact(contactsList);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        Error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);

  return (
    <>
      <Loader isLoading={isLoading} />
      <PageHeader title={`Editar ${contact.name}`} />
      <ContactForm buttonLabel="Salvar alterações" />
    </>
  );
}
