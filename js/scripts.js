(function(a){a("[data-bg-image]").each(function(){a(this).css({"background-image":"url("+a(this).data("bg-image")+")"})});a("[data-bg-color]").each(function(){a(this).css({"background-color":a(this).data("bg-color")})});a("[data-width]").each(function(){a(this).css({width:a(this).data("width")})});a("[data-height]").each(function(){a(this).css({height:a(this).data("height")})});a("#header-search").on("click",function(){a("#overlay-search").addClass("active");setTimeout(function(){a("#overlay-search").find("input").eq(0).focus()},400)});a("#overlay-search").find(".close-search").on("click",function(){a("#overlay-search").removeClass("active")});a("nav.main-nav").on("click",function(){if(a(window).width()<997){a("nav.main-nav").addClass("show-menu")}});a("#close-menu").on("click",function(){a("nav.main-nav.show-menu").removeClass("show-menu");return false});a(document).ready(function(){a(".gallery-slideshow").each(function(){var b=a(this);b.find(".gallery-container").swiper({nextButton:b.find(".swiper-button-next"),prevButton:b.find(".swiper-button-prev")})});a(".video-element").each(function(){var b=a(this);b.magnificPopup({delegate:"a",type:"iframe"})});a(".image-link").each(function(){var b=a(this);b.magnificPopup({type:"image"})});a(".carousel-posts").each(function(){var b=a(this);b.find(".swiper-container").swiper({loop:true,slidesPerView:3,centeredSlides:true,initialSlide:1,nextButton:b.find(".swiper-button-next"),prevButton:b.find(".swiper-button-prev"),breakpoints:{996:{slidesPerView:2}}})});a(".fullwidth-post-slider").each(function(){var b=a(this);b.find(".swiper-container").swiper({nextButton:b.find(".swiper-button-next"),prevButton:b.find(".swiper-button-prev"),pagination:b.find(".swiper-pagination"),paginationClickable:true})});a(".katharine-post-slider").each(function(){var b=a(this);b.find(".swiper-container").swiper({nextButton:b.find(".swiper-button-next"),prevButton:b.find(".swiper-button-prev"),pagination:b.find(".swiper-pagination"),paginationClickable:true})})});a(window).load(function(){a(".gallery-masonry").each(function(){var b=a(this);b.find(".gallery-viewport").isotope({itemSelector:".gitem",masonry:{columnWidth:1}});b.find(".gallery-viewport").magnificPopup({delegate:".gitem a",type:"image",gallery:{enabled:true}})});a(".blog-masonry-container").each(function(){var b=a(this);b.isotope({itemSelector:".masonry-item",masonry:{columnWidth:1}})})})})(jQuery);