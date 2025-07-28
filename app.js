let gameseq=[];
let userseq=[];
let btns=["red", "blue", "purple", "yellow"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
let timer=10;


document.addEventListener("keypress", function() {
    if(started==false){
    started=true;
    levelUp();
 } 
});
function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function() {
        btn.classList.remove("gameflash");
    }, 250);

};
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);

};
function levelUp(){
    timer=10;
    userseq=[];
    level++
    h2.innerText=`level ${level} \n Count Down: ${timer}`;
    let randomIndex=Math.floor(Math.random() * 3);
    let randomColor=btns[randomIndex];
    let randombtn=document.querySelector(`.${randomColor}`);
    gameseq.push(randomColor);
    gameFlash(randombtn);
   
};

function btnPress(){
    let pressBtn=this;
    userFlash(pressBtn);
    userColor=pressBtn.getAttribute("id");
    userseq.push(userColor);
    setTimeout(
    checkColors(userseq.length-1), 2000);

};

let allBtns=document.querySelectorAll(".color-box");
for(allbtn of allBtns){
    allbtn.addEventListener("click", btnPress );
}

function checkColors(idx){
   
    if(userseq[idx]===gameseq[idx] ){
        if( userseq.length===gameseq.length){
        setTimeout(levelUp(), 1000);}
    } else{
        h2.innerText=`Game Over, Press Any Key to Restart \n Your Score is ${level}`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor="white";
        }, 500);
        resetGame();
    }
}
 function resetGame(){
        started=false;
        gameseq=[];
        userseq=[];
        level=0;
 }
