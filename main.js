var etsyURL = 'https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop';

$.ajax({
  url: etsyURL,
  method: 'get'
  dataType: 'jsonp',
}).then (function (images) {

	
	var images = items.results.map(function(imageOne){
		return {
			title: imageOne.title.substring (0,31) + "...",
			price: imageOne.price + " " + imageOne.currency_code,
			shop: imageOne.Shop.shop_name,
			url_170x135: imageOne.Images[0].url_170x135
	};
    
  });

var whiskeyHome = {
	"images": images
};

	var whiskeyImages = $("#whiskeyImages").text();
	var whiskeyHTML = Mustache.render(whiskeyImages, whiskeyHome);
	$("#bottomImages").html(whiskeyHTML);

	});

});