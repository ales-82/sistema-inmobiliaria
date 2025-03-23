import React from 'react'

const Login = ()=>{
	return(
		<>
			<section className="container d-flex flex-column justify-content-center align-items-center">	
				<h1 className="text-center pt-4 spacing-custom">LOGIN</h1>	
				<hr className="border border-2 w-50 mx-auto border-success bg-custom"/>
				<form action="" className="text-center fw-bolder w-25" method="POST">
					<label>Email</label>
					<input type="text" className="form-control mt-2 mb-3 shadow-lg"  placeholder="Ingrese su email"/>
					<label>Password</label>
					<input type="password" className="form-control mt-2 mb-3 shadow-lg" placeholder="Ingrese su contraseña"/>
					<button type="submit" className="btn btn-success">Entrar</button>
				</form>
				<br/>
				<div>
					<p>¿No tenes cuenta?  Ir a <a href="/registro" className="fw-bolder">Registro</a></p>
				</div>
			</section>			
		</>
	)
}

export default Login; 