let result = document.getElementById("innerText");
let calculator = (number)=>{
    result.value = result.value+number;
}
let Result = ()=>{
    try{
        result.value=eval(result.value);
    }
    catch(e){
        console.log(e);
    }
}
function ac(){
    result.value=" ";
}
function del(){
    result.value = result.value.slice(0,-1);
}