//elements
var weatherApiKey = "9f952a484bb0642f0030c770704f46cd"
var weatherApiUrl = "http://api.openweathermap.org/data/2.5/forecast?id=4717782&appid=";
var weather = weatherApiUrl + weatherApiKey;
var city = document.querySelector("#location").value;
var getCityCode = "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid=9f952a484bb0642f0030c770704f46cd"

//function to call weather API
var weatherFetch = fetch(getCityCode).then(function(response){
    if (response.ok) {
        response.json().then(function(data) {
            //console.log(data.id);
            fetch("http://api.openweathermap.org/data/2.5/forecast?id="+data.id+"&appid=9f952a484bb0642f0030c770704f46cd")
                .then(function(response){
                    response.json().then(function(data){
                        console.log(data);
                    })
                })
        });
    };
});

// function to call meetup API


//function to call both API upon submit click


document.querySelector("#btn").addEventListener("click", weatherFetch);