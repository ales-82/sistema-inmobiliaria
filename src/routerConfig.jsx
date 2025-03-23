import Index from "./Pages/IndexPage";
import InicioSesion from "./Pages/LoginPage";
import Registro from './Pages/RegisterPage'
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
		path:'/registro',
		element:<Registro />
	},
	{
		path:'/en-mantenimiento',
		element:<UnderConstruction />
	}
]