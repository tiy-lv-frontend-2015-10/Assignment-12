$(document).ready(function(){

		var dataPull = 'https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop';

		$.ajax({
	 	 url: dataPull,
	 	 method: 'get',
	 	 dataType: 'jsonp'
		}).then (function (dataPull) {
		var whiskeyPics = dataPull.results.map(function(item){
		var string = item.title;
		var length = 40;
		var trimmedString = string.length > length ? 
                    string.substring(0, length - 3) + "..." : 
                    string.substring(0, length);
		return {
			url_170x135: item.Images[0].url_170x135,
			title: trimmedString,
			shop_name: item.Shop.shop_name,
			price: item.price + " " + item.currency_code
		};
	});
	var whiskeyPull = {
	  		"whiskeyPics": whiskeyPics
			};
	var whiskeyTemplate = $("#whiskeyTemplate").text();
	var whiskeyHTML = Mustache.render(whiskeyTemplate, whiskeyPull);
		$("#whiskeyProducts").html(whiskeyHTML);
			});
});