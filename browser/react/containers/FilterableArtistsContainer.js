import React, {Component} from 'react';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists.js';


export default class FilterableArtistsContainer extends Component {

	constructor(){
		super();
		this.state = {
		  inputValue: ''
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange (evt) {
	  const value = evt.target.value;
	  this.setState({
	    inputValue: value
	  });
	}

	render () {
	  const inputValue = this.state.inputValue;
  	  const filteredArtists = this.props.artists.filter(artist =>
    			artist.name.match(inputValue));
	  return (
	    <div>
	     <FilterInput handleChange={this.handleChange} />
	      <Artists artists={filteredArtists} />
	    </div>
	  )
	}

}