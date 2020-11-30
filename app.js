function robotDecision(){
    return Math.ceil(Math.random() * 3);
}
let r = robotDecision();
let h = document.getElementById("result");
let btn = document.getElementById("btn");

function cut(){
    let humanD = 2;
    btn.style.display = "block";
    let result;
    if(humanD !== r){
        result = humanD > r;
    }
    else{result = "No one wins!"}
    showResult(result);
}
function paper(){
    let humanD = 1;
    btn.style.display = "block";
    let result;
    if(humanD !== r){
        result = humanD > r;
    }
    else{result = "No one wins!"}
    showResult(result);
}
function rock(){
    let humanD = 3;
    btn.style.display = "block";
    let result;
    if(humanD !== r){
        result = humanD > r;
    }
    else{result = "No one wins!"}
    showResult(result);
}

function showResult(inp){
    if(inp){
        if(inp.length > 2){
            h.innerHTML = inp;
        }
        else{
            h.innerHTML = "You won!";
        }
    }
    else{
        h.innerHTML = "You Lost!";
    }
}