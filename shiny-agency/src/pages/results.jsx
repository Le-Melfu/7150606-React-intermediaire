import React from 'react';
import { useParams } from 'react-router-dom';

function Results() {
    const result = useParams;
    return (
        <div>
            <h1>Résultats</h1>
            <p>{result}</p>
        </div>
    );
}

export default Results;
