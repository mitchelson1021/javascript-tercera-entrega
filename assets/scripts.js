



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
        let textMensaje = document.createElement("div");
        textMensaje.innerHTML = `<h3>Si tu fecha de Nacimiento es ${dia.value} / ${mes.value} / ${año.value}  tu signo del Zodiaco es "${signo}"`  
        mensaje.append(textMensaje);
    }

    function error () {
        let textMensajeError = document.createElement('h3');
        textMensajeError.innerHTML = `<h3>Hubo un error al ingresar los datos, intenta de nuevo</h3>`;
        mensaje.append(textMensajeError);

    }

}

//-------------------Filtro------------------

function btn_select () {
    let btn_select_signo = document.getElementById("select").value
        console.log("respuesta al click del btn " + btn_select_signo)
        
        let filtro = signos.filter(buscar => buscar.signo == btn_select_signo);
        console.log(filtro);
//-------Aquí me funciona en consola pero no en el Dom--------
        let datos_signo = document.createElement('div');
        datos_signo.innerHTML = `<p>${filtro}</p>`;
        mensaje.append(datos_signo);

}

//-------------------Zona de Ventas-------------



let carrito = [];



function agregar_al_carrito (e){
    console.log("se agregó producto al carrito");

    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;


    let nombre_producto = padre.querySelector("h5").textContent;
    let precio_producto = padre.querySelector("p").textContent;
    let imagen_ptoducto = abuelo.querySelector("img").src;

    console.log(nombre_producto);
    console.log(precio_producto);
    console.log(imagen_ptoducto);

}

let btn_comprar = document.querySelectorAll(".btn_agregar");

for (comprar of btn_comprar){
    comprar.addEventListener("click", agregar_al_carrito);
    

}