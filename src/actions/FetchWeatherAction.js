import $ from 'jquery'

const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=482c145ce8edf1d69ea5168f9d06460c&zip='
// &zip=30305,us

export default function DoesntMatterWhatWeCallItButGetTheWeather_ThisIsOurNewSubmitFunctionInOurContainer(zipCode){
	console.log(zipCode)
	const fullWeatherUrl = weatherUrl + zipCode + ',us';
	const thePromise = $.getJSON(fullWeatherUrl);
	return{
		type: 'GET_WEATHER',
		payload: thePromise
	}		
}