/// helpers
const getElement = (name) => document.querySelector("." + "m" + "-" + name);

const createElement = (tag, className, styles) => {
  const element = document.createElement(tag);
  element.classList.add(
    'm' + "-element",
    ...className.split(" ").map((cName) => 'm' + "-" + cName)
  );
  styles &&
    Object.entries(styles).forEach((style) => {
      if (element.style[style[0]] !== undefined) {
        element.style[style[0]] = style[1];
      }
    });
  return element;
};

export function manele(window) {
const manele = [
  {
    name: "Pupatura",
    id: "u18KvwhxOyY",
    start: 0,
    end: 140,
  },
  {
    name: "Petrekere",
    id: "iFTYB5Em78w",
    start: 0,
    end: 115,
  },
  {
    name: "Diamante",
    id: "jyd81XVz1ZE",
    start: 0,
    end: 140,
  },
];

// const key = [77, 65, 78, 69, 76, 69];
const key = [77];
const stopArr = []


let ck = 0;
const max = key.length;
const stop = stopArr.length;

let running = false;

const getManea = () => {
  // get random manea
 let maneaNr = Math.floor(Math.random() * manele.length);

  return manele[maneaNr];
  
};



const createVideo = (a) => {
  const video = createElement('iframe', 'manele', {
    aspectRatio: "16/9",
    width: "auto",
    height: "100%",
    maxWidth: "95vw",
    maxHeight: "70vh",
  })
  video.setAttribute(
    "src",
    "https://www.youtube.com/embed/" +
      a.id +
      "?start=" +
      a.start +
      "&end=" +
      a.end +
      "&autoplay=1&controls=0&disablekb=1&color=white&iv_load_policy=3&r=" +
      new Date().getTime()
  );

  video.setAttribute(
    "allow",
    "autoplay"
  );

  return video;

};


const maneaLayer = () => {
  if (getElement("layer")) return;

  const layer = createElement("div", "layer", {
    position: "fixed",
    top: "5%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "30%",
    height: "40%",
    backgroundColor: "rgba(0,0,0,0)",
    display: "flex",
    alignItems: "center",
    alignContent: "space-between",
    justifyContent: "space-between",
    flexDirection: "column",
    boxSizing: "border-box",
    transition: "1s all",
  });

  document.body.appendChild(layer);
  setTimeout(() => {
    layer.style.backgroundColor = "rgba(0,0,0,0.95)";
  }, 1);
};


const maneaPlayer = (sock) => {
  if (getElement("manele")) return;
  getElement("layer").appendChild(createVideo(sock));
};

const clearScene = () => {
  Array.from(document.querySelectorAll("." + 'm' + "-element")).forEach(
    (node) => node.remove()
  );
};
const clearLayer = () => {
  const layer = getElement("layer");
  if (!layer) return;
  layer.innerHTML = "";
};


const record = (e) => {
  console.log(e.which)
  if (e.which === key[ck]) {
    ck++;
  } else {
    ck = 0;
  }

  if (ck === max) {
    if (!running) {
      running = true;
      let a = getManea()
      maneaLayer()
      maneaPlayer(a)
      console.log(createVideo(a))
  
     }
    ck = 0;
  } else if( ck === stop) {
    running = false
    clearLayer()
    clearScene()

  }
};

const init = () => {
  document.addEventListener("keyup", record);
};

init();

}
