import React from 'react';
import './../index.css';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
// import renderAll from '../index.js';

//переменные состояния, отвечающие за видимость трёх попапов
// let isEditProfilePopupOpen = false;
// let isAddPlacePopupOpen = false;
// let isEditAvatarPopupOpen = false;

// function handleEditProfileClick() {
//   isEditProfilePopupOpen = true;
//   renderAll();
// }

// function handleAddPlaceClick() {
//   isAddPlacePopupOpen = true;
//   renderAll();
// }

// function handleEditAvatarClick() {
//   isEditAvatarPopupOpen = true;
//   renderAll();
// }

// function closeAllPopups() {
//   isEditProfilePopupOpen = false;
//   isAddPlacePopupOpen = false;
//   isEditAvatarPopupOpen = false;
//   renderAll();
// }

function App(props) {
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = React.useState(false);

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
  }

  return (
    <div className="root">
      <div className="page">
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
        <Footer />
        <ImagePopup />
        <PopupWithForm
          onClose={closeAllPopups}
          isOpen={isEditProfilePopupOpen}
          name="edit-button"
          title="Редактировать профиль"
          children={
            <>
              <input id="name-input" className="popup__form-input" type="text" name="name" placeholder="Имя" minlength="2" maxlength="40" required />
              <span className="name-input-error popup__input-error"></span>
              <input id="job-input" className="popup__form-input" type="text" name="about" placeholder="О себе" minlength="2" maxlength="200" required />
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
              <input id="title-input" className="popup__form-input" type="text" name="name" placeholder="Название" minlength="2" maxlength="30" required />
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
      <template id="card" className="card-template">
        <li className="gallery__card">
          <button className="gallery__button-delete gallery__button-delete_hidden" type="button"></button>
          <img className="gallery__card-image" />
          <div className="gallery__card-description">
            <h2 className="gallery__card-heading"></h2>
            <div className="button-like__container">
              <button className="button-like" type="submit"></button>
              <p className="button-like__number"></p>
            </div>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;
