let f_i = document.getElementById('font-inc');
let f = document.getElementById('font');
let f_m = document.getElementById('font-min');

function increaseFont(){
    f_i.setAttribute('id', 'incre')
}

function decreaseFont(){
    f.setAttribute('id', 'decre')
}

function resetFont(){
    f_m.setAttribute('id', 'reset')
}

f_i.addEventListener('click',increaseFont);
f.addEventListener('click',decreaseFont);
f_m.addEventListener('click',resetFont);