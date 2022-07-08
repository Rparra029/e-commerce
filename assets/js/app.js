'use strick';

/* Section Aside, 
function for deploy*/

/* Con la siguiente función paso directamente los parámetros para poder usarla*/ 

desplegar('flecha-precio', 'lista-precio');
desplegar('flecha-categoria', 'lista-categoria');
desplegar('flecha-dispositivo', 'lista-dispositivo');
desplegar('flecha-ram', 'lista-ram');

function desplegar (idFlecha, idCaja){
    document.getElementById(idFlecha).addEventListener('click', (evento)=> {
        let mostrarRangos = document.getElementById(idCaja)
        if(mostrarRangos.style.display ==="none"){
            mostrarRangos.style.display = 'grid'
        }else{
            mostrarRangos.style.display = 'none';
        }

    })
}

/* ------Funciónes  de selección de checkbox--------- */

/*  Esta función usa como parámetro el id del elemento que registra el evento


seleccionar('checkbox-empty')

function seleccionar(idCheckbox){
    
    let componente = document.getElementById(idCheckbox)
    componente.addEventListener('click', (evento)=>{
        if(componente.getAttribute('src') == './assets/img/square_3.svg'){
            componente.setAttribute('src', './assets/img/check_box_3.svg');
        }else{
            componente.setAttribute('src', './assets/img/square_3.svg')
        }
    })
} 
*/


/* Esta Función es llamada desde el HTML */

function seleccionar(componente){
    if(componente.getAttribute('src') == './assets/img/square_3.svg'){
        componente.setAttribute('src', './assets/img/check_box_3.svg');
    }else{
        componente.setAttribute('src', './assets/img/square_3.svg')
    }
}

/* ------FIN de funciónes  de selección de checkbox--------- */


/* -------- Corazón de me encanta ----------- */


function encanta(componente){
        if(componente.getAttribute('src') == './assets/img/corazon gris.png'){
            componente.setAttribute('src', './assets/img/corazon rojo.png')
        }else{
            componente.setAttribute('src', './assets/img/corazon gris.png')
        }
}