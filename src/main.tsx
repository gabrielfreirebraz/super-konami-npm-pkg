import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App 
      backgroundImage={'https://cdn12.picryl.com/photo/2016/12/31/monkey-zoo-funny-animals-ea0f95-1024.jpg'} 
      text={'Olá pessoal'}
      />
  </React.StrictMode>,
)
