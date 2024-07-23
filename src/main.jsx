import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
const router =  createBrowserRouter ([
  {
    path: "/react-calculator/",
    element: <App />
  } 
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReactProvider router = {router}/>
  </React.StrictMode>,
)
