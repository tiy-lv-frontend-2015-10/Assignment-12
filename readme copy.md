# 10/21/15 

___This homework is due by 8am, on 10/26/15___

### Learning Objectives

After completing this assignment, you should:

* Have a deep understanding of layout 
* Understand jQuery DOM Manipulation
* Demonstrate strong ability to navigate through a large block of JSON data
* Understand and be able to use Underscore/Lodash templates

## Deliverables

1. Fork the Repo
2. Create a pull request
3. Create a gh-pages branch

## Normal Mode

Re-Create An Etsy Page - https://www.etsy.com/search?q=whiskey


1. Utilize the data for whatever search term you use - [DATA HERE](https://api.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop)
2. You are free to change the search term to whatever you'd like.
3. We haven't covered how to fetch data using JavaScript, so just copy the data and store it in a variable.
4. Everything should be styled as closely as possible, including the Header/Sidebar/Links/Search (you can ignore the footer)
5. You should implement hover events and link the items to their proper Etsy product pages (items only, other links can be just linked to `#`)
6. No need to make any of the form elements work, just style them properly
7. You can ignore the "Top categories for ..." section as that is not in the data. You can also ignore the "Ad" icon.

> Pro Tip, worry about the structure first, the JS second and the fine details of the design last

> Note: The assets (heart, cart and hamburger icons) are in an assets folder for you. 


## Hard Mode

1. Create your own API token by signing up as an [Etsy developer](https://www.etsy.com/developers/)
2. Get the categories from the data to create the sidebar, with links that filter the listings.
3. Implement the sorting dropdown so that when you change the sort method the items will reload into a different order.



## Resources

1. [Mustache Templates](https://github.com/janl/mustache.js)
2. [Etsy API Documentation](https://www.etsy.com/developers/documentation/reference/listing)
3. [Etsy Payload Example](https://api.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop)
4. [Etsy Page Example](https://www.etsy.com/search?q=whiskey)