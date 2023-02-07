document.addEventListener("change", detalleCompra, false);

function detalleCompra(evento) {
  let autoId, cantidadAutos;

  if (evento.target){ 
    autoId = evento.target.id, cantidadAutos = evento.target.value;
  } else {
    autoId = evento.id, cantidadAutos = evento.value;
  }

  let datosAuto = document.getElementById(autoId).parentElement.parentElement;
  let autoDetalle = document.getElementById("cantidad-" + autoId);

  if (!autoDetalle) {
    crearTarjeta(datosAuto.getElementsByTagName('img')[0].attributes.src.value,
      datosAuto.getElementsByClassName('precio')[0].innerText,
      datosAuto.getElementsByClassName('modelo')[0].innerText,
      cantidadAutos, autoId);
  } else if (cantidadAutos == 0) {
    mostrarDetalle(autoId, true);
  } else {
    mostrarDetalle(autoId, false);
    autoDetalle.innerText = cantidadAutos;
  }
}

function mostrarDetalle(autoId, mostrar) {
  let detalles = document.getElementsByClassName("detalle-" + autoId)
  for (var key in detalles) detalles[key].hidden = mostrar;
}

function crearTarjeta(imgAuto, precioAuto, modeloAuto, cantidadAutos, autoId) {
  /* Función para crear tarjeta de detalle en el "carrito de compras" */
  const claseAuto = "detalle-" + autoId;

  let carritoCompras = document.getElementById('carrito-compras'); // Elemento donde se colocarán los detalles

  /* DIV con la imagen del auto */
  let divImg = crearElemento('div', 'col-md-2 col-4 mt-2 ' + claseAuto);
  divImg.appendChild(crearElemento('img', 'img-fluid rounded-start detail-image ' + claseAuto, { 'src': imgAuto }));
  carritoCompras.appendChild(divImg);

  /* DIV con el detalle del auto y compra */
  let cardBody = crearElemento('div', 'card-body ' + claseAuto);
  let tituloBody = crearElemento('h5', 'card-tittle ' + claseAuto, null, modeloAuto + "| cantidad: ");
  let parrafoBody = crearElemento('p', 'card-text justify-content-center ' + claseAuto, null, "Precio unitario: " + precioAuto);

  tituloBody.appendChild(crearElemento('span', claseAuto, { 'id': "cantidad-" + autoId }, cantidadAutos));

  cardBody.appendChild(tituloBody);
  cardBody.appendChild(parrafoBody);

  let divDetalle = crearElemento('div', 'col-md-4 col-8 ' + claseAuto);
  divDetalle.appendChild(cardBody);
  carritoCompras.appendChild(divDetalle);
}

function crearElemento(elemento, clases, atributos, texto) {
  let elementoCreado = document.createElement(elemento);
  elementoCreado.className = clases;

  if (atributos) for (var key in atributos) elementoCreado.setAttribute(key, atributos[key]);
  if (texto) elementoCreado.innerText = texto;

  return elementoCreado;
}

//SEBA funcion sumar
function sumar(evento) {

  if (evento) {
    let clasesEvento = evento.target.className;
    let inputValor = evento.target.parentElement.getElementsByTagName('input')[0];
    let valorActual = parseInt(inputValor.value);
  
    if (clasesEvento.indexOf('sumar') >= 0) valorActual +=1;
    if (clasesEvento.indexOf('restar') >= 0) valorActual -=1;
  
    if (valorActual >= 0 && valorActual <= 10) inputValor.value = valorActual, detalleCompra(inputValor);

  }

  

  //Cantidad de cada auto
  var num1 = parseFloat(document.getElementById("auto-1").value);
  var num2 = parseFloat(document.getElementById("auto-2").value);
  var num3 = parseFloat(document.getElementById("auto-3").value);
  var num4 = parseFloat(document.getElementById("auto-4").value);
  var num5 = parseFloat(document.getElementById("auto-5").value);
  var num6 = parseFloat(document.getElementById("auto-6").value);
  var num7 = parseFloat(document.getElementById("auto-7").value);
  var num8 = parseFloat(document.getElementById("auto-8").value);
  var num9 = parseFloat(document.getElementById("auto-9").value);
  var num10 = parseFloat(document.getElementById("auto-10").value);

  //Cantidad total de todos los autos
  var resultado = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10;


  //Precio total por tipo de auto
  var xprecio1 = num1 * 15000000;
  var xprecio2 = num2 * 12000000;
  var xprecio3 = num3 * 9000000;
  var xprecio4 = num4 * 7500000;
  var xprecio5 = num5 * 9700000;
  var xprecio6 = num6 * 9900000;
  var xprecio7 = num7 * 5700000;
  var xprecio8 = num8 * 6100000;
  var xprecio9 = num9 * 14500000;
  var xprecio10 = num10 * 11800000;

  //Precio total total
  var total = xprecio1 + xprecio2 + xprecio3 + xprecio4 + xprecio5 + xprecio6 + xprecio7 + xprecio8 + xprecio9 + xprecio10;

  document.getElementById("resultado").innerText = resultado;
  document.getElementById("total-compra").innerHTML = "<b>Monto Total </b> $" + total;

  /*
    var autosTotal = 0, montoTotal=0;
    for (let index = 1; index <= 10; index++) {

      let cantidadAuto = parseInt(document.getElementById("auto-"+index).value);
      let precioAuto = parseInt(document.getElementById('precio-auto-'+index).innerText.slice(1))

      autosTotal += cantidadAuto;
      montoTotal += (precioAuto*cantidadAuto);
  }
  */

}

//SEBA boton pagar
function redirigir() {
  window.location.href = "paginas/despacho.html";
}


