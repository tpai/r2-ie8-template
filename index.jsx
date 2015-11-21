import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import Store from "./src/store/Store";
import AppRouter from "./AppRouter";

render(
	<Provider store={Store()}>
		<div>
			<AppRouter />
		</div>
	</Provider>,
	document.getElementById("react")
);