import React from 'react';
import questions from './questions';
import question from './question.css';
import Option from './Option';

const Question = () => {
    let score = 0;
    const [questionNumber, setQuestionNumber] = React.useState(0);
    const [questionDescripiton, setQuestionDescription] = React.useState(questions[questionNumber].question)
    const answers = questions[questionNumber].answers;
    const buttonAnswers = answers.map(answer => {
        return <Option 
            handleClick={handleClick}
            text={answer.answerText}
            idx={answers.indexOf(answer)}
            name={answer.answerText}
        />
    })



    function handleClick(event) {
        const { name } = event.target;
        const idx = Number(name);
        if (questions[questionNumber].answers[idx].isCorrect) {
            alert("Correct answer!");
            score++;
        } else {
            alert("Incorrect answer!");
        }


        setQuestionNumber(prevNumber => prevNumber + 1);
        setQuestionDescription(questions[questionNumber + 1].question);
    }

    return (
        (questionNumber < questions.length) ? 
        <div className='question--container'>
            <div className='question--description'>
                <h2>Question {questionNumber + 1}/{questions.length}</h2>
                <p>{questionDescripiton}</p>
            </div>

            <div className='question--options'>
                {buttonAnswers}
            </div>
        </div>
        :
        <div className='question--container'>
            <h2>Your score is: {score}</h2>
        </div>
    )
}

export default Question
