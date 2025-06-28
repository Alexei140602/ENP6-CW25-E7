//Registro de un usuario
const regSesion = document.getElementById("regSesion");
const iniSesion =  document.getElementById("iniSesion");
const regForm = document.getElementById("formRegSesion");
const regImagenPerfil = document.getElementById("regImagenPerfil");
const nomRegUsuario = document.getElementById("nomRegUsuario");
const regContraseña = document.getElementById("regContraseña");
const conteFoto= document.getElementById("fotoP");
const formIniSesion = document.getElementById("formIniSesion");
const iniContraseña = document.getElementById("iniContraseña");
const nomIniUsuario = document.getElementById("nomIniUsuario");
const cambiaReg = document.getElementById("cambiaReg")
const cambiaIni = document.getElementById("cambiaIni")

//Cookie para canciones
const nomCancion = document.querySelectorAll("button");

function iniCambReg (eleccion) //Funcion que cambia de inicio de sesion a registro de usuarios y viceversa
{
  if(eleccion == 1)
  {
    regForm.style.display = "none";
    formIniSesion.style.display = "flex";
  }
  else
  {
    regForm.style.display = "flex";
    formIniSesion.style.display = "none";
  }

}

cambiaReg.addEventListener("click", ()=>{
  iniCambReg(2);
});
cambiaIni.addEventListener("click", ()=>{
  iniCambReg(1);
});
function iniciaSesion(nombre,constraseña)
{
  hola;
}

regForm.addEventListener("submit", (e)=>{ //Evento que se ejecuta al 
  let error=0;
  let nom = nomRegUsuario.value;
  let contraseña = regContraseña.value;
  let imagen = regImagenPerfil.value;
  let cookies = document.cookie.split("; ");

  e.preventDefault();

  console.log("Contraseña: " +regContraseña.value);
  console.log("Imagen: " +regImagenPerfil.value);
  console.log("usuario: " +nomRegUsuario.value);
  
  conteFoto.innerHTML = "";
  conteFoto.innerHTML +=`<image src="${regImagenPerfil.value}" alt="imagen Perfil"></image>`;

  //Verficacion de valores correctos
  if(nom == "")//Verificacion de que el campo usuario no este vacio
  {
    nomRegUsuario.placeholder="El usuario no fue proporcionado";
    nomRegUsuario.value="";
    error = 1;
  }

  if(contraseña.length < 5) //Verificacion de contraseña
  {
    regContraseña.placeholder="Largo minimo de 5";
    regContraseña.value="";
    error = 1;
  }

  //Verifica que no este repetido el usuario
  for(let cookie of cookies)
  {
    let [nombre,valor] = cookie.split('=');
   
    if (nombre  === nom.trim())
    {
      error = 1;
      nomRegUsuario.placeholder="El usuario ya existe";
      nomRegUsuario.value="";
      console.log("Ya existe");
    }
  }
  
    
  if(error == 0)//Comprueba que no haya errores en los valores de registro
  {
    let usuario = {
      nombre:nom,
      password:contraseña

    }
    console.log(usuario);
    let valorCookie=encodeURIComponent(JSON.stringify(usuario));
    let duracion = 1080*10;
    let cancion = baseDatosJSON.canciones
    console.log(usuario.nombre);
    console.log(valorCookie);
    document.cookie = `${usuario.nombre.trim()}=${valorCookie.trim()}; max-age=${duracion}`;
    console.log(`${usuario.nombre.trim()}=${valorCookie.trim()}; max-age=${duracion}`);
    document.cookie = `activo=${valorCookie.trim()}; max-age=${duracion}`;

    document.cookie = `${usuario.nombre.trim()}=${valorCookie.trim()}; max-age=${duracion}`;

    cambioP(2,regForm);
    cambioP(1,nombrePag);
    cambioP(1,contenedorGeneral);
    cambioP(1,barraOpc);
  }
  else{
    console.log("no entró");
  }
  console.log(document.cookie.split("; ").length)

});

