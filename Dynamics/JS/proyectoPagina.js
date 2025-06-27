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
    console.log(usuario.nombre);
    console.log(valorCookie);
    document.cookie = `${usuario.nombre.trim()}=${valorCookie.trim()}; max-age=${duracion}`;
    console.log(`${usuario.nombre.trim()}=${valorCookie.trim()}; max-age=${duracion}`);
    document.cookie = `activo=${valorCookie.trim()}; max-age=${duracion}`;
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
    
  }
  console.log(encontrados);
  if(encontrados == 1)
  { 
    datos = JSON.parse(datos);
    console.log(datos);
    if(datos.nombre === nomIni )
    {
      if(datos.password === iniContr)
      {
        document.cookie = `Activo=${valorAct}"`;
        console.log("Iniciando Sesion");
        formIniSesion.style.display = "none";
        cambioP(2,formIniSesion);
        cambioP(1,nombrePag);
        cambioP(1,contenedorGeneral);
        cambioP(1,barraOpc);
      }
      else
      {
        iniContraseña.placeholder = "La contraseña no es correcta";
        iniContraseña.value="";
      }
    }
    
  }
  else
  {
    nomIniUsuario.placeholder="El usuario no existe";
    nomIniUsuario.value="";
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
let contenedorListas = document.getElementById("contenedorListas");


function limpiar(){
  let contenedorGeneral = document.getElementById("artistas");
  contenedorGeneral.innerHTML="";
  contenedorListas.style.display = "none";
  contenedorGeneral.style.display ="block";
  creadorListas.style.display = "none";
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
        limpiar();
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
  limpiar();
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
  //Despliega los artistas
    limpiar();
});

//Seccion de artitas id

function cambioP (opc,seccion){
  if(opc==1){
    seccion.style.display = "flex";
  }
  else{
    seccion.style.display = "none";
  }
  return;
}

//Listas y Cola de reproducción

function muestraListas()
{
  let cookies = document.cookie.split("; ");
  cookies= document.cookie.split("; ");
  mList.innerHTML = "";
  
  console.log(mList.innerHTML);
  
  for(let cookie of cookies)
    {
      let [nombre,valor] = cookie.split('=');

      
      if (nombre.includes("lista"))
      { 
        valor = decodeURIComponent(valor);
        valor = valor.split(",");
        mList.innerHTML += `<br> <label>${nombre.slice(5)}:</label>`
        for(a=0;a<valor.length-1;a++)
          for(let i=0; i<baseDatosJSON.canciones.length; i++)
          {
            if(baseDatosJSON.canciones[i].id == valor[a])
              mList.innerHTML +=  `<label>${baseDatosJSON.canciones[i].nombre}</label> <br>`;
          }
        mList.innerHTML += "<br>"
      }
    }

  
}
let mList = document.getElementById("mList");
let muestraList = document.getElementById("muestraList");
const listabtn = document.getElementById("listasbtn");
const creaListabtn = document.getElementById("crearLista");
let creadorListas = document.getElementById("creadorListas");
let buscaCancion = document.getElementById("buscaCancion");
let salirbtn = document.getElementById("salirCreaLista");
let guardarbtn = document.getElementById("guardarLista");
let inputNomList = document.getElementById("nombreLista");
let listaActual = document.getElementById("listaActual");
let lista="" ;
let nombreLista="";
//Boton para entrar a la seccion para ver las listas
listabtn.addEventListener("click", ()=>{
  limpiar();
  contenedorGeneral.style.display = "none";
  contenedorListas.style.display="flex";
  muestraListas();
});

//Boton para ver entrar al creador de listas
creaListabtn.addEventListener("click", ()=>{
  limpiar();
  creadorListas.style.display = "block";
  contenedorGeneral.style.display = "none";

  console.log("Creando Lista");
  buscaCancion.innerHTML = ""
  for(let i=0; i<baseDatosJSON.canciones.length; i++){
    buscaCancion.innerHTML += `<option value=${baseDatosJSON.canciones[i].id}>${baseDatosJSON.canciones[i].nombre}</option>`
  }
});
//Permite seleccionar canciones a las cuales se creara una lista
buscaCancion.addEventListener("input", ()=>{
  lista += buscaCancion.value + ",";
  console.log(buscaCancion.value );
  console.log(lista);
  let listaAct = lista.split(',');
  listaActual.innerHTML="";
  console.log(listaAct.length-1);
  for(a=0;a<listaAct.length-1;a++)
    for(let i=0; i<baseDatosJSON.canciones.length; i++)
    {
      if(baseDatosJSON.canciones[i].id == listaAct[a])
        listaActual.innerHTML +=  `<label>${baseDatosJSON.canciones[i].nombre}</label> <br>`
    }
});

inputNomList.addEventListener("input", ()=>{
  nombreLista = inputNomList.value;
  console.log(inputNomList.value );
  console.log(nombreLista);
});
//Las lista creada se guarda en cookies
guardarbtn.addEventListener("click", ()=>{
  if(nombreLista != "" && lista!="")
  {
    lista=encodeURIComponent(JSON.stringify(lista));
    document.cookie = `lista${nombreLista}=${lista}; max.age=2000`;

    nombreLista ="";
    inputNomList.value = "";
    lista = ""; 
    buscaCancion.value = "";
  }
  else
  {
    inputNomList.placeholder ="Falta nombre";
  }
  listaActual.innerHTML="";
});

salirbtn.addEventListener("click", ()=>{
  limpiar();
  console.log("saliendo");
  creadorListas.style.display = "none";
  contenedorGeneral.style.display = "none";
  contenedorListas.style.display="flex";
  nombreLista ="";
  inputNomList.value = "";
  lista = ""; 
  buscaCancion.value = "";
  muestraListas();
  listaActual.innerHTML="";
});

