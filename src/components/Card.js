function Card({cardItem, onCardClick }) {
  function handleClick() {
    onCardClick(cardItem);
  }

  return (
    <li className="gallery__card">
      <button className="gallery__button-delete" type="button"/>
      <img className="gallery__card-image" src={cardItem.link} alt={`${cardItem.name}.`} onClick={handleClick} />
      <div className="gallery__card-description">
        <h2 className="gallery__card-heading">{cardItem.name}</h2>
        <div className="button-like__container">
          <button className="button-like" type="button"/>
          <p className="button-like__number">{cardItem.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
