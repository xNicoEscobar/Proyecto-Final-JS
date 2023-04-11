let listaProductos = [
    {
        id: 1,
        nombre: "RX 6600 XT",
        descripcion: "AMD ASRock Challenger Radeon 6600 Series RX 6600 XT RX6600XT CLD 8GB GDDR6 OC Edition",
        precio: 220000,
        cantidad: 1,
        img: "./assets/D_NQ_NP_2X_638727-MLA50235336411_062022-F.jpg"
    },
    {
        id: 2,
        nombre: "RX 6650 XT",
        descripcion: "Placa De Video Radeon Rx 6650 Xt 8GB GDDR6 Msi Mech 2x Oc",
        precio: 240000,
        cantidad: 1,
        img: "./assets/D_NQ_NP_2X_805196-MLA50931129746_072022-F.jpg"
    },
    {
        id: 3,
        nombre: "RX 6700 XT",
        descripcion: "Placa de video AMD PowerColor Red Devil Radeon RX 6700 Series RX 6700 XT AXRX 6700XT OC 12GB GDDR6",
        precio: 200000,
        cantidad: 1,
        img: "./assets/D_NQ_NP_711390-MLA52684067237_122022-O.jpg"
    },
    {
        id: 4,
        nombre: "RX 6750 XT",
        descripcion: "Placa De Video Radeon Powercolor Rx 6750 Xt Gaming Oc 12GB GDDR6",
        precio: 220000,
        cantidad: 1,
        img: "./assets/D_NQ_NP_802507-MLA53306033537_012023-O.jpg"
    },
    {
        id: 5,
        nombre: "RX 6800 XT",
        descripcion: "Placa De Video Gigabyte Amd Radeon Rx 6800xt Gaming OC 16GB GDDR6",
        precio: 330000,
        cantidad: 1,
        img: "./assets/D_NQ_NP_867752-MLA52063180010_102022-O.jpg"
    },
    {
        id: 6,
        nombre: "RTX 3060 Ti",
        descripcion: "Placa De Video Nvidia Colorful Colorful Series Geforce Rtx 30 Series Rtx 3060 Ti Geforce Rtx 3060 Ti Nb Duo Lhr-v 8gb",
        precio: 200000,
        cantidad: 1,
        img: "./assets/D_NQ_NP_607460-MLA51840070909_102022-O.jpg"
    },
    {
        id: 7,
        nombre: "RTX 3070",
        descripcion: "Placa de video Nvidia Evga FTW3 Ultra Gaming GeForce RTX 30 Series RTX 3070 08G-P5-3767-KL 8GB GDDR6X",
        precio: 340000,
        cantidad: 1,
        img: "./assets/D_NQ_NP_655363-MLA53643848348_022023-O.jpg"
    },
    {
        id: 8,
        nombre: "RTX 3070 Ti",
        descripcion: "Placa de video Nvidia PNY Uprising GeForce RTX 30 Series RTX 3070 Ti VCG3070T8TFXMPB Triple Fan Edition 8GB GDDR6X",
        precio: 230000,
        cantidad: 1,
        img: "./assets/D_NQ_NP_857414-MLA53014561160_122022-O.jpg"
    },
    {
        id: 9,
        nombre: "RTX 3080",
        descripcion: "Placa de video Nvidia MSI Ventus GeForce RTX 30 Series RTX 3080 GEFORCE RTX 3080 VENTUS 3X Edition 10GB GDDR6X",
        precio: 400000,
        cantidad: 1,
        img: "./assets/D_NQ_NP_979059-MLA50246411165_062022-O.jpg"
    },
    {
        id: 10,
        nombre: "RTX 3080 Ti",
        descripcion: "Placa Video Nvidia Zotac Geforce Rtx 3080 Ti Trinity Oc 12gb GDDR6X",
        precio: 320000,
        cantidad: 1,
        img: "./assets/D_NQ_NP_652773-MLA53856309800_022023-O.jpg"
    },
    {
        id: 11,
        nombre: "RTX 3090",
        descripcion: "Placa de video Nvidia Zotac Gaming GeForce RTX 30 Series RTX 3090 ZT-A30900D-10P 24GB GDDR6X",
        precio: 390000,
        cantidad: 1,
        img: "./assets/D_NQ_NP_659938-MLA51558829194_092022-O.jpg"
    },
    {
        id: 12,
        nombre: "RTX 3090 Ti",
        descripcion: "Placa de video Nvidia Zotac Gaming GeForce RTX 30 Series RTX 3090Ti 24GB GDDR6X",
        precio: 550000,
        cantidad: 1,
        img: "./assets/D_NQ_NP_936398-MLA53455996613_012023-O.jpg"
    },
]

const formatoJSON = JSON.stringify(listaProductos)

localStorage.setItem("listaProductos", formatoJSON)