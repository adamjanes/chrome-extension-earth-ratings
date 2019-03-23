// Get every product item on the page
var items = $('.s-item-container')

items.each(function(index, item) {
  // Unique identifier for this product
  const product_id = $(this).parent().attr("data-asin")

  // Make element
  var div = document.createElement('div')
  div.innerHTML = `
    <div class="star-container">
      <div class="text">Product ID: ${product_id}</div>
      <div class="text">Earth Rating: </div>
      <div id=rate${index}></div>
    </div>
  `
  item.append(div)

  // TODO: Lookup Earth rating for this id to plug in below
  // this_products_rating = $.get(path/to/API/call)

  // Generate star ratings using Rater.js
  // https://github.com/auxiliary/rater
  $("#rate" + index).rate({ selected_symbol_type: "utf8_earth"})
  $("#rate" + index).rate("setValue", 4) // Placeholder - set value here

})
