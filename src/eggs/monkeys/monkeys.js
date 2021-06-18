import * as THREE from "./three.module";
import { GLTFLoader } from "./GLTFLoader";

export default (window) => {
  const monkeyKey = [77, 79, 78, 75, 69, 89];
  const colorPallets = {
    p1: {
      keys: [80, 65, 83, 84, 69, 76, ...monkeyKey],
      ck: 0,
      pallet: [0xb4e2d8, 0xc792ac, 0xd280bd, 0xefd091, 0x85aac5],
    },
    p2: {
      keys: [83, 85, 77, 77, 69, 82, ...monkeyKey],
      ck: 0,
      pallet: [0xF7FD04, 0xF9B208, 0xF98404, 0x81B214, 0xFC5404],
    },
    p3: {
      keys: [87, 73, 78, 84, 69, 82, ...monkeyKey],
      ck: 0,
      pallet: [0x2c3646, 0x7c8491, 0xd7e1e5, 0xf5e2d0, 0x9b887d],
    },
  };
  let animtionStopped = true;

  const record = (e) => {
    const keyCode = e.which
    const { p1, p2, p3 } = colorPallets;

    switch (keyCode) {
      case p1.keys[p1.ck]:
          p1.ck++
          p2.ck = 0
          p3.ck = 0
          break
        break
      case p2.keys[p2.ck]:
          p2.ck++
          p1.ck = 0
          p3.ck = 0
          break
      case p3.keys[p3.ck]:
          p3.ck++
          p1.ck = 0
          p2.ck = 0
          break;
      default:
        p1.ck = 0
        p2.ck = 0
        p3.ck = 0
    }

    if (p1.ck >= p1.keys.length) {
      animtionStopped = false;
      monkey(p1.pallet);
      p1.ck = 0;
      p2.ck = 0;
      p3.ck = 0;
    } else if (p2.ck >= p2.keys.length) {
      animtionStopped = false;
      monkey(p2.pallet);
      p1.ck = 0;
      p2.ck = 0;
      p3.ck = 0;
    }
    else if (p3.ck >= p3.keys.length) {
      animtionStopped = false;
      monkey(p3.pallet);
      p1.ck = 0;
      p2.ck = 0;
      p3.ck = 0;
    }
  };

  const init = () => {
    document.addEventListener("keyup", record);
  };

  const monkey = (pallet) => {
    let needLoop = false;

    let renderer,
      scene,
      camera,
      myCanvas = document.getElementById("myCanvas");

    myCanvas.removeAttribute("hidden");
    myCanvas.onclick = () => {
      if (scene) scene.dispose();
    };

    //RENDERER
    renderer = new THREE.WebGLRenderer({
      canvas: myCanvas,
      antialias: true,
      alpha: true,
    });
    renderer.setClearColor(0x00000, 0.7);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    //CAMERA
    camera = new THREE.PerspectiveCamera(
      35,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    //SCENE
    scene = new THREE.Scene();
    //LIGHTS
    var light = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(light);

    var light2 = new THREE.PointLight(0xffffff, 0.5);
    scene.add(light2);
    scene.background = "transparent";
    var loader = new GLTFLoader();
    loader.load("assets/images/monkey.glb", handle_load);
    loader.load("assets/images/monkey.glb", handle_load2);
    loader.load("assets/images/monkey.glb", handle_load3);
    loader.load("assets/images/monkey.glb", handle_load4);
    loader.load("assets/images/monkey.glb", handle_load5);

    let mesh;
    let mesh2;
    let mesh3;
    let mesh4;
    let mesh5;

    function handle_load(gltf) {
      mesh = gltf.scene;
      mesh.children[0].material = new THREE.MeshLambertMaterial({
        color: pallet[0],
      });
      scene.add(mesh);
      mesh.position.z = -20;
    }
    function handle_load2(gltf) {
      mesh2 = gltf.scene;
      mesh2.children[0].material = new THREE.MeshLambertMaterial({
        color: pallet[1],
      });
      scene.add(mesh2);
      mesh2.position.z = -30;
      mesh2.position.x = 10;
      mesh2.position.y = 5;
    }
    function handle_load3(gltf) {
      mesh3 = gltf.scene;
      mesh3.children[0].material = new THREE.MeshLambertMaterial({
        color: pallet[2],
      });
      scene.add(mesh3);
      mesh3.position.z = -30;
      mesh3.position.x = -10;
      mesh3.position.y = 3;
    }
    function handle_load4(gltf) {
      mesh4 = gltf.scene;
      mesh4.children[0].material = new THREE.MeshLambertMaterial({
        color: pallet[3],
      });
      scene.add(mesh4);
      mesh4.position.z = -35;
      mesh4.position.x = -10;
      mesh4.position.y = -2;
    }
    function handle_load5(gltf) {
      mesh5 = gltf.scene;
      mesh5.children[0].material = new THREE.MeshLambertMaterial({
        color: pallet[4],
      });
      scene.add(mesh5);
      mesh5.position.z = -35;
      mesh5.position.x = 6;
      mesh5.position.y = -2;
    }

    let id;
    const render = () => {
      if (mesh) {
        mesh.rotation.y += 0.035;
      }
      if (mesh2) {
        mesh2.rotation.x += 0.01;
        mesh2.rotation.y += 0.01;
      }
      if (mesh3) {
        mesh3.rotation.x += 0.1;
        mesh3.rotation.y += 0.1;
      }
      if (mesh4) {
        mesh4.rotation.x += 0.04;
        mesh4.rotation.y += 0.1;
      }
      if (mesh5) {
        mesh5.rotation.x += 0.2;
        mesh5.rotation.y += 0.008;
      }
      if (camera) {
        camera.translateZ(-0.1);
        if (camera.position.z < -19) {
          loopAnimation();
        }

        if (needLoop) {
          camera.position.z = 0;
          needLoop = false;
        }
      }
      renderer.render(scene, camera);
    };

    const dispose = () => {
      animtionStopped = true;
      renderer.getContext().clear(16384);
      renderer.dispose();
      renderer = null;
      while (scene?.children.length > 0) {
        scene.remove(scene.children[0]);
      }
      light.dispose();
      light2.dispose();
      scene = null;
      camera = null;
      myCanvas.setAttribute("hidden", true);
      document.removeEventListener("mousedown", dispose);
      cancelAnimationFrame(id);
    };
    const animate = () => {
      if (animtionStopped) {
        return;
      }
      document.addEventListener("mousedown", dispose, false);
      id = requestAnimationFrame(animate);
      render();
    };

    animate();

    const loopAnimation = () => {
      needLoop = true;
    };
  };

  init();
};
