function DetectMobile(){
    var iPhone = /iphone/i.test(navigator.userAgent.toLowerCase());
    var Android = /android/i.test(navigator.userAgent.toLowerCase());
    if (iPhone){
        //console.log('iOS');
        $('.render-iPhone').show();
        $('.render-android').hide();
        $('.alert-iPhone').show();
    }
    else if (Android){
        //console.log('Android');
        $('.render-iPhone').hide();
        $('.render-android').show();
        $('.alert-iPhone').hide();
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
    
    var SwiperIOS = new Swiper('.swp-IOS', {
        effect: 'fade',
        loop: true,
        spaceBetween: 30,
        followFinger: true,
        speed: 500,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        on: {
            reachEnd: () => {
                (SwiperIOS).autoplay.stop();
                $('.play-btn').css('opacity','9')
            }
        }
    });
    
    $('.play-btn').click(function(){
        SwiperIOS.autoplay.start();
        $('.play-btn').css('opacity','0');
    });

    var SwiperAndroid = new Swiper('.swp-Android', {
        effect: 'fade',
        loop: true,
        spaceBetween: 30,
        followFinger: true,
        speed: 500,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        on: {
            reachEnd: () => {
                (SwiperAndroid).autoplay.stop();
                $('.play-btn').css('opacity','9')
            }
        }
    });
    
    $('.play-btn').click(function(){
        SwiperAndroid.autoplay.start();
        $('.play-btn').css('opacity','0');
    });

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

    $('.swiper-container-iframes').addClass('animated fadeInLeft');
    $('.alert-iPhone').addClass('animated fadeIn delay-5s');

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