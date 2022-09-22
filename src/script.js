
function button(param){
    document.getElementById('input').value += param; //Taken input from input box and concatenating it
}

function input(){ // This function helps to calculate the resultant value 
    var result = [];
    if(document.getElementById('input').value.includes("-")){
        result = document.getElementById('input').value.split('-'); // Split function breaks an array into two parts as per the given instructions
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
function output(){ // The resultant value will get stored in the variable and will dispaly in the input box
    var ans = input();
    document.getElementById('input').value = ans ;
}
function reset(){ // This function helps to clear the values from the input box
    document.getElementById('input').value = "";
}
 