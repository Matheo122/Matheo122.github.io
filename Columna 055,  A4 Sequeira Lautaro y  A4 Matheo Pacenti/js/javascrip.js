
 //captcha
let valor1 = Math.floor(Math.random() * (10-1)); 
let valor2 = Math.floor(Math.random() * (10-0)+1);


let resultadoDeCaptcha = valor1 + valor2;
let primerSpan = document.getElementById("v1"); //es para que me agarre el valor del html
primerSpan.innerHTML = valor1; 
let segundoSpan = document.getElementById("v2");
segundoSpan.innerHTML = valor2;


function captcha(e){
    e.preventDefault()
    let valorInput = document.getElementById("IngresarResultado").value; //lo que esta entre "" es el nombre del archivo html 1er variable es para que el usuario ingrese numero
    let respuesta = document.getElementById("resultado"); //el documen.get es para agarrar el archivo de html
    if(valorInput==resultadoDeCaptcha){  //compruebo si el valor que salio en  valor1 es = a el que ingreso el usuario
        respuesta.innerHTML = "Captcha Correcto.";
        comprar() //llamo a la funcion comprar
    }
        
    else{
        respuesta.innerHTML = "Intente Nuevamente.";
    } 
}

//Formulario
let form = document.querySelector('#form');
form.addEventListener('submit', captcha); // este boton esta vinculado con la funcion captcha y comprar 


function comprar(e){
    //console.log(e)
    //para obtener los datos ingresados por el usuario
    let formData = new FormData(form);
    //declaro las variables
    let nombre_y_apellido = formData.get('nombre-y-apellido');
    let domicilio = formData.get('domicilio');  

    document.querySelector("#terminar_compra").innerHTML = "Muchar gracias" + " " + nombre_y_apellido + " " + "por su compra, en aproximadamente 40 minutos llegara su pedido a" + " " + domicilio ;
    

}

