/**
 * Theme JS
 */


/*** Navbar ***/

var navbar = (function() {

	// Variables
	var $navbar = $('.navbar');
	var $navbarCollapse = $('.navbar-collapse');
	var $navbarLink = $('.navbar-nav > li > a');
	var $window = $(window);

	// Methods
	function toggleNavbarClass() {
		var scrollTop = $window.scrollTop();

		if ( scrollTop > 10 ) {
			$navbar.removeClass('navbar-default').addClass('navbar-inverse');
		} else {
			$navbar.removeClass('navbar-inverse').addClass('navbar-default');
		}
	}

	// Events

	// Toggle navbar class on page load
	toggleNavbarClass();

	// Toggle navbar class on page scroll
	$window.on('scroll', function() {
		toggleNavbarClass();
	});

	$navbarCollapse.on({
		'show.bs.collapse': function() {
			$navbar.removeClass('navbar-default').addClass('navbar-inverse');
		},
		'hide.bs.collapse': function() {
			$navbar.removeClass('navbar-inverse').addClass('navbar-default');
		}
	});

	// Collapse navbar on a link click
	$navbarLink.on('click', function() {

		if ( $(window).width() < 768 ) {
			$navbarCollapse.collapse('hide');
		}
	});

})();


/*** Smooth scroll to anchor ***/

var smoothScroll = (function() {

	// Variables
	var link = $('a[href^="#section_"]');
	var duration = 1000;

	// Methods
	function scrollTo(link) {
		var target = $(link.attr('href'));
		var navbar = $('.navbar-header');
		var navbarHeight = navbar.outerHeight();

		if ( target.length ) {
			$('html, body').animate({
				scrollTop: target.offset().top - navbarHeight + 1
			}, duration);
		}
	}

	// Events
	link.on('click', function(e) {
		e.preventDefault();
		scrollTo( $(this) );
	});

})();