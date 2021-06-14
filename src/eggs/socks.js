/// DECLARATIONS

const socks = [
  {
    name: "Chop Suey",
    id: "qFLcr89_Fuk",
    start: 19,
    end: 140,
  },
  {
    name: "Basket Case",
    id: "Gd43k0Zgmcg",
    start: 0,
    end: 115,
  },
  {
    name: "Master of Puppets",
    id: "f5HX67WqUSY",
    start: 3,
    end: 140,
  },
  //   {
  //     name: "Killing in the Name",
  //     id: "zEuU1pCvZA8",
  //     start: 5,
  //     end: 152,
  //   },
];

let sockNr = -1;

const KEYWORD = "socks";
const DESCRIPTION = "Socks that ROCKS 🐶 🧼 ➕ 📺";
let letterPos = 0;

/// LOGIC

const getSock = () => {
  // get random sock
  if (sockNr === -1) {
    sockNr = Math.floor(Math.random() * socks.length);
    return socks[sockNr];
  }
  if (sockNr + 1 === socks.length) {
    sockNr = 0;
    return socks[sockNr];
  }
  sockNr++;
  return socks[sockNr];
};

const createVideo = ({ id, start, end }) => {
  const player = createElement("iframe", "player", {
    aspectRatio: "16/9",
    width: "autp",
    height: "100%",
    maxWidth: "95vw",
    maxHeight: "70vh",
  });
  player.type = "text/html";
  player.setAttribute("frameborder", "0");
  player.setAttribute(
    "src",
    "https://www.youtube.com/embed/" +
      id +
      "?start=" +
      start +
      "&end=" +
      end +
      "&autoplay=1&controls=0&disablekb=1&color=white&iv_load_policy=3&r=" +
      new Date().getTime()
  );
  return player;
};

const getElement = (name) => document.querySelector("." + KEYWORD + "-" + name);
const createElement = (tag, className, styles) => {
  const element = document.createElement(tag);
  element.classList.add(
    KEYWORD + "-element",
    ...className.split(" ").map((cName) => KEYWORD + "-" + cName)
  );
  styles &&
    Object.entries(styles).forEach((style) => {
      if (element.style[style[0]] !== undefined) {
        element.style[style[0]] = style[1];
      }
    });
  return element;
};
const clearScene = () => {
  Array.from(document.querySelectorAll("." + KEYWORD + "-element")).forEach(
    (node) => node.remove()
  );
};
const clearLayer = () => {
  const layer = getElement("layer");
  if (!layer) return;
  layer.innerHTML = "";
};

const socksLayer = () => {
  if (getElement("layer")) return;

  const layer = createElement("div", "layer", {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0)",
    display: "flex",
    alignItems: "center",
    alignContent: "space-between",
    justifyContent: "space-between",
    flexDirection: "column",
    // padding: "20px",
    boxSizing: "border-box",
    transition: "1s all",
  });

  document.body.appendChild(layer);
  setTimeout(() => {
    layer.style.backgroundColor = "rgba(0,0,0,0.95)";
  }, 1);
};

const socksTitle = (sock) => {
  if (getElement("title")) return;

  const title = createElement("h1", "title", {
    color: "#EEE",
    padding: "20px",
  });
  title.innerHTML = sock.name;

  getElement("layer").appendChild(title);
};

const socksPlayer = (sock) => {
  if (getElement("player")) return;
  getElement("layer").appendChild(createVideo(sock));
};

const socksActions = () => {
  if (getElement("actions")) return;

  const buttonStyle = {
    padding: "20px",
    fontSize: "1.2rem",
    // border: "2px solid rgba(255,255,255,0.7)",
    // backgroundColor: "rgba(255,255,255,0.8)",
    cursor: "pointer",
    // borderRadius: "5px",
  };

  const actions = createElement("div", "actions", {
    padding: "20px",
  });

  const credits = createElement("a", "next", { ...buttonStyle });
  credits.innerHTML = "Credits SockPuppetParody";

  const close = createElement("button", "close", {
    ...buttonStyle,
    marginRight: "50px",
  });
  close.innerHTML = "X";
  close.addEventListener("click", () => {
    createScene(true);
    getElement("close").remove();
    setTimeout(() => {
      alert("Kidding... 🤣\r\n Click on OK and i'll close Socks Easter Egg");
      clearScene();
    }, 5000);
  });

  const nextSock = createElement("button", "next", {
    ...buttonStyle,
    fontWeight: "bold",
  });
  nextSock.innerHTML = "!!! ROCK NEXT SOCK !!!";
  nextSock.addEventListener("click", () => createScene(true));

  //   actions.appendChild(credits);
  actions.appendChild(close);
  actions.appendChild(nextSock);

  getElement("layer").appendChild(actions);
};

const createScene = (next) => {
  // start clean
  next ? clearLayer() : clearScene();

  // get a sock
  const sock = getSock();

  // add socks layer
  socksLayer();

  // add title
  socksTitle(sock);

  // add sock player
  socksPlayer(sock);

  // add actions
  socksActions();
};

const initShow = () => {
  // reset active sock
  sockNr = -1;
  // create the scene
  createScene();
};

const keyListener = (event) => {
  const key = event.key + "".toLowerCase();
  // check if wrong letter is pressed
  if (key !== KEYWORD[letterPos]) {
    letterPos = 0;
    return;
  }
  // incremet pos to compare next letter
  ++letterPos;
  // check if index exided max keyword
  if (letterPos < KEYWORD.length) {
    return;
  }
  // reset position to faster init scene
  letterPos = 0;
  // init show
  initShow();
};

/// INITIARS

const init = () => {
  window.addEventListener("keyup", keyListener);
  tableInfoLoader();
  // force focus on body to capture proper events
  setTimeout(() => {
    window.document.body.focus();
  }, 100);
};

const tableInfoLoader = () => {
  Array.from(document.querySelectorAll("table tr td:first-child")).find(
    (td) => td.innerHTML === KEYWORD
  ).nextSibling.innerHTML = DESCRIPTION;
};

export default () => init();
