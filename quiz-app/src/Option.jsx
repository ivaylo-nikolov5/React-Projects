import React from 'react'
import questions from './questions'
import "./question.css"

const Option = (props) => {
  return (
    <div>
        <button
            className='option'
            name={props.idx}
            onClick={props.handleClick} 
        >{props.text}</button>
    </div>
  )
}

export default Option
