const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById ("cantidadCarrito");
// carrito
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // set item
const saveLocal = () =>{
  localStorage.setItem("carrito", JSON.stringify (carrito));
}
// MANEJO DE PROMESAS CON FETCH Y CARGA DE DATOS CON JSON
fetch('./data.json')
.then(response => response.json())
.then(data=>{
  data.forEach((bebidas)=>{
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
      // TOMA DE DATOS Y RENDERIZANDO
      const repeat = carrito.some((repeatBebidas)=> repeatBebidas.id === bebidas.id);

      if(repeat){
        carrito.map((prod)=>{
          if(prod.id === bebidas.id){
            prod.cantidad++;
          }
        });
      } else{
        carrito.push({
          id : bebidas.id,
          img: bebidas.img,
          nombre: bebidas.nombre,
          precio: bebidas.precio,
          cantidad: bebidas.cantidad,
        });
      }
      carritoCounter();
      saveLocal();

        //uso de libreria
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Tu producto ha sido añadido al carrito',
            showConfirmButton: false,
            timer: 1500
          });
        })
  });
})


  
