import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Card({ cardItem, onCardClick }) {
  function handleClick() {
    onCardClick(cardItem);
  }
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = cardItem.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `gallery__button-delete ${isOwn ? '' : 'gallery__button-delete_hidden'}`;

// Определяем, есть ли у карточки лайк, поставленный текущим пользователем
const isLiked = cardItem.likes.some(i => i._id === currentUser._id);

// Создаём переменную, которую после зададим в `className` для кнопки лайка
const cardLikeButtonClassName = `button-like ${isLiked ? 'button-like_active' : ''}`;


  return (
    <li className="gallery__card">
      <button className={cardDeleteButtonClassName} type="button" />
      <img className="gallery__card-image" src={cardItem.link} alt={`${cardItem.name}.`} onClick={handleClick} />
      <div className="gallery__card-description">
        <h2 className="gallery__card-heading">{cardItem.name}</h2>
        <div className="button-like__container">
          <button className={cardLikeButtonClassName} type="button" />
          <p className="button-like__number">{cardItem.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
