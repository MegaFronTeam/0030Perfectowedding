(function(){var e,t,i;$(function(){return $("img.bttrlazyloading").bttrlazyloading()}),$(window).on("load resize",function(){return $(document).width()>1025?$(".header-background__picture").hasClass("disabled")?scrollme.init():$(".header-background img").bind("load",function(){return scrollme.init()}):void 0}),e=function(){return $(".examples").length?$(".examples").each(function(e,t){return $(t).find(".examples__item").each(function(e,t){var i,n;return $(this).removeAttr("style"),n=$(this).width(),i=n,$(this).hasClass($(this).hasClass(".examples__item_double-height"))&&$(this).width(2*n).height(2*i),$(this).hasClass("examples__item_double-width")&&$(this).width(2*n),$(this).hasClass("examples__item_double-height")?$(this).height(2*i):$(this).height(i)}),$(t).imagesLoaded(function(){var e;return e=new Masonry(t,{itemSelector:".examples__item",columnWidth:".examples__sizer",percentPosition:!0,isAnimated:!0,animationOptions:{duration:750,easing:"linear",queue:!1}})})}):void 0},$(window).on("load resize",function(){return e(),console.log("Resize")}),$(function(){return $("a[data-rel^=lightcase]").lightcase({maxWidth:1870,navigateEndless:!1,maxWidth:1920,maxHeight:1280,transition:"scrollHorizontal",labels:{"sequenceInfo.of":" из "},onFinish:{reDraw:function(){return $(".lightcase-contentInner").hide().show(0)}}})}),$("body").flowtype({minimum:320,maximum:2560,minFont:15,maxFont:24,fontRatio:85}),$(window).scroll(function(){return $(document).height()<=$(window).height()+$(window).scrollTop()+$(".footer").height()?$("#arrow-up").addClass("active"):$("#arrow-up").removeClass("active")}),$(".form-phone").mask("+7 (000) 000-00-00"),$.validate({form:"form",modules:"toggleDisabled",disabledFormFilter:"form.callback-form",validateOnBlur:!1}),$(".datepicker").pickadate({selectMonths:!0,selectYears:3,labelMonthNext:"Следующий месяц",labelMonthPrev:"Прошлый месяц",labelMonthSelect:"Выберете месяц",labelYearSelect:"Выберете год",monthsFull:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],monthsShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],weekdaysFull:["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],weekdaysShort:["Вск","Пнд","Втр","Срд","Чтв","Птн","Сбт"],weekdaysLetter:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],today:"Сегодня",clear:"Очистить",close:"Закрыть",format:"dd.mm.yyyy",onSet:function(e){return e.select?this.close():void 0},firstDay:1,min:new Date}),$(".modal-trigger").leanModal(),$(".lazy").length&&$("img.lazy").lazyload({effect:"fadeIn"}),$(window).on("load resize",function(){return $(document).width()>600&&setTimeout(function(){return $(window).enllax(),$(".full-width-img").imageScroll({mediaWidth:2540,mediaHeight:1014})},100),$(window).width()<992&&$(".footer").find(".map").length&&$(".footer").css({"margin-top":"5.75em"}),$(window).width()<600&&$(".footer").find(".map").length?$(".footer").css({"margin-top":"5em"}):void 0}),$(".button-collapse").sideNav({edge:"right",closeOnClick:!0}),t=$(".menu-center").find("a.link"),t.each(function(){return this.innerHTML="<span>"+this.innerHTML.split("").join("</span><span>")+"</span>"}),i=$(".menu-center li>a.link"),i.each(function(){var e,t;return e=$(this).find("span"),t=e.length,e.each(function(e,i){var n;return" "===this.textContent&&(this.innerHTML="&nbsp;"),n=function(e,t){var i,n;return i=100*e/t,n=.5*i/100},$(this).css({"transition-delay":n(e,t)+"s"})})}),$(window).load(function(){return $(".spinner").fadeOut(),$("#page-preloader").delay(350).fadeOut("slow")}),smoothScroll.init({speed:1e3,easing:"easeInOutCubic",offset:0,updateURL:!1}),$(".social").find("a").each(function(){return $(this).hover(function(){return $(this).find("span").addClass("active")},function(){return $(this).find("span").removeClass("active")})}),$(window).on("load resize",function(){var e;if(e=$(".header-background__video").data("vide"),$(window).width()>1025){if($(".header-background__video").height($(window).height()),!$(".header-background__video").hasClass("disabled"))return e.resize()}else if($(".header-background__video").height($(window).width()/1.78),!$(".header-background__video").hasClass("disabled"))return e.resize()})}).call(this);
$(window).load(function() {
	window.cur_img = $('.examples__item').length;
	if (!$('#portfolio_inner').length) return;
  //window.img_in_line = $('.examples__item:eq(3)').position().top ? 3 : 6;
  add_next_img = function(){
  	var w = $(window).width();
  	switch (true){
  		case (w<600): window.img_in_line=2; break;
  		case (w<1280): window.img_in_line=3; break;
  		default: window.img_in_line=6;
  	}
    $.get(location.href + '?ajax=1&l=1&o=' + (window.cur_img+1),function(answer){
      if (answer) {
        $('.examples__item:last').after(answer);
        $d =  $('.examples__item:last');
        $d.attr('style',$('.examples__item:eq(' + (window.cur_img % window.img_in_line) + ')').attr('style'));
        var l = $('.examples__item').length;
        var line_count = Math.floor(l / window.img_in_line);
        if (l % window.img_in_line === 0) line_count--;
        var h = parseInt($d.css('height'));
        var t = line_count * h;
        $d.css('top',t);
        $('.examples__item:last img').bttrlazyloading();
        $('.examples__item:last a[data-rel^=lightcase]').lightcase(
          {maxWidth:1870,navigateEndless:!1,maxWidth:1920,maxHeight:1280,transition:"scrollHorizontal"
          ,labels:{"sequenceInfo.of":" из "}
          ,onFinish:{reDraw:function(){return $(".lightcase-contentInner").hide().show(0)}}}
        );
        $('.examples').css('height',Math.ceil(l / window.img_in_line) * h);
        window.cur_img++;
        add_next_img();
      }
    });
  }
  add_next_img();
});