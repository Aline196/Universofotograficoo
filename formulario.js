//funcion externa
function saludar (){
    respuest = prompt("Hola bienvenido   ¿como estas?");
    if(respuest == "bien"){
        alert("Que tengas un buen dia")
    }else{
        alert("Todo mejora siempre")
    }
}

//utilizar una variable
function mas(){
    
    var motivacion;
    motivacion = document.write(Bienvenida2());
    
}
var Bienvenida2 = function b () {
    return "<div class = 'mensajeBienvenida' >  te encantara </div>";
}







