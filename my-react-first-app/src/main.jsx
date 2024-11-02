import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import City from './City.jsx'
import Spread from './Spread.jsx'
import FriendsExample from './FriendsExample.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  // <StrictMode>
  //   <City />
  // </StrictMode>
  <StrictMode>
    <FriendsExample />
  </StrictMode>
)
