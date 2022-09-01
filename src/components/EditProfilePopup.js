function EditProfilePopup({ isOpen, onClose }) {
  return (
    <div className={`popup popup_place_edit-button ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__content">
        <button className="popup__close" type="button" onClick={onClose} />
        <div className="popup__form-content">
          <h2 className="popup__form-heading">Редактировать профиль</h2>
          <form className="popup__form" name="edit-button">
            <input id="name-input" className="popup__form-input" type="text" name="name" placeholder="Имя" minLength="2" maxLength="40" required />
            <span className="name-input-error popup__input-error"></span>
            <input id="job-input" className="popup__form-input" type="text" name="about" placeholder="О себе" minLength="2" maxLength="200" required />
            <span className="job-input-error popup__input-error"></span>
            <button className="popup__form-button" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProfilePopup;
