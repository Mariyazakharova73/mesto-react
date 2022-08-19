import avatar from './../images/profile-avatar.jpg';

function Main(props) {
  const [userName, setuserName] = React.useState();
  const [userDescription, setuserDescription] = React.useState();
  const [userAvatar, setuserAvatar] = React.useState();

  return (
    <main className="content">
    <section className="profile">
      <div className="profile__avatar-wrapper" onClick={props.onEditAvatar}>
        <img className="profile__avatar" src={avatar} alt="Аватар" />
      </div>
      <div className="profile__info">
        <div className="profile__info-wrapper">
          <h1 className="profile__info-name">Мария Захарова</h1>
          <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
        </div>
        <p className="profile__info-job">Студент</p>
      </div>
      <button className="profile__add-buttton" type="button" onClick={props.onAddPlace}></button>
    </section>
    <section className="gallery" aria-label="Галерея">
      <ul className="gallery__cards"></ul>
    </section>
  </main>
  )
}

export default Main;