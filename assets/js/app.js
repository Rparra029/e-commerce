'use strick';

/* Precio */
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