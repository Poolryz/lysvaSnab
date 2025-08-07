import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home.tsx'
import Catalog from './pages/Catalog.tsx'
import ProductPage from './pages/ProductPage.tsx'
import RequestPage from './pages/RequestPage.tsx'
import Admin from './pages/Admin.tsx'
import HeaderComponent from './components/HeaderComponent/HeaderComponent.tsx';
import FooterComponent from './components/FooterComponent/FooterComponent.tsx';

function App() {

  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} >
          <Route path="soj" element={<h1>soj</h1>} />
          <Route path="tool" element={<h1>tool</h1>} />
          <Route path="snap-in" element={<h1>snap-in</h1>} />
        </Route>
        <Route path='/product' element={<ProductPage />} />
        <Route path='/request' element={<RequestPage />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
      <FooterComponent />

    </>
  )
}

export default App
