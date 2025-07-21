import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MainRoutes } from './layouts/MainRoutes'

import '@assets/style/reset.scss'
import '@assets/style/global.scss'



createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <MainRoutes />
  </BrowserRouter>,
)
