import React from 'react'

const Footer = ()=>{
	return(
		<>
			<footer className="bg-fondo-custom text-white">
		        <section className="container py-3">
		          <section className="row text-center">
		            <article className="col-md-4">
		              <h5>Política y avisos legales</h5>
		              <hr className="m-0 w-25 mx-auto" />
		              <ul className="list-inline mt-2">
		                <li><a href="/en-mantenimiento" className="text-white text-decoration-none">Aviso legal</a></li>
		                <li><a href="/en-mantenimiento" className="text-white text-decoration-none">Política de Privacidad</a></li>
		                <li><a href="/en-mantenimiento" className="text-white text-decoration-none">Política de Calidad</a></li>
		              </ul>
		            </article>
		            <article className="col-md-4 d-flex flex-column justify-content-center">
		              <h5>INMOBILIARIA - TU VIVIENDA</h5>
		              <hr className="border border-white m-0" />
		              <ul className="list-inline d-flex justify-content-evenly mt-2">
		                <li>
		                  <a href="/en-mantenimiento" className="text-white text-decoration-none">
		                    <i className="fab fa-facebook"></i>
		                  </a>
		                </li>
		                <li>
		                  <a href="/en-mantenimiento" className="text-white text-decoration-none">
		                    <i className="fab fa-instagram"></i>
		                  </a>
		                </li>
		                <li>
		                  <a href="/en-mantenimiento" className="text-white text-decoration-none">
		                    <i className="fab fa-youtube"></i>    
		                  </a>
		                </li>
		                <li>
		                  <a href="/en-mantenimiento" className="text-white text-decoration-none">
		                    <i className="fa-brands fa-x-twitter"></i>    
		                  </a>
		                </li>
		              </ul>
		            </article>
		            <article className="col-md-4">
		              <h5>Menú</h5>
		              <hr className="m-0 w-25 mx-auto" />
		              <ul className="list-inline mt-2 d-flex flex-md-column flex-lg-column flex-xl-column flex-xxl-column justify-content-evenly">
		                <li><a href="/" className="text-white text-decoration-none">Inicio</a></li>
		                <li><a href="/en-mantenimiento" className="text-white text-decoration-none">Anuncia</a></li>
		                <li><a href="/en-mantenimiento" className="text-white text-decoration-none">Propiedades</a></li>
		                <li><a href="/en-mantenimiento" className="text-white text-decoration-none">FAQs</a></li>
		              </ul>
		            </article>
		          </section>
		        </section>    
		    </footer> 
		</>	
	)
}

export default Footer;