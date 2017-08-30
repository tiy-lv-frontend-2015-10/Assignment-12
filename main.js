$(document).ready(function() {
  var etsyURL = 'https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop';
  $.ajax({
    url: etsyURL,
    method: 'get',
    dataType: 'jsonp'
  }).then(function(data) {
    var listings = data.results.map(function(listing) {
      return {
        'title': listing.title,
        'price': listing.price,
        'currency_code': listing.currency_code,
        'image': listing.Images[0].url_170x135
      }
    })
    console.log(data.results);
    var listingData = {
      "listing": listings
    }
    listingData.listing.forEach(function(listItem) {
      document.getElementById('container').innerHTML +=
        `<div id="myList">
		      <div class="items three columns">
		          <img id="myListImg" src="${listItem.image}"/>
	   					<p id="myListTitle" class="item-text">${listItem.title.substring(0, 100)}...</p>
		          <span id="myListPrice">${listItem.price}</span>
		       </div>
		     </div>`
    })

  })
});
