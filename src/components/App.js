// import React from 'react';
import './../index.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';

function App() {
  return (
    <div className="root">
      <div className="page">
        <Header />
        <Main />
        <Footer />
        <PopupWithForm
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
        {/* <div className="popup popup_place_edit-button">
          <div className="popup__content">
            <button className="popup__close" type="button"></button>
            <div className="popup__form-content">
              <h2 className="popup__form-heading">Редактировать профиль</h2>
              <form className="popup__form" name="editForm" novalidate>
                <input id="name-input" className="popup__form-input" type="text" name="name" placeholder="Имя" minlength="2" maxlength="40" required />
                <span className="name-input-error popup__input-error"></span>
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
              <form className="popup__form" name="addForm" novalidate>
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
              <figcaption className="popup__image-title"></figcaption>
            </figure>
          </div>
        </div>
        <div className="popup popup_place_delete-button">
          <div className="popup__content">
            <button className="popup__close" type="button"></button>
            <div className="popup__form-content">
              <h2 className="popup__form-heading">Вы уверены?</h2>
              <form className="popup__form" name="deleteCard" novalidate>
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
