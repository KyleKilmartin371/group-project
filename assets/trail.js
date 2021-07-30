


fetch("https://trailapi-trailapi.p.rapidapi.com/trails/map/%7Bid%7D/gpx/", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "326703dddfmsh8547e243dd4a687p1f7f2cjsn8e5984fc1842",
		"x-rapidapi-host": "trailapi-trailapi.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});