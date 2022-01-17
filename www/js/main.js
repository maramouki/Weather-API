const settings = {
	async: true,
	crossDomain: true,
	url: "http://localhost:8888/Weather-API/www/weather.php",
	method: "GET",
	headers: {},
};

$.ajax(settings).done(function (response) {
	response = JSON.parse(response);
	console.log(response.data[0]);

	let currentDate = new Date();
	console.log(currentDate.toDateString());

	//Injecter dans le html
	$("h2#city").text(response.data[0].city_name);
	$("#date").text(currentDate.toDateString());
	$(".temp h3 span").text(response.data[0].temp.toFixed(0));
	$("#sunrise").text(response.data[0].sunrise);
	$("#sunset").text(response.data[0].sunset);
	$("#precip span").text(response.data[0].precip);
	$("#wind_spd span").text((response.data[0].wind_spd * 3.6).toFixed(2));
});

$(".search").css("display", "flex");
