let limpiarFormulario = () => {
    let elementos = document.querySelectorAll("input[type=text], select");
    let mensajeOk = document.querySelector("#resultado");
    for (let index = 0; index < elementos.length; index++) {
        elementos[index].innerHTML = '';  
    }
    mensajeOk.innerHTML='Mensaje enviado con éxito !!!';
}

var limpiarErrores = () => {
    errorNombre.innerHTML = '';
    errorMensaje.innerHTML = '';
    errorAsunto.innerHTML = '';
}

var txtNombre, txtAsunto, txtMensaje, nombre, asunto, mensaje, errorNombre, errorMensaje, errorAsunto;

formulario.addEventListener("submit",function(evento){
    evento.preventDefault();

    /*limpiarErrores();*/

    let expRegLetras = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;

    txtNombre = document.getElementById("nombre");
    txtAsunto = document.getElementById("asunto");
    txtMensaje = document.getElementById("mensaje");

    nombre = txtNombre.value;
    asunto = txtAsunto.value;
    mensaje = txtMensaje.value;

    errorNombre = document.querySelector(".errorNombre");
    errorAsunto = document.querySelector(".errorAsunto");
    errorMensaje = document.querySelector(".errorMensaje");

    if(nombre == ''){
        errorNombre.innerHTML = 'El nombre es requerido';
    }else if(!expRegLetras.test(nombre)){
        errorNombre.innerHTML = 'Ingresar sólo letras por favor';
    }

    if(asunto == ''){
        errorAsunto.innerHTML = 'El asunto es requerido';
    }else if(!expRegLetras.test(asunto)){
        errorAsunto.innerHTML = 'Ingresar sólo letras por favor. De requerirlo, usar números romanos.';
    }

    if(mensaje == ''){
        errorMensaje.innerHTML = 'El mensaje es requerido';
    }
  if(expRegLetras.test(nombre) && expRegLetras.test(asunto) && mensaje != ''){
        limpiarErrores();
        limpiarFormulario();
    }
});
