import React, {Component} from 'react';
import NewPlaylist from '../components/NewPlaylist';
import axios from 'axios';

export default class NewPlaylistContainer extends Component {

	constructor(){
		super();
		this.state = {
		  inputValue: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange (evt) {
	  const value = evt.target.value;
	  console.log("value*****",value);
	  this.setState({
	    inputValue: value
	  });
	}

	handleSubmit (evt) {
	  const value = evt.target.value;
	  console.log("value*****",value);
	  this.setState({
	    inputValue: value
	  });
	   evt.preventDefault();
	}

	componentDidMount(){
		axios.post('/api/playlists')
		  .then(res => res.data)
		  .then(result => {
		    console.log(result) // response json from the server!
		  });
	}

	render () {
	  const inputValue = this.state.inputValue;
  	  
	  return (
	    <div>
	     <NewPlaylist handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
	      
	    </div>
	  )
	}

}