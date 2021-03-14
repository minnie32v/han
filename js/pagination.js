$(function(){
    var containerEl = document.querySelector('.container');
    window.mixer = mixitup(containerEl, {
        pagination: { limit: 9 },  //一頁最多9個
        callbacks: {
            onMixClick: function (state, originalEvent) {
                    // 點選分類時，先把沒有資料的 label 隱藏
                $("#noData").hide();
            },
            onMixEnd: function (state) {
                $('html,body').animate({ scrollTop: 0 }, 400); //換頁後置頂

                 // 當顯示項目小於等於0, 顯示沒有資料 label
                if (state.matching.length <= 0) {
                    $("#noData").show();
                    $('.controls-pagination').hide();
                } else {
                    $('.controls-pagination').show();
                }
            }
        }
    });
});