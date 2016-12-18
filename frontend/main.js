'use strict';

console.log(`jQuery ${$.fn.jquery} is loaded`);
window.$ = $;
window.jQuery = $;

import '../sass/css.scss';
import Menu from './modules/menu';

var menu = new Menu,
		isMap = $('#map').is('#map'),
		isSlider = $('.slider').is('.slider');

/***********************
********* MENU *********
************************/


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

/**********************
********* MAP *********
***********************/

if ( isMap ) {

	require.ensure([], (require) => {
		require('./modules/map');
	});

}

/***********************
******** SLIDER ********
************************/


if ( isSlider ) {

	require.ensure(['../node_modules/slick-carousel/slick/slick'], (require) => {
		require('script!../node_modules/slick-carousel/slick/slick.js');
		$('.slider').slick({
			prevArrow: $('.left'),
			nextArrow: $('.right'),
			dots: true
		});
	});

}

