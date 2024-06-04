import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './components/store/store.ts'
import { AuthProvider } from './context/AuthProvider.tsx'
//import {BrowserRouter} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    {/**<BrowserRouter>*/}
    <AuthProvider>

    <Provider store={store}>
      <App />
    </Provider>
    
    </AuthProvider>
     
    
     
    {/**</BrowserRouter>*/}
    
  </React.StrictMode>
)
