
import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		this.state = {
			isparashown: false,
		};
		this.showpara = this.showpara.bind(this);
	}

	//showpara = () => {
	showpara() {
		this.setState({isparashown: true});
	};

    render() {
    	return(
    		<div id="main">
				<button id="click" onClick={this.showpara}>
					show paragraph
				</button>
				{
					this.state.isparashown ? (<p id="para">Hello, I've learnt to use the full-stack evaluation tool.
					 This makes me so happy</p>) : null
				}
				 
    		</div>
    	);
    }
}


export default App;
