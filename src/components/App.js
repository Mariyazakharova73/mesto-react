import React from 'react';
import './../index.css';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import { api } from '../utils/Api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import { ButtonContext } from '../contexts/ButtonContext.js';
import Spinner from './Spinner';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setСurrentUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [buttonText, setButtonText] = React.useState('Сохранить');
  const [cards, setCards] = React.useState([]);

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
  }, []);

  React.useEffect(() => {
    setLoading(true);
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    if (isLiked) {
      api.deleteLike(card._id).then((newCard) => {
        setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
      });
    } else {
      api.addLike(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
      });
    }
  }

  function handleCardDelete(card) {
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.deleteCard(card._id).then((newCard) => {
      setCards((state) => state.filter((c) => c !== card));
    });
  }

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

  function handleUpdateUser(name, about) {
    setButtonText('Сохранение');
    api
      .sendProfile(name, about)
      .then((res) => {
        setСurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setButtonText('Сохранить');
      });
  }

  function handleUpdateAvatar(link) {
    setButtonText('Сохранение');
    api
      .sendAvatar(link)
      .then((res) => {
        setСurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setButtonText('Сохранить');
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <div className="page">
          <Header />
          {loading ? <Spinner /> : <Main cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCard={handleCardClick} />}
          <Footer />
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
          <ButtonContext.Provider value={buttonText}>
            <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
            <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
            <PopupWithForm onClose={closeAllPopups} isOpen={isAddPlacePopupOpen} name="add-button" title="Новое место" buttonText="Создать">
              <input id="title-input" className="popup__form-input" type="text" name="name" placeholder="Название" minLength="2" maxLength="30" required />
              <span className="title-input-error popup__input-error"></span>
              <input id="link-input" className="popup__form-input" type="url" name="link" placeholder="Ссылка на картинку" required />
              <span className="link-input-error popup__input-error"></span>
            </PopupWithForm>
            <PopupWithForm isOpen="" name="delete-button" title="Вы уверены?" buttonText="Да"></PopupWithForm>
          </ButtonContext.Provider>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
