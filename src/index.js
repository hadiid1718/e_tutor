import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from "./pages/Home"
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import ContactUs from './pages/ContactUs';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children : [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/signin',
        element: <SignIn/>
      },
      {
        path:  '/register',
        element: <Register/>
      },
      {
        path: '/contact',
        element: <ContactUs/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router}>

     </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
