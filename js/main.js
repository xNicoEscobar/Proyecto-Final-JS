class ProductoController {
    constructor() {
        this.listaProductos = []
    }

//Implemento Fetch
    levantarJSON() {
        fetch("./js/mi_api.json")
        .then(resp => resp.json())
        .then(listaProductos => 
            
            listaProductos.forEach(producto => {
            this.contenedor_productos.innerHTML += `
                    <div class="card" style="width: 18rem;">
                        <img style="width: 286px height: 218px" src="${producto.img}" alt="RX 6600 XT">
                            <div class="card-body">
                                <h5 class="card-title d-flex justify-content-center">${producto.nombre}</h5>
                                <p class="card-text">${producto.descripcion}</p>
                                <p>Precio: <strong>$${producto.precio}</p></strong>
                                <a href="#" class="btn btn-primary d-flex justify-content-center"  id="gpu${producto.id}">Añadir al carrito</a>
                            </div>
                    </div>
            `
        }))
    }

    mostrarEnDOM(contenedor_productos) {
        //Limpio lista
        contenedor_productos.innerHTML = ""
        //Muestro lista
        this.listaProductos.forEach(producto => {
            contenedor_productos.innerHTML += `
                    <div class="card" style="width: 18rem;">
                        <img style="width: 286px height: 218px" src="${producto.img}" alt="RX 6600 XT">
                            <div class="card-body">
                                <h5 class="card-title d-flex justify-content-center">${producto.nombre}</h5>
                                <p class="card-text">${producto.descripcion}</p>
                                <p>Precio: <strong>$${producto.precio}</p></strong>
                                <a href="#" class="btn btn-primary d-flex justify-content-center"  id="gpu${producto.id}">Añadir al carrito</a>
                            </div>
                    </div>
            `
        })
    }
}

class CarritoController {
    constructor() {
        this.listaCarrito = []
    }

    borrar(producto) {
        let indice = this.listaCarrito.indexOf(producto)
        this.listaCarrito.splice(indice, 1)
    }
    levantar() {
        let obtenerListaJSON = localStorage.getItem("listaCarrito")
        if (obtenerListaJSON) {
            this.listaCarrito = JSON.parse(obtenerListaJSON)
            return true
        }
        return false
    }

    anadir(producto) {

        let productoExiste = this.listaCarrito.some(el => el.id == producto.id)
        if(productoExiste){

            const productoEncontrado = this.buscar(producto.id)
            productoEncontrado.cantidad += 1

        }else{
            this.listaCarrito.push(producto)

        }

        let formatoJSON = JSON.stringify(this.listaCarrito)

        localStorage.setItem("listaCarrito", formatoJSON)

    }
    cartDOMClear(contenedor_carrito){
        contenedor_carrito.innerHTML = ""
    }
    mostrarEnDOM(contenedor_carrito) {
        //Limpio lista
        this.cartDOMClear(contenedor_carrito)
        //Muestro lista
        this.listaCarrito.forEach(producto => {
            contenedor_carrito.innerHTML += `
            <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
            <div class="col-md-4">
            <img src="${producto.img}" class="img-fluid rounded-start" alt="${producto.nombre}">
            </div>
            <div class="col-md-8">
            <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.descripcion}</p>
            <button id= "borrar${producto.id}"> <i class= "botonBorrar fa-solid fa-trash"></i> </button>
                        <p class="card-text"><small><strong>$${producto.precio}</strong> Unidades: ${producto.cantidad}</small></p>
                        </div>
                    </div>
                    </div>
                    </div>
                    `
        })

        this.listaCarrito.forEach(producto => {
            document.getElementById(`borrar${producto.id}`).addEventListener("click", () => {
                //Evento en botón borrar
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Producto eliminado!',
                    showConfirmButton: false,
                    timer: 1000
                })

                //Borro el producto en carrito
                this.borrar(producto)
                //Actualizo el storage
                localStorage.setItem("listaCarrito", JSON.stringify(this.listaCarrito))
                //Actualizo el DOM
                this.mostrarEnDOM(contenedor_carrito)
                this.mostrarPreciosEnDOM(subtotal, total)
            })
        })
    }
    limpiar() {
        this.listaCarrito = []
        localStorage.removeItem("listaCarrito")
    }

    mostrarPreciosEnDOM(subtotal, total){
        subtotal.innerHTML = this.mostrarSubtotal()
        total.innerHTML = this.mostrarTotal()
    }

    mostrarSubtotal() {
        return this.listaCarrito.reduce((ac, producto) => ac + producto.precio * producto.cantidad, 0)
    }
    mostrarTotal() {
        return this.mostrarSubtotal() * 1.21
    }
    
    buscar(id){
        return this.listaCarrito.find(producto => producto.id == id)
    }
}

// Controladores de objetos
const controladorProductos = new ProductoController()
const controladorCarrito = new CarritoController()

//Verificador de storage
controladorProductos.levantarJSON()
const levantoEsto = controladorCarrito.levantar()

//Levanto JSON
controladorProductos.levantarJSON()

//Obtengo el DOM
const contenedor_productos = document.getElementById("contenedor_productos")
const contenedor_carrito = document.getElementById("contenedor_carrito")
const finalizar_compra = document.getElementById("finalizar_compra")
const subtotal = document.getElementById("subtotal")
const total = document.getElementById("total")

//Levanto precios en Storage
if(levantoEsto){
    controladorCarrito.mostrarPreciosEnDOM(subtotal, total)
}

//Aplicación JS
controladorProductos.mostrarEnDOM(contenedor_productos)
controladorCarrito.mostrarEnDOM(contenedor_carrito)

//Eventos en boton de las cards
controladorProductos.listaProductos.forEach(producto => {
    const productoEnCarrito = document.getElementById(`gpu${producto.id}`)

    productoEnCarrito.addEventListener("click", () => {

        controladorCarrito.anadir(producto)

        controladorCarrito.levantar()

        controladorCarrito.mostrarEnDOM(contenedor_carrito)

        controladorCarrito.mostrarPreciosEnDOM(subtotal, total)
        Toastify({
            text: "Añadido al carrito!",
            duration: 2000,
            gravity: "bottom",
            position: "right",
            style: {
                background: "linear-gradient(to right, #1eb597, #227bad)",
                color: "white"

            },
        }).showToast();
    })
})

//Eventos en productos en carrito
finalizar_compra.addEventListener("click", () => {
    if (controladorCarrito.listaCarrito.length > 0) {

        controladorCarrito.limpiar()
        controladorCarrito.mostrarEnDOM(contenedor_carrito)


        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Compra realizada con éxito! 😎',
            showConfirmButton: false,
            timer: 2000
        })
    } else {
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'No hay nada que comprar 😔',
            showConfirmButton: false,
            timer: 2000
        })
    }
    controladorCarrito.mostrarPreciosEnDOM(subtotal, total)
})
