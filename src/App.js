import React from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Headers from './components/Header'
import Footer from './components/Footer'
import SingleProduct from './pages/SingleProduct'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { persistor, store } from './Redux/Store'



export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Headers />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path="/SingleProduct/:id" element={<SingleProduct />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}
