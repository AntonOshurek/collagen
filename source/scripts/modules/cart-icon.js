const replaceCartIcon = () => {
	const cartButton = document.querySelector('.add-form__button');
	let productInCart = true;

	const cartButtonUpdate = () => {
		if(productInCart) {
			productInCart = false;
			cartButton.classList.remove('add-form__button--remove-from-cart');
			cartButton.textContent = 'Добавить в корзину';
		} else {
			productInCart = true;
			cartButton.classList.add('add-form__button--remove-from-cart');
			cartButton.textContent = 'Удалить из корзины';
		}
	}

	const checkProductStatus = () => {
		cartButtonUpdate();
	}

	function shopingCurtButtonHandler(evt) {
		evt.preventDefault();
		cartButtonUpdate();
	}

	cartButton.addEventListener('click', shopingCurtButtonHandler);
	checkProductStatus(); // for first launch
}

export { replaceCartIcon };
