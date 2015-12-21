$(document).ready(function () {
	var etsyURL = 'https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop';

	$.ajax({
		url: etsyURL,
		method: 'get',
		dataType: 'jsonp'

	}).then(function (test) {




		var listings = test.results.map(function (listing) {
			return {
				"title": listing.title,
				"Shop_name": listing.shop_name,
				"price": listing.price,
				"currency_code": listing.currency_code,
				"url_75x75": listing.Images[0].url_75x75
			};

		});


		var listingData = {
			"listings": listings
		};




		var images = $("#images").text();
		var listHtml = Mustache.render(images, listingData);
		$("#boxes2").html(listHtml);

	});
});