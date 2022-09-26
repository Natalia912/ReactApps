function Start(props) {
  return (
    <>
      <div className="container start-container">
        <h1 className="start__title">Quizzlet</h1>
        <p className="start__description">Take a quiz to test yourself!</p>
        <button className="start__button" onClick={props.startClick}>
          Start quiz
        </button>
      </div>
    </>
  )
}

export default Start
