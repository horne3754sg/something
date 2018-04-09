import menuObj from '../data/menu.json';

var MCLMS = (function (document) {

	var $cache = {};

	var init = function () {
		$cache.iwrap = document.getElementById('iwrap');
		$cache.kahuna = document.getElementById('kahuna');
		$cache.mainMenu = document.getElementById('mainMenu');
		$cache.menuItems = document.querySelector('#menuItems');
		$cache.modalBg = document.getElementById('modalBg');

		parseMenu(menuObj, $cache.menuItems);
		events();
	};

	// List events
	var events = function (a, b, c) {
		$cache.kahuna.addEventListener('click', function (e) {
			e.preventDefault();
			_editClass($cache.mainMenu, 'opened', 'toggle');
			_editClass($cache.modalBg, 'opened', 'toggle');
		});
	};  

    /**
     * 
     * @param {*} data json array of menu objects 
     * @param {*} targetEl element the menu objects attach to
     */
	var parseMenu = function (data, targetEl) {
		let menuObj = data;
		let menuItems = [];

		menuObj.map(element => {
			let menuItem = 
				`<div class="menuItem size-${element.size} ${element.color}" data-location="${element.link}">
				<object data="/dist/images/${element.icon.default}" type="image/svg+xml">	
					<img src="/dist/images/${element.icon.fallback}">
				</object>
					<div class="title">${element.title}</div>
				</div>`;
				
			targetEl.insertAdjacentHTML('beforeend', menuItem);
		});

		initMenu();
	};``

	var initMenu = function() {
		let menuItems = document.querySelectorAll('.menuItem');

		for (let i = 0; i < menuItems.length; i++) {

			menuItems[i].addEventListener('click', function(el) {
				window.location.href = menuItems[i].dataset.location;
			});
	
		}
	}
 
    /**
     * Class manipulation
     * 
     * @param {*} t target element
     * @param {*} c class to add/remove
     * @param {*} a action to perform
     */
	var _editClass = function (t, c, a) {
		if (a === 'add')
			t.classList.add(c);

		if (a === 'remove')
			t.classList.remove(c);

		if (a === 'toggle')
			t.classList.toggle(c);
	};

	// return functions that are accessible publicly
	return {
		init: init
	};

})(document || {});

MCLMS.init();