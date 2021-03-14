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

	//function popup_video(){
	//	var videoActive = $('.video_list li a');
	//    //開啟影片 POPUP
	//    videoActive.click(function() {
	//    	var embedNum = $(this).data('youtube');  //讀取 HTML 的影片編號 (data-youtube )
	//    	$('.video iframe').attr('src','https://www.youtube.com/embed/'+embedNum+'?rel=0&amp;showinfo=0;autoplay=1');
	//    	$('.popup').stop().addClass('on');

	//	    //算是第幾支影片
	//	    var num = $(this).parent().prevAll().length;
	//	    $('.video_block h3 span').text(num+1);


	//    });

	//    // 影片輪播按鈕
	//    $('.arrow').on('click',function(){
	//    	var num = parseInt($('.video_block h3 span').text());
	//    	if( $(this).hasClass('prev') ){
	//    		if( num <= 1 ){ //如果是第一支影片
	//    			num = videoActive.length; //則跳到最後一支影片
	//    		}else{
	//    			num--;
	//    		}
	//    		videoReset();
	//    	}else{
	//    		if( num >= videoActive.length ){ //如果是最後一支影片
	//    			num = 1;  //則跳到第一支影片
	//    		}else{
	//    			num++;
	//    		}
	//    		videoReset();
	//    	}
	//	    //更新影片
	//	    function videoReset(){ 
	//	    	var embedNum = videoActive.eq(num-1).data('youtube');
	//	    	$('.video_block h3 span').text(num);
	//	    	$('.video iframe').attr('src','https://www.youtube.com/embed/'+embedNum+'?rel=0&amp;showinfo=0;autoplay=1');
	//	    	console.log(num ,embedNum,videoActive.index());
	//	    };
	//    });


	//    //關閉影片 POPUP
	//    //除了 POPUP 內容物，點選範圍都可以關閉跳窗
	//    $('.popup ,.popup .close').click(function(){
	//    	$('.popup').removeClass('on');
	//    	$('.video iframe').removeAttr('src');

	//    }).children().click(function(){
	//	  	return false;
	//	});
	//};
    //popup_video();

});

