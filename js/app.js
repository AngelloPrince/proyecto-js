const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById ("cantidadCarrito");
const arreglo = [
  {
      id: 1,
      nombre: "Red Label",
      precio: 50,
      img: 'https://cdn.grupoelcorteingles.es/statics/manager/contents/images/uploads/2020/11/ByjIiG69v.jpeg',
      cantidad: 1,
  },
  {
      id: 2,
      nombre: "Black Label",
      precio: 80,
      img: 'https://www.whiskyflavour.es/wp-content/uploads/2016/12/whisky-flavour-johnnie-walker-black-label.jpg',
      cantidad: 1,
  },
  {
      id: 3,
      nombre: "Double Black",
      precio: 120,
      img: 'https://drinkstack.com/wp-content/uploads/2022/06/johnnie-walker-double-black.jpg',
      cantidad: 1,
  },
  {
      id: 4,
      nombre: "Gold Label",
      precio: 140,
      img: 'https://www.johnniewalker.com/media/3522/gold-470x526.jpg?quality=75&format=png8',
      cantidad: 1,
  },
];

// carrito
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
// recorriendo array
/*
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
      // repetidor de productos
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
*/

// LOCAL STORAGE
  // set item
const saveLocal = () =>{
  localStorage.setItem("carrito", JSON.stringify (carrito));
}

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
      // repetidor de productos
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


  
