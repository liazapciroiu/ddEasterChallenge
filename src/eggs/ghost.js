export function ghost(window) {
    // We will need root, to update some CSS vars.
    let root = document.documentElement;
  
    // Custom HTML, to create the mark-up for Ghosty.
    const CUSTOM_HTML = `
      <div class="ghost-container">
          <div class="ghost">
              <div class="ghost-face">
              <div class="eyes">
                  <span class="eye-left"><span class="eye-left__pupil"></span></span>
                  <span class="eye-right"
                  ><span class="eye-right__pupil"></span
                  ></span>
              </div>
              <div class="mouth"></div>
              </div>
              <div class="ghost-hands">
              <span class="hand-left"></span>
              <div class="hand-right"></div>
              </div>
              <div class="ghost-feet"></div>
          </div>
          <div class="ghost-controls">
              <button id="close-ghost">Close</button>
              <button class="update-color" id="body">Change Body Color</button>
              <button class="update-color" id="eyes">Change Eyes Color</button>
              <button class="update-color" id="mouth">Change Mouth Color</button>
              <button class="update-color" id="bg">Change Background Color</button>
          </div>
      </div>
  `;
  
    // G, H, O, S, T key IDS to use for keyup
    var key = [71, 72, 79, 83, 84];
    var ck = 0;
    var max = key.length;
  
    const head = document.getElementsByTagName("head")[0];
    const elem = document.createElement("div");
  
    // Create link element, so we can add our own CSS.
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "../assets/styleSheets/ghost.css";
  
    // Helper function to generate random color
    function generateRandomColor() {
      return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
  
    // Update CSS variable color, based on button id.
    function updateColor(e) {
      let randomColor = generateRandomColor();
      root.style.setProperty(`--ghost-${e.target.id}-color`, randomColor);
    }
  
    const ghostEgg = (html) => {
      elem.classList.add("ghosts");
      elem.innerHTML = html;
      document.body.append(elem);
      head.appendChild(link);
      root.style.setProperty("--ghost-id-hidden", 0);
  
      let ghostDiv = document.querySelector(".ghosts");
      let stylesheet = document.querySelector(
        "link[rel=stylesheet][href*='ghost.css']"
      );
  
      document.addEventListener("click", (event) => {
      
          // When button is marked as 'update color', do that.
        if (event.target && event.target.className === "update-color") {
          updateColor(event);
        }
  
        // If button is marked as 'close', do that.
        if (event.target && event.target.id === "close-ghost") {
          root.style.setProperty("--ghost-id-hidden", 1);
  
          // We want to let everything clean, 
          // so when we are closing our egg, 
          // we are also removing our mark-up and our CSS
          setTimeout(function () {
            root.style = "";
            ghostDiv.remove();
            stylesheet.remove();
          }, 1000);
        }
      });
    };
  
    const init = () => {
      document.addEventListener("keyup", recordKeys);
    };
  
    // Recording keys
    function recordKeys(e) {
      if (e.which === key[ck]) {
        ck++;
      } else {
        ck = 0;
      }
  
      if (ck >= max) {
        ghostEgg(CUSTOM_HTML);
        ck = 0;
      }
    }
  
    init();
  }