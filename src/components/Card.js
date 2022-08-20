function Card(props) {

  function handleClick() {
    props.onCardClick(props.cardItem);
  }  
  return (
    <li className="gallery__card">
    <button className="gallery__button-delete" type="button"></button>
    <img className="gallery__card-image" src={props.cardItem.link} alt={props.cardItem.name} onClick={handleClick}/>
    <div className="gallery__card-description">
      <h2 className="gallery__card-heading">{props.cardItem.name}</h2>
      <div className="button-like__container">
        <button className="button-like" type="submit"></button>
        <p className="button-like__number">{props.cardItem.likes.length}</p>
      </div>
    </div>
  </li>
  )
}

export default Card;