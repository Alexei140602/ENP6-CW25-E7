let botonArtistas = document.getElementById("artDestbtn");
let botonGeneros = document.getElementById("generosbtn");
let botonAlbums = document.getElementById("albumsbtn");
let botonHome = document.getElementById("homebtn");
let botonBiblioteca = document.getElementById("bibliotecasbtn");
let inputBusc = document.querySelector("input");
let resultados = document.getElementById("palabraB");

const espacio = document.createElement("hr");

let contenedorGeneral = document.getElementById("artistas");
function limpiar(){
  let contenedorGeneral = document.getElementById("artistas");
  contenedorGeneral.innerHTML="";
}
inputBusc.addEventListener("focus", ()=>{
  if(inputBusc === document.activeElement){
    inputBusc.addEventListener("input", ()=>{
      let valor = inputBusc.value.trim();

      resultados.innerHTML="";
    
      if(valor != ""){
        let cont=0;
        resultados.style.display= "block";
        
        for(let i=0; i<baseDatosJSON.canciones.length; i++){
          let cancion = baseDatosJSON.canciones[i].nombre;
          
          if(cancion.toUpperCase().includes(valor.toUpperCase())){
            let busquedas = document.createElement("h5");
            busquedas.textContent=cancion;

            resultados.appendChild(busquedas);
            cont++;
          }
        }
        resultados.style.display = cont > 0? "block":"none";
      }
      else
        resultados.style.display= "none";
    });
  }
  else{
    resultados.innerHTML="";
    resultados.style.display= "none";
  }
});

botonBiblioteca.addEventListener("click",()=>{
  //Boton artistas
  oculto=botonArtistas.style.display==="none";
  botonArtistas.style.display=oculto? "block":"none";
  //Boton generos
  oculto=botonGeneros.style.display==="none";
  botonGeneros.style.display=oculto? "block":"none";
  //Boton albums
  oculto=botonAlbums.style.display==="none";
  botonAlbums.style.display=oculto? "block":"none";
});

botonArtistas.addEventListener("click", ()=>{
  botonArtistas.style.backgroundColor="rgb(0, 0, 0, 90%)";
  //Despliega los artistas
    let contenedorArts = document.getElementById("artistas");
    contenedorArts.innerHTML="";
    
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
              totalArtistas.appendChild(espacio);

              let titleAlbumsDisp = document.createElement("h2");
              let contSecAlbums = document.createElement("div");

              contSecAlbums.classList.add("contSecAlbum");

              titleAlbumsDisp.textContent="Álbumes disponibles";

              totalArtistas.appendChild(titleAlbumsDisp);
              //totalArtistas.appendChild(contSecAlbums);
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
                  contSecAlbums.appendChild(secAlbums);
                  totalArtistas.appendChild(contSecAlbums);
                }
                
                //Al dar click en el album; descripción, imagen, canciones
                  secAlbums.addEventListener("click", ()=>{
                  let despliegaAlbum = secAlbums.textContent;

                  let totalArtistas = document.getElementById("artistas");
                  totalArtistas.innerHTML="";

                  //Creación de recuadro album seleccionado, nombre y artista
                  for (let i=0; i<baseDatosJSON.album.length; i++){
                    //Variables para el contenedor del album selec.
                    let coloqAlbumSelec = document.createElement("div");
                    let portAlbum = document.createElement("img");
                    let albumTitlee = document.createElement("p");
                    let artistSelectName = document.createElement("h4");
                    let descripcionAlbum = document.createElement("p");
                    //let duracionTotal = document.createElement("p");

                    if(baseDatosJSON.album[i].nombre === despliegaAlbum){
                      portAlbum.src=baseDatosJSON.album[i].url_img;
                      albumTitlee.textContent=baseDatosJSON.album[i].nombre;
                      artistSelectName.textContent=baseDatosJSON.album[i].artista;
                      descripcionAlbum.textContent=baseDatosJSON.album[i].descripcion;

                      portAlbum.id="imgSelecAlbum";
                      coloqAlbumSelec.id="albumSeleccionado";
                      albumTitlee.id="albumTitle";
                      artistSelectName.id="artistaSelec";

                      coloqAlbumSelec.appendChild(artistSelectName);
                      coloqAlbumSelec.appendChild(portAlbum);
                      coloqAlbumSelec.appendChild(albumTitlee);
                      coloqAlbumSelec.appendChild(descripcionAlbum);
                      
                      totalArtistas.appendChild(coloqAlbumSelec);
                      totalArtistas.appendChild(espacio);

                      //Comienza a crear el cont. de canciones del album
                      let contenedorCanciones = document.createElement("div");
                      let cancionesGeneral = document.createElement("ol");
                      for(let i=0; i<baseDatosJSON.canciones.length; i++){
                        let cancionesLista = document.createElement("li");

                        if(baseDatosJSON.canciones[i].album === despliegaAlbum && 
                          baseDatosJSON.canciones[i].artista === artistSelectName.textContent){
                            cancionesLista.textContent=baseDatosJSON.canciones[i].nombre;

                            contenedorCanciones.id="artistaSeleccionado";
                            //cancionesLista.id="artistaSelec";

                            cancionesGeneral.appendChild(cancionesLista);
                            contenedorCanciones.appendChild(cancionesGeneral);
                            totalArtistas.appendChild(contenedorCanciones);
                          
                        }
                      }
                      
                    }
                  }
                });
              }
            }
          }
        }); 
  }
});

