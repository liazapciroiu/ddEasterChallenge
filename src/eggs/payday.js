export function payday(window) {
    "use strict";

    var key = [80, 65, 89, 68, 65, 89];
    var ck = 0;
    var max = key.length;
    var imgC = document.createElement('div')
    var img = new Image;
    var taxes = document.createElement('div')
    var coins = new Image;

    var payday = function() {

        img.src = "../assets/images/money-cloud.gif";;
        img.style.width = 'auto';
        img.style.height = '50vh';
        img.style.position = 'fixed';
        img.style.left = 'calc(50% - 25vh)';
        img.style.top = '0';
        img.style.transform = 'rotateZ(-15deg)';
        img.style.zIndex = 999998;

        taxes.className = "taxes"
        taxes.innerHTML = 'TAXES'
        taxes.style.width = '100%'
        taxes.style.padding = '50px 0px 50px 0px'
        taxes.style.background = 'black'
        taxes.style.top = 'calc(50% - 100px)'
        taxes.style.left = '0';
        taxes.style.color = 'white'
        taxes.style.position = 'fixed'
        taxes.style.display = 'block'
        taxes.style['text-align'] = 'center'
        taxes.style['font-size'] = '50px'
        taxes.style.zIndex = 999999;
        taxes.style.backgroundImage = "url('../assets/images/money-grinder.png')";

        coins.src = '../assets/images/coins-falling.gif';
        coins.style.width = 'auto';
        coins.style.height = '50vh';
        coins.style.top = '50vh';
        coins.style.position = 'fixed';
        coins.style.left = 'calc(50% - 25vh)';
        coins.style.zIndex = 999998;

        document.body.appendChild(imgC);
        document.body.appendChild(img);
        document.body.appendChild(taxes);
        document.body.appendChild(coins);

        window.setTimeout(function() {
            img.style.clip = 'rect(0px,60px,200px,0px);';
        }, 1000);

        window.setTimeout(function() {
            img.parentNode.removeChild(img);
            taxes.parentNode.removeChild(taxes);
            coins.parentNode.removeChild(coins);
        }, 12000);

    };

    var exit = () => {
        img.parentNode.removeChild(img);
        taxes.parentNode.removeChild(taxes);
        coins.parentNode.removeChild(coins);
    }

    var record = function(e) {

        if (e.which === key[ck]) {
            ck++;
        } else {
            ck = 0;
        }

        if (ck >= max) {
            payday();
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