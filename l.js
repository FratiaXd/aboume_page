let f_i = document.querySelector('#font-inc');
let f = document.querySelector('#font');
let f_m = document.querySelector('#font-min');
let blue_b = document.querySelector('#blue');
let grey_b = document.querySelector('#grey');
let header_c = document.querySelector('#controls');
let navi = document.querySelector('#navig');


grey_b.addEventListener('click', grey);

function grey(){
    grey_b.setAttribute('id', 'make_grey')
}


blue_b.addEventListener('click', blue);

function blue(){
    blue_b.setAttribute('id', 'make_blue')
}


f_i.addEventListener('click', increaseFont);

function increaseFont(){
    f_i.setAttribute('id', 'incre')
}


f.addEventListener('click', decreaseFont);

function decreaseFont(){
    f.setAttribute('id', 'decre')
}


f_m.addEventListener('click', resetFont);

function resetFont(){
    f_m.setAttribute('id', 'reset')
}