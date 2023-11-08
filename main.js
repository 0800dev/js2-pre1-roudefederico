let nombreDeUsuario = prompt ("Usuario");
let contraDeUsuario = prompt ("Contraseña");  
while (nombreDeUsuario !== "" && contraDeUsuario !== "")
{
let bienvenida = alert('Bienvenido a ViceVersa Clothing Store');
let eleccionCategoria = parseInt(prompt ("Elegi una categoria \n 1. Remeras \n 2. Jeans \n 3. Hoddies"));

const calcularIva = (precio) => {
   const iva = precio*0.21;
   return iva;
};

const productos = [
{ 
    categoria:"Remeras",

    precio:5
},

{
    categoria: "Jeans",
    precio:11
},
{   
    categoria: "Hoodies",
    precio:9 
},
];

if (eleccionCategoria === 1){
     const precioRemera = productos[0].precio;
        const ivaRemera = calcularIva(precioRemera);
        const precioRemeraFinal = precioRemera + ivaRemera;
    alert (`El IVA del producto es : $${ivaRemera}`);
    alert (`El precio final es de : $${precioRemeraFinal}`);
    }
    else if (eleccionCategoria === 2) {
        const precioJean = productos[1].precio;
        const ivaJean = calcularIva (precioJean);
        const precioJeanFinal = precioJean + ivaJean;
     alert (`El IVA del producto es: $${ivaJean}`);   
     alert (`El precio final es de : $${precioJeanFinal}`);
    } if (eleccionCategoria === 3) {
        const precioHoodie = productos[2].precio;
        const ivaHoodie = calcularIva(precioHoodie);
        const precioHoodieFinal = precioHoodie + ivaHoodie;
        alert (`El IVA del producto es : $${ivaHoodie}`);
        alert (`El precio final es de : $${precioHoodieFinal}`);
    }
};