import { mobileMenu } from './modules/mobile-menu';
import { replaceCartIcon } from './modules/cart-icon';

window.addEventListener('DOMContentLoaded', () => {
  mobileMenu();

	if(document.location.pathname.indexOf('product') > -1) {
		replaceCartIcon();
	}

	// if(document.location.pathname === '/projects.html' || document.location.pathname === '/unicorn__arhitekte/projects.html') {
	//
	// }
});

