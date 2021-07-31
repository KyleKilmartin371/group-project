//function to call weather API
function myFunction () {
    var searchTerm = document.querySelector("#searchTerm").value; 
    event.preventDefault();
    console.log(searchTerm);
  
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
  
        /* DAY 1 FORECAST */
        $("#dayOne").html(moment().add(1, "days").format("M/D/YYYY").toString());
        $("#dayOneTemp").html("Temp: " + response.list[2].main.temp + " °F");
        $("#dayOneSpeed").html("Wind: " + response.list[2].wind.speed + " mph");
        $("#dayOneHumidity").html("Humidity: " + response.list[2].main.humidity + "%");
  
        /* DAY 2 FORECAST */
        $("#dayTwo").html(moment().add(2, "days").format("M/D/YYYY").toString());
        $("#dayTwoTemp").html("Temp: " + response.list[8].main.temp + " °F");
        $("#dayTwoSpeed").html("Wind: " + response.list[10].wind.speed + " mph");
        $("#dayTwoHumidity").html("Humidity: " + response.list[10].main.humidity + "%");
  
        /* DAY 3 FORECAST */
        $("#dayThree").html(moment().add(3, "days").format("M/D/YYYY").toString());
        $("#dayThreeTemp").html("Temp: " + response.list[16].main.temp + " °F");
        $("#dayThreeSpeed").html("Wind: " + response.list[16].wind.speed + " mph");
        $("#dayThreeHumidity").html("Humidity: " + response.list[16].main.humidity + "%");
  
        /* DAY 4 FORECAST */
        $("#dayFour").html(moment().add(4, "days").format("M/D/YYYY").toString());
        $("#dayFourTemp").html("Temp: " + response.list[24].main.temp + " °F");
        $("#dayFourSpeed").html("Wind: " + response.list[24].wind.speed + " mph");
        $("#dayFourHumidity").html("Humidity: " + response.list[24].main.humidity + "%");
  
        /* DAY 5 FORECAST */
        $("#dayFive").html(moment().add(5, "days").format("M/D/YYYY").toString());
        $("#dayFiveTemp").html("Temp: " + response.list[32].main.temp + " °F");
        $("#dayFiveSpeed").html("Wind: " + response.list[32].wind.speed + " mph");
        $("#dayFiveHumidity").html("Humidity: " + response.list[32].main.humidity + "%");
  
      })
    })  
  }

// function to call trail API


//function to call both API upon submit click
