$(document).ready(function() {


var etsyURL = 'https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop';

$.ajax({
  url: etsyURL,
  method: 'get',
  dataType: 'jsonp'
}).done(function(data) {

  var filterMap = data.results.map(function(obj) {
    return {
      "url_170x135": obj.Images[0]["url_170x135"],
      "shop_name": obj.Shop.shop_name,
      "title": obj.title,
      "price": obj.price,
      "currency_code": obj.currency_code
    };
  });

  var newData = {filterMap: filterMap};

  var template = $("#allOtherCategoriesTemplate").text();

  var listHTML = Mustache.render(template, newData);

  $("#pictureContainer").html(listHTML);

  });
});


