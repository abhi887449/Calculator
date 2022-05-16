var str= document.getElementById("display").innerHTML;
function sin(){
    str+="sin";
    document.getElementById("display").innerHTML=str;
}
function cos(){
    str+="cos";
    document.getElementById("display").innerHTML=str;
}
function tan(){
    str+="tan";
    document.getElementById("display").innerHTML=str;
}
function log(){
    str+="log10";
    document.getElementById("display").innerHTML=str;
}
function forwardbracket(){
    str+="(";
    document.getElementById("display").innerHTML=str;
}
function backwordbracket(){
    str+=")";
    document.getElementById("display").innerHTML=str;
}
function pie(){
    str+="PI";
    document.getElementById("display").innerHTML=str;
}
function comma(){
    str+=",";
    document.getElementById("display").innerHTML=str;
}
function AC(){
    str="";
    document.getElementById("display").innerHTML=str;
}
function DEL(){
    let len = str.length;
    str=str.substring(0,len-1);
    document.getElementById("display").innerHTML=str;
}
function xy(){
    str+="pow";
    document.getElementById("display").innerHTML=str;
}
function divide(){
    str+="/";
    document.getElementById("display").innerHTML=str;
}
function seven(){
    str+="7";
    document.getElementById("display").innerHTML=str;
}
function eight(){
    str+="8";
    document.getElementById("display").innerHTML=str;
}
function nine(){
    str+="9";
    document.getElementById("display").innerHTML=str;
}
function multiply(){
    str+="*";
    document.getElementById("display").innerHTML=str;
}
function four(){
    str+="4";
    document.getElementById("display").innerHTML=str;
}
function five(){
    str+="5";
    document.getElementById("display").innerHTML=str;
}
function six(){
    str+="6";
    document.getElementById("display").innerHTML=str;
}
function minus(){
    str+="-";
    document.getElementById("display").innerHTML=str;
}
function one(){
    str+="1";
    document.getElementById("display").innerHTML=str;
}
function two(){
    str+="2";
    document.getElementById("display").innerHTML=str;
}
function three(){
    str+="3";
    document.getElementById("display").innerHTML=str;
}
function add(){
    str+= "+";
    document.getElementById("display").innerHTML=str;
}
function mode(){
    str+="%";
    document.getElementById("display").innerHTML=str;
}
function zero(){
    str+="0";
    document.getElementById("display").innerHTML=str;
}
function decimal(){
    str+=".";
    document.getElementById("display").innerHTML=str;
}
function equal(){
    str=str.replace("sin","Math.sin");
    str=str.replace("cos","Math.cos");
    str=str.replace("tan","Math.tan");
    str=str.replace("log10","Math.log10");
    str=str.replace("pow","Math.pow");
    str=str.replace("PI","Math.PI");
    str=Math.round(eval(str) * 10) / 10;
    document.getElementById("display").innerHTML=str;
}
