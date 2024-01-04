import React from 'react';
import { Link, useParams } from 'react-router-dom';

function Survey() {
    const { questionNumber } = useParams();
    const questionNumberInt = parseInt(questionNumber);
    const previousQuesionNumber =
        questionNumberInt === 1 ? 1 : questionNumberInt - 1;
    const nextQuestionNumber = questionNumberInt + 1;
    return (
        <div>
            <h1>Questionnaire 🧮</h1>
            <p>Question {questionNumber}</p>
            <Link to={`/survey/${previousQuesionNumber}`}> Précédent </Link>
            {questionNumberInt === 10 ? (
                <Link to="/results">Résultats</Link>
            ) : (
                <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
            )}
        </div>
    );
}

export default Survey;
