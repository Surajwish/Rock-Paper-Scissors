let rounds ;
let compChoice;
let userChoice;
let userPoint=0;
let compPoint=0;
let roundRes=document.getElementById("round_result");

function begin(){
    userPoint=0;
    compPoint=0;
    document.getElementById("user-points").innerHTML=0;
    document.getElementById("comp-points").innerHTML=0;
    document.getElementById("game-result").innerHTML="";
    roundRes.innerHTML="";
    rounds = document.getElementById('round').value;
    document.getElementById("rounds-left").innerHTML=rounds
    document.getElementById('user-option').addEventListener('click', check);
}
function getRandomvalue(){
    return Math.floor(Math.random()*3);
}
function check(event){
    if(rounds>0){
        console.log(event.target.id);
        compChoice=getRandomvalue(); 
        console.log(compChoice);
        if (event.target.id ==compChoice){
        roundRes.innerHTML="Round result = TIE"
        }
        else if(event.target.id ==0 && compChoice ==1){compPoint++;
            roundRes.innerHTML="Round result = LOSE"}
        else if(event.target.id ==0 && compChoice ==2){userPoint++;
            roundRes.innerHTML="Round result = WIN"} 
        else if(event.target.id ==1 && compChoice ==0){userPoint++;
            roundRes.innerHTML="Round result = WIN"}
        else if(event.target.id ==1 && compChoice ==2){compPoint++;
            roundRes.innerHTML="Round result = LOSE"}
        else if(event.target.id ==2 && compChoice ==0){compPoint++;
            roundRes.innerHTML="Round result = LOSE"}
        else if(event.target.id ==2 && compChoice ==1){userPoint++;
            roundRes.innerHTML="Round result = WIN"}
        rounds--;
       let ans = document.getElementById('comp-choice');
       if(compChoice ==0) ans.setAttribute('src','data/rock.png');
       else if(compChoice==1) ans.setAttribute('src','data/paper.png');
       else ans.setAttribute('src','data/scissor.png');

       document.getElementById("user-points").innerHTML=userPoint;
       document.getElementById("comp-points").innerHTML=compPoint;
       document.getElementById("rounds-left").innerHTML=rounds;

       if(rounds==0){
        if(userPoint>compPoint){
            document.getElementById("game-result").innerHTML="Game result = WON";
        }else if(userPoint<compPoint){
            document.getElementById("game-result").innerHTML="Game result = LOSE";
        }else{
            document.getElementById("game-result").innerHTML="Game result = TIE";
        }
       }
    }
}