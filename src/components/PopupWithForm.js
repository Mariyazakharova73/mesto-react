function PopupWithForm(props) {
  return (
    <div className={`popup popup_place_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
    <div className="popup__content">
      <button className="popup__close" type="button" onClick={props.onClose}></button>
      <div className="popup__form-content">
        <h2 className="popup__form-heading">{props.title}</h2>
        <form className="popup__form" name={props.name} novalidate>
       {props.children}
        </form>
      </div>
    </div>
  </div>
  )
}

export default PopupWithForm;