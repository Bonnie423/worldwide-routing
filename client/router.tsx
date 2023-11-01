import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App.tsx'
import Home from './components/Home.tsx'
import Continent from './components/Continent.tsx'
import Country from './components/Country.tsx'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="continent/:name" element={<Continent />} />
    <Route path="continent/:name/:code" element={<Country />} />
  </Route>
)

export const router = createBrowserRouter(routes)
