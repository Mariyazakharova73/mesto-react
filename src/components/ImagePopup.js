function ImagePopup(props) {
  return (
      <div className={`popup popup_place_click-image ${props.card.link ? 'popup_opened' : ''}`} >
      <div className="popup__content">
        <button className="popup__close" type="button" onClick={props.onClose}></button>
        <figure className="popup__image-container">
          <img className="popup__image" src={props.card.link}/>
          <figcaption className="popup__image-title">{props.card.name}</figcaption>
        </figure>
      </div>
    </div>
  )
}

export default ImagePopup;