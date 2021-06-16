export function floricica(window) {

    var key = [70, 76, 79, 82, 73, 67, 73, 67, 65];
    var ck = 0;
    var max = key.length;

    let width, height, cx, cy;
    let svg = document.getElementById('svg');

    function floricel() {
        onResize();
        window.addEventListener('resize', onResize, false);

        for (let i = 0; i < 100; i++) {
            createFlower(Math.floor(6 + rnd(14)), rnd(width), rnd(height), 5 + rnd(10));
        }

        let mouseDown = false;
        document.body.addEventListener('mousedown', e => {
            mouseDown = true;
        });
        document.body.addEventListener('mouseup', e => {
            mouseDown = false;
        });
        document.body.addEventListener('mouseleave', e => {
            mouseDown = false;
        });
        document.body.addEventListener('mousemove', e => {
            let size = 5 + rnd(5);
            if (mouseDown) size *= 2;
            createFlower(Math.floor(6 + rnd(14)), e.clientX + rnd(22, true), e.clientY + rnd(20, true), size);
        });
    }

    function createFlower(nbVertexes, x, y, s) {
        let opacity = 0.5 + rnd(0.5);
        let group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        group.setAttributeNS(null, 'transform', `translate(${x}, ${y})`);
        group.setAttributeNS(null, 'style', `opacity:${opacity};`);
        svg.appendChild(group);

        let duration = 0.5 + rnd(3);
        let innerGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        innerGroup.setAttributeNS(null, 'class', 'flower');
        innerGroup.setAttributeNS(null, 'style', `animation-duration:${duration}s;`);
        group.appendChild(innerGroup);

        let polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        const randomColor = () => {
            const color = Math.floor(Math.random() * 16777215).toString(16);
            return document.body.style.polygon = "#" + color;
        };

        let fill = randomColor();

        polygon.setAttributeNS(null, 'points', polygonPoints(nbVertexes, 0, 0, s, 0));
        polygon.setAttributeNS(null, 'style', `fill:${fill};`);
        innerGroup.appendChild(polygon);
        polygon.style.stroke = "#fff";
        polygon.style.strokeWidth = "1";

        const dt = 2 * Math.PI / nbVertexes;

        for (let i = 0; i < nbVertexes; i++) {
            let a = (i + 0.5) * dt;
            let r1 = Math.sin(Math.PI / nbVertexes) * s / Math.sin(Math.PI / 3);
            let r2 = Math.cos(Math.PI / nbVertexes) * s + Math.cos(Math.PI / 3) * r1;
            let tx = Math.cos(a) * r2;
            let ty = Math.sin(a) * r2;

            polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
            polygon.setAttributeNS(null, 'points', polygonPoints(3, tx, ty, r1, a));
            polygon.setAttributeNS(null, 'style', `fill:${fill};`);
            innerGroup.appendChild(polygon);
        }
    }

    function onResize() {
        const r = svg.getBoundingClientRect();
        width = r.width;
        height = r.height;
        cx = width / 2;
        cy = height / 2;
    }


    function ppoints(n, x, y, s, r) {
        const dt = 2 * Math.PI / n;
        let points = [],
            t, px, py;
        for (let i = 0; i < n; i++) {
            t = r + i * dt;
            px = x + Math.cos(t) * s;
            py = y + Math.sin(t) * s;
            points.push([px, py]);
        }
        return points;
    }

    function polygonPoints(n, x, y, s, r) {
        let thePoints = ppoints(n, x, y, s, r);
        return thePoints.reduce((acc, point, i, a) => `${acc} ${point[0]},${point[1]}`);
    }

    function rnd(max, negative) {
        return negative ? Math.random() * 2 * max - max : Math.random() * max;
    }

    const word = (e) => {
        if (e.which === key[ck]) {
            ck++;
        } else {
            ck = 0;
        }
        if (ck >= max) {
            floricel();
            ck = 0;
        }
    }

    function init() {

        document.addEventListener('keyup', word);
    }

    init();
};