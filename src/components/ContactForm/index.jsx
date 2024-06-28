/* eslint-disable no-console */
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { Input } from '../Input';
import { Select } from '../Select';

import Button from '../Button';
import FormGroup from '../FormGroup';

import useContactForm from './useContactForm';

import { ButtonContainer, Form } from './styles';

const ContactForm = forwardRef(({ buttonLabel, onSubmit }, ref) => {
  const {
    name,
    email,
    phone,
    categoryId,
    categories,
    isLoadingCategories,
    isSubmitting,
    getErrorMessageByFieldName,
    handleNameChange,
    handleEmailChange,
    handlePhoneChange,
    setCategoryId,
    handleSubmit,
    isFormValid,
  } = useContactForm(onSubmit, ref);

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          onChange={handleNameChange}
          value={name}
          type="text"
          placeholder="Nome *"
          error={getErrorMessageByFieldName('name')}
          disabled={isSubmitting}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          onChange={handleEmailChange}
          value={email}
          type="email"
          placeholder="E-mail"
          error={getErrorMessageByFieldName('email')}
          disabled={isSubmitting}
        />
      </FormGroup>

      <FormGroup>
        <Input
          onChange={handlePhoneChange}
          maxLength={15}
          value={phone}
          type="text"
          placeholder="Telefone"
          disabled={isSubmitting}
        />
      </FormGroup>

      <FormGroup isLoading={isLoadingCategories}>
        <Select
          onChange={(e) => setCategoryId(e.target.value)}
          value={categoryId}
          disabled={isLoadingCategories || isSubmitting}
        >
          <option key="noCategory" value="">Sem Categoria</option>
          {/* <option key="newCategory" value="new" onClick={}>Criar nova categoria</option> */}
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit" disabled={!isFormValid} isLoading={isSubmitting}>
          {buttonLabel}
        </Button>
      </ButtonContainer>

    </Form>
  );
});

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
