const replaceCartIcon = () => {
	const cartButton = document.querySelector('.product__button');
	let productInCart = false;

	function replaceIcon(evt) {
		evt.preventDefault();
		if(productInCart) {
			productInCart = false;
			this.classList.remove('product__button--remove-from-cart');
		} else {
			productInCart = true;
			this.classList.add('product__button--remove-from-cart');
		}
	}

	cartButton.addEventListener('click', replaceIcon)
}

export { replaceCartIcon };
