import React, { Component } from 'react';
import FetchWeather from '../actions/FetchWeatherAction'
import FetchMovie from '../actions/FetchMovieAction'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			zipCode : 30033,
			movieSearch: ''
		}
		this.getWeather = this.getWeather.bind(this);
		this.changeZipCode = this.changeZipCode.bind(this);
		this.getMovie = this.getMovie.bind(this);
		this.changeMovie = this.changeMovie.bind(this);
	}
	changeZipCode(e){
		this.setState({
			zipCode: e.target.value
		})
	}
	getWeather(e){
		e.preventDefault();
		this.props.FetchWeather(this.state.zipCode)
	}
	changeMovie(e){
		this.setState({
			movieSearch: e.target.value
		})
	}
	getMovie(e){
		e.preventDefault();
		this.props.FetchMovie(this.state.movieSearch)
	}	
	render() {
		var weatherData
		if(this.props.weatherData == null){weatherData = ''}
		else{weatherData = this.props.weatherData.name;};
		console.log(weatherData)


		var movieData = ''
		var movieImages = []
		if(this.props.movieData == null){movieData = []}
		else{movieData = this.props.movieData;
			movieData.results.map((movie, index)=>{
				var imageBaseUrl = 'http://image.tmdb.org/t/p/w300' + movie.poster_path;
				movieImages.push(<div key={index} className='col-sm-4'><img src={imageBaseUrl}/></div>)
			})				
		};
		return (
			<div>
				<form onSubmit={this.getWeather}>
					<input placeholder="Enter Zip Code" value={this.state.zipCode} onChange={this.changeZipCode} />
					<button type='submit' className='btn btn-primary'>Get the weather!</button>
				</form>
				{weatherData}
				<form onSubmit={this.getMovie}>
					<input placeholder="Enter Zip Code" value={this.state.movieSearch} onChange={this.changeMovie} />
					<button type='submit' className='btn btn-primary'>Get the weather!</button>
				</form>
				{movieImages}
				
			</div>
		);
	}
}
// poster_path

function mapStateToProps(state){
	return{
		weatherData: state.weather,
		movieData: state.movie
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		FetchWeather:FetchWeather,
		FetchMovie:FetchMovie
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
