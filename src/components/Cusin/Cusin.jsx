import React, { useContext } from 'react';
import Friend from '../Friend/Friend';
import { GetApple } from '../Grandpa/Grandpa';

const Cusin = ({children, hasFriend, ring}) => {
    // step 4 .. useContext and write name which u have exported inside useContext..
    const fruit = useContext(GetApple)
    return (
        <div>
            <h2>Cousin</h2>
            <p><small>{children}</small></p>
            { hasFriend && <Friend ring={ring}></Friend>}


            {/* step 5 show the exported data */}
            <p> {fruit} </p>
        </div>
    );
};

export default Cusin;