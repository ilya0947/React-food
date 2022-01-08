import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import NotFound from './pages/notFound';
import Category from './pages/category';
import { ContextProvider } from './context';
import Recipe from './pages/recipe';


export default function App() {
	return (
		<>
		<Router basename='/React-food'>
			<Header/>
			<ContextProvider>
				<main className="container content">
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route path="/about" component={About}/>
						<Route path="/contact" component={Contact}/>
						<Route path="/category/:name" component={Category}/>
						<Route path="/recipe/:id" component={Recipe}/>
						<Route component={NotFound}/>
					</Switch>
				</main>
			</ContextProvider>
			<Footer/>
		</Router>
		</>
	);
}