import React from 'react';
import './Cart.css'

const Cart = ({cart, removeFromCart}) => {

    // 1
    let msg;
    if(cart.length === 0){
        msg = <p>add some products</p>
    }
    else{
        msg = <p> thanks for ur money</p>
    }
    return (
        <div>
            <h1 className={cart.length === 1 ? 'blue' : 'red'}>order summery: {cart.length} </h1>
            {/* {msg} */}


            <p className={`bold bordered ${cart.length===3 ? 'yellow': 'purple'}`}>something</p>
            

            {/* 2 */}
            {
                cart.length > 2 ? <span className='purple'>u can buy even more</span> : <span> buy more</span>
            }


            {/* showing selected data from tshirts in cart */}

            {
                cart.map(tshirt => <p key={tshirt._id}> {tshirt.name} <button onClick={() => removeFromCart(tshirt.name)}>X</button> </p> )
            }

            {/* 3 */}
            {
                cart.length === 2 && <p>Double bonaza ..</p>
            }

            {/* 4 */}
            {
                cart.length === 3 || <h4>select only 3</h4>
            }


        </div>
    );
};

export default Cart;


/**
 * CONDITIONAL RENDERING
 * 1. use if or if else to set a variable that will contain an element, components
 * 2. ternary operator: condition ? 'for true' : 'false'
 * 3. Logical &&: (if the condition is true then the next thing will be displayed)
 * 4. Logical ||: (if the condition is false then the next thing will be displayed)
 * 
 * */ 

/**
 * CONDITIONAL CSS Class
 * 1. use ternary 
 * 2. ternary inside template string
 * */ 
 