import logo from './images/header-logo.svg';
import avatar from './images/profile-avatar.jpg';
import React from 'react';
import './index.css';

function App() {
  return (
    <div className="root">
      <div className="page">
        <header className="header">
          <img className="header__logo" src={logo} alt="Логотип" />
        </header>
        <main className="content">
          <section className="profile">
            <div className="profile__avatar-wrapper">
              <img className="profile__avatar" src={avatar} alt="Аватар" />
            </div>
            <div className="profile__info">
              <div className="profile__info-wrapper">
                <h1 className="profile__info-name">Мария Захарова</h1>
                <button className="profile__edit-button" type="button"></button>
              </div>
              <p className="profile__info-job">Студент</p>
            </div>
            <button className="profile__add-buttton" type="button"></button>
          </section>
          <section className="gallery" aria-label="Галерея">
            <ul className="gallery__cards"></ul>
          </section>
        </main>
        <footer className="footer">
          <p className="footer__copyright">© 2022 Mesto Russia</p>
        </footer>
        {/* <div className="popup popup_place_edit-button">
          <div className="popup__content">
            <button className="popup__close" type="button"></button>
            <div className="popup__form-content">
              <h2 className="popup__form-heading">Редактировать профиль</h2>
              <form className="popup__form" name="editForm" novalidate>
                <input id="name-input" className="popup__form-input" type="text" name="name" placeholder="Имя" minlength="2" maxlength="40" required />
                <span class="name-input-error popup__input-error"></span>
                <input id="job-input" className="popup__form-input" type="text" name="about" placeholder="О себе" minlength="2" maxlength="200" required />
                <span className="job-input-error popup__input-error"></span>
                <button className="popup__form-button" type="submit">
                  Сохранить
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="popup popup_place_add-button">
          <div className="popup__content">
            <button className="popup__close" type="button"></button>
            <div className="popup__form-content">
              <h2 className="popup__form-heading">Новое место</h2>
              <form classclassName="popup__form" name="addForm" novalidate>
                <input id="title-input" className="popup__form-input" type="text" name="name" placeholder="Название" minlength="2" maxlength="30" required />
                <span className="title-input-error popup__input-error"></span>
                <input id="link-input" className="popup__form-input" type="url" name="link" placeholder="Ссылка на картинку" required />
                <span className="link-input-error popup__input-error"></span>
                <button className="popup__form-button" type="submit">
                  Создать
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="popup popup_place_click-image">
          <div className="popup__content">
            <button className="popup__close" type="button"></button>
            <figure className="popup__image-container">
              <img className="popup__image" src="#" />
              <figcaption class="popup__image-title"></figcaption>
            </figure>
          </div>
        </div>
        <div className="popup popup_place_delete-button">
          <div className="popup__content">
            <button class="popup__close" type="button"></button>
            <div className="popup__form-content">
              <h2 className="popup__form-heading">Вы уверены?</h2>
              <form clasNames="popup__form" name="deleteCard" novalidate>
                <button className="popup__form-button" type="submit">
                  Да
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="popup popup_place_avatar">
          <div className="popup__content">
            <button className="popup__close" type="button"></button>
            <div className="popup__form-content">
              <h2 className="popup__form-heading">Обновить аватар</h2>
              <form className="popup__form" name="editAvatarForm" novalidate>
                <input id="link-input-avatar" className="popup__form-input" type="url" name="link" placeholder="Ссылка на картинку" required />
                <span className="link-input-avatar-error popup__input-error"></span>
                <button className="popup__form-button" type="submit">
                  Сохранить
                </button>
              </form>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;

/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
