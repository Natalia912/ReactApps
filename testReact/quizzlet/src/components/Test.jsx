import React from 'react'
import QuestionBlock from './QuestionBlock'
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'

export default function Test({
  quizData,
  checkAnswersFunc,
  checkAnswers,
  correctAnswers,
}) {
  const questionsEl = quizData.map((quiz) => {
    return (
      <QuestionBlock
        quiz={quiz}
        key={nanoid()}
        id={nanoid()}
        checkAnswers={checkAnswers}
      />
    )
  })

  return (
    <>
      <div className="test-container">
        {questionsEl}
        <div className="results">
          {checkAnswers && (
            <p>{`You scored ${correctAnswers}/5 correct answers`}</p>
          )}
          <button className="check-button" onClick={checkAnswersFunc}>
            {checkAnswers ? 'Play again' : 'Check answers'}
          </button>
        </div>
      </div>
    </>
  )
}
