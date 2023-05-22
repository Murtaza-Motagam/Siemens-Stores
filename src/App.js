import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Basic Url components are imported here
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import About from './components/About';

// All Clothing poprduct componets imoported here
import Products from './components/products-items/Products';
import Product from './components/products-items/Product';
import PaymentGateway from './components/Sub-Components/PaymentGateway';

// Electronics Products all Components imported here
import Eproducts from './components/ElectronicsComponents/Eproducts';
import Eproduct from './components/ElectronicsComponents/Eproduct';
import EpaymentGateway from './components/ElectronicsComponents/EpaymentGateway';



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* Basic Url Componets are here */}

          <Route element={<Navbar />}>
            <Route  path="/" index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />

            {/* All Clothing Product Components are here */}

            <Route path="/products" element={<Products />} />
            <Route path="/about/products" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/products/:id/paymentgateway" element={<PaymentGateway />} />

            {/* All Electronics Product Components are here */}

            <Route path="/electronics" element={<Eproducts />} />
            <Route path="/electronics/:id" element={<Eproduct />} />
            <Route path="/electronics/:id/epaymentgateway" element={<EpaymentGateway />} />

            
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;