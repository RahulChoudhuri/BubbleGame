let timer=60;
let score=0;
let hrandom__num=0;
function increseScore(){
    score+=10;
    document.querySelector('#score-value').textContent=score;
}
function runTimer(){
    let setTimer=setInterval(()=>{
        if(timer>0){
            timer--;
            document.querySelector('#timer-value').textContent=timer;
        }
        else{
            clearInterval(setTimer);
            document.querySelector('.panel__buttom').innerHTML=`<h1>Game Over!!!</h1>`;
        }
    },1000)
}

function hitValue(){
     hrandom__num=Math.floor(Math.random()*10);
    document.querySelector('#hit-value').textContent=hrandom__num;
}

 function makeBubble(){
    let cutter="";

    for(let i=0 ; i<168; i++){
        let random__num=Math.floor(Math.random() * 10);
        cutter+=` <div class="bubble">${random__num}</div>`;
    }
    
    document.querySelector('.panel__buttom').innerHTML=cutter;
 }


 document.querySelector('.panel__buttom').addEventListener('click',(dets)=>{
    let clickNumber=Number(dets.target.textContent);
    if(clickNumber === hrandom__num){
        increseScore();
        makeBubble();
        hitValue();
    }
 })

 hitValue();
 runTimer();
 makeBubble();