import React, {Fragment, useEffect, useState} from 'react'
import Navbar from '../Components/sections/navbar'
import Login from '../Components/login'
import Footer from '../Components/sections/footer'

export default function InicioSesion(){
	return(
		<>
		<header>
			<Navbar/>			
		</header>
		<main className="flex-grow-1">
			<Login />				
		</main>			
		<Footer />
		
		</>
	)
}