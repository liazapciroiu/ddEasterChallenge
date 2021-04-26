// pikachu hello

/* All rights and trademarks for "Pikachu" belong to Nintendo, Inc. */
/* The original source comes from here: */
/* https://github.com/WeiChiaChang/easter-egg-collection */

export function pikachu(window) {
  "use strict";

  var key = [80, 73, 75, 65, 67, 72, 85];
  var ck = 0;
  var max = key.length;

  var pikachu = function () {

    var shock = document.createElement('div');
    var img = new Image;
    img.src = data;
    img.style.width = '250px';
    img.style.height = '149px';
    img.style.transition = '1s all';
    img.style.position = 'fixed';
    img.style.left = 'calc(50% - 125px)';
    img.style.bottom = '-149px';
    img.style.zIndex = 999999;

    document.body.appendChild(img);

    window.setTimeout(function () {
      img.style.bottom = '0px';
    }, 50);

    window.setTimeout(function () {
      shock.style.width = "100%";
      shock.style.height = "100%";
      shock.style.left = 0;
      shock.style.top = 0;
      shock.style.position = "fixed";
      shock.style.zIndex = 9999999;
      shock.style.background = '#ebd834';
      shock.style.opacity = 0;

      document.body.appendChild(shock);

      for (var x = 0; x < 25; x++) {
        (function (x) {
          window.setTimeout(function () {
            if (x % 2 === 0) {
              shock.style.opacity = 0;
            } else {
              shock.style.opacity = 0.5;
            }
          }, x * 25);
        })(x)
      }

    }, 1500);

    window.setTimeout(function () {
      img.style.bottom = '-149px';
    }, 2300);
    window.setTimeout(function () {
      img.parentNode.removeChild(img);
      shock.parentNode.removeChild(shock);
    }, 3400);

  };

  var record = function (e) {

    if (e.which === key[ck]) {
      ck++;
    } else {
      ck = 0;
    }

    if (ck >= max) {
      pikachu();
      ck = 0;
    }

  };

  var init = function (data) {

    document.addEventListener('keyup', record);

  };

  var data = "https://i.imgur.com/hALdLiE.gif";

  init(data);

};
