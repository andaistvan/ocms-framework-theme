!function($){$.fn.parallax=function(){var i=$(window).width();return this.each(function(n){function t(n){var t;t=i<601?o.height()>0?o.height():o.children("img").height():o.height()>0?o.height():500;var h=o.children("img").first(),e=h.height(),r=e-t,a=o.offset().top+t,c=o.offset().top,d=$(window).scrollTop(),s=window.innerHeight,l=d+s,w=(l-c)/(t+s),f=Math.round(r*w);n&&h.css("display","block"),a>d&&c<d+s&&h.css("transform","translate3D(-50%,"+f+"px, 0)")}var o=$(this);o.addClass("parallax"),o.children("img").one("load",function(){t(!0)}).each(function(){this.complete&&$(this).trigger("load")}),$(window).scroll(function(){i=$(window).width(),t(!1)}),$(window).resize(function(){i=$(window).width(),t(!1)})})}}(jQuery);