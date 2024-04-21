// スクロール毎にふわっとさせる
// 対象は(.box, .text, .text80)


$(function() {
    // アラートを利用するとjsが反映されているかがすぐわかる
    alert();
    // スクロールしたとき
    $(window).scroll(function() {
        // スクロール量を取得
        const scroll = $(window).scrollTop();
        // 画面の高さを取得
        const windowHeight = $(window).height();
        // 各.boxに対して処理を行う
        $(".box, .text, .text80").each(function() {
            // それぞれの.boxの上端の座標を取得
            const boxTop = $(this).offset().top;
            // 条件を満たす場合はis-activeクラスを付与し、そうでない場合は削除する
            if (scroll + windowHeight > boxTop + 300) {
                $(this).addClass("is-active");
            } else {
                $(this).removeClass("is-active");
            }
        });
    });
});

// slideup, slidedown