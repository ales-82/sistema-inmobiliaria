import React from 'react'

const Home=()=>{
	return(
		<>
			<section className="container text-center my-3">
				<h1 className="fw-bolder pt-3">
					<i className="fas fa-building"></i><br />
					Propiedades Destacadas
				</h1>
				<hr className="border border-2 w-25 mx-auto border-success bg-custom" />
				<p className="space-custom font-letter fs-4">Busca la propiedad que mas se acerque a tus comidades</p>
				<section className="row">
					<article className="col-sm-6 col-md-4 mt-3">
						<div className="card border-0 rounded-custom bg-custom-card">
							<img src="./images/product.jpg" alt="producto1" className="card-img-top card-image " />
							<div className="card-body bg-white">
								<h5 className="card-title">Titulo</h5>
								<p className="card-title">...</p>
								<a href="#" className="btn btn-outline-success fw-bolder w-100">Ver</a>
							</div>
						</div>
					</article>
					<article className="col-sm-6 col-md-4 mt-3">
						<div className="card border-0 rounded-custom bg-custom-card">
							<img src="./images/product.jpg" alt="producto1" className="card-img-top card-image " />
							<div className="card-body bg-white">
								<h5 className="card-title">Titulo</h5>
								<p className="card-title">...</p>
								<a href="#" className="btn btn-outline-success fw-bolder w-100">Ver</a>
							</div>
						</div>
					</article>
					<article className="col-sm-6 col-md-4 mt-3">
						<div className="card border-0 rounded-custom bg-custom-card">
							<img src="./images/product.jpg" alt="producto1" className="card-img-top card-image " />
							<div className="card-body bg-white">
								<h5 className="card-title">Titulo</h5>
								<p className="card-title">...</p>
								<a href="#" className="btn btn-outline-success fw-bolder w-100">Ver</a>
							</div>
						</div>
					</article>
				</section>
			</section>		
		</>
	)	
}

export default Home;