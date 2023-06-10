//funcion para tabla dinamica

//obtener referencias del DOM
document.getElementById('crearForm')
const platoInput = document.getElementById('plato')
const precioInput = document.getElementById('precio')
const tbodyPlatos = document.getElementById('tbodyPlatos')
const eliminarPlato = document.getElementById('eliminarPlato')
const vaciarPlatosButton = document.getElementById('vaciarPlato')
const agregarMasInput = document.getElementById('agregarMasPlatosInput')

document.getElementById('agregarTres').addEventListener("click", agregarTres);
document.getElementById('agregarPlato').addEventListener("click", agregarPlato);
vaciarPlatosButton.addEventListener("click", vaciarPlato);

//Json
let platos = [
    {
        "plato": "asado",
        "precio": "200"
    },
];

mostrarPlatos();


//Funcion para mostrar los platos en la tabla
function mostrarPlatos() {
    tbodyPlatos.innerHTML = '';

    platos.forEach(plato => {

        crearFila(plato);

        /*
        const fila = document.createElement('tr');

        const platoColumna = document.createElement('td');
        platoColumna.textContent = plato.plato;
        fila.appendChild(platoColumna);

        const precioColumna = document.createElement('td');
        precioColumna.textContent = plato.precio;
        fila.appendChild(precioColumna);

        let fila1 = document.createElement('td');
        fila1.textContent = plato.plato;
                
        const accionesColumna = document.createElement('td'); //crea la celda donde va el boton eliminar
        const eliminarBoton = document.createElement('button');//crea el boton eliminar 
        eliminarBoton.textContent = 'Eliminar';
        eliminarBoton.addEventListener('click', eliminarPlatos());
        accionesColumna.appendChild(eliminarBoton);

        fila.appendChild(accionesColumna); // hace que haga lo mismo en todas las filas 

        tbodyPlatos.appendChild(fila);
                */

    });
}

function datosCargados() { // retorna si los inputs estan vacios o no
    return (
        platoInput.value !== null &&
        platoInput.value !== '' &&
        precioInput.value !== null &&
        precioInput.value !== ''
    )
}
let nuevoPlato = {
    plato: platoInput.value,
    precio: precioInput.value
};

function agregarPlato() {
    if (datosCargados()) {
        platos.push(nuevoPlato); //agrega un elemento nuevo a la tabla
        crearFila(nuevoPlato);
    }
}

function agregarTres() {
    if (datosCargados()) {
        for (let i = 0; i < 3; i++) {
            platos.push(nuevoPlato);
            crearFila(nuevoPlato);
        }
    }
}

function crearFila(nuevoPlato) {
    const tr = document.createElement('tr');
    const tdNombre = document.createElement('td');
    const tdPrecio = document.createElement('td');
    // const tdAccion = document.createElement('td');
    // const buttonAccion = document.createElement('button');
    tbodyPlatos.appendChild(tr);
    tr.appendChild(tdNombre);
    tr.appendChild(tdPrecio);
    // tr.appendChild(tdAccion);
    // tdAccion.appendChild(buttonAccion);
    tdNombre.innerHTML = nuevoPlato.plato;
    tdPrecio.innerHTML = nuevoPlato.precio;
    // buttonAccion.innerHTML = 'ELIMINAR';
}

//Funcion para eliminar el ultimo plato agregado
function eliminarPlatos() {
    platos.pop();
    document.getElementById('eliminarPlato').addEventListener("click", eliminarPlatos);
    mostrarPlatos();
}

function vaciarPlato() {
    platos = [];
    mostrarPlatos();
}
/*
function agregarMasPlatos() {
    let cantidad = agregarMasInput.value;
    if (cantidad > 1) {
        for (let i = 0; i < cantidad; i++) {
            platos.push(nuevoPlato); //agrega un elemento nuevo a la tabla
            crearFila(nuevoPlato);
        }
    } else if (cantidad === 1 || cantidad === null) {
        agregarPlato();
    }
}
*/