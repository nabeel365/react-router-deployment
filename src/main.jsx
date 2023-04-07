import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Orders from './components/Orders/Orders';
import Contact from './components/Contact/Contact';
import Main from './components/LayOut/Main';
import Grandpa from './components/Grandpa/Grandpa';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,

        loader: () => fetch('tshirts.json'),

      },
      {
        path: "orders",
        element: <Orders></Orders>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        
          path: "grandpa",
          element: <Grandpa></Grandpa>,
        
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