botonGeneros.addEventListener("click", ()=>{
  botonGeneros.style.backgroundColor="rgb(0, 0, 0, 90%)";
  //Limpia
    limpiar();

    //Despliega la sección de géneros disponibles
    for (let i=0; i<baseDatosJSON.genero.length; i++){
      let botonGenero = document.createElement("button");
      let generoNom = document.createElement("h4");
      let descGenero = document.createElement("p");

      generoNom.textContent=baseDatosJSON.genero[i].nombre;
      descGenero.textContent=baseDatosJSON.genero[i].descripcion;

      contenedorGeneral.classList.add("artistasMenu");
      botonGenero.classList.add("generalT");

      botonGenero.appendChild(generoNom);
      
      contenedorGeneral.appendChild(botonGenero);

      //Descripción del género
      botonGenero.addEventListener("mouseover", ()=>{
        botonGenero.style.backgroundColor="rgb(0,0,0,80%)";
        botonGenero.appendChild(descGenero);
      });
      botonGenero.addEventListener("mouseout", ()=>{
        botonGenero.style.backgroundColor="rgb(0,0,0,40%)";
        botonGenero.innerHTML="";
        botonGenero.appendChild(generoNom);
      });

      //Al dar click, albums clasificados
      botonGenero.addEventListener("click", ()=>{
        let contenedor = document.getElementById("generosCont");
        contenedor.innerHTML="";

        for(let i=0; i<baseDatosJSON.canciones.length; i++){
          let contAlbum = document.createElement("button");
          let nombreArtista = document.createElement("h4");
          let imgAlbum = document.createElement("img");
          let nombreAlbum = document.createElement("h4");
          let descAlb = document.createElement("h4");

          if(baseDatosJSON.canciones[i].genero === generoNom.textContent){
            //Obtener el nombre del album al que pertenecen las canciones
            let nombreA=baseDatosJSON.canciones[i].album;

            let n=0;
            for(let k=0; k<i;k++){
              if(baseDatosJSON.canciones[k].album === nombreA
              && baseDatosJSON.canciones[k].genero === generoNom.textContent){
                n++;
              }
            }
            
            if(n === 0){
              for(let j=0; j<baseDatosJSON.album.length; j++){
                if(nombreA === baseDatosJSON.album[j].nombre){
                  nombreArtista.textContent=baseDatosJSON.album[j].artista;
                  imgAlbum.src=baseDatosJSON.album[j].url_img;
                  nombreAlbum.textContent=baseDatosJSON.album[j].nombre;
                  descAlb.textContent=baseDatosJSON.album[j].descripcion;

                  //contenedor.classList.add("fondoObs");
                  imgAlbum.classList.add("imagenAlbum");
                  contAlbum.classList.add("artistasAlbums");

                  contAlbum.appendChild(nombreArtista);
                  contAlbum.appendChild(imgAlbum);
                  contAlbum.appendChild(nombreAlbum);
                  contenedor.appendChild(contAlbum);
                  contenedorGeneral.appendChild(contenedor);
                }
              }
              contAlbum.addEventListener("click", ()=>{
                //Variables
                limpiar();

                let artistaRecuadro = document.createElement("div");
                let artistaDescripcion = document.createElement("h7");
                let imagenArtista = document.createElement("img");
                let nombreArtista = document.createElement("h4");
                let albumTitlee = document.createElement("p");

                //Despliega canciones
                console.log(nombreAlbum.textContent);
                for(let i=0; i<baseDatosJSON.album.length; i++){
                  if(baseDatosJSON.album[i].nombre === nombreAlbum.textContent){
                    imagenArtista.src=baseDatosJSON.album[i].url_img;
                    artistaDescripcion.textContent=baseDatosJSON.album[i].descripcion;
                    nombreArtista.textContent=baseDatosJSON.album[i].artista;
                    albumTitlee.textContent=baseDatosJSON.album[i].nombre;

                    contenedorGeneral.classList.add("artistasMenu");
                    nombreArtista.id="artistaSelec";
                    artistaRecuadro.id="albumSeleccionado";
                    imagenArtista.id="imgSelecAlbum";
                    albumTitlee.id="albumTitle";

                    artistaRecuadro.appendChild(nombreArtista);
                    artistaRecuadro.appendChild(imagenArtista);
                    artistaRecuadro.appendChild(albumTitlee);
                    artistaRecuadro.appendChild(artistaDescripcion);

                    contenedorGeneral.appendChild(artistaRecuadro);
                    contenedorGeneral.appendChild(espacio);

                    //Comienza a crear el cont. de canciones del album
                    let contenedorCanciones = document.createElement("div");
                    let cancionesGeneral = document.createElement("ol");
                    for(let i=0; i<baseDatosJSON.canciones.length; i++){
                      let cancionesLista = document.createElement("li");

                      if(baseDatosJSON.canciones[i].album === nombreAlbum.textContent && 
                        baseDatosJSON.canciones[i].artista === nombreArtista.textContent){
                          cancionesLista.textContent=baseDatosJSON.canciones[i].nombre;

                          contenedorCanciones.id="artistaSeleccionado";

                          cancionesGeneral.appendChild(cancionesLista);
                          contenedorCanciones.appendChild(cancionesGeneral);
                          contenedorGeneral.appendChild(contenedorCanciones);
                      }
                    }
                  }
                }
              });
            }
          }
        }
      });
    }
});

