import React from 'react';
import './../index.css';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Main from './Main';
import PopupWithForm from './PopupWithForm';

function App() {
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setselectedCard] = React.useState({});

  function handleCardClick(cardData) {
    setselectedCard(cardData);
  }

  function handleEditProfileClick() {
    setisEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setisAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setisEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setisEditProfilePopupOpen(false);
    setisAddPlacePopupOpen(false);
    setisEditAvatarPopupOpen(false);
    setselectedCard({});
  }

  return (
    <div className="root">
      <div className="page">
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCard={handleCardClick} />
        <Footer />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <PopupWithForm
          onClose={closeAllPopups}
          isOpen={isEditProfilePopupOpen}
          name="edit-button"
          title="Редактировать профиль"
          children={
            <>
              <input id="name-input" className="popup__form-input" type="text" name="name" placeholder="Имя" minLength="2" maxLength="40" required />
              <span className="name-input-error popup__input-error"></span>
              <input id="job-input" className="popup__form-input" type="text" name="about" placeholder="О себе" minLength="2" maxLength="200" required />
              <span className="job-input-error popup__input-error"></span>
              <button className="popup__form-button" type="submit">
                Сохранить
              </button>
            </>
          }
        />
        <PopupWithForm
          onClose={closeAllPopups}
          isOpen={isAddPlacePopupOpen}
          name="add-button"
          title="Новое место"
          children={
            <>
              <input id="title-input" className="popup__form-input" type="text" name="name" placeholder="Название" minLength="2" maxLength="30" required />
              <span className="title-input-error popup__input-error"></span>
              <input id="link-input" className="popup__form-input" type="url" name="link" placeholder="Ссылка на картинку" required />
              <span className="link-input-error popup__input-error"></span>
              <button className="popup__form-button" type="submit">
                Создать
              </button>
            </>
          }
        />
        <PopupWithForm
          onClose={closeAllPopups}
          isOpen={isEditAvatarPopupOpen}
          name="avatar"
          title="Обновить аватар"
          children={
            <>
              <input id="link-input-avatar" className="popup__form-input" type="url" name="link" placeholder="Ссылка на картинку" required />
              <span className="link-input-avatar-error popup__input-error"></span>
              <button className="popup__form-button" type="submit">
                Сохранить
              </button>
            </>
          }
        />
        <PopupWithForm
          isOpen=""
          name="delete-button"
          title="Вы уверены?"
          children={
            <>
              <button className="popup__form-button" type="submit">
                Да
              </button>
            </>
          }
        />
      </div>
    </div>
  );
}

export default App;
