let navItem = document.querySelectorAll('.navbar-app .nav-link');
let allPages = new Object(document.querySelectorAll('section'));
let navbarBackground = document.querySelector('.navbar-app');

window.onscroll = function () { scrollAllPages(allPages) };
function scrollAllPages(allPages) {


	allPages.forEach(item => {

		let linkColor = document.querySelector(`.navbar-app .nav-link`);
		if (window.pageYOffset >= (item.offsetTop - linkColor.clientHeight) && window.pageYOffset <= (item.offsetTop + item.clientHeight - linkColor.clientHeight)) {
			navItem.forEach((element) => {
				element.className = 'nav-link defoult';
				if (element.getAttribute('href') === ("#" + item.getAttribute('id'))) {
					element.className = 'nav-link active';
					if (window.pageYOffset > (item.offsetTop - linkColor.clientHeight)) {

						navbarBackground.style.backgroundColor = getComputedStyle(item).getPropertyValue('background-color');
					}

				} else {
					element.className = 'nav-link defoult';

				}
			})
		}

	})
}
