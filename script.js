
function buttonclick(val){
    document.getElementById("screen").value+=val
}
function clearDisplay(){
    document.getElementById("screen").value=""
}
function backspace(){
    document.getElementById("screen").value=document.getElementById("screen").value.slice(0,-1)
}
function equalClick(){
    try{
        var text=document.getElementById("screen").value
        var result=eval(text)
        document.getElementById("screen").value=result
    }catch(err){
         alert("invalid")
    }
}