let botonArtistas = document.getElementById("artDestbtn");

botonArtistas.addEventListener("click", ()=>{
  //Despliega los artistas
  let recuadroArtist = document.getElementById("artistas");

  if(recuadroArtist.style.display==='none'){
    recuadroArtist.style.display='inline';
    let contenedorArts = document.getElementById("artistas");

    //Despliega el botón con nombre e imágen
    for (let i=0; i<baseDatosJSON.artistas.length; i++){
        let nuevoBoton = document.createElement("button");
        let imagenArtista = document.createElement("img");
        let nombreArtist = document.createElement("h4");
        nombreArtist.textContent=baseDatosJSON.artistas[i].nombre;
        imagenArtista.src=baseDatosJSON.artistas[i].url_img;
        contenedorArts.classList.add("artistasMenu");
        imagenArtista.classList.add("imagenArtista");
        nuevoBoton.classList.add("formatoObs")

        nuevoBoton.appendChild(imagenArtista);
        nuevoBoton.appendChild(nombreArtist);
        contenedorArts.appendChild(nuevoBoton);

        //Artista seleccionado 'mouseover'
        nuevoBoton.addEventListener("mouseover", ()=>{
          nuevoBoton.style.backgroundColor="rgb(0,0,0,80%)";
        });

        //Artista sin seleccionar 'mouseout'
        nuevoBoton.addEventListener("mouseout", ()=>{
          nuevoBoton.style.backgroundColor="rgb(0,0,0,40%)";
        });
        
        nuevoBoton.addEventListener("click", ()=>{
          let valor = nuevoBoton.textContent;
          //Borra todos los botones
          let totalArtistas = document.getElementById("artistas");
          totalArtistas.innerHTML="";

          //Recuadro de artista selec.
          let artistaRecuadro = document.createElement("div");
          let artistaDescripcion = document.createElement("h7");
          let imagenArtista = document.createElement("img");
          let nombreArtista = document.createElement("h4");

          for(let i=0; i<baseDatosJSON.artistas.length; i++){
            //Despliega imagen, nombre y descripción del artista seleccionado
            if(baseDatosJSON.artistas[i].nombre === valor){
              imagenArtista.src=baseDatosJSON.artistas[i].url_img;
              artistaDescripcion.textContent=baseDatosJSON.artistas[i].descripcion;
              nombreArtista.textContent=baseDatosJSON.artistas[i].nombre;

              totalArtistas.classList.add("artistasMenu");
              artistaRecuadro.classList.add("artistasMenu");
              artistaRecuadro.id="artistaSeleccionado";
              imagenArtista.id="imgSelecArt";

              totalArtistas.appendChild(artistaRecuadro);
              artistaRecuadro.appendChild(imagenArtista);
              artistaRecuadro.appendChild(nombreArtista);
              artistaRecuadro.appendChild(artistaDescripcion);

              //Despliega los albums del artista
              for(let i=0; i<baseDatosJSON.album.length; i++){
                let secAlbums = document.createElement("div");
                let secImgArt = document.createElement("img");
                let albumTitle = document.createElement("h4");
                //let secCanciones = document.createElement("p");

                if(baseDatosJSON.album[i].artista === valor){
                  secImgArt.src=baseDatosJSON.album[i].url_img;
                  albumTitle.textContent=baseDatosJSON.album[i].nombre;

                  secImgArt.classList.add("imagenArtista");
                  secAlbums.classList.add("artistasMenu");
                  secAlbums.id="artistasAlbums";

                  secAlbums.appendChild(secImgArt);
                  secAlbums.appendChild(albumTitle);
                  totalArtistas.appendChild(secAlbums);
                }
              }
            }
          }
        }); 
    }
  }
});