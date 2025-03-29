import { StrictMode } from 'react'
import './App.css'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BlogDetails from './pages/BlogDetails'
import BlogCreate from './pages/BlogCreate'
import NotFound from './pages/NotFound'

function App() {
  return(
    <StrictMode>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<BlogCreate />} />
              <Route path="/blogs/:id" element={<BlogDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </StrictMode>
  )
}

export default App
