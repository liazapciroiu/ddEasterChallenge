/// helpers
const getElement = (name) => document.querySelector('.' + 'm' + '-' + name);

const createElement = (tag, className, styles) => {
  const element = document.createElement(tag);
  element.classList.add(
    'm' + '-element',
    ...className.split(' ').map((cName) => 'm' + '-' + cName)
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
      name: 'Pupatura',
      id: 'u18KvwhxOyY',
      start: 0,
      end: 140,
    },
    {
      name: 'Petrekere',
      id: 'iFTYB5Em78w',
      start: 0,
      end: 200,
    },
    {
      name: 'Diamante',
      id: 'jyd81XVz1ZE',
      start: 0,
      end: 200,
    },
    {
      name: 'Han',
      id: 'VfSFQzTQkO0',
      start: 5,
      end: 200,
    },
    {
      name: 'Vali',
      id: 'BLpb3NcJR54',
      start: 0,
      end: 200,
    },
    {
      name: 'Zana',
      id: '2xf2eqlq824',
      start: 0,
      end: 200,
    },
    {
      name: 'Buzunaru',
      id: 'nNo8wg6zlK8',
      start: 0,
      end: 200,
    },
    {
      name: 'Chef',
      id: 'XTKKj0CX3yQ',
      start: 0,
      end: 200,
    },
  ];
  let maneaNr = -1;

  const key = [77, 65, 78, 69, 76, 69];
  const stopArr = [83, 84, 79, 80];

  let ck = 0;
  const max = key.length;
  const stop = stopArr.length;

  let running = false;

  const getManea = () => {
    // // get random manea

    if (maneaNr === -1) {
      maneaNr = Math.floor(Math.random() * manele.length);

      return manele[maneaNr];
    }
    if (maneaNr + 1 === manele.length) {
      maneaNr = 0;
   
      return manele[maneaNr];
    }
    maneaNr++;

    return manele[maneaNr];
  };

  const createVideo = (a) => {
    const video = createElement('iframe', 'manele', {
      aspectRatio: '16/9',
      width: 'auto',
      height: '100%',
      maxWidth: '95vw',
      maxHeight: '70vh',
    });
    video.setAttribute(
      'src',
      'https://www.youtube.com/embed/' +
        a.id +
        '?start=' +
        a.start +
        '&end=' +
        a.end +
        '&autoplay=1&controls=0&disablekb=1&color=white&iv_load_policy=3&r=' +
        new Date().getTime()
    );

    video.setAttribute('allow', 'autoplay');

    return video;
  };

  const maneaLayer = () => {
    if (getElement('layer')) return;

    const layer = createElement('div', 'layer', {
      position: 'fixed',
      top: '5%',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '30%',
      height: '40%',
      backgroundColor: 'rgba(0,0,0,0)',
      display: 'flex',
      alignItems: 'center',
      alignContent: 'space-between',
      justifyContent: 'space-between',
      flexDirection: 'column',
      boxSizing: 'border-box',
      transition: '1s all',
      zIndex: '99999',
    });

    document.body.appendChild(layer);
    setTimeout(() => {
      layer.style.backgroundColor = 'rgba(0,0,0,0.95)';
    }, 1);
  };

  var moneyRain = function (gifUrl, styles, endTime) {
    var data = gifUrl;
    var img = new Image();
    img.src = data;
    styles &&
      Object.entries(styles).forEach((style) => {
        if (img.style[style[0]] !== undefined) {
          img.style[style[0]] = style[1];
        }
      });
    document.body.appendChild(img);
    window.setTimeout(function () {
      img.parentNode.removeChild(img);
    }, endTime);
  };

  const maneaPlayer = (sock) => {
    if (getElement('manele')) return;
    getElement('layer').appendChild(createVideo(sock));
  };

  const clearScene = () => {
    Array.from(document.querySelectorAll('.' + 'm' + '-element')).forEach(
      (node) => node.remove()
    );
    Array.from(document.querySelectorAll('img')).forEach((node) =>
      node.remove()
    );
  };
  const clearLayer = () => {
    const layer = getElement('layer');
    if (!layer) return;
    layer.innerHTML = '';
  };

  const record = (e) => {
    if (e.which === key[ck]) {
      ck++;
    } else if (e.which === stopArr[ck]) {
      ck++;
    } else {
      ck = 0;
    }
    
    if (ck === max) {
      if (!running) {
        running = true;
        let a = getManea();
        moneyRain(
          'https://media.giphy.com/media/j09oEe3jcoojaV9ML0/giphy.gif',
          {
            width: '400px',
            // height: '200px',
            transition: '1s all',
            position: 'fixed',
            right: '0%',
            top: '0%',
            // transform: 'translate(-50%, -50%)',
            zIndex: '0',
          },
          a.end * 1000
        );
        moneyRain(
          'https://media.giphy.com/media/ifXavBCSi74p5eoinl/giphy.gif',
          {
            width: '400px',
            // height: '200px',
            transition: '1s all',
            position: 'fixed',
            left: '0%',
            top: '50%',
            // transform: 'translate(-50%, -50%)',
            zIndex: '0',
          },
          a.end * 1000
        );
        moneyRain(
          'https://media.giphy.com/media/SwmPjBifTij0S5kXMS/giphy.gif',
          {
            width: '100%',
            height: '100%',
            transition: '1s all',
            position: 'fixed',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '1',
          },
          a.end * 1000
        );
        moneyRain(
          'https://media.giphy.com/media/ZfiYf29HOVWT0ZnQLl/giphy.gif',
          {
            width: '400px',
            // height: '200px',
            transition: '1s all',
            position: 'fixed',
            right: '50%',
            top: '70%',
            // transform: 'translate(-50%, -50%)',
            zIndex: '0',
          },
          a.end * 1000
        );
        moneyRain(
          'https://media.giphy.com/media/VDGt1z22mVcek/giphy.gif',
          {
            width: '400px',
            // height: '200px',
            transition: '1s all',
            position: 'fixed',
            left: '0%',
            top: '3%',
            // transform: 'translate(-50%, -50%)',
            zIndex: '0',
          },
          a.end * 1000
        );
        moneyRain(
          'https://media.giphy.com/media/IecUzV348xgsnlBJWE/giphy.gif',
          {
            width: '400px',
            // height: '200px',
            transition: '1s all',
            position: 'fixed',
            right: '0%',
            bottom: '3%',
            // transform: 'translate(-50%, -50%)',
            zIndex: '0',
          },
          a.end * 1000
        );
        maneaLayer();
        maneaPlayer(a);
      }
    } else if (ck === 0) {
      if (running) {
        running = false;
        clearLayer();
        clearScene();
      }
    }
  };

  const init = () => {
    document.addEventListener('keyup', record);
  };

  init();
}
