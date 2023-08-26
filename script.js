const loadingArea = document.querySelector('#loading');
const loadingArea2 = document.querySelector('#loading-screen');
const loadingLogo = document.querySelector('.sk-circle');

window.addEventListener('load', () => {
    loadingArea.animate(
        {
            opacity: [1, 0],
            visibility: 'hidden',
        },
        {
            duration: 2000,
            delay: 1200,
            easing: 'ease',
            fill: 'forwards',
        },
    loadingArea2.animate(
        {
            translate: ['0 100vh', '0 0', '0 -100vh']
        },
        {
            duration: 2000,
            delay: 800,
            easing: 'ease',
            fill: 'forwards',
        }
    )
    );
});

// const mySwiper = new Swiper ('.swiper', {
//     // 以下にオプションを設定
//     loop: true, //最後に達したら先頭に戻る
//     slidesPerView: '2', //何枚表示するか
//     speed: 2000, // スライドアニメーションのスピード（ミリ秒）
//     centeredSlides : true,
//      autoplay: { //自動再生する
//          delay: 2500, //次のスライドに切り替わるまでの時間
//        disableOnInteraction: false, //ユーザーが操作したら止めるか
//        waitForTransition: false, // アニメーションの間にスライドを止めるか
//     },
//     //ページネーション表示の設定
//     pagination: { 
//       el: '.swiper-pagination', //ページネーション要素のクラス名
//       clickable: true, //クリック可能にするか
//       type: 'bullets', //ページネーションの種類
//     },
//     //ナビゲーションボタン（矢印）表示の設定
//     navigation: { 
//       nextEl: '.swiper-button-next', //「次へボタン」要素のクラス名
//       prevEl: '.swiper-button-prev', //「前へボタン」要素のクラス名
//     },
// });

const mySwiper = new Swiper ('.swiper', {
    parallax: true, //パララックスにするか
    speed: 1500,
    autoplay: { //自動再生する
       delay: 5000, //次のスライドに切り替わるまでの時間
    },
    allowTouchMove: true, //フリック可能にするか
    loop: true, //最後に達したら先頭に戻る
    centeredSlides : true, // アクティブなスライドをセンターにするか
});