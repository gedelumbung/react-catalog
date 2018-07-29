/**
 * import all package which is from node_modules here
 */
import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

/**
 * import all needed css here
 */
import "bulma/css/bulma.css";
import "./asset/css/custom.css";

/**
 * import your own helper/component/script here
 */
import App from "./App";
import store from './store';

render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById("root")
);
