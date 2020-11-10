import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import restApi from './rest-call/rest-call';

class ApplyLoan extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			loginvalidation:false,
			loneType:'',
			applyDate:'',
			loneAmount:'',
			intrestRate:'',
			loneTenure:'',

		};

		this.update = this.update.bind(this);

		this.displayLogin = this.displayLogin.bind(this);
	}

	update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value,
			
		});
	}

	displayLogin(e) {
		e.preventDefault();
		console.log('You are logged in'+window.location.href);
		console.log("email and assword"+this.state.email+this.state.password);
		const custId=window.location.href.substring(43,window.location.href.length);
		console.log(custId);
		const applyData = {
       
		 

			loanId:11,
			customerId:custId,
			loanType:this.state.loneType,
			loanApplyDate:this.state.applyDate,
			loanAmount:this.state.loneAmount,
			rateOfInterest:this.state.intrestRate,
			loanDuration:this.state.loneTenure,
		}
		console.log("registerData"+applyData);
		restApi.postData("http://localhost:9090/loan/applyloan", applyData);
		console.log(this.state);
		this.setState({
			email: '',
			password: ''
		});
	}

	render() {
		
		return (
			<div>
			    <form onSubmit={this.displayLogin}>
					<h2>Apply Loan</h2>


					<div className="loneType">
						<input
							type="text"
							placeholder="Lone Type"
							name="loneType"
							value={this.state.loneType}
							onChange={this.update}
						/>
					</div>

					<div className="applyDate">
						<input
							type="text"
							placeholder="Apply Date"
							name="applyDate"
							value={this.state.applyDate}
							onChange={this.update}
						/>
					</div>

					<div className="loneAmount">
						<input
							type="text"
							placeholder="Lone Amount"
							name="loneAmount"
							value={this.state.loneAmount}
							onChange={this.update}
						/>
					</div>

					<div className="intrestRate">
						<input
							type="text"
							placeholder="Intrest Rate"
							name="intrestRate"
							value={this.state.intrestRate}
							onChange={this.update}
						/>
					</div>

					<div className="loneTenure">
						<input
							type="text"
							placeholder="Lone Tenure"
							name="loneTenure"
							value={this.state.loneTenure}
							onChange={this.update}
						/>
					</div>

					<input type="submit" value="Apply" />
				</form>
			</div>
		);
	}
}

export default ApplyLoan;
