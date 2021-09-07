export default (window) => {
  const keys = [67, 79, 70, 70, 69, 69];

  let keyIndex = 0;
  let isPlaying = false;

  const html = `
        <div class="cup1">
            <div class="handle"></div>
        </div>
        <div class="cup2">
            <div class="handle"></div>
        </div>
        <div class="cup3">
            <div class="handle"></div>
        </div>
        <div class="cup4">
            <div class="handle"></div>
        </div>
        <div class="cup5">
            <div class="handle"></div>
        </div>
        <div class="cup6">
            <div class="handle"></div>
        </div>
        <div class="cup7">
            <div class="handle"></div>
        </div>
        <div class="cup8">
            <div class="handle"></div>
        </div>
        <div class="cup9">
            <div class="handle"></div>
        </div>
        <div class="cup10">
            <div class="handle"></div>
        </div>
        `;

  const renderCoffeeCupsHtml = () => {
    const head = document.getElementsByTagName("head")[0];
    const elem = document.createElement("div");
    elem.innerHTML = html;
    elem.style.zIndex = 99999;
    elem.style.top = "0";
    elem.style.left = "0";
    elem.style.position = "absolute";
    elem.style.width = "100%";
    elem.style.height = "100%";

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "../assets/styleSheets/coffee.css";

    head.appendChild(link);
    document.body.append(elem);

    setTimeout(function () {
      isPlaying = false;
      document.body.removeChild(elem);
      head.removeChild(link);
    }, 5000);
  };

  const init = () => {
    document.addEventListener("keyup", (event) => {
      if (event.which === keys[keyIndex]) {
        keyIndex++;
      } else {
        keyIndex = 0;
      }

      if (keyIndex === keys.length) {
        if (!isPlaying) {
          isPlaying = true;
          renderCoffeeCupsHtml();
        }
        keyIndex = 0;
      }
    });
  };
  init();
};
