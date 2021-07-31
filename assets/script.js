//function to call weather API
function myFunction () {
    var searchTerm = document.querySelector("#searchTerm").value.split(", "); 
    event.preventDefault();
    console.log(searchTerm);
  
    // Make a `fetch` request concatenating that search term to the query URL for weather forecast
      fetch (
        'https://api.openweathermap.org/data/2.5/forecast?q=' + searchTerm[0] +'&units=imperial&appid=8e2a4447de15a5d804cf8a7d25a93eca'
      )  
    
      // Converts the response to JSON
      .then(function(response) {
        console.log(response);
        return response.json();
      })  
  
      .then(function(response) {
        console.log(response.data);
        var weatherLat = response.city.coord.lat;
        console.log(weatherLat);
        var weatherLon = response.city.coord.lon;
        console.log(weatherLon);
        
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
  
        // function to call trail API

        // Make a `fetch` request concatenating that search term to the query URL for nearby parks
        fetch (
        'https://developer.nps.gov/api/v1/parks?stateCode=' + searchTerm[1] +'&limit=100&api_key=eIBcWOJxSuc0Pbly72GNBY8PLO1RTfczXbAeb5hL'
        )  

        // Converts the response to JSON
        .then(function(response) {
         console.log(response);
            return response.json();
        })  

        .then(function(response) {
         console.log(response.data);
        // for (let i = 0; i < response.data.length; i++) {
        //     if (weatherLat - response.data.latitude > 1 || weatherLon - response.data.longitude) {
        //         console.log(response);
        //         break;
        //     };
            
        // };
    
        /* use jQuery to bring park information from the API to the first 5 parks */

        /* PARK 1 */
         $("#fullNameOne").html(response.data[0].fullName);
         $("#urlOne").html(response.data[0].url);
        $("#descriptionOne").html(response.data[0].description);

        /* PARK 2 */
        $("#fullNameTwo").html(response.data[1].fullName);
        $("#urlTwo").html(response.data[1].url);
        $("#descriptionTwo").html(response.data[1].description);

        /* PARK 3 */
        $("#fullNameThree").html(response.data[2].fullName);
        $("#urlThree").html(response.data[2].url);
        $("#descriptionThree").html(response.data[2].description);

        /* PARK 4 */
        $("#fullNameFour").html(response.data[3].fullName);
        $("#urlFour").html(response.data[3].url);
        $("#descriptionFour").html(response.data[3].description);

        /* PARK 5 */
        $("#fullNameFive").html(response.data[4].fullName);
        $("#urlFive").html(response.data[4].url);
        $("#descriptionFive").html(response.data[4].description);

        });
    });  
          
};