import $ from 'jquery'

const APIKEY = 'fec8b5ab27b292a68294261bb21b04a5';
const movieUrl = 'https://api.themoviedb.org/3/search/movie?api_key='+APIKEY+'&query=';

export default function DoesntMatterWhatWeCallItButGetTheWeather_ThisIsOurNewSubmitFunctionInOurContainer(movieSearchString){
	console.log(movieSearchString)
	const fullMovieUrl = movieUrl + movieSearchString;
	const thePromise = $.getJSON(fullMovieUrl);
	return{
		type: 'GET_MOVIE',
		payload: thePromise
	}		
}
