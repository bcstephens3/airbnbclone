import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import OurApp from './OurApp'
import MiddlePage from "./MiddlePage"
import Card from './Card';
import data from './data';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OurApp />
    <MiddlePage/>
    <section className='cards-list'>
      <App/>
    </section>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




//old way of card
{/* <Card
    img="swimmer.png"
    rating="5.0"
    reviewCount="6"
    location="USA"
    title="Life lessons w swimmer"
    price="136"/> */}
