//variables

//Estsa variable alamcena todos los elementos de mi contenedor de tarjetas
let allContainerCart =  document.querySelector('.contenedor__tarjetas');

//Funciones

loadEventListeners()
/* Esta función agrega un evento a cada elemento de mi contenedor de tarjetas */
function loadEventListeners(){
    allContainerCart.addEventListener('click', addProduct);
}

/* Esta función selecciona el bloque html que contiene la información del producto seleccionado y lo
pasa como parámetro a la función readTheContent*/
function addProduct(evento){
    if (evento.target.classList.contains('carro-rojo')) {
        const selectProduct = evento.target.parentElement.parentElement.parentElement;
        readTheContent(selectProduct)
    }
}

//Esta función crea un obkjeto con el contenido del producto seleccionado
function readTheContent(product){
    const infoProduct = {
        image: product.querySelector('div img').src,
        title: product.querySelector('.tarjeta__modelo').textContent,
        price: product.querySelector('div p span').textContent,
        id: product.querySelector('.carro-rojo').getAttribute('Data-id'),
        amount: 1
        
    }
    console.log(infoProduct);
}