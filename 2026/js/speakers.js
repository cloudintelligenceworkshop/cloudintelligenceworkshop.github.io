/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. IE Check
3. Set Header
4. Init Search
5. Init Menu


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var menu = $('.menu');
	var menuActive = false;
	var header = $('.header');

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	init_ie_check();
	setHeader();
	initSearch();
	initMenu();

	/* 

	2. IE Check

	*/

	function init_ie_check()
	{
		var version = detectIE();
		var logo = $('.logo_text');

		if(version === false)
		{
			
		}
		else if(version >= 12)
		{
			
		}
		else
		{
			logo.removeClass('logo_text_not_ie');
		}
	}

	function detectIE()
	{
		var ua = window.navigator.userAgent;

		var msie = ua.indexOf('MSIE ');
		if (msie > 0) // IE 10 or older => return version number
		{
			return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
		}

		var trident = ua.indexOf('Trident/');
		if (trident > 0) // IE 11 => return version number
		{
			var rv = ua.indexOf('rv:');
			return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
		}

		var edge = ua.indexOf('Edge/');
		if (edge > 0) // Edge (IE 12+) => return version number
		{
			return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
		}

		// other browser
		return false;
	}

	/* 

	3. Set Header

	*/

	function setHeader()
	{
		if($(window).scrollTop() > 127)
		{
			header.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
		}
	}

	/* 

	3. Init Search

	*/

	function initSearch()
	{
		if($('.header_search').length)
		{
			var search = $('.header_search');
			var panel = $('.search_container');
			search.on('click', function()
			{
				panel.toggleClass('active');
			});
		}
	}

	/* 

	4. Init Menu

	*/

	function initMenu()
	{
		if($('.hamburger').length && $('.menu').length)
		{
			var hamb = $('.hamburger');
			var close = $('.menu_close_container');

			hamb.on('click', function()
			{
				if(!menuActive)
				{
					openMenu();
				}
				else
				{
					closeMenu();
				}
			});

			close.on('click', function()
			{
				if(!menuActive)
				{
					openMenu();
				}
				else
				{
					closeMenu();
				}
			});

	
		}
	}

	function openMenu()
	{
		menu.addClass('active');
		menuActive = true;
	}

	function closeMenu()
	{
		menu.removeClass('active');
		menuActive = false;
	}

});