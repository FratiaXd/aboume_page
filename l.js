let f_i = document.querySelector('#font-inc');
let f = document.querySelector('#font');
let f_m = document.querySelector('#font-min');
let blue_b = document.querySelector('#blue');
let grey_b = document.querySelector('#grey');
let header_c = document.querySelector('#controls');
let navi = document.querySelector('#navig');
let ntu_im = document.querySelector('.resposive');
let avatar = document.querySelector('#responsive1');
let or_w = 450;
let inc_w = or_w;

let myAnimation = [{opacity:0, width:'5%', transform:'rotate(60deg)'},
                {opacity:0.5, width:'10%', transform:'rotate(180deg)'},
                {opacity:1, width:'15%', transform:'rotate(360deg)'}];
var myTimings = {duration:2000, playbackRate:1}; 

//grey
grey_b.addEventListener('click', grey);
blue_b.addEventListener('click', blue);
f_i.addEventListener('click', increaseFont);
f.addEventListener('click', decreaseFont);
f_m.addEventListener('click', resetFont);
avatar.addEventListener('click', ()=>{
    timer = setInterval(increase_pic, 60);
});

//animation
ntu_im.animate(myAnimation, myTimings);

function increase_pic(){
    inc_w++
    avatar.style.width = inc_w + 'px';
};

//grey
function grey(){
    header_c.setAttribute('id', 'make_grey');
    localStorage.colour = 'grey';
};

if (localStorage.fontSize == 'grey'){
    header_c.setAttribute('id', 'make_grey');
};
//blue
function blue(){
    header_c.setAttribute('id', 'make_blue');
    localStorage.colour = 'blue';
};

if (localStorage.fontSize == 'blue'){
    header_c.setAttribute('id', 'make_blue');
};
//increase
function increaseFont(){
    navi.setAttribute('id', 'incre');
    localStorage.fontSize = 'x-large';
};

if (localStorage.fontSize == 'x-large'){
    navi.setAttribute('id', 'incre');
};
//decrease
function decreaseFont(){
    navi.setAttribute('id', 'decre');
    localStorage.fontSize = 'small';
};

if (localStorage.fontSize == 'small'){
    navi.setAttribute('id', 'decre');
};
//reset
function resetFont(){
    navi.setAttribute('id', 'navig');
    localStorage.fontSize = 'normal';
};

if (localStorage.fontSize == 'normal'){
    navi.setAttribute('id', 'navig');
};

//drop down menu