import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css';

export const RingContext = createContext('gold');
export const MoneyContext = createContext(0);

// step 3 .. export
export const GetApple = createContext('apple');

    // practice
    export const ScoreContext = createContext(0);

    

const Grandpa = () => {
    const ring = 'diamond';
    const [money, setMoney] = useState(0)

    // step 1
    const GetApple = createContext('apple');

    // practice
    const [score, setScore] = useState(0);

    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <p>Has Money: {money}</p>

            {/* practice */}
            <p>scrore {score} </p>

            {/* step 2..  put previous content inside it */} 
            {/* sent to cusin ... step 4 */}

            {/* practice */}
            <ScoreContext.Provider value={[score, setScore]}>
            <GetApple.Provider value='Apple is Red'>
                <MoneyContext.Provider value={[money, setMoney]}>
                    <RingContext.Provider value='golden Ring'>
                        <section className='flex'>
                            <Father ring={ring}></Father>
                            <Uncle></Uncle>
                            <Aunty ring={ring}></Aunty>
                        </section>
                    </RingContext.Provider>
                </MoneyContext.Provider>
            </GetApple.Provider>
            </ScoreContext.Provider>


        </div>
    );
};

export default Grandpa;


/**
 * 1. create context and export 
 * 2. Create a provider and pass a value 
 * 3. use useContext to receive 
 * */ 