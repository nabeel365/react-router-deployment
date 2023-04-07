import React, { useContext } from 'react';
import { ScoreContext } from '../Grandpa/Grandpa';

const Friend = ({ring}) => {
    const [score, setScore] = useContext(ScoreContext);
    return (
        <div>
            <h2>Friend</h2>
            {ring && <p><small>Ring: Diamond</small></p>}


            {/* practice */}
            <p>score = {score} </p>
            <button onClick={() => setScore(score + 1)}>Your score</button>
        </div>
    );
};

export default Friend;