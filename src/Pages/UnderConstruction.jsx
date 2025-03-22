import React from 'react';
import Navbar from '../Components/sections/navbar'
import Footer from '../Components/sections/footer'

export default function UnderConstruction() {
  return (
    <>
      <header>
        <Navbar />  
      </header>      
      <main className="flex-grow-1">
        <div className="container text-center mt-5">
          <h1>Página en construcción</h1>
          <p>Esta página aún está en desarrollo. ¡Vuelve pronto! <a href="/">click</a></p>
        </div>
      </main>
      <Footer />
    </>
  );
}
