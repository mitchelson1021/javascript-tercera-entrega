



function zodiaco () {
    let dia = document.getElementById("dia");
    let mes = document.getElementById("mes");
    let año = document.getElementById("anio");
    let mensaje = document.getElementById("mensaje");

        //Aries
    if (dia.value >= 21 && dia.value <= 31 &&  mes.value == "3" || dia.value >= 1 && dia.value <= 19 &&  mes.value == "4") {
        fechaNacimiento("Aries");
        console.log("Tu sigo Zodiacal es Aries");
    }  //Taurus
     else if ( dia.value >= 20 && dia.value <= 30 &&  mes.value == "4" || dia.value >= 1 && dia.value <= 20 &&  mes.value == "5") {
        fechaNacimiento("Taurus");
        console.log("Tu sigo Zodiacal es Taurus");
    } //Gémini
     else if ( dia.value >= 21 && dia.value <= 31 &&  mes.value == "5" || dia.value >= 1 && dia.value <= 20 &&  mes.value == "6") {
        fechaNacimiento("Géminis");
        console.log("Tu sigo Zodiacal es Géminis");
    } //Cancer
     else if ( dia.value >= 21 && dia.value <= 30 &&  mes.value == "6" || dia.value >= 1 && dia.value <= 20 &&  mes.value == "7") {
        fechaNacimiento("Cancer");
        console.log("Tu sigo Zodiacal es Cáncer");
    } //Leo
    else if ( dia.value >= 21 && dia.value <= 31 &&  mes.value == "7" || dia.value >= 1 && dia.value <= 22 &&  mes.value == "8") {
        fechaNacimiento("Leo");
        console.log("Tu sigo Zodiacal es Leo");
    } //Virgo
     else if ( dia.value >= 23 && dia.value <= 31 &&  mes.value == "8" || dia.value >= 1 && dia.value <= 23 &&  mes.value == "9") {
        fechaNacimiento("Virgo");
        console.log("Tu sigo Zodiacal es Virgo");
    } //Libra
     else if ( dia.value >= 24 && dia.value <= 30 &&  mes.value == "9" || dia.value >= 1 && dia.value <= 23 &&  mes.value == "10") {
        fechaNacimiento("Libra");
        console.log("Tu sigo Zodiacal es Libra");
    } //Escorpio
     else if ( dia.value >= 24 && dia.value <= 31 &&  mes.value == "10" || dia.value >= 1 && dia.value <= 22 &&  mes.value == "11") {
        fechaNacimiento("Escorpio");
        console.log("Tu sigo Zodiacal es Escorpio");
    } //Sagitarius
     else if ( dia.value >= 23 && dia.value <= 30 &&  mes.value == "11" || dia.value >= 1 && dia.value <= 22 &&  mes.value == "12") {
        fechaNacimiento("Sagitario");
        console.log("Tu sigo Zodiacal es Sagitarius");
    }  //Capricornus
     else if ( dia.value >= 23 && dia.value <= 31 &&  mes.value == "12" || dia.value >= 1 && dia.value <= 22 &&  mes.value == "1") {
        fechaNacimiento("Capricornio");
        console.log("Tu sigo Zodiacal es Capricornus");
    } //Aquarius
     else if ( dia.value >= 23 && dia.value <= 31 &&  mes.value == "1" || dia.value >= 1 && dia.value <= 20 &&  mes.value == "2") {
        fechaNacimiento("Acuiario");
        console.log("Tu sigo Zodiacal es Aquarius");
    } //Piscis
     else if ( dia.value >= 21 && dia.value <= 29 &&  mes.value == "2" || dia.value >= 1 && dia.value <= 20 &&  mes.value == "3") {
        fechaNacimiento("Pisis");
        console.log("Tu sigo Zodiacal es Piscis");
    } 
     else {
        error()
        console.log("Revisa los parámetros ingresados, hubo un error")
    }

    function fechaNacimiento (signo) {
        mensaje.innerHTML = `<h3>Si tu fecha de Nacimiento es ${dia.value} / ${mes.value} / ${año.value}  tu signo del Zodiaco es "${signo}"</h3>`  
    }

    function error () {
        mensaje.innerHTML = '<h3>Hubo un error al ingresar los datos, intenta de nuevo</h3>';
    }

}

//-------------------Filtro------------------

function btn_select () {
    let btn_select_signo = document.getElementById("select").value
        console.log("respuesta al click del btn " + btn_select_signo)
        
        let filtro = signos.filter(buscar => buscar.signo == btn_select_signo);
        console.log(filtro);

}

//-------------------Zona de Ventas-------------




const contenedor = document.getElementById("contenedorProductos");

function crear_tienda_productos () {

    Object.entries(productos).forEach((producto) => {
        
        //console.log(producto[1].imagen);
        //console.log(producto[1].nombre);
        //console.log(producto[1].precio);

        // Por fin, aquí pude entender de las diferencias al
        // insertar html desde js
        const cards =  document.createElement('div');
        cards.innerHTML =
 
        `
        <!----------card producto----------->
        <div class="card text-center">
        <img id="imgProduct" src="${producto[1].imagen}" class="card-img-top" alt="...">
        <div id="cardTitle" class="card-body">
            <h5 class="card-title">${producto[1].nombre}</h5>
            <p id="description">${producto[1].descripcion}</p>
            <p class="sku">SKU:</p><p class="sku">${producto[1].id}</p>
            <h6 id="cardPrice" class="card-text"><h6 class="signo">$</h6>${producto[1].precio}</h6><br>
            <button id="btnCard" type="button" class="btn btn-primary btn_agregar">Agregar al carrito</button>
        </div>
        </div>`;
        contenedor.appendChild(cards);

    });
};
 crear_tienda_productos();

 //creando la funcion para añadir al carrito de compra



let btn_card = document.querySelectorAll('#btnCard');
//console.log(btn_card);

let carrito = [{}];

for (btn_listen of btn_card) {
    btn_listen.addEventListener('click', (e) => {
        
        
        let imagen_carrito = e.target.parentNode.parentNode.childNodes[1].src;
        let id_carrito = parseInt(e.target.parentNode.childNodes[6].textContent);
        let nombre_carrito = e.target.parentNode.childNodes[1].textContent;
        let precio_carrito = parseInt(e.target.parentNode.childNodes[10].textContent);
        let cantidad_carrito = 1;
        

        carrito.push({
            id: id_carrito,
            cantidad: cantidad_carrito,
            imagen: imagen_carrito,
            nombre: nombre_carrito,
            precio: precio_carrito,

        });
        console.log(carrito);

    });
    
}


//Renderizar Carrito
carrito.forEach(rend_carrito => {
    let render_carrito_cantidad = document.getElementById('cantidad_carrito');
    render_carrito_cantidad.textContent = `${cantidad_carrito}`;

    let render_carrito_imagen = document.getElementById('imagen_carrito').textContent = `${imagen_carrito}`;
    let render_carrito_nombre = document.getElementById('nombre_carrito').textContent = `${nombre_carrito}`;
    let render_carrito_precio = document.getElementById('precio_carrito').textContent = `${precio_carrito}`;
    let render_carrito_eliminar = document.getElementById('btn_eliminar_carrito');
});







//let selectCarrito = getElementById('imagen_carrito');





/* function sgte_fn (e) {
    let btn_padre = document.querySelector('.sku')
    console.log(sku_list, e)
    }
 */

