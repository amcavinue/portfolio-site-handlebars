/* Animate to auto height: https://css-tricks.com/snippets/jquery/animate-heightwidth-to-auto/ */
jQuery.fn.animateAuto = function(prop, speed, callback){
  var elem, height, width;
  return this.each(function(i, el){
    el = jQuery(el), elem = el.clone().css({"height":"auto","width":"auto"}).appendTo("body");
    height = elem.css("height"),
    width = elem.css("width"),
    elem.remove();
    
    if(prop === "height")
      el.animate({"height":height}, speed, callback);
    else if(prop === "width")
      el.animate({"width":width}, speed, callback);
    else if(prop === "both")
      el.animate({"width":width,"height":height}, speed, callback);
  });
}

function carouselHeightMatch() {
  var maxHeight = -1;
  $('.item').removeAttr("style");
  
  $('.item').each(function() {
   maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
  });

  $('.item').each(function() {
   $(this).height(maxHeight);
  });
   
  console.log('matched');
}