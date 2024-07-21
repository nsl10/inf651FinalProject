if (document.readyState == 'loading'){
	document.addEventListener('DOMContentLoaded', ready)
}else {
	ready()
}
// assign each button to an event listener
function ready() {
	var removeCartItemButtons = document.getElementsByClassName('btn-danger')
	for (var i = 0; i < removeCartItemButtons.length; i++) {
		var button = removeCartItemButtons[i]
		button.addEventListener('click', removeCartItem)
	}

	var quantityInputs = document.getElementsByClassName('cart-quantity-input')
	for (var i = 0; i < removeCartItemButtons.length; i++) {
		var input = quantityInputs[i]
		input.addEventListener('change', quantityChanged)
	}

	var addToCartButtons = document.getElementsByClassName('shop-item-button')
	for (var i = 0; i < addToCartButtons.length; i++) {
		var button = addToCartButtons[i]
		button.addEventListener('click', addToCartClicked)
	}
	document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
	var bidItemButtons = document.getElementsByClassName('Bid-item-button')
	for (var i = 0; i < bidItemButtons.length; i++) {
		var button = bidItemButtons[i]
		button.addEventListener('click', bidClicked)
	}
}

// purchase and clear cart
function purchaseClicked(event) {
	alert('Thank you for your purchase')
	var cartItems = document.getElementsByClassName('cart-items')[0]
	while (cartItems.hasChildNodes()) {
		cartItems.removeChild(cartItems.firstChild)
	}
	updateCartTotal()
}
//removes items and updates total
function removeCartItem(event) {
	var buttonClicked = event.target
	buttonClicked.parentElement.parentElement.remove()
	updateCartTotal()
}
//changes cart total with quantity
function quantityChanged(event) {
	var input = event.target
	if (input.value == '' || input.value <= 0) {
		input.value = 1
	}
	updateCartTotal()
}
//adds an item to cart if not already in the cart
function addToCartClicked(event) {
	var button = event.target
	var shopItem = button.parentElement.parentElement
	var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
	var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
	var imgSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
	addItemToCart(title, price, imgSrc)
	updateCartTotal()
}
// adds all details to cart inc name of item, the price and image associated with it
function addItemToCart(title, price, imageSrc){
	var cartRow = document.createElement('div')
	cartRow.innerText = title
	var cartItems = document.getElementsByClassName('cart-items')[0]
	var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
	for (var i = 0; i < cartItemNames.length; i++) {
		if (cartItemNames[i].innerText == title){
			alert('This item is already added to the cart')
			return
		}
	}
	var cartRowContents = '<div class="cart-row"><div class="cart-item cart-column"><img class="cart-item-image" src= ' + imageSrc + ' width="100" height="100"><span class="cart-item-title">' + title + '</span></div><span class="cart-price cart-column">' + price + '</span><div class="cart-quantity cart-column"><input class="cart-quantity-input" type="number" value="1"><button class="btn btn-danger" type="button">REMOVE</button></div></div>'

	cartRow.innerHTML = cartRowContents
	cartItems.append(cartRow)
	cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
	cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
	}

//updates total based on what is in cart
function updateCartTotal() {
	var cartItemContainer = document.getElementsByClassName('cart-items')[0]
	var cartRows = cartItemContainer.getElementsByClassName('cart-row')
	var total = 0
	for (var i = 0; i < cartRows.length; i++) {
		var cartRow = cartRows[i]
		var priceElement = cartRow.getElementsByClassName('cart-price')[0]
		var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
		var price = parseFloat(priceElement.innerText.replace('$', ''))
		var quantity = quantityElement.value
		total = total + (price*quantity)
	}
	total = Math.round(total*100) / 100
	document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

//checks if user has input a bid higher than current and updates bid if it is
function bidClicked(event) {
	var button = event.target
	var bidItem = button.parentElement.parentElement
	var bidPrice = bidItem.getElementsByClassName('Bid-item-current')[0].innerText
	var bidInput = bidItem.getElementsByClassName('Bid-input')[0].value
	if(Number(bidInput) > Number(bidPrice)){
		bidItem.getElementsByClassName('Bid-item-current')[0].innerText = bidInput
		alert("Your bid has been placed!")
	}else{
		alert("Your bid is too low! Please place a higher bid!")
	}
	
}