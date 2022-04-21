function shownumber(num){
    const result=document.getElementById("result");
   
    result.value += num;
}



function clearresult(){
    const result=document.getElementById("result");
result.value="";
}

function equalresult(){
    const result=document.getElementById("result");
result.value=eval(result.value)
}
