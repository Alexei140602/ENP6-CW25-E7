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
              artistaRecuadro.id="artistaSeleccionado";
              imagenArtista.id="imgSelecArt";

              artistaRecuadro.appendChild(imagenArtista);
              artistaRecuadro.appendChild(nombreArtista);
              artistaRecuadro.appendChild(artistaDescripcion);
              totalArtistas.appendChild(artistaRecuadro);

              //Despliega los albums del artista
              for(let i=0; i<baseDatosJSON.album.length; i++){
                let secAlbums = document.createElement("button");
                let secImgArt = document.createElement("img");
                let albumTitle = document.createElement("h4");
                let titleAlbumsDisp = document.createElement("h2");
                //let secCanciones = document.createElement("p");

                if(baseDatosJSON.album[i].artista === valor){
                  secImgArt.src=baseDatosJSON.album[i].url_img;
                  albumTitle.textContent=baseDatosJSON.album[i].nombre;
                  titleAlbumsDisp.textContent="Álbumes disponibles";

                  secImgArt.classList.add("imagenArtista");
                  secAlbums.classList.add("artistasAlbums");

                  secAlbums.appendChild(secImgArt);
                  secAlbums.appendChild(albumTitle);
                  totalArtistas.appendChild(titleAlbumsDisp);
                  totalArtistas.appendChild(secAlbums);
                }
              }
            }
          }
        }); 
        //Al dar click en el album; descripción, imagen, canciones
    }

  }
});

//Registro de un usuario
const regForm = document.getElementById("formRegSesion");
const regImagenPerfil = document.getElementById("regImagenPerfil");
const nomRegUsuario = document.getElementById("nomRegUsuario");
const regContraseña = document.getElementById("regContraseña");
const conteFoto= document.getElementById("fotoP");

regForm.addEventListener("submit", (e)=>{ //Evento que se ejecuta al 
  let error=0;
  let nom = nomRegUsuario.value;
  let contraseña = regContraseña.value;
  let imagen = regImagenPerfil.value;

  e.preventDefault();

  console.log("Contraseña: " +regContraseña.value);
  console.log("Imagen: " +regImagenPerfil.value);
  console.log("usuario: " +nomRegUsuario.value);

  
  conteFoto.innerHTML+=`<image src="${regImagenPerfil.value}" alt="imagen Perfil"></image>`

  //Verficacion de valores correctos
  if(nom == "")//Verificacion de que el campo usuario no este vacio
  {
    alert("El usuario no fue proporcionado");
    error = 1;
  }
  if(contraseña.length < 5) //Verificacion de contraseña
  {
    alert("La contraseña debe tener un largo minimo de 5");
    error = 1;
  }

  //Verificacion pendiente, Verifica que no este repetido el usuario

  
    
  if(error == 0)//Comprueba que no haya errores en los valores de registro
  {
    let usuario = {
      nombre:nom,
      password:contraseña

    }
    console.log(usuario);
    let valorCookie=encodeURIComponent(JSON.stringify(usuario));
    let duracion = 1080*10;
    console.log(usuario.nombre);
    console.log(valorCookie);
    document.cookie = `${usuario.nombre.trim()}=${valorCookie.trim()}; max-age=${duracion}`;
    console.log(`${usuario.nombre.trim()}=${valorCookie.trim()}; max-age=${duracion}`);
  }
  else{
    console.log("no entró");
  }
  console.log(document.cookie.split("; ").length)
});




