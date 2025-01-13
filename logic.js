let timming = document.querySelector("#timeval");
let hitting = document.querySelector("#hitval");
let scoring = document.querySelector("#scoreval");
let body = document.querySelector("#pbtm");


var num = 0;



const Makebubble = () => {
    var bubbel = "";
    for (var i = 1; i <= 133; i++) {

        let rn = Math.floor(Math.random() * 10);

        bubbel += `<div class="buble">${rn}</div>
   `;

    }
    document.querySelector('#pbtm').innerHTML = bubbel;
}

const time = () => {
    let time = 60; 
    setInterval(() => {
        if (time > 0) {
            time--;
            timming.innerText = time;
        }
        else {
            clearInterval(time);
            body.innerHTML = `<h1>Game over </h1>`;
        }

    }, 1000);
}

const Hit = () => {
    num = Math.floor(Math.random() * 10);
    hitting.innerText = num;
}

let sc = 0;
const score = () => {
    sc += 10;
    scoring.innerText = sc;
}


body.addEventListener("click", (a) => {
    let clicknum = (Number(a.target.textContent));
    if (clicknum === num) {
        score();
        Makebubble();
        Hit();
    }
})


Makebubble();
time();
Hit(); 
