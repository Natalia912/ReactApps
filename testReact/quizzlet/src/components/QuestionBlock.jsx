import React from 'react'
import Answers from './Answers'
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'

export default function QuestionBlock({ quiz, id, checkAnswers }) {
  // function to replace escape characters
  function escape(htmlStr) {
    return htmlStr
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
      .replace(/&ouml;/g, 'ö')
      .replace(/&iacute;/g, 'í')
      .replace(/&amp;/g, '&')
  }

  const answersEl = quiz.options.map((answer) => (
    <Answers
      quiz={quiz}
      answer={answer}
      key={nanoid()}
      id={id}
      checkAnswers={checkAnswers}
      escape={escape}
    />
  ))

  return (
    <div>
      <div className="question-container">
        <h3 className="question">{escape(quiz.question)}</h3>
        <div className="answers">{answersEl}</div>
      </div>
      <hr />
    </div>
  )
}
