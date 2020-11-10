import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import restApi from './rest-call/rest-call';

class Register extends Component {
	constructor(props) {
		super(props);

		this.state = {
			fullname: '',
			email: '',
			password: '',
			address:'',
			country:'',
			states:'',
			email:'',
			contact:'',
			birthdate:'',
			accountType:'',
			branch:'',
			depositAmount:'',
			idProof:'',
			DocumentationNo:'',



		};

		this.update = this.update.bind(this);

		this.displayLogin = this.displayLogin.bind(this);
	}

	update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	}

	displayLogin(e) {
		e.preventDefault();
		console.log('You have successfully registered');
		const registerData = {

			name:this.state.name,
			username:this.state.email,
			password:this.state.password,
			address:this.state.address,
			country:this.state.country,
			states:this.state.states,
			email:this.state.email,
			contact:this.state.contact,
			birthdate:this.state.birthdate,
			accountType:this.state.accountType,
			branch:this.state.branch,
			initialDepositAmount:this.state.depositAmount,
			balance:this.state.balance,
			identificationProofType:this.state.idProof,
			identificationDocumenN:this.state.documentationNo

		}
		console.log("registerData"+registerData);
		restApi.postData("http://localhost:9090/customer/registration", registerData);
		console.log(this.state);
		this.setState({
			fullname: '',
			email: '',
			password: ''
		});
	}

	render() {
		return (
			<div className="register">
				<form onSubmit={this.displayLogin}>
					<h2>Register</h2>

					<div className="name">
					<label>Full Name:</label>
						<input
							type="text"
							placeholder="Full Name"
							name="fullname"
							value={this.state.fullname}
							onChange={this.update}
						/>
					</div>

					<div className="email">
					<label>Enter Email:</label>
						<input
							type="text"
							placeholder="Enter your email"
							name="email"
							value={this.state.email}
							onChange={this.update}
						/>
					</div>

					<div className="country">
					<label>Enter Address:</label>
						<input
							type="text"
							placeholder="Enter Address"
							name="address"
							value={this.state.address}
							onChange={this.update}
						/>
					</div>

					<div className="country">
					<label>Enter Country:</label>
						<input
							type="text"
							placeholder="Enter country"
							name="country"
							value={this.state.country}
							onChange={this.update}
						/>
					</div>

					<div className="state">
					<label>Enter State:</label>
						<input
							type="text"
							placeholder="Enter state"
							name="states"
							value={this.state.states}
							onChange={this.update}
						/>
					</div>

					<div className="contactNo">
					<label>Phone No:</label>
						<input
							type="text"
							placeholder="Contact No"
							name="contact"
							value={this.state.contact}
							onChange={this.update}
						/>
					</div>

					<div className="birthDate">
					<label>Birth Date:</label>
						<input
							type="text"
							placeholder="Birth Date"
							name="birthdate"
							value={this.state.birthdate}
							onChange={this.update}
						/>
					</div>

					<div className="accountType">
					<label>Account Type:</label>
						<input
							type="text"
							placeholder="Account Type"
							name="accountType"
							value={this.state.accountType}
							onChange={this.update}
						/>
					</div>

					<div className="branch">
					<label>Branch:</label>
						<input
							type="text"
							placeholder="Branch"
							name="branch"
							value={this.state.branch}
							onChange={this.update}
						/>
					</div>

					<div className="depositAmount">
					<label>Deposit Amount:</label>
						<input
							type="text"
							placeholder="Initial Deposit amount"
							name="depositAmount"
							value={this.state.depositAmount}
							onChange={this.update}
						/>
					</div>

					<div className="idproof">
					<label>Identification Proof:</label>
						<input
							type="text"
							placeholder="Identification Proof Type"
							name="idProof"
							value={this.state.idProof}
							onChange={this.update}
						/>
					</div>

					<div className="documentationNo">
					<label>Identification Documentation:</label>
						<input
							type="text"
							placeholder="Identification Documentation No"
							name="documentationNo"
							value={this.state.documentationNo}
							onChange={this.update}
						/>
					</div>

					<div className="pasword">
					<label>Password:</label>
						<input
							type="password"
							placeholder="Password"
							name="password"
							value={this.state.password}
							onChange={this.update}
						/>
					</div>

					<div className="password">
					<label>Confirm Password:</label>
						<input type="password" placeholder="Confirm Password" name="password1" />
					</div>

					<input type="submit" value="Registration" />
				</form>

				<Link to="/">Login Here</Link>
			</div>
		);
	}
}

export default Register;
