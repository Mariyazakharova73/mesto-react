import avatar from './../images/profile-avatar.jpg';
import { api } from '../utils/Api.js';
import React from 'react';

function Main(props) {
  const [userName, setuserName] = React.useState('');
  const [userDescription, setuserDescription] = React.useState('');
  const [userAvatar, setuserAvatar] = React.useState();

  React.useEffect(() => {
    api
    .getProfile()
    .then((res) => {
      setuserName(res.name)
      setuserDescription(res.about)
      setuserAvatar(res.avatar)
    })
    .catch((err) => {
      console.log(err);
    })
  });


  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-wrapper" onClick={props.onEditAvatar}>
          <img className="profile__avatar" src={userAvatar || avatar} alt="Аватар" />
        </div>
        <div className="profile__info">
          <div className="profile__info-wrapper">
            <h1 className="profile__info-name">{userName || 'Мария Захарова'}</h1>
            <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__info-job">{userDescription || 'Студент'}</p>
        </div>
        <button className="profile__add-buttton" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="gallery" aria-label="Галерея">
        <ul className="gallery__cards"></ul>
      </section>
    </main>
  );
}

export default Main;
