function DetectMobile(){
    var iPhone = /iphone/i.test(navigator.userAgent.toLowerCase());
    var Android = /android/i.test(navigator.userAgent.toLowerCase());
    if (iPhone){
        //console.log('iOS');
        $('.render-iPhone').show();
        $('.render-android').hide();
        $('.alert-iPhone').show();

        $('.on-boarding-modal-Android').css('visibility','hidden');

        $('.btn-home').click(function(){
            //console.log('Click');
            $('.on-boarding-modal-iPhone').css('visibility','visible');
        });
        $('.close_modal').click(function(){
            $('.on-boarding-modal-iPhone').css('visibility','hidden');
        });
    }
    else if (Android){
        //console.log('Android');
        $('.render-iPhone').hide();
        $('.render-android').show();
        $('.alert-iPhone').hide();

        $('.on-boarding-modal-iPhone').css('visibility','hidden');

        $('.btn-home').click(function(){
            //console.log('Click');
            $('.on-boarding-modal-Android').css('visibility','visible');
        });
        $('.close_modal').click(function(){
            $('.on-boarding-modal-Android').css('visibility','hidden');
        });
    }

}
 
function detetcOrientation() {
    if (window.innerHeight > window.innerWidth) {
        //console.log('Portrait');
        $('.landscape-alert').hide();
        $('body').css('overflow-y','auto');
    } else {
        //console.log('Landscape');
        $('.landscape-alert').show();
        $('body').css('overflow-y','hidden');
    }
}

function calcHeight(){
    if ($(window).width() <= 250) {  
        console.log("Minny");
        $('.applayout-1').attr("src","../images/image-AppInversiones-screen1.png");
    }else{
        console.log("Biggy");
        $('.applayout-1').attr("src","../images/image-AppInversiones-screen1-Responsive.jpg");
    }
}

$( document ).ready(function() {
    console.log('Window ready | JS');

    DetectMobile();
    detetcOrientation();
    //calcHeight();
    var SwiperiPhone = new Swiper('.swiper-container-iPhone', {
        effect: 'slide',
        parallax: true,
        followFinger: true,
        speed: 1000,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    var SwiperAppInterna = new Swiper('.swiper-on-boarding-int', {
        effect: 'slide',
        parallax: true,
        followFinger: true,
        speed: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    var SwiperiFrames = new Swiper('.swiper-container-iframes');
    
    function swiperPhone(){
        var SwiperiFrames = new Swiper('.swiper-container-iframes', {
            effect: 'fade',
            spaceBetween: 30,
            centeredSlides: true,
            followFinger: true,
            speed: 800,
            autoplay: {
                delay: 1000,
                disableOnInteraction: false,
            },
        });
    }
    setTimeout(swiperPhone(), 5000);
});

$( window ).resize(function() {
    DetectMobile();
    detetcOrientation();
    //calcHeight();
});

$(window).on("load", function() {
    DetectMobile();
    detetcOrientation();

    //Onboarding
    $('.render-android img:nth-of-type(1)').addClass('animated fadeInLeft delay-0.99s');
    $('.render-android img:nth-of-type(2)').addClass('animated fadeInRight delay-1s');
    $('.render-android img:nth-of-type(3)').addClass('animated fadeInDown delay-2s');

    $('.swiper-container-iframes').addClass('animated fadeInUp');
    $('.alert-iPhone').addClass('animated fadeIn delay-1s');

    $('.render-iPhone img:nth-of-type(1)').addClass('animated fadeInLeft delay-0.99s');
    $('.render-iPhone img:nth-of-type(2)').addClass('animated fadeInRight delay-1s');
    $('.render-iPhone img:nth-of-type(3)').addClass('animated fadeInDown delay-2s');

    $('.btn-home').addClass('animated fadeInUp delay-2s');
    
    //Home Page
    $('.home-app h1').addClass('animated fadeInDown delay-1.3s');
    $('.home-app img').addClass('animated fadeInDown delay-1s');
    $('.home-app span').addClass('animated fadeInUp delay-1s');
    $('.home-app a').addClass('animated fadeInUp delay-2s');
});

$(window).scroll(function(){

}); 