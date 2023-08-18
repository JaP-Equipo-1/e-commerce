//  *** INICIO AGREGADO ***


//URL de la API;
let DATA_URL = "https://japceibal.github.io/emercado-api/cats_products/";
DATA_URL += localStorage.catID + '.json'; //Le agrega la ID de la categoría para tomar los productos de ese json. La ID la toma de categories.js línea 40;

const divProductos = document.getElementById('divProductos');
const subtitProductos = document.getElementById('subtitProductos');

//Función que muestra los productos;
function showData(dataArray) { 
  subtitProductos.innerHTML += dataArray.catName //Esto es un detalle, agrega el nombre de la categoría al subtítulo;

  //El for recorre todos los productos
  for (let i = 0; i < dataArray.products.length; i++) {
    //Agrega toda la información dentro de un div;
    divProductos.innerHTML += 
    `<div class="list-group-item list-group-item-action cursor-active">
    <div class="row">
        <div class="col-3">
            <img src="${dataArray.products[i].image}" class="img-thumbnail">
        </div>
        <div class="col">
            <div class="d-flex w-100 justify-content-between">
                <h4 class="mb-1">${dataArray.products[i].name} - ${dataArray.products[i].cost} ${dataArray.products[i].currency}</h4>
                <small class="text-muted">${dataArray.products[i].soldCount} vendidos</small>
            </div>
            <p class="mb-1">${dataArray.products[i].description}</p>
        </div>
    </div>
</div>
    `
  }
}

//Petición a la URL
async function getJson () {
  const response = await fetch(DATA_URL);
  const json = await response.json();
  showData(json);
}
getJson();

/*
1- Recibe la ID de la categoría en la que hacemos click en categories.html (declarada en categories.js) y toma la información de ID.json, 101.json en el caso de Autos, por ejemplo.
2- Crea un div con cada producto de la categoría y su información.
3- Detalle: en el subtítulo muestra "Verás aquí todos los productos de la categoría x" tomando del json el nombre de la categoría.
*/

//  *** FIN AGREGADO ***