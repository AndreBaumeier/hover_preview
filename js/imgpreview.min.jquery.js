/*
 * imgPreview jQuery plugin
 * Copyright (c) 2009 James Padolsey
 * j@qd9.co.uk | http://james.padolsey.com
 * Dual licensed under MIT and GPL.
 * Updated: 09/02/09
 * @author James Padolsey
 * @version 0.22
 *
 * compiled with http://closure-compiler.appspot.com/home
 */
(function(b){b.expr[":"].linkingToImage=function(e,g,a){return!(!b(e).attr(a[3])||!b(e).attr(a[3]).match(/\.(gif|jpe?g|png|bmp)/i))};b.fn.imgPreview=function(e){function g(c){return c.replace(/(\/?)([^\/]+)$/,"$1"+a.thumbPrefix+"$2")}var a=b.extend({imgCSS:{},distanceFromCursor:{top:10,left:10},vertical_center_image:!0,preloadImages:!0,onShow:function(){},onHide:function(){},onLoad:function(){},containerID:"imgPreviewContainer",containerLoadingClass:"loading",thumbPrefix:"",srcAttr:"href"},e),d=b("<div/>").attr("id", a.containerID).append("<img/>").hide().css("position","absolute").appendTo("body"),f=b("img",d).css(a.imgCSS),h=this.filter(":linkingToImage("+a.srcAttr+")");a.preloadImages&&function(c){var d=new Image,e=arguments.callee;d.src=g(b(h[c]).attr(a.srcAttr));d.onload=function(){h[c+1]&&e(c+1)}}(0);h.mousemove(function(c){if(a.vertical_center_image){var b;b=d.height()/2*-1}else b=a.distanceFromCursor.top;d.css({top:c.pageY+b+"px",left:c.pageX+a.distanceFromCursor.left+"px"})}).hover(function(){var c=this;d.addClass(a.containerLoadingClass).show();f.load(function(){d.removeClass(a.containerLoadingClass);f.show();a.onLoad.call(f[0],c)}).attr("src",g(b(c).attr(a.srcAttr)));a.onShow.call(d[0],c)},function(){d.hide();f.unbind("load").attr("src","").hide();a.onHide.call(d[0],this)});return this}})(jQuery);