// $Id$
Drupal.behaviors.initColorbox = function (context) {
  var settings = Drupal.settings.colorbox;
  $('.colorbox').colorbox({
    transition:settings.transition,
    speed:settings.speed,
    opacity:settings.opacity,
    slideshow:settings.slideshow,
    maxWidth:'100%',
    maxHeight:'100%',
    current:settings.current,
    previous:settings.previous,
    next:settings.next,
    close:settings.close
  });
};