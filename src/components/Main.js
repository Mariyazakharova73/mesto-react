import avatar from './../images/profile-avatar.jpg';
import { api } from '../utils/Api.js';
import React from 'react';
import Card from './Card';

function Main({onEditAvatar, onEditProfile, onAddPlace, onCard}) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getProfile()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => {
        console.log(err);
      });

    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-wrapper" onClick={onEditAvatar}>
          <img className="profile__avatar" src={userAvatar || avatar} alt="Аватар" />
        </div>
        <div className="profile__info">
          <div className="profile__info-wrapper">
            <h1 className="profile__info-name">{userName || 'Мария Захарова'}</h1>
            <button className="profile__edit-button" type="button" onClick={onEditProfile}/>
          </div>
          <p className="profile__info-job">{userDescription || 'Студент'}</p>
        </div>
        <button className="profile__add-buttton" type="button" onClick={onAddPlace}/>
      </section>
      <section className="gallery" aria-label="Галерея">
        <ul className="gallery__cards">
          {cards.map((item) => (
            <Card key={item._id} cardItem={item} onCardClick={onCard} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
