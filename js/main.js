class ProductoController {
    constructor() {
        this.listaProductos = []
    }
    levantar() {
        let obtenerListaJSON = localStorage.getItem("listaProductos")

        if (obtenerListaJSON) {
            this.listaProductos = JSON.parse(obtenerListaJSON)
        }
    }

    mostrarEnDOM(contenedor_productos) {
        this.listaProductos.forEach(producto => {
            contenedor_productos.innerHTML += `
                    <div class="card" style="width: 18rem;">
                        <img src="${producto.img}" alt="RX 6600 XT">
                            <div class="card-body">
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text">${producto.descripcion}</p>
                                <p>Precio: <strong>$${producto.precio}</p></strong>
                                <a href="#" class="btn btn-primary d-flex justify-content-center" id="cpu${producto.id}">Añadir al carrito</a>
                            </div>
                    </div>
            `
        })
    }
}

class CarritoController {
    constructor() {
        listaCarrito = []
    }

    levantar() {
        let obtenerListaJSON = localStorage.getItem("listaCarrito")
        if (obtenerListaJSON) {
            this.listaCarrito = JSON.parse(obtenerListaJSON)
        }
    }

    anadir(producto) {
        this.listaCarrito.push(producto)

        let formatoJSON = JSON.parse(this.listaCarrito)

        localStorage.setItem("listaCarrito", formatoJSON)
    }

    mostrarEnDOM(contenedor_carrito) {
        contenedor_carrito.innerHTML = ""
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
                        <p class="card-text"><small class="text-muted">$${producto.precio}</small></p>
                        </div>
                    </div>
                    </div>
                    </div>
                    `
        })
    }
}

const controladorProductos = new ProductoController()
const controladorCarrito = new CarritoController()

controladorProductos.levantar()
controladorCarrito.levantar()

const contenedor_productos = document.getElementById("contenedor_productos")
const contenedor_carrito = document.getElementById("contenedor_carrito")

listaProductos.forEach(producto => {
    contenedor_productos.innerHTML += `
            <div class="card" style="width: 18rem;">
            <img src="${producto.img}" alt="RX 6600 XT">
            <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.descripcion}</p>
            <p>Precio: <strong>$${producto.precio}</p></strong>
            <a href="#" class="btn btn-primary d-flex justify-content-center" id="cpu${producto.id}">Añadir al carrito</a>
            </div>
            </div>
            `
})

controladorProductos.mostrarEnDOM(contenedor_productos)
controladorCarrito.mostrarEnDOM(contenedor_carrito)

controladorProductos.listaProductos.forEach(producto => {
    const productoEnCarrito = document.getElementById(`cpu${producto.id}`)

    productoEnCarrito.addEventListener("click", () => {

        controladorCarrito.anadir(producto)

        contenedor_carrito.innerHTML = ""

        controladorCarrito.mostrarEnDOM(contenedor_carrito)
    })

})
