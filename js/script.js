// JavaScript Document
$(function(){
	//header
    $('header').load('common.html .header', function(){	    
    	// header 進場
		/*選單高度*/
		function rwdHeaderH(){
			var headerH = $('header').outerHeight();			
			$('.main').css({'padding-top':headerH});		
		}
		$(window).on('resize' ,function(){
			rwdHeaderH();
		})
		$(document).ready(function() {
			rwdHeaderH();
		});
		//選單至頂
		var previousScroll = 0;
	    $('header').removeClass('hide');
	    //頁面滑動時，TOP的變化
	    $(window).scroll(function(){
	      var theEnd = $(document).height()-$(window).height()-100; //內容到底時
	      var currentScroll = $(this).scrollTop();//偵測滑鼠行為	      
	      if( currentScroll < previousScroll) {
	        $('header').stop().removeClass('hide'); //如果頁面往上顯示選單
	      } if( currentScroll > previousScroll) {
	        $('header').stop().addClass('hide'); //如果頁面往下隱藏選單
	      } if($(window).scrollTop()>=theEnd){
	        $('header').stop().delay(500).removeClass('hide'); //如果頁面到底顯示選單
	      } if($(window).scrollTop() < 10){
	        $('header').stop().removeClass('hide'); //如果頁面到頂顯示選單
	      }
	      previousScroll = currentScroll;
	    })	    
    }); 

	//footer
    $('footer').load('common.html .footer', function(){
        //按鈕 TOP
        $('.btn-top').click(function() {
            $('html,body').animate({scrollTop:0},900)
        });
    });

    //popup
	$('.popup .close').click(function(){
	    $('.popup').removeClass('on');
	 	}).children().click(function(){
		});
	// loading
	$(window).on('load',function(){  //頁面物件載入完畢
      $(".loading").fadeOut();  //關閉 loading
      });

	$('.owl-carousel.slider').owlCarousel({
		    items: 1,
		    margin: 32,
		    loop: true,
		    nav: true,
		    autoplay:true,
  		    autoplayTimeout:2000,
		});
		$('.owl-carousel').owlCarousel({
		    items: 4,
		    margin: 32,
		    loop: true,
		    nav: true,
		    autoplay:true,
  		    autoplayTimeout:2000,
		});

		$(window).scroll(function() {
			// var screenheight = $(this).height();
			var scrolledpx = $(this).scrollTop();
			if(scrolledpx >= 100){
				$('.age').addClass('active');
			}else{
				$('.age').removeClass('active');
			}
			if(scrolledpx >= 300){
				$('.header').addClass('active');
			}else{
				$('.header').removeClass('active');
			}					
		});

		// JavaScript 進場效果
		// 共用的數值
		window.sr = ScrollReveal({
			// 速度
			duration: 800,
			// 距離
			distance: '100px',
			// 重複播放
			reset: true,
			// 初始定位 origin:'left'
		});
		sr.reveal('.js-moveInUp');
		sr.reveal('.js-moveInRight',{origin:'left'});
		sr.reveal('.js-moveInLeft',{origin:'right'});
		// 進場時間差
		sr.reveal('.event .js-moveInUp',100);
		// sr.reveal('.logo-moveInUp',{
		// 	duration: 800,
		// 	distance: '24px',
		// 	reset: false,
		// 	origin:'bottom',
		// });


		//燈箱效果fancybox option
		$('[data-fancybox]').fancybox({
			buttons : [
			// 'slideShow',
        	// 'fullScreen',
        	'thumbs',
            // 'share',
       		//'download',
     		//'zoom',
        	'close'],
		});


		// 視差滾動效果
		var rellax = new Rellax('.rellax', {
 		  center: true
		});

});