//Inicio de Sesion
formIniSesion.addEventListener("submit", (e)=>{
  
  e.preventDefault();
  let nomIni = nomIniUsuario.value;
  let iniContr = iniContraseña.value;
  let cookies = document.cookie.split("; ");
  let [nombre,valor] = cookies[0].split('=')
  let datos;
  let encontrados = 0;
  let error = 0;
  let valorAct;
  console.log(nombre + " " + decodeURIComponent(valor));
  console.log(nomIniUsuario.value);
  console.log(iniContraseña.value);
 

  if(nomIni == "")//Verificacion de que el campo usuario no esté vacio
  {
    nomIniUsuario.placeholder="El usuario no fue proporcionado";
    nomIniUsuario.value="";
    error = 1;
   }
   if(iniContr == "")//Verificacion de que el campo contraseña no esté vacio
  {
    iniContraseña.placeholder= "La contraseña no fue proporcionada";
    iniContraseña.value="";
    error = 1;
  }

  console.log(error);
  if(error == 0)
  {
    for(let cookie of cookies)
    {
      let [nombre,valor] = cookie.split('=');

      
      if (nombre  === nomIni.trim())
      {
        valorAct=valor;
        datos=decodeURIComponent(valor);
        encontrados = 1;
      }
    }
    cambioP(2,formIniSesion);
    cambioP(1,nombrePag);
    cambioP(1,contenedorGeneral);
    cambioP(1,barraOpc);
  }
  console.log(encontrados);
  if(encontrados == 1)
  { 
    datos = JSON.parse(datos);
    console.log(datos);
    if(datos.nombre === nomIni && datos.password === iniContr)
    {
      document.cookie = `Activo=${valorAct}"`;
      console.log("Iniciando Sesion");
      formIniSesion.style.display = "none";
    }

  }
});


//EXPLORE
let botonArtistas = document.getElementById("artDestbtn");
let botonGeneros = document.getElementById("generosbtn");
let botonAlbums = document.getElementById("albumsbtn");
let botonHome = document.getElementById("homebtn");
let botonBiblioteca = document.getElementById("bibliotecasbtn");
let inputTotal = document.querySelectorAll("input");
let inputBusc = inputTotal[inputTotal.length-1];
let resultados = document.getElementById("palabraB");

const espacio = document.createElement("hr");

