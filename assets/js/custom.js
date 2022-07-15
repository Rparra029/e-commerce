// CARRITO DE CMOPRAS //

//variables

//Esta variable alamcena todos los elementos de mi contenedor de tarjetas
let allContainerCart =  document.querySelector('.contenedor__tarjetas');
//Variable para almacenar los productos en el carrito
let buyProducts = [];
//Variable para el contendor de los productos de carrito
let containerProducts = document.querySelector('.carrito-de-compra-superior');
//variable para almacenar el contenedor del carrito
let containerCartProducts = document.querySelector('carrito-de-comptra');
//Variable para almacenar selector del precio Total
let selectTotalPrice =  document.querySelector('.carrito-total__cantidad-total');
//Variable para almacenar el precio total
let totalPrice = 0;
//Variable para almacenar en contenedor de la cantidad de articulos
let amountProducts = document.querySelector('.contador');
///Contador para indicar la cantidad de porductos en el carrito.
let countProducts = 0;

//Funciones


loadEventListeners()
/* Esta función agrega un evento a cada elemento de mi contenedor de tarjetas y contenedor de cada produtco del carrito */
function loadEventListeners(){
    allContainerCart.addEventListener('click', addProduct);
    containerCartProducts.addEventListener('click', deleteProduct);

}

/* Esta función selecciona el bloque html que contiene la información del producto seleccionado y lo
pasa como parámetro a la función readTheContent*/
function addProduct(evento){
    if (evento.target.classList.contains('carro-rojo')) {
        const selectProduct = evento.target.parentElement.parentElement.parentElement;
        readTheContent(selectProduct)
        //console.log(evento.target)
    }
}

//función para eliminar un producto del carrito
function deleteProduct(evento){
    
    if (evento.classList.contains('borrar')) {
        const deleteId = evento.getAttribute('data-id');

        buyProducts.forEach(element =>{
            if (element.id === deleteId) {
                let vp = element.price
                vp = vp.replace(',','')
                let priceReduce = parseInt(vp) * parseInt(element.amount);
                totalPrice = totalPrice - priceReduce;
                console.log(vp)
            }
        })
        countProducts--;
        loadHTML();
        buyProducts = buyProducts.filter(product => (product.id !== deleteId))
       // countProducts--;
    }
    
    //console.log(element.id)
    loadHTML();
}


//Esta función crea un objeto con el contenido del producto seleccionado
function readTheContent(product){
    const infoProduct = {
        image: product.querySelector('div img').src,
        brand: product.querySelector('.tarjeta__marca').textContent,
        model: product.querySelector('.tarjeta__modelo').textContent,
        price: product.querySelector('div p span').textContent,
        id: product.querySelector('.carro-rojo').getAttribute('data-id'),
        amount: product.querySelector('.carro-rojo').getAttribute('amount')
        
    }
    let p = infoProduct.price
    p = p.replace(',','')
    p = parseInt(p)
    totalPrice =  totalPrice + p;

    //totalPrice = totalPrice.toLocaleString('en-us')
    console.log(p)
    
//Validar si un artículo está en el carrito (para aumentar la cantidad)
    let existe = buyProducts.some(product=> product.id === infoProduct.id)
    if (existe) {
        const pro = buyProducts.forEach(product => {
            if (product.id === infoProduct.id) {
                product.amount ++;
                return product;
            }else{
                
            }
        });
        //buyProducts = [...pro];
        
    }else{
        
        buyProducts = [...buyProducts, infoProduct]//creamos una copia del arreglo y vamos añadiendo los productos
        countProducts++;
    }


    loadHTML();
    console.log(infoProduct);
}

//Función para agregar el HTML

function loadHTML(){
    clearHTML();    
    buyProducts.forEach(product => {
        const{image, brand, model, price,amount, id}= product;
        let row = document.createElement('div'); //se extraen las propiedades del objeto y al mismo tiempo se declaran como variables con el mismo nombre
        row.classList.add('contenedor-producto-carrito')
        row.innerHTML = `
        <div class="producto-carrito">
            <div class="carrito-img"><img class="producto-carrito__img" src="${image}" alt="producto"></div>
            <div class="producto-carrito__detalle">
                <p class="producto-carrito__marca">${brand}</p>
                <p class="producto-carrito__modelo">${model}</p>
                <input class="producto-carrito__cantidad" type="number" placeholder="Cantidad" min="1" value="${amount}"    >
            </div>
            <div class="producto-carrito__eliminar" ><img class="borrar" src="./assets/img/basura.png" alt="eliminar" onclick="deleteProduct(this)" data-id="${id}"></div>
        </div>
        <div class="producto-carrito-costo">
            <p class="producto-carrito-costo__texto">Total</p>
            <p class="carrito-costo-articulo">$<span>${price}</span></p>
        </div>
        <hr>
        `;
        containerProducts.appendChild(row)
        selectTotalPrice.innerHTML = totalPrice;
        amountProducts.innerHTML = countProducts;
    });                                                  
}                                                        
 function clearHTML(){
    containerProducts.innerHTML= '';
 }
 //Función para cerrar el carrito de compras    
 function closeCart(){
    document.querySelector('.cerrar-carrito').addEventListener('click', (evento)=>{
        let X = document.querySelector('.carrito-de-compra');
        X.style.visibility = 'hidden';
    })   
 }
 //Función para abrir el carrito de compras
 function openCart(){
    document.getElementById('cart').addEventListener('click', (evento)=>{
        let C = document.querySelector('.carrito-de-compra');
        C.style.visibility = 'visible'
        
    })
 }
 
