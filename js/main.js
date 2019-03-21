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


    var deferredPrompt;
    window.addEventListener('beforeinstallprompt', (event) => {
        // Prevent Chrome <= 67 from automatically showing the prompt
        event.preventDefault();
        // Stash the event so it can be triggered later.
        installPromptEvent = event;
        // Update the install UI to notify the user app can be installed
        document.querySelector('#install-button').disabled = false;
      });

      btnInstall.addEventListener('click', () => {
        // Update the install UI to remove the install button
        document.querySelector('#install-button').disabled = true;
        // Show the modal add to home screen dialog
        installPromptEvent.prompt();
        // Wait for the user to respond to the prompt
        installPromptEvent.userChoice.then((choice) => {
          if (choice.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
          } else {
            console.log('User dismissed the A2HS prompt');
          }
          // Clear the saved prompt since it can't be used again
          installPromptEvent = null;
        });
      });

});

$(window).scroll(function () {

}); 