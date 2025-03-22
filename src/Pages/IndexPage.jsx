import React, {Fragment, useEffect, useState} from 'react'
import Navbar from '../Components/sections/navbar'
import Portada from '../Components/sections/portada'
import Footer from '../Components/sections/footer'

export default function Index(){
	return(
		<> 
		<header>
			<Navbar/>
		</header>
		<main className="flex-grow-1">
			<Portada/>	
		</main>			
		<Footer />


		</>
	)
}