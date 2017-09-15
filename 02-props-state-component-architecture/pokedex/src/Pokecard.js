import React, { Component } from 'react';
//<Pokecard id={p.id} name={p.name} type={p.type} image={p.image}/>

class Pokecard extends Component {
  render() {
  	return (
  			<div className="card">
  				<h1>{this.props.name}</h1>
  				<img src={this.props.image} />
  				<p>Type: {this.props.type}</p>
  			</div>
  		);
  }
}

export default Pokecard;