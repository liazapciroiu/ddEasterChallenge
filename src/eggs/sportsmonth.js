export function sportsmonth(window) {
  "use strict";

  var key = [83, 80, 79, 82, 84];
  var ck = 0;
  var max = key.length;

  const audio = new Audio(`../assets/audio/tom_and_jerry_theme.mp3`);
  const audio2 = new Audio(`../assets/audio/metro-goldwyn-mayer-intro-hd.mp3`);

  var imgLogoData = "./assets/images/sports-community.png";
  var imgLogo = new Image;

  var createSportsCommunityLogo = function (hideAfterSeconds, removeAfterSeconds) {
    imgLogo.src = imgLogoData;
    imgLogo.style.width = '350px';
    imgLogo.style.transition = '1s all';
    imgLogo.style.position = 'fixed';
    imgLogo.style.bottom = '150px';
    imgLogo.style.left = '0px';
    imgLogo.style.margin = '50px';
    imgLogo.style.zIndex = 999999;

    document.body.appendChild(imgLogo);

    window.setTimeout(function () {
    imgLogo.style.bottom = '0px';
    imgLogo.style.left = '0px';
    }, 50);
    window.setTimeout(function () {
      imgLogo.style.bottom = '-250px';
    }, hideAfterSeconds);
    window.setTimeout(function () {
      imgLogo.parentNode.removeChild(img);
    }, removeAfterSeconds);
  };

  var stanOnBike = function () {
    var imgData = "https://c.tenor.com/EqxpI6Yn2FkAAAAj/biking-butters.gif";
    
    var img = new Image;
    img.src = imgData;
    img.style.width = '200px';
    img.style.transition = '0.5s all';
    img.style.position = 'fixed';
    img.style.left = 'calc(75%)';
    img.style.bottom = '-200px';
    img.style.zIndex = 999999;

    document.body.appendChild(img);

    window.setTimeout(function () {
      img.style.bottom = '0px';
    }, 20);

    window.setTimeout(function () {
      img.style.bottom = '-250px';
    }, 3300);
    window.setTimeout(function () {
      img.parentNode.removeChild(img);
    }, 4500);
  };

  var createSportsCommunityBigLogo = function () {
    createSportsCommunityLogo(2000, 3000);
    imgLogo.style.width = '800px';
    imgLogo.style.transition = '0.6s all';
    imgLogo.style.position = 'fixed';
    imgLogo.style.bottom = '-900px';
    imgLogo.style.right = '-600px';
    imgLogo.style.zIndex = 999999;

    document.body.appendChild(imgLogo);

    window.setTimeout(function () {
      imgLogo.style.bottom = '50%';
      imgLogo.style.right = '50%';
    }, 50);
  };

  var createShok = function () {
    var shock = document.createElement('div');

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
  };

  var rollerSkatePassing = function () {
    var imgData = "https://roller-bomb.com/wp-content/uploads/2021/01/skate-gif.gif";

    var shock = document.createElement('div');
    var img = new Image();
    img.src = imgData;
    img.style.width = '250px';
    img.style.transition = '7s all';
    img.style.position = 'fixed';
    img.style.right = '-374px';
    img.style.bottom = 'calc(-50% + 280px)';
    img.style.top = '50px';
    img.style.zIndex = 999999;

    document.body.appendChild(img);

    window.setTimeout(function () {
      img.style.right = 'calc(100% + 500px)';
    }, 50);

    window.setTimeout(function () {
      img.parentNode.removeChild(img);
    }, 10300);

  };

  var rollerSkateScheme = function () {
    var data = "https://i.giphy.com/media/TL19esb8Jg59Vg2VJs/giphy.webp";

    var img = new Image;
    img.src = data;
    img.style.height = '200px';
    img.style.transition = '1s all';
    img.style.position = 'fixed';
    img.style.right = '200px';
    img.style.top = '100px';
    img.style.zIndex = 999999;

    document.body.appendChild(img);

    window.setTimeout(function () {
      img.parentNode.removeChild(img);
    }, 2000);
  };

  let runningMarathon = function () {
    var data = "https://media.tenor.com/images/e53905912a05e97294ba68bca872928b/tenor.gif";

    var img = new Image();
    img.src = data;
    img.style.width = '350px';
    img.style.transition = '3s all linear';
    img.style.position = 'fixed';
    img.style.left = '-400px';
    img.style.top = '0px';
    img.style.zIndex = 999999;

    document.body.appendChild(img);

    window.setTimeout(function () {
      img.style.left = 'calc(100% + 500px)'
    }, 50)

    window.setTimeout(function () {
      img.parentNode.removeChild(img)
    }, 8000)

  }

  let cartmanOnBike = function () {
    var data = "https://media4.giphy.com/media/l3vRfCIHNQgozIJTG/giphy.gif?cid=790b76112bb004ccabab572da9c531cf3302e00972dd6d6d&rid=giphy.gif&ct=g";

    var img = new Image()
    img.src = data
    img.style.width = '535px'
    img.style.transition = '5s all linear'
    img.style.position = 'fixed'
    img.style.right = '-400px'
    img.style.bottom = '-20px'
    img.style.zIndex = 999999

    document.body.appendChild(img)

    window.setTimeout(function () {
      img.style.right = 'calc(100% + 500px)'
    }, 300)

    window.setTimeout(function () {
      img.parentNode.removeChild(img)
    }, 8000)

  }

  let edRunning = function () {
    var data = "https://media4.giphy.com/media/pVtulZdJsUuCQ/giphy.gif?cid=790b761129cf222b6a213fa508def3d87d051e80afe561a7&rid=giphy.gif&ct=g";

    var img = new Image()
    img.src = data
    img.style.width = '400px'
    img.style.transition = '5.3s all linear'
    img.style.position = 'fixed'
    img.style.right = '-800px'
    img.style.bottom = '-20px'
    img.style.zIndex = 999999

    document.body.appendChild(img)

    window.setTimeout(function () {
      img.style.right = 'calc(100% + 500px)'
    }, 600)

    window.setTimeout(function () {
      img.parentNode.removeChild(img)
    }, 8000)
  }

  var morthyBeingMorthy = function () {
    var data = "https://images.squarespace-cdn.com/content/v1/528252b7e4b00150d03a4848/1503802780040-VI7XNTX2553X5LU8TW82/RickAndMorty_MortyRunning1500.gif?format=2500w";
    var img = new Image();
    img.src = data;
    img.style.width = '350px';
    img.style.transition = '7s all';
    img.style.position = 'fixed';
    img.style.left = '-374px';
    img.style.top = '100px';
    img.style.zIndex = 999999;

    document.body.appendChild(img);

    window.setTimeout(function () {
      img.style.left = 'calc(100% + 500px)';
    }, 50);

    window.setTimeout(function () {
      img.parentNode.removeChild(img);
    }, 10300);

  };

  var meditateOnFire = function () {
    var data = "https://media0.giphy.com/media/209KCwPntVIHsr5iIy/giphy.gif?cid=790b76116735bc226d01bdc5e844d4c6d6137ab6fc69ca3e&rid=giphy.gif&ct=g";
    var img = new Image();
    img.src = data;
    img.style.width = '374px';
    img.style.transition = '3s all';
    img.style.position = 'fixed';
    img.style.top = '-774px';
    img.style.bottom = 'calc(-50% + 450px)';
    img.style.left = '200px';
    img.style.zIndex = 999999;

    document.body.appendChild(img);

    window.setTimeout(function () {
      img.style.top = 'calc(50% - 187px)';
    }, 1050);

    window.setTimeout(function () {
      img.style.top = 'calc(100% + 375px)';
    }, 4000);
    window.setTimeout(function () {
      img.parentNode.removeChild(img);
    }, 8300);
  };

  var skateWithDalmatian = function () {
    var imgData = "https://media4.giphy.com/media/5sYvTOAV5tt6f8nfZW/giphy.gif?cid=790b7611c96cfc53e24b52a69e655a6459548fd3c3cc1a64&rid=giphy.gif&ct=g"
    
    var img = new Image;
    img.src = imgData;
    img.style.width = '600px';
    img.style.transition = '0.5s all';
    img.style.position = 'fixed';
    img.style.bottom = 'calc(75%)';
    img.style.left = '-200px';
    img.style.zIndex = 999999;

    document.body.appendChild(img);

    window.setTimeout(function () {
      img.style.left = '50px';
      img.style.top = '150px';
    }, 20);

    window.setTimeout(function () {
      img.parentNode.removeChild(img);
    }, 2000);
  };

  var skateWord = function () {
    var data = "./assets/images/skate.gif";
    
    var img = new Image;
    img.src = data;
    img.style.width = '200px';
    img.style.transition = '0.6s all';
    img.style.position = 'fixed';
    img.style.bottom = 'calc(75%)';
    img.style.left = '-100px';
    img.style.zIndex = 999999;

    document.body.appendChild(img);

    window.setTimeout(function () {
      img.style.left = '200px';
      img.style.top = '500px';
    }, 20);

    window.setTimeout(function () {
      img.parentNode.removeChild(img);
    }, 2000);
  };

  var runForest = function () {
    var data = "http://www.runforrestrun.pt/assets/images/logo.png";

    var img = new Image;
    img.src = data;
    img.style.height = '100px';
    img.style.transition = '1s all';
    img.style.position = 'fixed';
    img.style.right = '200px';
    img.style.top = '500px';
    img.style.zIndex = 999999;

    document.body.appendChild(img);

    window.setTimeout(function () {
      img.parentNode.removeChild(img);
    }, 2000);
  };

  var bikeDance = function () {
    var data = "https://media0.giphy.com/media/2UoOqdSBfP6sNt93dd/giphy.gif?cid=790b7611542e06a6fc1c6e1e5acdd821f779e32605d968aa&rid=giphy.gif&ct=g";

    var img = new Image;
    img.src = data;
    img.style.height = '200px';
    img.style.transition = '1s all';
    img.style.left = '-300px';
    img.style.position = 'fixed';
    img.style.zIndex = 999999;

    document.body.appendChild(img);

    window.setTimeout(function () {
      img.style.left = '250px';
      img.style.top = '50px';
    }, 1500);
    
    window.setTimeout(function () {
      img.parentNode.removeChild(img);
    }, 7000);
  };

  var miniBike = function () {
    var data = "https://i.gifer.com/2dv7.gif";
    var img = new Image();
    img.src = data;
    img.style.width = '600px';
    img.style.height = '503px';
    img.style.transition = '1s all';
    img.style.position = 'fixed';
    img.style.right = '320px';
    img.style.top = '200px';
    img.style.zIndex = 999999;

    document.body.appendChild(img);

    window.setTimeout(function () {
      img.parentNode.removeChild(img);
    }, 8000);
  };

  var dexterBike = function () {
    var data =  "https://i.pinimg.com/originals/b8/51/a0/b851a03a9fd3060d90d0e989c03e5875.gif";
    var img = new Image();
    img.src = data;
    img.style.width = '374px';
    img.style.top = '350px';
    img.style.transition = '0.7s all';
    img.style.position = 'fixed';
    img.style.bottom = 'calc(75%)';
    img.style.left = '-400px';
    img.style.zIndex = 999999;

    document.body.appendChild(img);

    window.setTimeout(function () {
      img.style.left = 'calc(15% - 187px)';
      img.style.top = '350px';
    }, 300);

    window.setTimeout(function () {
      img.style.left = 'calc(40% + 375px)';
    }, 2000);
    window.setTimeout(function () {
      img.parentNode.removeChild(img);
    }, 2300);
  };

  var mrBeanRacing = function () {
    var data = "https://thumbs.gfycat.com/FlawedUnacceptableChupacabra-max-1mb.gif";

    var img = new Image;
    img.src = data;
    img.style.width = '500px';
    img.style.transition = '1s all';
    img.style.position = 'fixed';
    img.style.right = '-500px';
    img.style.bottom = '100px';
    img.style.zIndex = 999999;

    document.body.appendChild(img);

    window.setTimeout(function () {
      img.style.right = '150px';
      img.style.bottom = '100px';
    }, 2500);
    
    window.setTimeout(function () {
      img.parentNode.removeChild(img);
    }, 9500);
  };

  var mountainBike = function () {
    var data = "https://media2.giphy.com/media/4599UNa1cuKtCW3Qcw/giphy.gif?cid=ecf05e47b881fltxlxmnaoq1f41ed9r5ep8e2u4cr1ecj93e&rid=giphy.gif&ct=g";
    var img = new Image();
    img.src = data;
    img.style.width = '760px';
    img.style.transition = '1s all';
    img.style.position = 'fixed';
    img.style.zIndex = 999999;
    img.style.left = '-800px';
    img.style.bottom = '-800px';

    document.body.appendChild(img);

    window.setTimeout(function () {
      img.style.left = '220px';
      img.style.bottom = '200px';
    }, 3500);
    
    window.setTimeout(function () {
      img.parentNode.removeChild(img);
    }, 8900);
  };

  var bikeWord = function () {
    var data = "https://media3.giphy.com/media/1jbbsJyYPilwL8TaEu/giphy.gif?cid=6c09b9522xx4qz1zqdkji83rhm510n1x9k1a8mwdxemmn7ww&rid=giphy.gif&ct=s";

    var img = new Image;
    img.src = data;
    img.style.height = '220px';
    img.style.transition = '1s all';
    img.style.position = 'fixed';
    img.style.left = '300px';
    img.style.top = '70px';
    img.style.zIndex = 999999;

    document.body.appendChild(img);

    window.setTimeout(function () {
      img.style.left = '300px';
      img.style.top = '70px';
    }, 2000);
    window.setTimeout(function () {
      img.parentNode.removeChild(img);
    }, 6000);
  };

  var donutMeditation = function () {
    var data = "https://i.pinimg.com/originals/60/7d/a6/607da693d306f47c7827533251a67826.gif";
    var img = new Image();
    img.src = data;
    img.style.width = '600px';
    img.style.transition = '1s all';
    img.style.position = 'fixed';
    img.style.left = '50%';
    img.style.top = '50%';
    img.style.transform = 'translate(-50%, -50%)';
    img.style.zIndex = 999999;

    document.body.appendChild(img);

    window.setTimeout(function () {
      img.parentNode.removeChild(img);
    }, 6500);
  };

  var pugMeditate = function () {
    var data = "https://media1.tenor.com/images/420d5a925773cafb19ea0e04d72f74e2/tenor.gif?itemid=17681791";

    var img = new Image;
    img.src = data;
    img.style.height = '300px';
    img.style.transition = '1s all';
    img.style.position = 'fixed';
    img.style.right = '200px';
    img.style.bottom = '100px';
    img.style.zIndex = 999999;

    document.body.appendChild(img);

    window.setTimeout(function () {
      img.parentNode.removeChild(img);
    }, 4000);
  };

  var afroAmericanMeditate = function () {
    var data = "https://media4.giphy.com/media/3q1vE9VfhpdWhKve9y/giphy.gif?cid=790b7611c718831596440be3054b1bf2eee64dd04113eaa2&rid=giphy.gif&ct=g";

    var img = new Image;
    img.src = data;
    img.style.height = '400px';
    img.style.transition = '1s all';
    img.style.position = 'fixed';
    img.style.right = '-450px';
    img.style.top = '-400px';
    img.style.zIndex = 999999;

    document.body.appendChild(img);

    window.setTimeout(function () {
      img.style.right = '200px';
      img.style.top = '100px';
    }, 1000);
    
    window.setTimeout(function () {
      img.parentNode.removeChild(img);
    }, 5200);
  }

  var meow = function () {
    var data = "https://media0.giphy.com/media/UdJiT7AbXWUbEz54DV/giphy.gif?cid=790b761135046286b3065114b7cf0096da6825a196b0ef75&rid=giphy.gif&ct=g";
    var img = new Image();
    img.src = data;
    img.style.width = '850px';
    img.style.transition = '1s all';
    img.style.position = 'fixed';
    img.style.left = '50%';
    img.style.top = '50%';
    img.style.transform = 'translate(-50%, -50%)';
    img.style.zIndex = 999999;
    window.setTimeout(function () {
      img.style.width = '900px';
    }, 2400);
    window.setTimeout(function () {
      img.style.width = '1100px';
    }, 3500);
    document.body.appendChild(img);

    window.setTimeout(function () {
      img.parentNode.removeChild(img);
    }, 4300);
  };

  var tomNJerry = function () {
    var data = "https://media1.tenor.com/images/ae0b9e23da38bc9bfeba82f40c638531/tenor.gif?itemid=5410048";

    var img = new Image;
    img.src = data;
    img.style.height = '400px';
    img.style.right = '170px';
    img.style.bottom = '300px';
    img.style.transition = '1s all';
    img.style.position = 'fixed';
    img.style.zIndex = 999999;

    document.body.appendChild(img);

    window.setTimeout(function () {
      img.parentNode.removeChild(img);
    }, 2000);
  };

  var sportsmonth = function () {
    audio.play();
    // SKATE
    createSportsCommunityLogo(5200, 6000);
    rollerSkatePassing();
    stanOnBike();
    skateWithDalmatian();
    skateWord();
    window.setTimeout(function () {
      rollerSkateScheme();
    }, 2000);
    // RUNNING
    window.setTimeout(function () {
      runningMarathon();
      cartmanOnBike();
      edRunning();
      runForest();
    }, 3000);
    window.setTimeout(function () {
      morthyBeingMorthy();
    // BIKE
      bikeDance();
    }, 3300);
    window.setTimeout(function () {
      createShok();
      createSportsCommunityLogo(15000, 16000);
      miniBike();
      dexterBike();
      mrBeanRacing();
      mountainBike();
    }, 8000);
    window.setTimeout(function () {
      bikeWord();
    }, 10500);
    // MEDITATE
    window.setTimeout(function () {
      meditateOnFire();
    }, 15500);
    window.setTimeout(function () {
      donutMeditation();
      afroAmericanMeditate();
    }, 17000);
    window.setTimeout(function () {
      pugMeditate();
    }, 17800);
    window.setTimeout(function () {
      audio2.play();
      meow();
    }, 22000);
    // END
    window.setTimeout(function () {
      createSportsCommunityBigLogo();
    }, 26000);
    window.setTimeout(function () {
      tomNJerry();
    }, 26500);
    window.setTimeout(function () {
      audio.pause();
      audio.currentTime = 0;
    }, 28500);
    createShok();
  };

  var record = function (e) {
    if (e.which === key[ck]) {
      ck++;
    } else {
      ck = 0;
    }

    if (ck >= max) {
      sportsmonth();
      ck = 0;
    }
  };

  var init = function () {
    document.addEventListener('keyup', record);
  };

  init();
};
