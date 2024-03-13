import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'


// const header = document.querySelector('header');
// const main = document.querySelector('main');
// const footer = document.querySelector('footer');

// if (header && main && footer) {
//   main.style.minHeight = `calc(100vh - ${header.clientHeight + footer.clientHeight}px)`;
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Toaster />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
