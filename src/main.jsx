import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import pageRouter from "./routers"

import './assets/css/style.css'



createRoot(document.getElementById('root')).render(
    <RouterProvider router={pageRouter} />
)
