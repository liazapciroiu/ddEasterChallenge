export default (window) => {
    const keys = [68, 85, 75, 69];
    const secret = [78, 85, 75, 69, 77];

    let secretIndex = 0;
    let keyIndex = 0;
    let isPlaying = false;

    const phrases = ['back to work.mp3', 'balls of steel.mp3', 'big guns.mp3', 'kick ass.mp3', 'blow it.mp3', 'im good.mp3', 'want some.mp3'];
    const createAsset = (imgSrc, imgId, audioSrc) => {
        const img = new Image();
        img.src = imgSrc;
        img.id = imgId;
        img.style.height = "400px";
        img.style.width = "600px";
        img.style.position = "absolute";
        img.style.top = "calc(50% - 200px)";
        img.style.left = "calc(50% - 300px)";
        img.style.zIndex = 9898899989;
        document.body.append(img);

        const audio = new Audio(audioSrc);
        audio.addEventListener("ended", () => {
            isPlaying = false;
            document.body.removeChild(img);
        });
        audio.play();
    };

    const record = (event) => {
        if(event.which === keys[keyIndex]) {
            keyIndex++;
        } else {
            keyIndex = 0;
        }

        if(event.which === secret[secretIndex]) {
            secretIndex++;
        } else {
            secretIndex = 0;
        }

        if(keyIndex === keys.length) {
            if(!isPlaying) {
                isPlaying = true;
                const rnd = Math.floor(Math.random() * phrases.length);
                const audiosrc = `../assets/audio/${phrases[rnd]}`;
                createAsset("../assets/images/porc.jpg", "porc", audiosrc);
            }
            keyIndex = 0;
        }

        if(secretIndex === secret.length) {
            isPlaying = true;
            createAsset("../assets/images/duke-nukem.jpg", "dukeNukem", "../assets/audio/your face.mp3");
            secretIndex = 0;
        }
    };

    const init = () => {
        document.addEventListener("keyup", record);
    }
    init();
}