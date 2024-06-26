/*!
 * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
 */
(function ($) {
  'use strict'; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate(
          {
            scrollTop: target.offset().top,
          },
          650,
          'easeInOutExpo'
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav',
  });

  // Animation on hover for the link icon right next to projects heading
  const linkIcon = document.getElementsByClassName('fa-link')[0];
  $(linkIcon).hover(function () {
    $(this).toggleClass('fa-beat-fade');
  });

  // Animation on hover for the social icons in about section
  const socialIcons = document.getElementsByClassName('social-icons')[0].getElementsByClassName('fab');
  for (let i = 0; i < socialIcons.length; i++) {
    $(socialIcons[i].parentElement).hover(function () {
      $(socialIcons[i]).toggleClass('fa-flip');
    });
  }

  // Animation on hover for the gear icons in projects
  const animationElements = document.getElementsByClassName('fa-gear');
  for (let i = 0; i < animationElements.length; i++) {
    $(animationElements[i]).hover(function () {
      $(animationElements[i]).toggleClass('fa-spin');
    });
    $(animationElements[i].parentElement.nextElementSibling).hover(function () {
      $(animationElements[i]).toggleClass('fa-spin');
    });
  }
})(jQuery); // End of use strict
