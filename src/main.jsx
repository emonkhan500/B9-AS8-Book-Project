import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import Error from './Components/Error.jsx';
import Home from './Components/Home.jsx';
import ListedBook from './Components/ListedBook.jsx';
import PagesToRead from './Components/PagesToRead.jsx';
import BookCollection from './Components/BookCollection.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/listedBook',
        element:<ListedBook></ListedBook>,
      },
      {
        path:'/pagesToRead',
        element:<PagesToRead></PagesToRead>,
      },
      {
        path:'/bookCollection',
        element:<BookCollection></BookCollection>
      },
      {
        
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
