import QuizCompletedImg from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.js';

function calculatePercentage(value, total) {
    return Math.round((value / total) * 100);
}

export default function Summary({userAnswers}) {
    const skippedAnswers = userAnswers.filter((answer) => answer === null);
    const correctAnswers = userAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0]);

    const totalQuestions = userAnswers.length;
    const skippedAnswersPercentage = calculatePercentage(skippedAnswers.length, totalQuestions);
    const correctAnswersPercentage = calculatePercentage(correctAnswers.length, totalQuestions);
    const wrongAnswersPercentage = 100 - skippedAnswersPercentage - correctAnswersPercentage;


    return (
    <div id="summary">
        <img src={QuizCompletedImg} alt="" />
        <h2>Quiz completed</h2>
        <div id='summary-stats'>
            <p>
                <span className='number'>{skippedAnswersPercentage}%</span>
                <span className='text'>Skipped</span>
            </p>
            <p>
                <span className='number'>{correctAnswersPercentage}%</span>
                <span className='text'>answered correctly</span>
            </p>
            <p>
                <span className='number'>{wrongAnswersPercentage}%</span>
                <span className='text'>answered incorrectly</span>
            </p>
        </div>
        <ul>
            {userAnswers.map((answer, index) => {
                let cssClass = 'user-answer';
                if(answer === null) {
                    cssClass += ' skipped';
                } else if(answer === QUESTIONS[index].answers[0]) {
                    cssClass += ' correct';
                } else {
                    cssClass += ' wrong';
                }

                return (
            <li key={index}>
                <h3>{index + 1}</h3>
                <p className='question'>{QUESTIONS[index].text}</p>
                <p className={cssClass}>{answer ?? 'Skipped'}</p>
            </li>
                )
            })}
        </ul>
    </div>
    )
}