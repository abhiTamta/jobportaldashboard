import React from 'react';
import { createRoot } from 'react-dom/client'
import './assets/css/style.css'
import { RouterProvider } from 'react-router-dom';
import pageRouter from './routers';

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={pageRouter} />        
    </React.StrictMode>
)
