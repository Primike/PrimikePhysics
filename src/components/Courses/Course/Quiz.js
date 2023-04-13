import { useState, useEffect } from 'react';

function Quiz({quizquestions, usercourse}) {

    const questions = quizquestions.map((question) => {
        return {questionText: `${question.question}`,
                answerOptions: question.quiz_answers.map((x) => (
                    {answerText: `${x.answer}`, isCorrect: x.correct}
                ))}
    })

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}		
	};

	return (
		<div className='quiz'>
            {showScore ? 
                <h1>
                    You scored {score} out of {questions.length}
                    {score === 3 ? 
                        <>
                            <p >You passed the course!</p>
                            <img src ="https://media.tenor.com/-zRUM3RMM64AAAAM/big-chungus.gif" alt="bigchungus"/>
                        </>
                        :
                        <>
                            <p >Keep Studying!</p>
                            <img src ="https://i.imgflip.com/31ihns.jpg" alt="bigchungus"/>
                        </>
                    }
                </h1>
                : 
                <div>
                    <div>
                        <div>
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div>{questions[currentQuestion].questionText}</div>
                    </div>
                    <div>
                        {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                            <button key = {`${index}+${answerOption}`} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{index+1}. {answerOption.answerText}</button>
                        ))}
                    </div>
                </div>
            }
		</div>
	);
}

export default Quiz