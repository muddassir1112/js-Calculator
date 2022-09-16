
function button(param){
    document.getElementById('input').value += param;
}

function input(){
    var result = [];
    if(document.getElementById('input').value.includes("-")){
        result = document.getElementById('input').value.split('-');
        return parseInt(result[0] - result[1]);
    }
    else if(document.getElementById('input').value.includes("+")){
        result = document.getElementById('input').value.split('+');
        return parseInt(result[0] + result[1]);
    }
    else if(document.getElementById('input').value.includes("/")){
        result = document.getElementById('input').value.split('/');
        return parseInt(result[0] / result[1]);
    }
    else if(document.getElementById('input').value.includes("*")){
        result = document.getElementById('input').value.split('*');
        return parseInt(result[0] * result[1]);
    }
}
function output(){
    var ans = input();
    document.getElementById('input').value = ans ;
}
function reset(){
    document.getElementById('input').value = "";
}
 