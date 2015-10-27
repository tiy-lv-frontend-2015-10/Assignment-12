$(document).ready(function(){


$("#signInButton").on("click",function(){
	$("#signInForm").toggleClass("hidden");
	$("#overlay").toggleClass("hidden");
});

$("#overlay").on('click', function(e){
	if ($(e.target).is('#overlay')){
		$("#overlay").addClass("hidden");
		$("#signInForm").addClass("hidden");
	}
})

/*$("#masterContainer").on("click",function(){
	$("#signInForm").removeClass("hidden");
	$("#masterContainer").removeClass("overlay");
});*/

$("#cat1").hover(function(){
	$(".catDiv").toggleClass("displayBlock");
});

$(".subMenuLi").hover(function(){
	$(".innerMenu").addClass("displayBlock");
});




	 var etsyURL = 'https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop';


	$.ajax({
	  url: etsyURL,
	  method: 'get',
	  dataType: 'jsonp'
	}).then(function(data){
		
		var mapData = data.results.map(function(obj){
			return {
				'title': obj.title,
				'price': obj.price,
				'shop_name': obj.Shop.shop_name,
				'currency_code':obj.currency_code,
				'url_170x135': obj.Images[0]['url_170x135'],
				'url':obj.url
			};
		});



		var newData = {mapData:mapData};

		var templateString = $("#listItemTemplate").text();
		var listHtml = Mustache.render(templateString, newData);
		$("#container").html(listHtml);


	});



});