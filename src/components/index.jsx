import React from "react";
import ReactDOM from "react-dom";
import DefaultButton from "./Button"



export default class Index extends React.Component {

	render() {

		return(
				<div>
				<h1 className="heading">Hello From React!</h1>
				<div>Finally managed to get livereload to work</div>
				<DefaultButton></DefaultButton>
				</div>
			);

	}


}