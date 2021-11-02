let f_i = document.querySelector('#font-inc');
let f = document.querySelector('#font');
let f_m = document.querySelector('#font-min');
let blue_b = document.querySelector('#blue');
let grey_b = document.querySelector('#grey');
let header_c = document.querySelector('#controls');
let navi = document.querySelector('#navig');

function increaseFont(){
    f_i.setAttribute('id', 'incre')
}

function decreaseFont(){
    f.setAttribute('id', 'decre')
}

function resetFont(){
    f_m.setAttribute('id', 'reset')
}

function blue(){
    blue_b.setAttribute('id', 'make_blue')
}

function grey(){
    grey_b.setAttribute('id', 'make_grey')
}


f_i.addEventListener('click', increaseFont);
f.addEventListener('click', decreaseFont);
f_m.addEventListener('click', resetFont);
blue_b.addEventListener('click', blue);
grey_b.addEventListener('click', grey);