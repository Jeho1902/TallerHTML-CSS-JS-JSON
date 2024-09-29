fetch("../../data/Taller.json")
    .then(response => response.json())
    .then(data => {
        //Catalogo con Imagenes//
        const cardsContainer = document.getElementById("cards")
        let cards = '';
        data.forEach(function (taller) {
            cards += ` <div class="col">
            <div class="card">
            <img src="${taller.imagen}" class="card-img-top" height="230" width="185" alt="laptop">
            <div class="card-body">
                <h5 class="card-title">${taller.titulo}</h5>
                <p class="card-text">${taller.descripcion}</p>
            </div>
            <div class="card-footer">
                <small class="text-body-secondary">${taller.precio}</small>
            </div>
        </div>
    </div>
            `;
        });
        cardsContainer.innerHTML = cards;

    });
//FIN catalogo de imagenes//

//Catalogo tipo tablas//
fetch("../../data/Taller.json")
    .then(response => response.json())
    .then(data => {
        const compu = document.getElementById("tables")
        let table = '';
        data.forEach(function (taller) {
            table += `
    <tr>
      <td>${taller.titulo}</td>
      <td>${taller.procesador}</td>
      <td>${taller.grafica}</td>
      <td>${taller.ram}</td>
      <td>${taller.almacenamiento}</td>
      <td>${taller.precio}</td>
    </tr>
            `;
        });
        compu.innerHTML = table;

    })
//FIN Catalogo tipo tablas//

//Contacto//
fetch("../../data/Contacto.json")
    .then(response => response.json())
    .then(data => {
        const contact = document.getElementById("contact")
        let contactos = '';
        data.forEach(function (Contacto) {
            contactos += `
            <div class="container">
           <h3 class="text-center text-uppercase">Contactanos</h3>
           <p class="text-center w-75 m-auto">¿Tienes alguna duda o necesitas ayuda? En Hyperwear estamos aquí para asistirte. Ya sea que estés buscando el equipo de cómputo perfecto o necesites soporte técnico, no dudes en ponerte en contacto con nosotros.</p>
           <div class="row">
             <div class="p-5 mb-4 bg-body-tertiary rounded-3 shadow text-center">
               <div class="card border-0">
                  <div class="card-body text-center">
                    <h1 class="text-uppercase mb-5">${Contacto.titulo_pagina}</h4>
                    <h4 class="text-uppercase mb-5">${Contacto.datos_tienda.nombre}</h4>
                    <p>${Contacto.datos_tienda.direccion}</p>
                    <p>${Contacto.datos_tienda.telefono}</p>
                    <p>${Contacto.datos_tienda.correo}</p>
                  </div>
                </div>
             </div>
            `;
        });
        contact.innerHTML = contactos;

    })
//FIN Contacto//
