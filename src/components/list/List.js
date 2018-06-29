import React from 'react';
import { handleResponse } from '../../helpers';
import { API_URL } from '../../config';
import './Table.css';

class List extends React.Component {
	constructor() {
		super();

		this.state = {
			loading: false,
			currencies: [],
			error: null,
		};

	}

	componentDidMount () {
	  this.setState({ loading: true });

	  fetch(`${API_URL}/cryptocurrencies?page=1&perPages20`)
	    .then(handleResponse)
	    .then((data) => {
	      console.log('Success', data);
	      this.setState({ 
	      	currencies: data.currencies, 
	      	loading: false 
	      });
	    })
	    .catch((error) => {
	      this.setState({ 
	      	error: error.errorMessage, 
	      	loading: false 
	      });
	      console.log('Error', error);
	    });
	}

	render() {
		console.log(this.state)
		/*
		const title = 'React Coin';
		<h1>{title}</h1>
		<p>Up to date crypto currencies financial data</p>
		<br />
		*/

		if (this.state.loading) { 
			return <div>Loading...</div>
		}
		return (
			
			
			<div className="Table-container">
				{this.state.currencies.map((currency) => (

					<div key={currency.id}>
						
						{currency.id}
					</div>
					))}
				<table className="Table">
					<thead className="Table-head">
						<tr>
							<th> Cryptocurrency </th> 
							<th> Price </th> 
							<th> Market Cap </th> 
							<th> 24H Change </th> 
						</tr>
					</thead>
					<tbody className="Table-body">
					</tbody>	
				</table>
			</div>
			)
	}
}

export default List;