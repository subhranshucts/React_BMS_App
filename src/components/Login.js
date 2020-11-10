import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import restApi from './rest-call/rest-call'

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			loginvalidation:false,
			persons: []
		};

		this.update = this.update.bind(this);

		this.displayLogin = this.displayLogin.bind(this);

		restApi.getWithHeader("http://localhost:9090/customer/getCustomer?username="+this.state.email) 
		.then(res => {
			 	const persons = res.data;
			 	this.setState({ persons:persons });
			 	console.log("person"+persons);
			   });
	}

	update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value,
			
		});
	}

	// componentDidMount() {
	// 	restApi.getWithHeader("http://localhost:9090/customer/getCustomer?username="+this.state.email) 
	// 	.then(res => {
	// 		 	const persons = res.data;
	// 		 	this.setState({ persons });
	// 		 	console.log("person"+persons);
	// 		   });
	// }

	displayLogin(e) {
		e.preventDefault();
		
		console.log("email enter"+this.state.email);
		console.log(`http://localhost:9090/customer/getCustomer?username=`+this.state.email);
		// axios.get("http://localhost:9090/customer/getCustomer?username="+this.state.email, Headers)
		//   .then(res => {
		// 	const persons = res.data;
		// 	this.setState({ persons });
		// 	console.log("person"+persons);
		//   })
		restApi.getWithHeader("http://localhost:9090/customer/getCustomer?username="+this.state.email) 
		.then(res => {
			 	const persons = res.data;
			 	this.setState({ persons });
			 	console.log("person"+persons);
			   });
		console.log("executed rest call");

		const userPaas= this.state.persons.password	
		
		console.log("passtesting: "+this.state.persons);
		
		if(this.state.password===userPaas){
		console.log('You are logged in');
		console.log("email and password"+this.state.email+this.state.password);
			this.setState({
				loginvalidation:true
			})
			this.props.history.push('/applyLoan'+'/customerID='+this.state.email);
			
		}else{
		console.log('Login unsuccessful');
		}
		console.log(this.state);
		this.setState({
			email: '',
			password: ''
		});
	}


	// componentDidMount() {
	// 	restApi.getWithHeader("http://localhost:9090/customer/getCustomer?username="+this.state.email) 
	// 	.then(res => {
	// 		 	const persons = res.data;
	// 		 	this.setState({ persons });
	// 		 	console.log("person"+persons);
	// 		   });
	//   }

	  

	render() {
		
		return (
			<div className="login">
				<form onSubmit={this.displayLogin}>
					<h2>Login</h2>
					<div className="username">
					<label>Username</label>
						<input
							type="text"
							placeholder="Username..."
							value={this.state.email}
							onChange={this.update}
							name="email"
						/>
					</div>

					<div className="password">
						<input
							type="password"
							placeholder="Password..."
							value={this.state.password}
							onChange={this.update}
							name="password"
						/>
					</div>

					<input type="submit" value="Login" />
				</form>
			
				<Link to="/register">Create an account</Link>
			</div>
		);
	}
}

export default withRouter(Login);

