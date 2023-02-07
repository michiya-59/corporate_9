$(function(){
  $('.imgae_slider').slick({
    autoplay: true,         //自動再生
    autoplaySpeed: 2000,    //自動再生のスピード
    speed: 800,             //スライドするスピード
    dots: true,             //スライドしたのドット
    arrows: true,           //左右の矢印
    infinite: true,         //スライドのループ
    pauseOnHover: false, 
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3, // 画面幅750px以下でスライド3枚表示
        }
      }
    ]
  });
});