botonAlbums.addEventListener("click", ()=>{
  botonAlbums.style.backgroundColor="rgb(0, 0, 0, 90%)";
  //Despliega los albums en general
    let contenedorAlbums = document.getElementById("artistas");
    contenedorAlbums.innerHTML="";

  for(let i=0; i<baseDatosJSON.album.length; i++){
    let contAlbum = document.createElement("button");
    let nombreArtista = document.createElement("h4");
    let imgAlbum = document.createElement("img");
    let nombreAlbum = document.createElement("h4");
    let descAlb = document.createElement("h4");

    nombreArtista.textContent=baseDatosJSON.album[i].artista;
    imgAlbum.src=baseDatosJSON.album[i].url_img;
    nombreAlbum.textContent=baseDatosJSON.album[i].nombre;
    descAlb.textContent=baseDatosJSON.album[i].descripcion;

    contenedorAlbums.classList.add("artistasMenu");
    imgAlbum.classList.add("imagenAlbum");
    contAlbum.classList.add("artistasAlbums");

    contAlbum.appendChild(nombreArtista);
    contAlbum.appendChild(imgAlbum);
    contAlbum.appendChild(nombreAlbum);
    contenedorAlbums.appendChild(contAlbum);

    contAlbum.addEventListener("click", ()=>{
      //Variables
      limpiar();

      let artistaRecuadro = document.createElement("div");
      let artistaDescripcion = document.createElement("h7");
      let imagenArtista = document.createElement("img");
      let nombreArtista = document.createElement("h4");
      let albumTitlee = document.createElement("p");

      //Despliega canciones
      console.log(nombreAlbum.textContent);
      for(let i=0; i<baseDatosJSON.album.length; i++){
        if(baseDatosJSON.album[i].nombre === nombreAlbum.textContent){
          imagenArtista.src=baseDatosJSON.album[i].url_img;
          artistaDescripcion.textContent=baseDatosJSON.album[i].descripcion;
          nombreArtista.textContent=baseDatosJSON.album[i].artista;
          albumTitlee.textContent=baseDatosJSON.album[i].nombre;

          contenedorGeneral.classList.add("artistasMenu");
          nombreArtista.id="artistaSelec";
          artistaRecuadro.id="albumSeleccionado";
          imagenArtista.id="imgSelecAlbum";
          albumTitlee.id="albumTitle";

          artistaRecuadro.appendChild(nombreArtista);
          artistaRecuadro.appendChild(imagenArtista);
          artistaRecuadro.appendChild(albumTitlee);
          artistaRecuadro.appendChild(artistaDescripcion);

          contenedorGeneral.appendChild(artistaRecuadro);
          contenedorGeneral.appendChild(espacio);

          //Comienza a crear el cont. de canciones del album
          let contenedorCanciones = document.createElement("div");
          let cancionesGeneral = document.createElement("ol");
          for(let i=0; i<baseDatosJSON.canciones.length; i++){
            let cancionesLista = document.createElement("li");

            if(baseDatosJSON.canciones[i].album === nombreAlbum.textContent && 
              baseDatosJSON.canciones[i].artista === nombreArtista.textContent){
                cancionesLista.textContent=baseDatosJSON.canciones[i].nombre;

                contenedorCanciones.id="artistaSeleccionado";

                cancionesGeneral.appendChild(cancionesLista);
                contenedorCanciones.appendChild(cancionesGeneral);
                contenedorGeneral.appendChild(contenedorCanciones);
              
            }
          }
        }
      }
    });
  }
});

botonHome.addEventListener("click", ()=>{
  botonHome.style.backgroundColor="rgb(0, 0, 0, 90%)";
  //Despliega los artistas
    limpiar();
});