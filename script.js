let hr = document.getElementById('hr');

let mn = document.getElementById('mn');

let sc = document.getElementById('sc');


setInterval(()=>{
    let date = new Date();
    let houes = date.getHours()*30;
    let mins = date.getMinutes()*6;
    let seconds = date.getSeconds()*6;
    hr.style.transform= `rotateZ(${(houes)+(mins/12)}deg)`;
    mn.style.transform= `rotateZ(${mins}deg)`;
    sc.style.transform= `rotateZ(${seconds}deg)`;
})

setInterval(()=>{
document.getElementById('bulb').classList.toggle('bulb')
}, 200);

