export function rocket(window) {
    "use strict";

    var key = [82, 79, 67, 75, 69, 84];
    var ck = 0;
    var max = key.length;
    var fire = new Image;
    var icon = document.querySelector('.icon')
    var iconTop = 0;
    var fireTop = 161;
    var audioTakeOff = new Audio('../assets/audio/rocket-sound.wav');
    var audioLanding = new Audio('../assets/audio/rocket-landing.wav');
    var audioFire = new Audio('../assets/audio/rocket-fire.wav');

    var rocket = function() {

        fire.src = "../assets/images/rocket-fire.gif";;
        fire.style.width = '50px';
        fire.style.height = '100px';
        fire.style.transition = '3.8s';
        fire.style.transform = 'rotate(180deg)';
        fire.style.position = 'absolute';
        fire.style.left = 'calc(50% - 32px)';
        fire.style.top = `${fireTop}px`
        fire.style.zIndex = 999998;

        icon.style.transition = '3.8s'
        icon.style.top = `${iconTop}px`
        icon.style.position = 'relative'

        document.body.appendChild(fire);
        audioFire.play()

        window.setTimeout(function() {
            icon.style.top = `${iconTop - 350}px`
            fire.style.top = `${fireTop - 350}px`
            audioTakeOff.play()
        }, 700);

        window.setTimeout(function() {
            fire.parentNode.removeChild(fire);
            icon.style.transition = '6s'
            icon.style.top = `${iconTop}px`
            audioTakeOff.pause()
            audioLanding.play()
        }, 4000);

    };

    var exit = () => {
        fire.parentNode.removeChild(fire);
        icon.style.top = `${iconTop}px`
    }

    var record = function(e) {

        if (e.which === key[ck]) {
            ck++;
        } else {
            ck = 0;
        }

        if (ck >= max) {
            rocket();
            ck = 0;
        }

        if (e.which == 27) {
            exit()
        }
    };

    var init = function() {
        document.addEventListener('keyup', record);
    };

    init();

};