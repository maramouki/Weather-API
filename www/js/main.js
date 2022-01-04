const settings = {
	async: true,
	crossDomain: true,
	url: "http://localhost:8888/Weather-API/www/weather.php",
	method: "GET",
	headers: {},
};

$.ajax(settings).done(function (response) {
	response = JSON.parse(response);
	console.log(response);
});
