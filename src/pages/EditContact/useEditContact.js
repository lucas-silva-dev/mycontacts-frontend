import { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import useSafeAsyncAction from '../../hooks/useSafeAsyncAction';
import ContactsService from '../../services/ContactsService';
import toast from '../../utils/toast';

export default function useEditContact() {
  const contactFormRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  // const [isCategoryModalVisible, setIsCategoryModalVisible] = useState(false);
  // const [isLoadingCreateCategory, setIsLoadingCreateCategory] = useState(false);
  const [contactName, setContactName] = useState('');

  const { id } = useParams();
  const history = useHistory();

  const safeAsyncAction = useSafeAsyncAction();

  const handleSubmit = async (contact) => {
    try {
      const contactData = await ContactsService.updateContact(id, contact);

      setContactName(contactData.name);

      toast({
        type: 'success',
        text: 'Contato editado com sucesso!',
        duration: 3000,
      });
    } catch (err) {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao editar o contato!',
      });
    }
  };

  useEffect(() => {
    const controller = new AbortController();

    async function loadContact() {
      try {
        const contactData = await ContactsService.getContactById(id, controller.signal);

        safeAsyncAction(() => {
          contactFormRef.current.setFieldsValues(contactData);
          setContactName(contactData.name);
          setIsLoading(false);
        });
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') {
          return;
        }

        safeAsyncAction(() => {
          history.push('/');

          toast({
            type: 'danger',
            text: 'Contato não encontrado!',
          });
        });
      }
    }

    loadContact();

    return () => {
      controller.abort();
    };
  }, [id, history, safeAsyncAction]);

  return {
    isLoading,
    contactName,
    contactFormRef,
    handleSubmit,
  };
}
