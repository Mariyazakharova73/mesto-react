import avatar from './../images/profile-avatar.jpg';

function handleEditAvatarClick() {
  const popupAvatar = document.querySelector('.popup_place_avatar');
  popupAvatar.classList.add('popup_opened');
  console.log('аватар');
}

function handleEditProfileClick() {
  const popupProfile = document.querySelector('.popup_place_edit-button');
  popupProfile.classList.add('popup_opened');
  console.log('профиль');
}

function handleAddPlaceClick() {
  const popupCard = document.querySelector('.popup_place_add-button');
  popupCard.classList.add('popup_opened');
  console.log('добавить карточку');
}

function Main() {
  return (
    <main className="content">
    <section className="profile">
      <div className="profile__avatar-wrapper" onClick={handleEditAvatarClick}>
        <img className="profile__avatar" src={avatar} alt="Аватар" />
      </div>
      <div className="profile__info">
        <div className="profile__info-wrapper">
          <h1 className="profile__info-name">Мария Захарова</h1>
          <button className="profile__edit-button" type="button" onClick={handleEditProfileClick}></button>
        </div>
        <p className="profile__info-job">Студент</p>
      </div>
      <button className="profile__add-buttton" type="button" onClick={handleAddPlaceClick}></button>
    </section>
    <section className="gallery" aria-label="Галерея">
      <ul className="gallery__cards"></ul>
    </section>
  </main>
  )
}

export default Main;