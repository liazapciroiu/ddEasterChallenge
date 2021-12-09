export default(window) => {
    const keys = [83, 65, 78, 84, 65];

    let keyIndex = 0; 
    let isPlaying = false; 

    const html = `
            <div class="main">
                <div class="page"> 
                    <div class="interaction">
                        <div class="pick">
                            <p>Pick your desired christmas gift</p>
                        </div>
                        <div class="inputs"> 
                            <button id="seaside">A PS5</button>
                            <div id="sea" class="modal">
                                <div class="modal-content">
                                <span id="close-s" class="close">&times;</span>
                                <div class="prize">
                                    <div class="prize-content">
                                        <div class="prize-title">
                                            A vacation to Dubai! 
                                        </div>
                                        <div class="prize-pic">
                                            <img src="../assets/images/ps5.jpg">
                                        </div>
                                    </div>
                                    <div class="prize-details">
                                        <div class="description">
                                            The PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020, in Australia, Japan, New Zealand, North America, and South Korea, with worldwide release following a week later. 
                                            <div class="red-text">
                                                Claim your prize now!! Only 1 left!
                                            </div>
                                        </div>
                                        <div class="claim">
                                            <a href="https://www.emag.ro/crocs-saboti-slingback-relaxed-fit-crocband/fd/2462809/culoare-c5401,bleumarin-v8456459/?X-Search-Id=edc8a26f44fb8aa2e793&X-Product-Id=6239857&X-Search-Page=1&X-Search-Position=2&X-Section=search&X-MB=0&X-Search-Action=view">
                                                <button>CLAIM YOUR PRIZE</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <button id="psp">A vacation to Dubai</button>  
                            <div id="ps5" class="modal">
                                <div class="modal-content">
                                <span id="close-p5" class="close">&times;</span>
                                <div class="prize">
                                    <div class="prize-content">
                                        <div class="prize-title">
                                            A vacation to Dubai! 
                                        </div>
                                        <div class="prize-pic">
                                            <img src="../assets/images/dubai.jpeg">
                                        </div>
                                    </div>
                                    <div class="prize-details">
                                        <div class="description">
                                            Visit Dubai’s first purpose-built waterfront development to see a man-made canal city with luxury properties, parks, promenades and plenty of shopping opportunities.
                                            The stunning beaches and popular shops are just a few highlights of Jumeirah Beach Residence. Make a stop by Jumeirah Beach or The Walk while you're exploring the area.
                                            <div class="red-text">
                                                Claim your prize now!! Only 1 left!
                                            </div>
                                        </div>
                                        <div class="claim">
                                            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
                                                <button>CLAIM YOUR PRIZE</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div> 
                            <button id="apen">A pen</button>  
                            <div id="pen" class="modal">
                                <div class="modal-content">
                                <span id="close-p" class="close">&times;</span>
                                <div class="prize">  
                                    <div class="prize-content">
                                        <div class="prize-title">
                                            A pen!
                                        </div>
                                        <div class="prize-pic">
                                            <img src="../assets/images/pen.jpg">
                                        </div>
                                    </div>
                                    <div class="prize-details">
                                        <div class="description">
                                            I guess you won it.
                                            <div class="red-text">
                                                There are like a gazillion of pens in the world. But I mean, yeah, claim it...
                                            </div>
                                        </div>
                                        <div class="claim">
                                            <button id="claim-close">CLAIM YOUR PRIZE</button>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>      
                    </div>
                </div>
                <div class="morty">
                    <img src="../assets/images/morty.gif">
                </div>
                <div class="morty-nindeg">
                    <img src="../assets/images/morty.gif">
                </div>
        </div>
    `;

    const renderHtml = () => {
        const head = document.getElementsByTagName("head")[0];
        const elem = document.createElement("div");
        elem.innerHTML = html; 

        elem.style.top = "0";
        elem.style.left = "0";
        elem.style.position = "absolute";
        elem.style.width = "100%";
        elem.style.height = "100%";

        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = "../assets/styleSheets/santa.css";


        head.appendChild(link);
        document.body.append(elem);

        var modal_s = document.getElementById("sea");
        var modal_p5 = document.getElementById("ps5");
        var modal_p = document.getElementById("pen");

        var btn_sea = document.getElementById("seaside");
        var btn_p5 = document.getElementById("psp");
        var btn_p = document.getElementById("apen");
        var btn_close = document.getElementById("claim-close");



        var span_s = document.getElementById("close-s");
        var span_p5 = document.getElementById("close-p5");
        var span_p = document.getElementById("close-p");

        console.log(span_p.item);

        btn_close.onclick=function(){
            setTimeout(function () {
                isPlaying = false;
                document.body.removeChild(elem);
                head.removeChild(link);
                }, 100);
        }
        btn_sea.onclick=function(){
            modal_s.style.display = "block";
        }

        span_s.onclick = function(){
            modal_s.style.display = "none";
        }

        btn_p5.onclick=function(){
            modal_p5.style.display = "block";
        }

        span_p5.onclick = function(){
            modal_p5.style.display = "none";
        }

        btn_p.onclick=function(){
            modal_p.style.display = "block";
        }

        span_p.onclick = function(){
            modal_p.style.display = "none";
        }        
    }

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
          renderHtml();
        }
        keyIndex = 0;
      }
    });
  };
  init();
}