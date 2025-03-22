import Index from "./Pages/IndexPage";
import InicioSesion from "./Pages/LoginPage";
import UnderConstruction from './Pages/UnderConstruction'

export const routes = [
	{
		path:'/',
		element: <Index />
	},
	{
		path:'/login',
		element:<InicioSesion />
	},
	{
		path:'/en-mantenimiento',
		element:<UnderConstruction />
	}
]