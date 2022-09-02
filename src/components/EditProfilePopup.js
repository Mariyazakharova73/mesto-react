import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import { ButtonContext } from '../contexts/ButtonContext.js';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);
  const buttonText = React.useContext(ButtonContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleName(evt) {
    setName(evt.target.value);
  }

  function handleDescription(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser(name, description);
    setDescription('');
    setName('');
  }

  return (
    <PopupWithForm onSubmit={handleSubmit} onClose={onClose} isOpen={isOpen} name="edit-button" title="Редактировать профиль" buttonText={buttonText}>
      <input value={name || ''} onChange={handleName} id="name-input" className="popup__form-input" type="text" name="name" placeholder="Имя" minLength="2" maxLength="40" required />
      <span className="name-input-error popup__input-error"></span>
      <input value={description || ''} onChange={handleDescription} id="job-input" className="popup__form-input" type="text" name="about" placeholder="О себе" minLength="2" maxLength="200" required />
      <span className="job-input-error popup__input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
