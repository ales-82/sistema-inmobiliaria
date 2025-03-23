import React from 'react'

const Register=()=>{
	return(
		<>
			<section className="container d-flex flex-column justify-content-center align-items-center">
				<h1 className="text-center pt-4 spacing-custom">REGISTRO</h1>
				<hr className="border border-2 w-50 mx-auto border-success bg-custom" />				
				<form action="" className="text-center fw-bolder border w-25" method="POST">
					<label>Nombre de usuario</label>
					<input type="text" name="" id="" className="form-control mt-2 mb-3 shadow-lg" placeholder="ingrese su nombre de usuario" />
					<label>Email</label>
					<input type="text" name="" id="" className="form-control mt-2 mb-3 shadow-lg" placeholder="ingrese su email" />
					<label>Password</label>
					<input type="password" name="" id="" className="form-control mt-2 mb-3 shadow-lg" placeholder="ingrese una contraseña" />
					<button type="submit" className="btn btn-success">Registrarse</button>
				</form>
				<br/>
				<div>
					<p>¿Tenes cuenta? ir a <a href="/login" className="fw-bolder">Login</a></p>
				</div>
			</section>
		</>	
	)
}

export default Register;