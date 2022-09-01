import avatar from './../images/profile-avatar.jpg';
import { api } from '../utils/Api.js';
import React from 'react';
import Card from './Card';
import Spinner from './Spinner';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import { CardContext } from '../contexts/CardContext.js';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCard }) {
  // Подписываемся на контекст
  const currentUser = React.useContext(CurrentUserContext);

  // const [userName, setUserName] = React.useState('');
  // const [userDescription, setUserDescription] = React.useState('');
  // const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.addLike(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleCardDelete(card) {
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.deleteCard(card._id).then((newCard) => {
      setCards((state) => state.filter((c) => c !== card));
    });
  }

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

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-wrapper" onClick={onEditAvatar}>
          <img className="profile__avatar" src={currentUser.avatar || avatar} alt="Аватар" />
        </div>
        <div className="profile__info">
          <div className="profile__info-wrapper">
            <h1 className="profile__info-name">{currentUser.name || 'Мария Захарова'}</h1>
            <button className="profile__edit-button" type="button" onClick={onEditProfile} />
          </div>
          <p className="profile__info-job">{currentUser.about || 'Студент'}</p>
        </div>
        <button className="profile__add-buttton" type="button" onClick={onAddPlace} />
      </section>
      <section className="gallery" aria-label="Галерея">
        {loading ? (
          <Spinner />
        ) : (
          <ul className="gallery__cards">
            {cards.map((item) => (
              <CardContext.Provider value={item} key={item._id}>
                <Card onCardClick={onCard} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
              </CardContext.Provider>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}

export default Main;