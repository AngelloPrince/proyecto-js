const pintarCarrito = ()=>{
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
            <span class="restar"> - </span>
            <p>Cantidad: ${bebidas.cantidad}</p>
            <span class="sumar"> + </span>
            <p>Total: ${bebidas.cantidad * bebidas.precio}</p>
            <span class="delete-product"> ❌ </span>
        `;
        
        modalContainer.append(carritoContent);

        let restar = carritoContent.querySelector(".restar")

        restar.addEventListener("click", () =>{
            if (bebidas.cantidad !== 1) {
                bebidas.cantidad--;
            }
            saveLocal();
            pintarCarrito();
        });

        let sumar = carritoContent.querySelector(".sumar")
        sumar.addEventListener("click", ()=>{
            bebidas.cantidad++;
            saveLocal();
            pintarCarrito();
        });

        let eliminar = carritoContent.querySelector(".delete-product")
        
        eliminar.addEventListener("click", () =>{
            eliminarProducto(bebidas.id);
        })
    });

    const total = carrito.reduce((acc, el)=> acc + el.precio * el.cantidad, 0);

    const totalBuying = document.createElement("div")
    totalBuying.className ="total-content"
    totalBuying.innerHTML = `Total a pagar: ${total} $`;
    modalContainer.append(totalBuying);

};

verCarrito.addEventListener("click", pintarCarrito)

const eliminarProducto = (id) =>{
    const foundId = carrito.find((element) => element.id === id);

    carrito = carrito.filter((carritoId) =>{
        return carritoId !== foundId;
    });
    carritoCounter();
    saveLocal();
    pintarCarrito();

    // uso de libreria
    Swal.fire({
        title: 'Tu producto ha sido eliminado del carrito',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
};

const carritoCounter = () =>{
    cantidadCarrito .style.display = "block";

    const carritoLength = carrito.length;

    localStorage.setItem("carritoLength", JSON.stringify(carritoLength))

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

carritoCounter();