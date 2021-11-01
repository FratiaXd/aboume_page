let f_i = document.getElementById('font-inc');
let f = document.getElementById('font');
let f_m = document.getElementById('font-min');
let blue_b = document.getElementById('blue');
let grey_b = document.getElementById('grey');

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