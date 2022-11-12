/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function pluck(array, propiedad) {
  // La función llamada 'pluck' recibe como argumento un array de objetos llamado 'array' y el nombre de una
  // propiedad.
  // La función debe devolver un nuevo arreglo con solo los valores dentro de la propiedad recibida
  // Ej:
  // var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]
  // productos.pluck(productos, 'name') debería devolver ['TV LCD', 'Computadora']
  // Pista: es una buena oportunidad para usar map.

  // Tu código acá:
  var respuesta = [];
  for(i = 0; i < array.length; i++)
  {
    for(let key in array[i])
    {
      //console.log('El arreglo: ' + i);
      //console.log(array[i]);
      //console.log(key);
      if(key == propiedad)
      {
        //console.log('El IF ' + key);
        //console.log(array[i][key]);
        respuesta.push(array[i][key]);
      }
    }
  }
  return respuesta;
}

// No modifiques nada debajo de esta linea //

module.exports = pluck