import React from 'react'
import Navbar from '../Components/sections/navbar'
import Register from '../Components/register'
import Footer from '../Components/sections/footer'

export default function Registro(){
	return(
		<>
			<header>
				<Navbar />
			</header>
			<main className="flex-grow-1">
				<Register />
			</main>
			<Footer />
		</>	
	)
} 
