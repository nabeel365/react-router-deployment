import React, { useContext } from 'react';
import Special from '../Special/Special';
import { ScoreContext } from '../Grandpa/Grandpa';

const MySelf = ({ring}) => {
    const [score, setScore] = useContext(ScoreContext);
// u need to import both name(exported name or context) and useContext


    return (
        <div>
            <h2>MySelf</h2>
            <Special ring={ring}></Special>
            <p>score = {score}</p>
        </div>
    );
};

export default MySelf;