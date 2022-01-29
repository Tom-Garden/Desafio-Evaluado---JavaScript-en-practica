var num1 = document.getElementById("valor1")
var num2 = document.getElementById("valor2");

let respuesta = document.querySelector(".resultado");

document.querySelector("#btn-sumar").addEventListener("click", function(){
    let suma = parseFloat(num1.value) + parseFloat(num2.value);
    respuesta.innerHTML= suma;
});

document.querySelector("#btn-restar").addEventListener("click", function(){
    let resta = parseFloat(num1.value) - parseFloat(num2.value);

    if(resta<0){
        respuesta.innerHTML = 0;
    }else{
        respuesta.innerHTML = resta;
    }
});
