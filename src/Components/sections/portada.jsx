import React from 'react'

const Portada=()=>{
	return(
		<>		
		<section>
			<div className="position-relative w-100 height-custom">
				<div className="positon-absolute w-100  position-absolute z-index1 height-custom custom-background"></div>
				<img src="./images/fondo.jpg" alt="" className="size-img position-absolute" />
				<form action="/en-mantenimiento" className="position-absolute w-50 z-index2 top-50 start-50 translate-middle d-flex">
					<input type="text" className="form-control" placeholder="Ingrese una descripción ejm: vivienda en flores" />					
					<button type="submit" className="btn btn-success"><i className="fas fa-search"></i></button>
				</form>	
			</div>			
		</section>
		</>
	)
}

export default Portada;