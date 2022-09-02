import React from 'react';
import PopupWithForm from './PopupWithForm';
import { ButtonContext } from '../contexts/ButtonContext.js';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const buttonText = React.useContext(ButtonContext);
  const newLink = React.useRef(); // записываем объект, возвращаемый хуком, в переменную

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar(newLink.current.value);
  }

  return (
    <PopupWithForm onSubmit={handleSubmit} onClose={onClose} isOpen={isOpen} name="avatar" title="Обновить аватар" buttonText={buttonText}>
      <input ref={newLink} id="link-input-avatar" className="popup__form-input" type="url" name="link" placeholder="Ссылка на картинку" required />
      <span className="link-input-avatar-error popup__input-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
