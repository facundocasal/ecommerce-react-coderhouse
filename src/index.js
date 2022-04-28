/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAijmNOppwd4LKWpxYteh-D9S1YIP40cUE",
  authDomain: "proreact-coderhouse-fcasal.firebaseapp.com",
  projectId: "proreact-coderhouse-fcasal",
  storageBucket: "proreact-coderhouse-fcasal.appspot.com",
  messagingSenderId: "971435637261",
  appId: "1:971435637261:web:f9367b4b7c0fbda9fbb344"
};

const app = initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