let contenedorGeneral = document.getElementById("artistas");
let barraOpc = document.getElementById("barraOpciones");
let nombrePag = document.getElementById("sonoro");

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
        resultados.style.display= "flex";
        resultados.style.direction="column";
        resultados.style.position="fixed";
        //Busca en canciones
        for(let i=0; i<baseDatosJSON.canciones.length; i++){
          let cancion = baseDatosJSON.canciones[i].nombre;
          
          if(cancion.toUpperCase().includes(valor.toUpperCase())){
            let busquedas = document.createElement("button");
            busquedas.textContent=(cancion + "ㅤ☆");
            busquedas.classList.add("barraBusqueda");
            //busquedas.id="botonMorado";

            resultados.appendChild(busquedas);
            cont++;
          }
        }
        //Busca en albums
          for(let i=0; i<baseDatosJSON.album.length; i++){
            let album = baseDatosJSON.album[i].nombre;
            
            if(album.toUpperCase().includes(valor.toUpperCase())){
              let busquedas = document.createElement("button");

              busquedas.textContent=(album + "ㅤ♬");
              busquedas.classList.add("barraBusqueda");
              //busquedas.id="botonMorado";

              resultados.appendChild(busquedas);
              cont++;
            }
          }
          //Busca en albums
          for(let i=0; i<baseDatosJSON.artistas.length; i++){
            let artistaN = baseDatosJSON.artistas[i].nombre;
            
            if(artistaN.toUpperCase().includes(valor.toUpperCase())){
              let busquedas = document.createElement("button");

              busquedas.textContent=(artistaN + "ㅤ⍟");
              busquedas.classList.add("barraBusqueda");
              //busquedas.id="botonMorado";

              resultados.appendChild(busquedas);
              cont++;
            }
          }
        resultados.style.display = cont > 0? "flex":"none";
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

                if(baseDatosJSON.album[i].artista.includes(valor)){
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
                      for(let i=0; i<baseDatosJSON.canciones.length; i++){
                        let cancionesLista = document.createElement("h4");
                        let botonCancion = document.createElement("button");

                        if(baseDatosJSON.canciones[i].album === despliegaAlbum && 
                          baseDatosJSON.canciones[i].artista === artistSelectName.textContent){
                            cancionesLista.textContent=baseDatosJSON.canciones[i].nombre;

                            botonCancion.classList.add("generalT");
                            contenedorCanciones.id="artistaSeleccionado";
                            //cancionesLista.id="artistaSelec";

                            botonCancion.appendChild(cancionesLista);
                            contenedorCanciones.appendChild(botonCancion);
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
                    for(let i=0; i<baseDatosJSON.canciones.length; i++){
                      let cancionesLista = document.createElement("h4");
                      let botonCancion = document.createElement("button");

                      if(baseDatosJSON.canciones[i].album === nombreAlbum.textContent && 
                        baseDatosJSON.canciones[i].artista === nombreArtista.textContent){
                          cancionesLista.textContent=baseDatosJSON.canciones[i].nombre;

                          botonCancion.classList.add("generalT");
                          contenedorCanciones.id="artistaSeleccionado";

                          botonCancion.appendChild(cancionesLista);
                          contenedorCanciones.appendChild(botonCancion);
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
          for(let i=0; i<baseDatosJSON.canciones.length; i++){
            let cancionesLista = document.createElement("h4");
            let botonCancion = document.createElement("button");

            if(baseDatosJSON.canciones[i].album === nombreAlbum.textContent && 
              baseDatosJSON.canciones[i].artista === nombreArtista.textContent){
                cancionesLista.textContent=baseDatosJSON.canciones[i].nombre;

                botonCancion.classList.add("generalT");
                contenedorCanciones.id="artistaSeleccionado";

                botonCancion.appendChild(cancionesLista);
                contenedorCanciones.appendChild(botonCancion);
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

  limpiar();
  //Despliega 3 artistas
  const contenido=["¿Volver a escuchar?","Tus artistas fav.",
    "Géneros preferidos","Recomendados 𖤐"];
  const valorCookie=[1,8,10];
  const valorCookieG=[1,3,5];
    
  for (let j=0; j<contenido.length; j++){
    let homeGeneral = document.createElement("div");
    let volverEscuchar = document.createElement("h4");
    let volvHome = document.createElement("div"); //Display block
    //Volver a escuchar
    if(j==0){

    }
    //Artistas
    if(j===1){
      for(let k=0; k<3; k++){
        
        let menuHome = document.createElement("div");
        let artistHome = document.createElement("div");
        let nombreArtista = document.createElement("h4");
        let imgHome = document.createElement("img");

        console.log(valorCookie[k] + "valor k");
        for(let i=0; i<baseDatosJSON.artistas.length; i++){
          console.log(baseDatosJSON.artistas[i].id + "el id es");
          if(baseDatosJSON.artistas[i].id === valorCookie[k]){
            volvHome.classList.add("sectionHome");
            volvHome.style.display="block";
            imgHome.id="imgHome";
            artistHome.classList.add("artistHome");

            //Sección
            volverEscuchar.textContent=contenido[j];
            artistHome.classList.add("artistHome");
            nombreArtista.textContent=baseDatosJSON.artistas[i].nombre;
            imgHome.src=baseDatosJSON.artistas[i].url_img;

            volvHome.appendChild(volverEscuchar);
            volvHome.appendChild(menuHome);
            artistHome.appendChild(nombreArtista);
            artistHome.appendChild(imgHome);
            volvHome.appendChild(artistHome);
            homeGeneral.appendChild(volvHome);
            contenedorGeneral.appendChild(homeGeneral);
          }
        }
      }
    }
    //Géneros
    if(j==2){
      for(let k=0; k<3; k++){
        
        let menuHome = document.createElement("div");
        let artistHome = document.createElement("div");
        let nombreArtista = document.createElement("h4");

        console.log(valorCookieG[k] + "valor k");
        for(let i=0; i<baseDatosJSON.genero.length; i++){
          console.log(baseDatosJSON.genero[i].id + "el id es");
          if(baseDatosJSON.genero[i].id === valorCookieG[k]){
            volvHome.classList.add("sectionHome");
            volvHome.style.display="block";
            artistHome.classList.add("generalT");

            //Sección
            volverEscuchar.textContent=contenido[j];
            artistHome.classList.add("artistHome");
            nombreArtista.textContent=baseDatosJSON.genero[i].nombre;

            volvHome.appendChild(volverEscuchar);
            volvHome.appendChild(menuHome);
            artistHome.appendChild(nombreArtista);
            volvHome.appendChild(artistHome);
            homeGeneral.appendChild(volvHome);
            contenedorGeneral.appendChild(homeGeneral);
          }
        }
      }
    }
    //Recomendación
    if(j==3){

    }
  }

  //oculto=volvHome.style.display==="none";
  //volvHome.style.display=oculto? "block":"none";

  //Despliega los artistas
    
});

//Seccion de artitas id

function cambioP (opc,seccion){
  if(opc==1){
    seccion.style.display = "flex";
  }
  else{
    seccion.style.display = "none";
  }
}
//funcion para seleccionar la cancion
//let linkCancion="nR5l-1lmkkI";
/*
selCancion.addEventListener('click',(e)=>{
selCancion=e.target.textContent;
  for (let i=0; i<baseDatosJSON.canciones.length; i++){
    if(baseDatosJSON.canciones[i].nombre === selCancion.textContent)
      linkCancion=baseDatosJSON.canciones[i].link;
  }
});*/
// Asignar este código cuando creas cada botón de canción:
/*
botonCancion.addEventListener("click", (e) => {
  const nombreCancion = e.target.textContent.trim(); // Obtener el texto
  for (let i = 0; i < baseDatosJSON.canciones.length; i++) {
    if (baseDatosJSON.canciones[i].nombre === nombreCancion) {
      linkCancion = baseDatosJSON.canciones[i].link;

      // Si el reproductor ya está listo, carga el nuevo video
      if (player && typeof player.loadVideoById === "function") {
        player.loadVideoById(linkCancion);
      } else {
        // Si aún no se ha creado el reproductor, se creará con ese link
        onYouTubeIframeAPIReady();
      }
      break;
    }
  }
});
ESTO NO*/
//video
let player;
let duration = 0;
let lastVolume = 100;
let previousVolume;
let updateInterval;

const seekBar = document.getElementById("seekBar");
const volumeSlider = document.getElementById("volumeSlider");
const playPauseBtn = document.getElementById("playPausebtn");
const muteBtn = document.getElementById("muteBtn");

const vidDuration = document.getElementById("duration");
const currentTimeSpan = document.getElementById("currentTime");
let currentVolume

function onPlayerReady(event) {
    duration = player.getDuration();
    player.mute(); // empieza en mute para evitar bloqueo de autoplay
    player.playVideo();

    previousVolume = player.getVolume();
    volumeSlider.value = previousVolume;
    seekBar.max = duration;

    updateInterval = setInterval(() => {
        if (player && player.getPlayerState() === YT.PlayerState.PLAYING) {
            seekBar.value = player.getCurrentTime();
        }

        // Detecta cambio externo de volumen y actualiza el slider
        currentVolume = player.getVolume();
        if (currentVolume !== previousVolume) {
            volumeSlider.value = currentVolume;
            previousVolume = currentVolume;
        }

        // Actualiza ícono del botón mute según estado
        if (player.isMuted()) {
            muteBtn.textContent = "🔇";
        } else {
            muteBtn.textContent = "🔊";
        }
    }, 1000);
}

function onPlayerStateChange(event){
    if (event.data == YT.PlayerState.PLAYING) {
        playPauseBtn.textContent = "⏸";
    } 
    else if (event.data == YT.PlayerState.PAUSED || event.data == YT.PlayerState.ENDED) {
        playPauseBtn.textContent = "▶";
    }
    if (event.data === YT.PlayerState.ENDED) {
        clearInterval(updateInterval);
    }
}

function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
        videoId: linkCancion,
        playerVars: {
            controls: 0,
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
        },
        events: {
            onReady: onPlayerReady,
            'onStateChange': onPlayerStateChange
        },
    });
}


// ▶️⏸️ Play/Pause
playPauseBtn.addEventListener("click", () => {
    let state = player.getPlayerState();
    if (state === YT.PlayerState.PLAYING) {
        player.pauseVideo();
        playPauseBtn.textContent = "▶️";
    } else {
        player.playVideo();
        playPauseBtn.textContent = "⏸️";
    }
});

// 🔊 Control de volumen con slider
volumeSlider.addEventListener("input", () => {
    const volume = parseInt(volumeSlider.value, 10);
    player.setVolume(volume);

    // Si estaba muteado y se mueve el slider, se desmutea
    if (player.isMuted() && volume > 0) {
        player.unMute();
    }

    lastVolume = volume;
    previousVolume = volume;
});

// 🔇 Mute/Unmute con botón
muteBtn.addEventListener("click", () => {
    if (player.isMuted()) {
        player.unMute();
        volumeSlider.value = lastVolume;
    } else {
        player.mute();
    }
});

// ⏩ Barra de duración (seek)
seekBar.addEventListener("input", () => {
    let seekTo = seekBar.value;
    console.log("AA")
    player.seekTo(seekTo, true);
});
