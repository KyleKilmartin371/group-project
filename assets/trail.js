// create a function to store city search terms using localStorage
function pastCity(city) {
	localStorage.setItem("city-name", city);
	
	var cityStorage = document.createElement ("button");
	cityStorage.setAttribute("class", "pastCity form-control");
	cityStorage.setAttribute("id",city);
	var pastCityResults = document.querySelector("#search");
	pastCityResults.appendChild(cityStorage);
	cityStorage.innerHTML=city;
  };
  
  // get city search term and use .value to store its value
  function myFunction () {
	var searchTerm = document.querySelector("#searchTerm").value; 
	event.preventDefault();
	console.log(searchTerm); 
	pastCity(searchTerm);
  
	// Make a `fetch` request concatenating that search term to the query URL for current weather
	fetch (
	  'https://api.openweathermap.org/data/2.5/weather?q=' + searchTerm +'&units=imperial&appid=8e2a4447de15a5d804cf8a7d25a93eca'
	)  
	
	// Converts the response to JSON
	.then(function(response) {
	  console.log(response);
	  return response.json();
	})  
  
	.then(function(response) {
	  console.log(response.data);
	
	// use jQuery to display current date and weather using elements from the response
	  var currentDate = moment().format("M/D/YYYY").toString();
	  $("#city-name").html(response.name + " " + currentDate); 
	  $("#temp").html("Temp: " + response.main.temp + " °F");
	  $("#speed").html("Wind: " + response.wind.speed + " mph");
	  $("#humidity").html("Humidity: " + response.main.humidity + "%");
	  console.log(response.weather[0].icon);
  
	  // Make a `fetch` request concatenating that search term to the query URL for weather forecast
	  fetch (
		'https://api.openweathermap.org/data/2.5/forecast?q=' + searchTerm +'&units=imperial&appid=8e2a4447de15a5d804cf8a7d25a93eca'
	  )  
	
	  // Converts the response to JSON
	  .then(function(response) {
		console.log(response);
		return response.json();
	  })  
  
	  .then(function(response) {
		console.log(response.data);
		
		/* use jQuery to bring weather data from the API to the 5-day forecast cards */

	  })
	})  
  }
  
  // link button to search result for the city in the button
  // function buttonClick {
  
  // }