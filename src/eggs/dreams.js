/// helpers
const getElement = (name) => document.querySelector('.' + 'm' + '-' + name)

const createElement = (tag, className, styles) => {
  const element = document.createElement(tag)
  element.classList.add(
    'm' + '-element',
    ...className.split(' ').map((cName) => 'm' + '-' + cName),
  )
  styles &&
    Object.entries(styles).forEach((style) => {
      if (element.style[style[0]] !== undefined) {
        element.style[style[0]] = style[1]
      }
    })
  return element
}
export function dreams(window) {
  const x = 600 // center
  const y = 300 // center
  const r = 2500 // radius
  let a = 0
  const rotate = (a, img) => {
    var px = x + r * Math.cos(a) // <-- that's the maths you need
    var py = y + r * Math.sin(a)

    img.style.left = px + 'px'
    img.style.top = py + 'px'
  }

  const key = [68, 82, 69, 65, 77]
  const stopArr = [83, 84, 79, 80]
  let ck = 0
  let running = false
  const max = key.length
  const stop = stopArr.length
  const dream = {
    name: 'Transcendent',
    id: 'MmdtC2vDuP4',
    start: 0,
    end: 90,
  }

  const createVideo = (a) => {
    const video = createElement('iframe', 'dream', {
      aspectRatio: '16/9',
      width: 'auto',
      height: '100%',
      maxWidth: '95vw',
      maxHeight: '70vh',
      zIndex: 999999999,
    })
    video.setAttribute(
      'src',
      'https://www.youtube.com/embed/' +
        a.id +
        '?start=' +
        a.start +
        '&end=' +
        a.end +
        '&autoplay=1&controls=0&disablekb=1&color=white&iv_load_policy=3&r=' +
        new Date().getTime(),
    )

    video.setAttribute('allow', 'autoplay')

    return video
  }

  const createLayer = () => {
    if (getElement('layer')) return

    const layer = createElement('div', 'layer', {
      position: 'fixed',
      top: '30%',
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
    })

    document.body.appendChild(layer)
    setTimeout(() => {
      layer.style.backgroundColor = 'rgba(0,0,0,0.95)'
    }, 1)
  }
  const createLeftGift = (data, top, time, lft, tr) => {
    var imgData = data

    var img = new Image()
    img.src = imgData
    img.style.width = '400px'
    img.style.transition = '1s all'
    img.style.position = 'fixed'
    img.style.right = '-40%'
    img.style.top = top + '%'
    img.style.zIndex = 999
    document.body.appendChild(img)
    window.setTimeout(function () {
      img.style.right = '0%'
      img.style.top = top + '%'
    }, time)
    window.setTimeout(function () {
      setInterval(function () {
        a = (a + Math.PI / 360) % (Math.PI * 2)
        rotate(a, img)
      }, 10)
    }, tr)

    window.setTimeout(function () {
      img.parentNode.removeChild(img)
    }, lft)
  }
  const createRGift = (data, top, time, lft, tr) => {
    var imgData = data

    var img = new Image()
    img.src = imgData
    img.style.width = '400px'
    img.style.transition = '1s all'
    img.style.position = 'fixed'
    img.style.left = '-40%'
    img.style.top = top + '%'
    img.style.zIndex = 999
    document.body.appendChild(img)
    window.setTimeout(function () {
      img.style.left = '0%'
      img.style.top = top + '%'
    }, time)
    window.setTimeout(function () {
      setInterval(function () {
        a = (a + Math.PI / 360) % (Math.PI * 2)
        rotate(a, img)
      }, 10)
    }, tr)
    window.setTimeout(function () {
      img.parentNode.removeChild(img)
    }, lft)
  }
  const createBGift = (data, left, time, lft, tr) => {
    var imgData = data

    var img = new Image()
    img.src = imgData
    img.style.width = '400px'
    img.style.transition = '1s all'
    img.style.position = 'fixed'
    img.style.left = left + '%'
    img.style.bottom = '-60%'
    img.style.zIndex = 999
    document.body.appendChild(img)
    window.setTimeout(function () {
      img.style.bottom = '0%'
      img.style.left = left + '%'
    }, time)
    window.setTimeout(function () {
      setInterval(function () {
        a = (a + Math.PI / 360) % (Math.PI * 2)
        rotate(a, img)
      }, 10)
    }, tr)

    window.setTimeout(function () {
      img.parentNode.removeChild(img)
    }, lft)
  }
  const createTGift = (data, leftime, time, left) => {
    var imgData = data

    var img = new Image()
    img.src = imgData
    img.style.width = '400px'
    img.style.transition = '1s all'
    img.style.position = 'fixed'
    img.style.left = left + '%'
    img.style.top = '-40%'
    img.style.zIndex = 999999
    document.body.appendChild(img)

    window.setTimeout(function () {
      img.style.top = '0%'
      img.style.left = left + '%'
    }, time)

    window.setTimeout(function () {
      img.parentNode.removeChild(img)
    }, leftime)
  }
  const createEnding = (data, time, lft) => {
    var data = data
    var img = new Image()
    img.src = data
    img.style.width = '70%'
    img.style.transition = '1s all'
    img.style.position = 'fixed'
    img.style.left = '50%'
    img.style.top = '50%'
    img.style.transform = 'translate(-50%, -50%)'
    img.style.zIndex = 999999

    window.setTimeout(function () {
      document.body.appendChild(img)
    }, time)

    window.setTimeout(function () {
      img.parentNode.removeChild(img)
    }, lft)
  }

  const createPlayer = (sock) => {
    if (getElement('dream')) return
    const video = createVideo(sock)
    getElement('layer').appendChild(video)
    window.setTimeout(function () {
      img.parentNode.removeChild(video)
    }, 91000)
  }

  const clearScene = () => {
    Array.from(
      document.querySelectorAll('.' + 'm' + '-element'),
    ).forEach((node) => node.remove())
    Array.from(document.querySelectorAll('img')).forEach((node) =>
      node.remove(),
    )
  }
  const clearLayer = () => {
    const layer = getElement('layer')
    if (!layer) return
    layer.innerHTML = ''
  }
  const record = (e) => {
    if (e.which === key[ck]) {
      ck++
    } else if (e.which === stopArr[ck]) {
      ck++
    } else {
      ck = 0
    }

    if (ck === max) {
      if (!running) {
        running = true
        let a = dream
        createLeftGift(
          'https://media.giphy.com/media/ATGezri9XEaqY/giphy.gif',
          '0',
          1000,
          80000,
          52000,
        )
        createLeftGift(
          'https://media.giphy.com/media/yaUG0KDAcIcWA/giphy.gif',
          '50',
          2000,
          70000,
          55000,
        )
        createRGift(
          'https://media.giphy.com/media/A8UihDrG2T9a8/giphy.gif',
          '0',
          3000,

          90000,
          62000,
        )
        createRGift(
          'https://media.giphy.com/media/hWGhxXRWSgIWAYKzOA/giphy.gif',
          '50',
          4000,

          75000,
          61000,
        )
        createBGift(
          'https://media.giphy.com/media/xTiTnlzKFDl8nZBYME/giphy.gif',
          '50',
          5000,
          65000,
          57000,
        )
        createBGift(
          'https://media.giphy.com/media/3ov9k6lsQ9kW7K30eQ/giphy.gif',
          '25',
          6000,
          63000,
          58000,
        )
        createTGift(
          'https://media.giphy.com/media/MGU3AC1zapYT6/giphy.gif',
          11000,
          7000,
          '25',
        )
        createTGift(
          'https://media.giphy.com/media/m4sLXpN9EkPjq/giphy.gif?cid=790b7611ad489f5dc8e527b6e325e3808e7bfe1289aa05bb&rid=giphy.gif&ct=g',
          13000,
          9000,
          '50',
        )
        createTGift(
          'https://media.giphy.com/media/u5aoohLKAgM0/giphy.gif?cid=790b761142ec40c22b6cf92710ce6a9862c13424786a0538&rid=giphy.gif&ct=g',
          15000,
          11000,
          '30',
        )
        createTGift(
          'https://media.giphy.com/media/JSeUYloGYK4cv3xLIV/giphy.gif?cid=ecf05e470v16vs74peub2jpk6bu92x1eg7i8kq79hgum1fba&rid=giphy.gif&ct=g',
          140000,
          15000,
          '35',
        )
        createEnding(
          'https://media.giphy.com/media/3oKIPjuglnRgj9Qbw4/giphy.gif?cid=790b761163cb1229d5bd4c0d3ae768b8a369a06e4c4eb0e6&rid=giphy.gif&ct=g',
          80000,
          85000,
        )
        createEnding(
          'https://media.giphy.com/media/oRlbEkkJtKGLS/giphy.gif?cid=790b76113ff85066af1c73e9109b340ed3a39f79a1d99f94&rid=giphy.gif&ct=g',
          85000,
          90000,
        )

        createLayer()
        createPlayer(a)
      }
    } else if (ck === 0) {
      if (running) {
        running = false
        clearLayer()
        clearScene()
      }
    }
  }

  const init = () => {
    document.addEventListener('keyup', record)
  }

  init()
}
