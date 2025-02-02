import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './router';  // Path to your Router file

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='grid grid-cols-1 px-12 md:px-16 place-items-center overflow-visible min-w-[350px] mb-24'>
      < AppRouter/>
    </div>
  </StrictMode>,
)
