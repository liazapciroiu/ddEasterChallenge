export function music(window) {
  const key = [77, 85, 83, 73, 67];
  let ck = 0;
  const max = key.length;
  let running = false;

  const songs = [
    {
      name: "Dragoste de inchiriat",
      image: "https://i.postimg.cc/25Zxfyvw/Akcent-removebg-preview.png",
      audio: "DragosteDeInchiriat.mp3",
    },
    {
      name: "Dragostea din tei",
      image: "https://i.postimg.cc/52p7nsgD/ozone-removebg-preview.png",
      audio: "DragosteaDinTei.mp3",
    },
    {
      name: "Haide vino inapoi",
      image:
        "https://i.postimg.cc/PrQ25SgN/im-d799af3821101c78f052ed7871fda05a-removebg-preview.png",
      audio: "HaideVinoInapoi.mp3",
    },
    {
      name: "Baietii si fetele",
      image:
        "https://i.postimg.cc/d0p9xpyN/Andra-la-debut-removebg-preview.png",
      audio: "BaietiiSiFetele.mp3",
    },
    {
      name: "In lipsa mea",
      image:
        "https://i.postimg.cc/L5BBhs0G/primul-album-smiley-in-lipsa-mea-poate-fi-ascultat-de-astazi-pe-canalul-de-youtube-al-artistului-1-s.png",
      audio: "InLipsaMea.mp3",
    },
    {
      name: "20 de ani",
      image: "https://i.postimg.cc/pL1Qm4qV/V-59d09dc688-removebg-preview.png",
      audio: "20DeAni.mp3",
    },
    {
      name: "Daca dragostea dispare",
      image: "https://i.postimg.cc/664p8J23/hqdefault-removebg-preview.png",
      audio: "DacaDragosteaDispare.mp3",
    },
  ];

  const oldMusic = (random) => {
    const bg = document.createElement("div");
    const title = document.createElement("h1");

    const discoBall = new Image();
    discoBall.src =
      "https://bestanimations.com/media/mirror-balls/645938848animated-disco-ball-5-2.gif";
    discoBall.style.width = "200px";
    discoBall.style.height = "200px";
    discoBall.style.transition = "2s all";
    discoBall.style.position = "fixed";
    discoBall.style.left = "calc(50% - 125px)";
    discoBall.style.top = "50px";
    discoBall.style.zIndex = 999999;
    discoBall.style.display = "none";

    const img = new Image();
    img.src = songs[random].image;
    img.style.width = "500px";
    img.style.height = "350px";
    img.style.transition = "2s all";
    img.style.position = "fixed";
    img.style.left = "calc(50% - 125px)";
    img.style.bottom = "-350px";
    img.style.zIndex = 999999;

    title.innerHTML = songs[random].name;
    title.style.width = "300px";
    title.style.textAlign = "center";
    title.style.zIndex = 999999;
    title.style.position = "fixed";
    title.style.top = "10%";
    title.style.left = "calc(50%-120px)";

    document.body.appendChild(title);

    const audio = new Audio(`../assets/audio/${songs[random].audio}`);
    document.body.appendChild(discoBall);
    document.body.appendChild(img);
    audio.play();

    window.setTimeout(function () {
      img.style.bottom = "0px";
    }, 50);

    window.setTimeout(function () {
      bg.style.width = "100%";
      bg.style.height = "100%";
      bg.style.left = 0;
      bg.style.top = 0;
      bg.style.position = "fixed";
      bg.style.zIndex = 9999999;
      bg.style.opacity = 0;

      document.body.appendChild(bg);

      for (var x = 0; x < 220; x++) {
        (function (x) {
          window.setTimeout(function () {
            discoBall.style.display = "block";
            if (x % 2 === 0) {
              bg.style.opacity = 0;
            } else {
              img.style.transform = `translate(${Math.floor(
                Math.random() * 520 - 260
              )}px, ${Math.floor(Math.random() * 520 - 260)}px)`;
              bg.style.background =
                "#" + Math.floor(Math.random() * 16777215).toString(16);
              title.style.background =
                "#" + Math.floor(Math.random() * 16777215).toString(16);
              bg.style.opacity = 0.5;
            }
          }, x * 150);
        })(x);
      }
    }, 1500);

    window.setTimeout(function () {
      img.style.bottom = "-350px";
    }, 6500);
    window.setTimeout(function () {
      img.parentNode.removeChild(img);
      bg.parentNode.removeChild(bg);
      title.parentNode.removeChild(title);
      discoBall.parentNode.removeChild(discoBall);
      running = false;
    }, 7000);
  };

  const record = (e) => {
    if (e.which === key[ck]) {
      ck++;
    } else {
      ck = 0;
    }

    if (ck === max) {
      if (!running) {
        running = true;
        oldMusic(Math.floor(Math.random() * 7));
      }

      ck = 0;
    }
  };

  const init = () => {
    document.addEventListener("keyup", record);
  };

  init();
}
