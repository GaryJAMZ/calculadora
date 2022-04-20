let a = document.getElementById("a");
let b = document.getElementById("b");
let operador = document.getElementById("operador");
let resultado;
let res = document.getElementById("output");
let operacion;
function sumas(){
    operador.innerHTML = "+";
    operacion = 1;
}
function restas(){
    operador.innerHTML = "-";
    operacion = 2;
}
function multiplicaciones(){
    operador.innerHTML = "x";
    operacion = 3;
}
function divisiones(){
    operador.innerHTML = "/";
    operacion = 4;
}

function resultados(){
    switch(operacion){
        case 1:
            resultado = (parseInt($(a).val())) + (parseInt($(b).val()));
            res.innerHTML = resultado;
            break;
        case 2:
            resultado = (parseInt($(a).val())) - (parseInt($(b).val()));
            res.innerHTML = resultado;
            break;
        case 3:
            resultado = (parseInt($(a).val())) * (parseInt($(b).val()));
            res.innerHTML = resultado;
            break;
        case 4:
            resultado = (parseInt($(a).val())) / (parseInt($(b).val()));
            res.innerHTML = resultado;
            break;
        default:
            alert("Seleccione una operacion a ejecutar");
    }
}