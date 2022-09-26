import React from 'react'
import './App.css'

import Start from './components/Start'
import Test from './components/Test'

function App() {
  const [startQuiz, setStartQuiz] = React.useState(false)
  const [quizData, setQuizData] = React.useState([])
  const [newQuiz, setNewQuiz] = React.useState(false)
  const [checkAnswers, setCheckAnswers] = React.useState(false)
  const [correctAnswers, setCorrectAnswers] = React.useState(0)

  const checkAnswersFunc = () => {
    setCheckAnswers((oldState) => !oldState)
    if (checkAnswers) {
      setNewQuiz((oldState) => !oldState)
    }
  }

  function startClick() {
    setStartQuiz(true)
  }
  React.useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5')
      .then((res) => res.json())
      .then((data) =>
        setQuizData(() =>
          data.results.map((el) => ({
            question: el.question,
            options: el.incorrect_answers
              .concat([el.correct_answer])
              .sort(() => 0.5 - Math.random()),
            correct_answer: el.correct_answer,
            current_answer: null,
          }))
        )
      )
  }, [newQuiz])

  React.useEffect(() => {
    for (let i = 0; i < quizData.length; i++)
      if (
        quizData[i].current_answer === quizData[i].correct_answer &&
        quizData[i].current_answer !== null
      ) {
        setCorrectAnswers((old) => old + 1)
      }
  }, [checkAnswers])

  React.useEffect(() => {
    setCorrectAnswers(0)
  }, [newQuiz])
  return (
    <div className="app-container">
      {!startQuiz ? (
        <Start startClick={startClick} />
      ) : (
        <Test
          quizData={quizData}
          checkAnswersFunc={checkAnswersFunc}
          checkAnswers={checkAnswers}
          correctAnswers={correctAnswers}
        />
      )}
    </div>
  )
}
export default App
