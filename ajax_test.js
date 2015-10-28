var etsyURL = 'https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop';

$.ajax({
  url: etsyURL,
  dataType: 'json',
  method: 'get'
}).then (function (response) {
  console.log(response);
	var data = response;
});
	// <img src={{listingPhoto}} class="product-pic"/>
