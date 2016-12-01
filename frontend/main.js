'use strict';

console.log(`jQuery ${$.fn.jquery} is loaded`);
window.$ = $;

import Menu from './modules/menu';
var menu = new Menu;

(function adaptiveMenu () {

	var mobileView = window.matchMedia("(max-width: 768px)").matches,
			timing = 0;


	if ( mobileView ) {

		menu.initBurger();
		menu.initMobile();

	} else {

		menu.destructMobile();

	}

	$(window).resize(()=>{

		if ( !timing ) {
			timing = setTimeout(adaptiveMenu, 200);
		}

	});

})();
require('./modules/ravno');
