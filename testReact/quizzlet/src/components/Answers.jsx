import React from 'react'

export default function Answers({ quiz, answer, id, checkAnswers, escape }) {
  let checkAnsw = ''

  if (checkAnswers) {
    if (answer === quiz.correct_answer) {
      checkAnsw = 'right-answer'
    } else {
      checkAnsw = 'not-chosen'
    }
    if (
      quiz.current_answer !== quiz.correct_answer &&
      answer === quiz.current_answer
    ) {
      checkAnsw = 'wrong-answer'
    }
  }

  function handleClick() {
    quiz.current_answer = answer
  }

  return (
    <div className="answer">
      <label className={`answer-label ${checkAnsw}`} onClick={handleClick}>
        <input type="radio" name={`answer${id}`} value={answer} />
        {escape(answer)}
      </label>
    </div>
  )
}
