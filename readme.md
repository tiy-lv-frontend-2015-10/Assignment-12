# 10/26/15 

___This homework is due by 8am, on 10/27/15___

### Learning Objectives

After completing this assignment, you should:

* Understand the basics of jQuery `$.ajax()` and `$.getJSON()`

## Deliverables

* Push to Github and comment with a link to your repo & deployed version

> Note: This should be a separate project from your previous assignment.

## Normal Mode

1. Convert your Etsy homework to pulling in live data (via Ajax)

#### Etsy API Help (JSONP)

```js
var etsyURL = 'https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop';

$.ajax({
  url: etsyURL,
  dataType: 'json',
  method: 'get'
}).then (function (response) {
  console.log(response);
});
```