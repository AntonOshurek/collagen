const replaceCartIcon = () => {
	const cartButton = document.querySelector('.add-form__button');
	const addForm = document.querySelector('.add-form');
	const addFormRadioBlock = document.querySelector('.add-form__radio-wrap');
	const addFormInputsBlock = document.querySelector('.add-form__input-wrap');

	let formData = null;
	let dataArray = null;
	let productInCart = true;
	let messageTemplate = null;

	const createMessage = (template) => {
		const newElement = document.createElement('div');
		newElement.innerHTML = template.trim();
		return newElement.firstChild;
	};

	const showFormMessage = () => {
		messageTemplate = createMessage(`
		<p class="add-form__info">В корзине - ${dataArray.count}, товаров объёмом по - ${dataArray.size}</p>
		`);

		addForm.prepend(messageTemplate);
	};

	const cartButtonUpdate = () => {
		if(productInCart) {
			productInCart = false;
			cartButton.classList.remove('add-form__button--remove-from-cart');
			addFormRadioBlock.classList.remove('add-form__radio-wrap--hidden');
			addFormInputsBlock.classList.remove('add-form__input-wrap--hidden');
			cartButton.textContent = 'Добавить в корзину';
			messageTemplate !== null ? messageTemplate.remove() : null;
			messageTemplate = null;
		} else {
			productInCart = true;
			cartButton.classList.add('add-form__button--remove-from-cart');
			addFormRadioBlock.classList.add('add-form__radio-wrap--hidden');
			addFormInputsBlock.classList.add('add-form__input-wrap--hidden');
			cartButton.textContent = 'Удалить из корзины';
			showFormMessage();
		}
	}

	const checkProductStatus = () => {
		cartButtonUpdate();
	}

	const getDataFromForm = () => {
		formData = new FormData(addForm);

		dataArray = {
      size: formData.get('size'),
      count: formData.get('count'),
    };
		console.log(dataArray);
	};

	function shopingCurtButtonHandler(evt) {
		evt.preventDefault();
		!productInCart ? getDataFromForm() : null;
		cartButtonUpdate();
	}

	addForm.addEventListener('submit', shopingCurtButtonHandler);
	checkProductStatus(); // for first launch
}

export { replaceCartIcon };
