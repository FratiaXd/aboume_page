let f_i = document.querySelector('#font-inc');
let f = document.querySelector('#font');
let f_m = document.querySelector('#font-min');
let blue_b = document.querySelector('#blue');
let grey_b = document.querySelector('#grey');
let header_c = document.querySelector('#controls');
let navi = document.querySelector('#navig');

//grey
grey_b.addEventListener('click', grey);

function grey(){
    header_c.setAttribute('id', 'make_grey');
    localStorage.colour = 'grey';
}

if (localStorage.fontSize == 'grey'){
    navi.setAttribute('id', 'make_grey');
}
//blue
blue_b.addEventListener('click', blue);

function blue(){
    header_c.setAttribute('id', 'make_blue');
    localStorage.colour = 'blue';
}

if (localStorage.fontSize == 'blue'){
    navi.setAttribute('id', 'make_blue');
}
//increase
f_i.addEventListener('click', increaseFont);

function increaseFont(){
    navi.setAttribute('id', 'incre');
    localStorage.fontSize = 'x-large';
}

if (localStorage.fontSize == 'x-large'){
    navi.setAttribute('id', 'incre');
}
//decrease
f.addEventListener('click', decreaseFont);

function decreaseFont(){
    navi.setAttribute('id', 'decre');
    localStorage.fontSize = 'small';
}

if (localStorage.fontSize == 'small'){
    navi.setAttribute('id', 'decre');
}
//reset
f_m.addEventListener('click', resetFont);

function resetFont(){
    navi.setAttribute('id', 'navig');
    localStorage.fontSize = 'normal';
}

if (localStorage.fontSize == 'normal'){
    navi.setAttribute('id', 'navig');
}