var dates = [];
//function to call weather API
function myFunction() {
  var searchLocation = document.querySelector("#searchLocation").value.split(", ");
  event.preventDefault();
  console.log(searchLocation);

  // Make a `fetch` request concatenating that search term to the query URL for weather forecast
  fetch(
    'https://api.openweathermap.org/data/2.5/forecast?q=' + searchLocation[0] + '&units=imperial&appid=8e2a4447de15a5d804cf8a7d25a93eca'
  )

    // Converts the response to JSON
    .then(function (response) {
      // console.log(response);
      return response.json();
    })

    .then(function (response) {
      // console.log(response.data);
      var weatherLat = response.city.coord.lat;
      // console.log(weatherLat);
      var weatherLon = response.city.coord.lon;
      // console.log(weatherLon);

      clearDates();

      // This for loop retrives the dates and puts them into "dates" array.
      for (let index = 1; index <= 5; index++) {
        var date = moment().add(index, "days").format("MM/DD/YYYY").toString()
        dates.push(date);
        console.log("here is date: " + date);
      }

      // Retrieve the date the user input and removes any extra white spaces
      var searchDate = $("#searchDate")[0].value;
      searchDate = searchDate.trim();
      
      // Switch statemenet checks if the date matches any of the ones stored in "dates" array, otherwise defaults to showing 5 day report.
      // The code for writing to the html has been written in functions at the bottom of this script.
      switch (searchDate) {
        case dates[0]:
          displayDay1(response, 0);
          break;
        case dates[1]:
          displayDay2(response, 8);
          break;
        case dates[2]:
          displayDay3(response, 16);
          break;
        case dates[3]:
          displayDay4(response, 24);
          break;
        case dates[4]:
          displayDay5(response, 32);
          break;
        default:
          displayDay1(response, 0);
          displayDay2(response, 8);
          displayDay3(response, 16);
          displayDay4(response, 24);
          displayDay5(response, 32);
      }





      // function to call trail API

      // Make a `fetch` request concatenating that search term to the query URL for nearby parks
      fetch(
        'https://developer.nps.gov/api/v1/parks?stateCode=' + searchLocation[1] + '&limit=100&api_key=eIBcWOJxSuc0Pbly72GNBY8PLO1RTfczXbAeb5hL'
      )

        // Converts the response to JSON
        .then(function (response) {
          //  console.log(response);
          return response.json();
        })

        .then(function (response) {
          //  console.log(response.data);
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

// This function clears the inner html to reset display upon each call for a search result
function clearDates() {
      $("#dayOne").html('');
      $("#dayOneTemp").html('');
      $("#dayOneSpeed").html('');
      $("#dayOneHumidity").html('');

      $("#dayTwo").html('');
      $("#dayTwoTemp").html('');
      $("#dayTwoSpeed").html('');
      $("#dayTwoHumidity").html('');

      $("#dayThree").html('');
      $("#dayThreeTemp").html('');
      $("#dayThreeSpeed").html('');
      $("#dayThreeHumidity").html('');

      $("#dayFour").html('');
      $("#dayFourTemp").html('');
      $("#dayFourSpeed").html('');
      $("#dayFourHumidity").html('');

      $("#dayFive").html('');
      $("#dayFiveTemp").html('');
      $("#dayFiveSpeed").html('');
      $("#dayFiveHumidity").html('');
}

// Here are the respective Day functions
function displayDay1(response, index) {
  $("#dayOne").html(moment().add(1, "days").format("MM/DD/YYYY").toString());
  $("#dayOneTemp").html("Temp: " + response.list[index].main.temp + " °F");
  $("#dayOneSpeed").html("Wind: " + response.list[index].wind.speed + " mph");
  $("#dayOneHumidity").html("Humidity: " + response.list[index].main.humidity + "%");
  return;
}

function displayDay2(response, index) {
  $("#dayTwo").html(moment().add(2, "days").format("MM/DD/YYYY").toString());
  $("#dayTwoTemp").html("Temp: " + response.list[index].main.temp + " °F");
  $("#dayTwoSpeed").html("Wind: " + response.list[index].wind.speed + " mph");
  $("#dayTwoHumidity").html("Humidity: " + response.list[index].main.humidity + "%");
  return;
}

function displayDay3(response, index) {
  $("#dayThree").html(moment().add(3, "days").format("MM/DD/YYYY").toString());
  $("#dayThreeTemp").html("Temp: " + response.list[index].main.temp + " °F");
  $("#dayThreeSpeed").html("Wind: " + response.list[index].wind.speed + " mph");
  $("#dayThreeHumidity").html("Humidity: " + response.list[index].main.humidity + "%");
  return;
}

function displayDay4(response, index) {
  $("#dayFour").html(moment().add(4, "days").format("MM/DD/YYYY").toString());
  $("#dayFourTemp").html("Temp: " + response.list[index].main.temp + " °F");
  $("#dayFourSpeed").html("Wind: " + response.list[index].wind.speed + " mph");
  $("#dayFourHumidity").html("Humidity: " + response.list[index].main.humidity + "%");
  return;
}

function displayDay5(response, index) {
  $("#dayFive").html(moment().add(5, "days").format("MM/DD/YYYY").toString());
  $("#dayFiveTemp").html("Temp: " + response.list[index].main.temp + " °F");
  $("#dayFiveSpeed").html("Wind: " + response.list[index].wind.speed + " mph");
  $("#dayFiveHumidity").html("Humidity: " + response.list[index].main.humidity + "%");
  return;
}