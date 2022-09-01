import avatar from './../images/profile-avatar.jpg';
import { api } from '../utils/Api.js';
import React from 'react';
import Card from './Card';
import Spinner from './Spinner';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCard }) {
  // Подписываемся на контекст
  const currentUser = React.useContext(CurrentUserContext);

  // const [userName, setUserName] = React.useState('');
  // const [userDescription, setUserDescription] = React.useState('');
  // const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  // const [err, setError] = React.useState('');

  React.useEffect(() => {
    setLoading(true);
    // api
    //   .getProfile()
    //   .then((res) => {
    //     setUserName(res.name);
    //     setUserDescription(res.about);
    //     setUserAvatar(res.avatar);
    //   })
    //   .catch((err) => {
    //     // setError(err.message);
    //     console.log(err);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });

    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        // setError(err.message);
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // if (err) {
  //   return <h1>ERROR:{err}</h1>;
  // }

  return (
    <main className="content">
      {loading ? (
        <Spinner />
      ) : (
        <>
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
            <ul className="gallery__cards">
              {cards.map((item) => (
                <Card key={item._id} cardItem={item} onCardClick={onCard} />
              ))}
            </ul>
          </section>
        </>
      )}
    </main>
  );
}

export default Main;
