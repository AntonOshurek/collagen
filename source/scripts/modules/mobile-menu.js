const mobileMenu = () => {
	const siteBody = document.querySelector('.body');
	const navButton = document.querySelector('.nav__button');
	const navList = document.querySelector('.nav__list');
	const navIcon = document.querySelector('.btn-icon');

	let navigationIsOpen = false;

	const closeNavigation = () => {
		navigationIsOpen = false;
		navList.classList.remove('nav__list--open');
		navIcon.classList.remove('btn-icon--active');
		siteBody.classList.remove('body--scrolloff');
	}

	const openNavigation = (evt) => {
		navigationIsOpen = true;
		navList.classList.add('nav__list--open');
		navIcon.classList.add('btn-icon--active');
		siteBody.classList.add('body--scrolloff');

		window.addEventListener('resize', (e) => {
			if (window.screen.width > 800) {
				closeNavigation();
			};
		});
	}

	navButton.addEventListener('click', () => {
		navigationIsOpen ? closeNavigation() : openNavigation();
	});

}

export { mobileMenu };

