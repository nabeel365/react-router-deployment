import React, { useState } from 'react';
import Header from '../Header/Header';
import Tshirt from '../Tshirt/Tshirt';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './Home.css'
import { toast } from 'react-hot-toast';

const Home = () => {
    const tshirts = useLoaderData();


    // input here, output there

    const [cart, setCart] = useState([]);


    const handleAddToCart = tshirt => {
        const exists = cart.find(ts => ts._id === tshirt._id);
        if(exists){
            toast('Already Added');
        }
        else{
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }
        // console.log(tshirt);
       

    }

    // remove btn... the same can be done using id ..
    const removeFromCart = name => {
        // console.log(name);
        const remaining = cart.filter(ts => ts.name !== name);
        setCart(remaining);
    }

    return (
        <div>
            <h1>home</h1>

            <p> Total items - {tshirts.length} </p>

          <div className='items'>
          <div className='t-shirts-container'>
           {
                tshirts.map(tshirt => <Tshirt
                key={tshirt._id}
                tshirt={tshirt}
                handleAddToCart={handleAddToCart}
                ></Tshirt>)
            }
           </div>
           <div>
            <Cart cart={cart}
            removeFromCart={removeFromCart}
            ></Cart>
           </div>

          </div>

        </div>
    );
};

export default Home;