$(document).ready(function(){

//Display/hide hearts & hamburgers**********************************

	$(".product-square").on('hover',function(){
		console.log("mouse over");
		$(this).find('.inner-button-panel').show();
	}, function () {
		$(this).find('.inner-button-panel').hide();
	}
);

// Change background color of pagination buttons on hover***********
	$('.paginator').hover(function(){
		$(this).addClass('darker');
	}, function() {
		$(this).removeClass('darker');
	} );



	// display the left side menu ***********************************

	var categories = {
		categories: data.etsy_main_categories};

	var categoryTemplate = $('#categoryTemplate').html();

	var categoryHTML = Mustache.render(categoryTemplate, categories);
	$("#top-side-list").html(categoryHTML);
//*****************************************************************

// var findCatPics = data.results.map(function(item){
// 	return {
// 		listingCategory: item.category_path[0],
// 		listingPhoto: item.Images[0].url_170x135
// 	};
// });
// console.log(findCatPics);

// var wittleDown = findCatPics.filter(function(item){
// 		   var arr = ["Home & Living", "Art & Collectibles", "Weddings", "Clothing", "Paper & Party Supplies"];
// 			 cat = item.listingCategory;
// 			 if cat
// })

/// TOP ROW of PHOTOS **************************************************************
var topTwo =	{ top2cats:	[
		{photo: "https://img0.etsystatic.com/076/2/9523834/il_340x270.814467854_ntvi.jpg",
		 category: "Home & Living",
	   hits: "11,269 Items"},
		 {photo: "https://img0.etsystatic.com/024/0/6709469/il_340x270.513286998_413a.jpg",
		  category: "Art & Collectibles",
		  hits: "4,508 Items"}
		]};

var bigTemplate = $('#topTwoTemplate').text();
var bigTempHTML = Mustache.render(bigTemplate, topTwo);
$("#top-5-first-2").html(bigTempHTML);
//*********************************************************************************

// Second Row of PHOTOS ************************************************************
var nextThree= { next3cats: [
		{photo: "https://img0.etsystatic.com/068/0/11221885/il_340x270.802215518_ak03.jpg",
		 category: "Weddings",
	   hits: "3,393 Items"},
		{photo: "https://img0.etsystatic.com/057/1/10345019/il_340x270.763319240_5yxw.jpg",
		 category: "Clothing",
	   hits: "1,749 Items"},
		{photo: "https://img1.etsystatic.com/037/2/7110757/il_340x270.654767145_f7e4.jpg",
		 category: "Paper & Party Supplies",
	   hits: "1,332 Items"}
	]};

	var nextRowTemplate = $('#next3Template').text();
	var nextRowHTML = Mustache.render(nextRowTemplate, nextThree);
	$('#top-5-next-3').html(nextRowHTML);
//***********************************************************************************
// populate the rolls.

var etsyURL = 'https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop';

$.ajax({
  url: etsyURL,
  dataType: 'jsonp',
  method: 'get'
}).then (function (response) {
	var data = response;
console.log(data);

var listings = data.results.map(function(item){
		return {
			listingTitle: item.title.substring(0,30) + "...",
			listingPrice: item.price + ' ' + item.currency_code,
			listingSeller: item.Shop.shop_name,
			listingPhoto: item.Images[0].url_170x135
		};
	});

	console.log(listings);

var listingData = {
	  listings: listings
};

var listingTemplate = $("#listingTemplate").text();
var listingHTML = Mustache.render(listingTemplate, listingData);

 $("#listDataContainer").html(listingHTML);

});
 // var etsyURL = 'https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop';
 //
 // $.ajax({
 //   url: etsyURL,
 //   dataType: 'jsonp',
 //   method: 'get'
 // }).then (function (response) {
 //   console.log(response);
 // 	var data = response;
 // });

});
