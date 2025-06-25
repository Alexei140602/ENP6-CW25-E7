let botonArtistas = document.getElementById("artDestbtn");

botonArtistas.addEventListener("click", ()=>{
  botonArtistas.style.backgroundColor="rgb(0, 0, 0, 90%)";
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
              nombreArtista.id="artistaSelec";
              artistaRecuadro.id="artistaSeleccionado";
              imagenArtista.id="imgSelecArt";

              artistaRecuadro.appendChild(imagenArtista);
              artistaRecuadro.appendChild(nombreArtista);
              artistaRecuadro.appendChild(artistaDescripcion);
              totalArtistas.appendChild(artistaRecuadro);

              let titleAlbumsDisp = document.createElement("h2");
              titleAlbumsDisp.textContent="Álbumes disponibles";
              totalArtistas.appendChild(titleAlbumsDisp);
              //Despliega los albums del artista
              for(let i=0; i<baseDatosJSON.album.length; i++){
                let secAlbums = document.createElement("button");
                let secImgArt = document.createElement("img");
                let albumTitle = document.createElement("h4");
                //let secCanciones = document.createElement("p");

                if(baseDatosJSON.album[i].artista === valor){
                  secImgArt.src=baseDatosJSON.album[i].url_img;
                  albumTitle.textContent=baseDatosJSON.album[i].nombre;

                  //totalArtistas.classList.add("artistasMenu");
                  secImgArt.classList.add("imagenAlbum");
                  secAlbums.classList.add("artistasAlbums");

                  secAlbums.appendChild(secImgArt);
                  secAlbums.appendChild(albumTitle);
                  totalArtistas.appendChild(secAlbums);
                }
                //Al dar click en el album; descripción, imagen, canciones
                  secAlbums.addEventListener("click", ()=>{
                  let despliegaAlbum = secAlbums.textContent;

                  let totalArtistas = document.getElementById("artistas");
                  totalArtistas.innerHTML="";

                  //Creaión de recuadro album seleccionado
                  for (let i=0; i<baseDatosJSON.album.length; i++){
                    //Variables para el contenedor del album selec.
                    let coloqAlbumSelec = document.createElement("div");
                    let portAlbum = document.createElement("img");
                    let albumTitlee = document.createElement("p");
                    let artistSelectName = document.createElement("p");
                    //let duracionTotal = document.createElement("p");
                    console.log(despliegaAlbum);
                    if(baseDatosJSON.album[i].artista === despliegaAlbum){
                      portAlbum.src=baseDatosJSON.album[i].url_img;
                      albumTitlee.textContent=baseDatosJSON.album[i].nombre;
                      artistSelectName.textContent=baseDatosJSON.album[i].artista;

                      portAlbum.classList.add("imagenAlbum");
                      coloqAlbumSelec.classList.add("artistasAlbums");
                      //Arreglar porque no funciona con todos
                      coloqAlbumSelec.appendChild(portAlbum);
                      coloqAlbumSelec.appendChild(albumTitlee);
                      coloqAlbumSelec.appendChild(artistSelectName); 
                      totalArtistas.appendChild(coloqAlbumSelec);
                    }else{
                      console.log("no es igual");
                      console.log(baseDatosJSON.album[i].artista);
                      console.log("el valor al que se compara " + despliegaAlbum);
                    }
                  }
                });
              }
            }
          }
        }); 
    }
    
  }
});