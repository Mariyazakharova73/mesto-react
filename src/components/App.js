import React from 'react';
import './../index.css';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import { api } from '../utils/Api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import { CardContext } from '../contexts/CardContext.js';
import Spinner from './Spinner';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setСurrentUser] = React.useState({});
  // const [cards, setCards] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    api
      .getProfile()
      .then((res) => {
        setСurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });

    // api
    //   .getInitialCards()
    //   .then((res) => {
    //     setCards(res);
    //   })
    //   .catch((err) => {
    //     // setError(err.message);
    //     console.log(err);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
  }, []);

  function handleCardClick(cardData) {
    setSelectedCard(cardData);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  function handleUpdateUser() {
    
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <div className="page">
          <Header />
          {loading ? <Spinner /> : <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCard={handleCardClick} />}
          <Footer />
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
          {/* <PopupWithForm onClose={closeAllPopups} isOpen={isEditProfilePopupOpen} name="edit-button" title="Редактировать профиль" buttonText="Сохранить">
            <input id="name-input" className="popup__form-input" type="text" name="name" placeholder="Имя" minLength="2" maxLength="40" required />
            <span className="name-input-error popup__input-error"></span>
            <input id="job-input" className="popup__form-input" type="text" name="about" placeholder="О себе" minLength="2" maxLength="200" required />
            <span className="job-input-error popup__input-error"></span>
          </PopupWithForm> */}
          <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}/>
          <PopupWithForm onClose={closeAllPopups} isOpen={isAddPlacePopupOpen} name="add-button" title="Новое место" buttonText="Создать">
            <input id="title-input" className="popup__form-input" type="text" name="name" placeholder="Название" minLength="2" maxLength="30" required />
            <span className="title-input-error popup__input-error"></span>
            <input id="link-input" className="popup__form-input" type="url" name="link" placeholder="Ссылка на картинку" required />
            <span className="link-input-error popup__input-error"></span>
          </PopupWithForm>
          <PopupWithForm onClose={closeAllPopups} isOpen={isEditAvatarPopupOpen} name="avatar" title="Обновить аватар" buttonText="Сохранить">
            <input id="link-input-avatar" className="popup__form-input" type="url" name="link" placeholder="Ссылка на картинку" required />
            <span className="link-input-avatar-error popup__input-error"></span>
          </PopupWithForm>
          <PopupWithForm isOpen="" name="delete-button" title="Вы уверены?" buttonText="Да"></PopupWithForm>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
