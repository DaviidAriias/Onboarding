function DetectMobile() {
    var iPhone = /iphone/i.test(navigator.userAgent.toLowerCase());
    var Android = /android/i.test(navigator.userAgent.toLowerCase());
    if (iPhone) {
        //console.log('iOS');
        $('.render-iPhone').show();
        $('.render-android').hide();
        $('.alert-iPhone').show();
    }
    else if (Android) {
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
        $('body').css('overflow-y', 'auto');
    } else {
        //console.log('Landscape');
        $('.landscape-alert').show();
        $('body').css('overflow-y', 'hidden');
    }
}

function calcHeight() {
    if ($(window).width() <= 250) {
        console.log("Minny");
        $('.applayout-1').attr("src", "../images/image-AppInversiones-screen1.png");
    } else {
        console.log("Biggy");
        $('.applayout-1').attr("src", "../images/image-AppInversiones-screen1-Responsive.jpg");
    }
}

$(document).ready(function () {
    console.log('Window ready | JS');

    DetectMobile();
    detetcOrientation();

});

$(window).resize(function () {
    DetectMobile();
    detetcOrientation();
    //calcHeight();
});

$(window).on("load", function () {
    DetectMobile();
    detetcOrientation();

    //Ejecución de los Swipers
    setTimeout(function () {
        //$("html, body").animate({ scrollTop: 190}, 1000);
    }, 1000);

    setTimeout(function () {
        swipersMobile();
    }, 1400);


    //Onboarding
    $('.swiper-container-iframes').addClass('animated fadeInLeft');
    $('.alert-iPhone').addClass('animated fadeIn delay-5s');


    $('.btn-home').addClass('animated fadeInUp delay-2s');

    function swipersMobile() {
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
                    $('.play-ios').css('opacity', '9')
                }
            }
        });

        $('.play-btn').click(function () {
            SwiperIOS.autoplay.start();
            $('.play-btn').css('opacity', '0');
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
                    $('.play-android').css('opacity', '9')
                }
            }
        });

        $('.play-btn').click(function () {
            SwiperAndroid.autoplay.start();
            $('.play-btn').css('opacity', '0');
        });
    }

});

$(window).scroll(function () {

}); 

    let deferredPrompt;
    const addBtn = document.querySelector('.add-button');
    addBtn.style.display = 'none';

    window.addEventListener('beforeinstallprompt', (e) => {
        // Prevent Chrome 67 and earlier from automatically showing the prompt
        e.preventDefault();
        // Stash the event so it can be triggered later.
        deferredPrompt = e;
        // Update UI to notify the user they can add to home screen
        addBtn.style.display = 'block';
      
        addBtn.addEventListener('click', (e) => {
          // hide our user interface that shows our A2HS button
          addBtn.style.display = 'none';
          // Show the prompt
          deferredPrompt.prompt();
          // Wait for the user to respond to the prompt
          deferredPrompt.userChoice.then((choiceResult) => {
              if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
              } else {
                console.log('User dismissed the A2HS prompt');
              }
              deferredPrompt = null;
            });
        });
      });