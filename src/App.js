import { Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import { ShoppingCartProvider } from "./Context";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import NotFound from "./pages/Notfound";
import Login from "./pages/Login";

function App() {
	//let routes;

	return (
		<div className="App">
			<ShoppingCartProvider>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/mycart" element={<Cart />} />
					<Route path="/myaccount" element={<Account />} />
					<Route path="/*" element={<NotFound />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</ShoppingCartProvider>
		</div>
	);
}

export default App;
