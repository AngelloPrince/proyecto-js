const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

// carrito
let carrito = [];

// recorriendo array
productos.forEach((bebidas)=>{
    let content = document.createElement("div");
    content.className= "card";
    content.innerHTML = `
      <img src= "${bebidas.img}">
      <h3>${bebidas.nombre}</h3>
      <p class="prince">${bebidas.precio} $</p>
    `;

    shopContent.append(content);

    //boton de compra
    let comprar = document.createElement("button")
    comprar.innerText ="comprar";
    comprar.className = "comprar";

    content.append(comprar);

    // eventos de compra
    comprar.addEventListener("click",()=>{
        carrito.push({
            id : bebidas.id,
            img: bebidas.img,
            nombre: bebidas.nombre,
            precio: bebidas.precio,
        })
    })
});

// evento carrito
verCarrito.addEventListener("click", ()=>{
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
        <h1 class="modal-header-title">Carrito.</h1>
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", ()=>{
        modalContainer.style.display = "none";
    });


    modalHeader.append(modalbutton);


    carrito.forEach((bebidas)=>{
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
            <img src = "${bebidas.img}">
            <h3>${bebidas.nombre}</h3>
            <p>${bebidas.precio} $</p>
        `;
        
        modalContainer.append(carritoContent);
    });

    const total = carrito.reduce((acc, el)=> acc + el.precio, 0);

    const totalBuying = document.createElement("div")
    totalBuying.className ="total-content"
    totalBuying.innerHTML = `Total a pagar: ${total} $`;
    modalContainer.append(totalBuying);

});