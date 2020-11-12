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
			loanType:'',
			applyDate:'',
			loanAmount:'',
			intrestRate:'',
			loanTenure:'',

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
			loanType:this.state.loanType,
			loanApplyDate:this.state.applyDate,
			loanAmount:this.state.loanAmount,
			rateOfInterest:this.state.intrestRate,
			loanDuration:this.state.loanTenure,
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
					<label>Lone Type</label>
						<input
							type="text"
							placeholder="Lone Type"
							name="loneType"
							value={this.state.loneType}
							onChange={this.update}
						/>
					</div>

					<div className="applyDate">
					<label>Apply Date</label>
						<input
							type="text"
							placeholder="Apply Date"
							name="applyDate"
							value={this.state.applyDate}
							onChange={this.update}
						/>
					</div>

					<div className="loanAmount">
					<label>Loan Amount</label>
						<input
							type="text"
							placeholder="Loan Amount"
							name="loanAmount"
							value={this.state.loanAmount}
							onChange={this.update}
						/>
					</div>

					<div className="intrestRate">
					<label>Intrest Rate</label>
						<input
							type="text"
							placeholder="Intrest Rate"
							name="intrestRate"
							value={this.state.intrestRate}
							onChange={this.update}
						/>
					</div>

					<div className="loanTenure">
					<label>Loan Tenure</label>
						<input
							type="text"
							placeholder="Loan Tenure"
							name="loanTenure"
							value={this.state.loanTenure}
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
