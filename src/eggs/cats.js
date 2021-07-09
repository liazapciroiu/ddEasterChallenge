export default (window) => {
    const keys = [67, 65, 84, 83];

    let keyIndex = 0;
    let isPlaying = false;
    const  html = `<div class='catContainer'>
        <div class='leftToRightAnimate'>
            <img class='cat' src="../assets/images/nyan.gif" alt="this slowpoke moves" width="365px" />
        </div>
        <div class='rotatedDown'>
            <div class='topLeftToBottomRightAnimate'>
                <img class='cat' src="../assets/images/nyan.gif" alt="this slowpoke moves" width="365px" />
            </div>
        </div>
        <div class='rotatedUp'>
            <div class='bottomLeftToTopRightAnimate'>
                <img class='cat' src="../assets/images/nyan.gif" alt="this slowpoke moves" width="365px" />
            </div>
        </div>
    </div>`;

    const head  = document.getElementsByTagName('head')[0];

    const buildHtmlElement = () => {
        const elem = document.createElement('div');
        elem.innerHTML= html;
        elem.style.zIndex = 99999;
        elem.style.top = '0';
        elem.style.left = '0';
        elem.style.position = 'absolute';
        elem.style.width = '100%';
        elem.style.height = '100%';
        return elem
    }

    const buildStyleLink = () => {
        const link  = document.createElement('link');
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = '../assets/styleSheets/cats.css';
        link.media = 'all';
        link.id = 'catsCSS';
        return link
    }

    const cleanUp = () => {
        isPlaying = false;
        document.body.removeChild(elem);
        head.removeChild(link);
    }
    
    const createElement = () => {
        const elem = buildHtmlElement();
        const link = buildStyleLink();
        
        head.appendChild(link);
        document.body.append(elem);

        const audio = new Audio('../assets/audio/nyan.mp3');
        audio.addEventListener("ended", () => {
            cleanUp();
        });
        audio.play();
    };

    const record = (event) => {
        if(event.which === keys[keyIndex]) {
            keyIndex++;
        } else {
            keyIndex = 0;
        }

        if(keyIndex === keys.length) {
            if(!isPlaying) {
                isPlaying = true;
                createElement();
            }
            keyIndex = 0;
        }
    };

    const init = () => {
        document.addEventListener("keyup", record);
    }
    init();
}