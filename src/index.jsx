import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/'
import Article from './pages/Article'
import About from './pages/About'
import Header from './components/Header'
import Error from './components/Error'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/article/:articleNumber" element={<Article />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</Router>
	</React.StrictMode>
);