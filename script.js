let body = document.querySelector('body');
let grid = document.querySelector('.tabla');
for (let i = 0; i < 100; i++) {
    let item = document.createElement('div');
    if (i < 10) {
        item.className = `item 0${i}`;
    }else{
        item.className = `item ${i}`;
    }
    item.addEventListener('mousedown', katt);
    item.addEventListener('contextmenu', block);
    grid.appendChild(item);
}

let bombalista = [];
bombalista.length = 100;
for (let i = 0; i < 100; i++) {
    bombalista[i] = "";
}
elrendez();

function elrendez() {
    let db = 0;
    while(db < 10){
        let random = Math.round(Math.random()*100);
        if(bombalista[random] == ""){
            bombalista[random] = "b";
            db++;
            // console.log(random);
        }
    }
}

function katt(e) {
    // console.log(e.button);
    let a = e.target;
    // console.log(a.className.split(' ')[1]);
    
    if(e.button == 0){
        balkatt(a);
    }
    if(e.button == 2){
        jobbkatt(a);
    }
}

function balkatt(a) {
    if(a.innerHTML == ""){
        if(bombalista[a.className.split(' ')[1]] == "b"){
            a.innerHTML = "b";
            let div_info = document.createElement('div');
            div_info.className = "nyerveszt";
            div_info.innerHTML = "<div class='item3'><strong>Vesztettél!</strong></div>";
            div_info.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
            div_info.style.borderLeft = "red 10px solid";
            body.appendChild(div_info);
        }
        else{
            a.innerHTML = korbeszamol(a.className.split(' ')[1]);
        }
    }
}

function korbeszamol(id) {
    let db = 0;
    let e1 = id - 9;
    let e2 = id - 10;
    let e3 = id - 11;
    let e4 = id - 1;
    let e5 = id -(-9);
    let e6 = id -(-10);
    let e7 = id -(-11);
    let e8 = id -(-1);
    
    if (!(id[0] == 0 || id[1] == 9)) {
        if (bombalista[e1] == "b") {
            db++;
            // console.log("e1 talaltam");
        }
        // console.log(`e1 lefutottam -- ezt az idt neztem: ${e1}`);
    }
    if (!(id[0] == 0)) {
        if (bombalista[e2] == "b") {
            db++;
            // console.log("e2 talaltam");
        }
        // console.log(`e2 lefutottam -- ezt az idt neztem: ${e2}`);
    }
    if (!(id[0] == 0 || id[1] == 0)) {
        if (bombalista[e3] == "b") {
            db++;
            // console.log("e3 talaltam");
        }
        // console.log(`e3 lefutottam -- ezt az idt neztem: ${e3}`);
    }
    if (!(id[1] == 0)) {
        if (bombalista[e4] == "b") {
            db++;
            // console.log("e4 talaltam");
        }
        // console.log(`e4 lefutottam -- ezt az idt neztem: ${e4}`);
    }
    if (!(id[1] == 0 || id[0] == 9)) {
        if (bombalista[e5] == "b") {
            db++;
            // console.log("e5 talaltam");
        }
        // console.log(`e5 lefutottam -- ezt az idt neztem: ${e5}`);
        
    }
    if (!(id[0] == 9)) {
        if (bombalista[e6] == "b") {
            db++;
            // console.log("e6 talaltam");
        }
        // console.log(`e6 lefutottam -- ezt az idt neztem: ${e6}`);
    }
    if (!(id[0] == 9 || id[1] == 9)) {
        if (bombalista[e7] == "b") {
            db++;
            // console.log("e7 talaltam");
        }
        // console.log(`e7 lefutottam -- ezt az idt neztem: ${e7}`);
    }
    if (!(id[1] == 9)) {
        if (bombalista[e8] == "b") {
            db++;
            // console.log("e8 talaltam");
        }
        // console.log(`e8 lefutottam -- ezt az idt neztem: ${e8}`);
    }

    // console.log(db);
    // console.log("-------------------");
    return db;
}

let szamlalo = document.querySelector('.szamlalo');
let szam = 0;
function jobbkatt(a) {
    if (a.innerHTML == "") {
        a.innerHTML = "z";
        szam++;
        szamlalo.innerHTML = szam;
    }
    else if(a.innerHTML == "z"){
        a.innerHTML = "";
        szam--;
        szamlalo.innerHTML = szam;
    }
    if (szam == 10) {
        let i = 0;
        let a = grid.children;
        while (i < a.length && ((a[i].innerHTML == "z" && bombalista[i] == "b") || a[i].innerHTML != "z")) {
            i++;
        }
        if (i == a.length) {
            let div_info = document.createElement('div');
            div_info.className = "nyerveszt";
            div_info.innerHTML = "<div class='item3'><strong>Nyertél!</strong></div>";
            div_info.style.backgroundColor = "rgba(0, 128, 0, 0.5)";
            div_info.style.borderLeft = "green 10px solid";
            body.appendChild(div_info);
        }
        else{
            let div_info = document.createElement('div');
            div_info.className = "nyerveszt";
            div_info.innerHTML = "<div class='item3'><strong>Vesztettél!</strong></div>";
            div_info.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
            div_info.style.borderLeft = "red 10px solid";
            body.appendChild(div_info);
        }
    }
}

function block(e) {
    e.preventDefault();
}