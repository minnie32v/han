$(function(){
var containerEl = document.querySelector('.container');

var mixer = mixitup(containerEl, {
	pagination: { limit: 9 },  //一頁最多9個
	animation: { enable: false }, //關閉動態
	callbacks: {
        onMixEnd: function(state) {
             $('html,body').animate({scrollTop:0},400); //換頁後置頂
        }
    }
});

});