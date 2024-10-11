let days =document.getElementById('days');
let hours =document.getElementById('hours');
let minutes =document.getElementById('minutes');
let bocseconds =document.getElementById('seconds');
function updateTime(){
    const currentYear=new Date().getFullYear();
    
    const currentDate= new Date().getDate();
    const ayudhaPooja=new Date(`October ${currentDate+1} ${currentYear} 00:00:00`);
    const today=new Date();
    const diff=ayudhaPooja-today;
    const d=Math.floor((diff/1000/60/60/24));
    const h=Math.floor((diff/1000/60/60)%24);
    const m=Math.floor((diff/1000/60)%60);
    const s=Math.floor((diff/1000)%60);
    days.innerHTML=d<10?"0"+d:d;
    hours.innerHTML=h<10?"0"+h:h;
    minutes.innerHTML=m<10?"0"+m:m;
    seconds.innerHTML=s<10?"0"+s:s;

console.log(d+" "+h+" "+m+" "+s);
}
setInterval(updateTime,1000); 


