const baseDatosJSON = {
  canciones: [
    {
      id: 1,
      nombre: "Wake me up",
      artista: "Avicii",
      id_artista: 1,
      album: "True",
      id_album: 1,
      link: "SsYXnH9lzCY",
      genero: "Música Electrónica",
      id_genero: 1
    },
    {
      id: 2,
      nombre: "Hey brother",
      artista: "Avicii",
      id_artista: 1,
      album: "True",
      id_album: 1,
      link: "69Fb6XozEx8",
      genero: "Música Electrónica",
      id_genero: 1
    },
    {
      id: 3,
      nombre: "Alone",
      artista: "Marshmello",
      id_artista: 2,
      album: "Marshmello",
      id_album: 2,
      link: "nR5l-1lmkkI",
      genero: "Música Electrónica",
      id_genero: 1
    },
    {
      id: 4,
      nombre: "Animals",
      artista: "Martin Garrix",
      id_artista: 3,
      album: "Animals",
      id_album: 3,
      link: "2kpAzC2Mja8",
      genero: "Música Electrónica",
      id_genero: 1
    },
    {
      id: 5,
      nombre: "Titanium",
      artista: "David Guetta",
      id_artista: 4,
      album: "Nothing but the Beat",
      id_album: 4,
      link: "KxnpFKZowcs",
      genero: "Música Electrónica",
      id_genero: 1
    },
    {
      id: 6,
      nombre: "Despacito",
      artista: "Luis Fonsi ft. Daddy Yankee",
      id_artista: 5,
      album: "Despacito",
      id_album: 5,
      link: "kJQP7kiw5Fk",
      genero: "Pop",
      id_genero: 2
    },
    {
      id: 7,
      nombre: "Shape of You",
      artista: "Ed Sheeran",
      id_artista: 6,
      album: "Divide",
      id_album: 6,
      link: "JGwWNGJdvx8",
      genero: "Pop",
      id_genero: 2
    },
    {
      id: 8,
      nombre: "Bohemian Rhapsody",
      artista: "Queen",
      id_artista: 7,
      album: "A Night at the Opera",
      id_album: 7,
      link: "fJ9rUzIMcZQ",
      genero: "Rock",
      id_genero: 3
    },
    {
      id: 9,
      nombre: "Viento",
      artista: "Caifanes",
      id_artista: 8,
      album: "Caifanes",
      id_album: 8,
      link: "T8TtE-enslA",
      genero: "Rock",
      id_genero: 3
    }
  ],
  artistas: [
    {
      id: 1,
      nombre: "Avicii",
      descripcion: "Avicii fue un DJ y productor sueco de música electrónica, conocido por su estilo melódico y pegajoso.",
      url_img: "https://i.scdn.co/image/ab6761610000e5ebae07171f989fb39736674113"
    },
    {
      id: 2,
      nombre: "Marshmello",
      descripcion: "Marshmello es un DJ y productor estadounidense, famoso por su característico casco de malvavisco y sus éxitos en la música electrónica.",
      url_img: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da841548a6b711f3749578f57381"
    },
    {
      id: 3,
      nombre: "Martin Garrix",
      descripcion: "Martin Garrix es un DJ y productor neerlandés, reconocido por su talento en la música electrónica y sus colaboraciones con otros artistas.",
      url_img: "https://i.scdn.co/image/ab67616100005174f5b8ee60f1f4ee3453aba40b"
    },
    {
      id: 4,
      nombre: "David Guetta",
      descripcion: "David Guetta es un DJ y productor francés, pionero en la música electrónica y conocido por sus numerosas colaboraciones con artistas de renombre.",
      url_img: "https://i.scdn.co/image/ab6761610000e5ebf150017ca69c8793503c2d4f"
    },
    {
      id: 5,
      nombre: "Luis Fonsi",
      descripcion: "Luis Fonsi es un cantante y compositor puertorriqueño, famoso por su éxito mundial 'Despacito'.",
      url_img: "https://i.scdn.co/image/ab67616d0000b2736a4ffb2d6e1dd69c26099993"
    },
    {
      id: 6,
      nombre: "Ed Sheeran",
      descripcion: "Ed Sheeran es un cantautor británico, conocido por sus emotivas letras y su estilo musical versátil.",
      url_img: "https://i.scdn.co/image/ab67616d0000b273d4e0fdd4c41a4f9bfd884301"
    },
    {
      id: 7,
      nombre: "Queen",
      descripcion: "Queen es una icónica banda británica de rock, famosa por su innovador sonido y la poderosa voz de Freddie Mercury.",
      url_img: "https://i.scdn.co/image/af2b8e57f6d7b5d43a616bd1e27ba552cd8bfd42"
    },
    {
      id: 8,
      nombre: "Caifanes",
      descripcion: "Caifanes es una influyente banda mexicana de rock, conocida por su fusión de rock y música latina, y por sus letras poéticas.",
      url_img: "https://images.genius.com/4be6ac6517dde5a18eb0f2f9a28f0ce7.952x952x1.jpg"
    },
    {
      id: 9,
      nombre: "Daddy Yankee",
      descripcion: "Daddy Yankee es un cantante y compositor puertorriqueño, conocido como el 'Rey del Reguetón' y famoso por su éxito 'Despacito'.",
      url_img: "https://i.scdn.co/image/ab6761610000e5eb99a6ccc4aae5ae5404c9eb30"
    },
    {
      id: 10,
      nombre: "Adele",
      descripcion: "Adele es una cantante británica reconocida por su poderosa voz y letras emotivas. Ha ganado múltiples premios Grammy y es una de las artistas más exitosas del siglo XXI.",
      url_img:"https://creativetalentbooking.com/wp-content/uploads/2023/02/Adelle.jpg"
    },
    {
      id: 11,
      nombre: "Avril Lavigne",
      descripcion: "Cantante canadiense conocida como la “Princesa del Pop Punk”, saltó a la fama en 2002 con su estilo rebelde y éxitos como 'Complicated' y 'Sk8er Boi'",
      url_img: "https://savedaughters.com/public/ckimages/ck_1678268799.jpg"
    },
    {
      id: 12,
      nombre: "Indila",
      descripcion: "Cantautora francesa de voz melancólica y estilo único, alcanzó fama internacional con su sencillo 'Dernière' danse en 2013.",
      url_img: "https://images6.fanpop.com/image/photos/37100000/Indila-indila-37172476-1024-768.png"
    },
    {
      id: 13,
      nombre: "Mecano",
      descripcion: "Icónica banda española de pop y tecno-pop de los 80 y 90, famosa por temas como 'Hijo de la Luna' y 'Mujer contra mujer'",
      url_img: "https://th.bing.com/th/id/OIP.2KfcBSZ2ZE9eJtf3JhLl7wAAAA?rs=1&pid=ImgDetMain"
    },
    {
      id: 14,
      nombre: "Stray Kids",
      descripcion: "Grupo surcoreano de K-pop formado en 2017, conocido por su energía, letras introspectivas y producción musical propia",
      url_img: "https://www.musicmundial.com/en/wp-content/uploads/2023/10/Stray-Kids-releases-the-first-set-of-concept-photos-for-their-new-album-Rock-Star-1.jpg"
    },
    {
      id: 15,
      nombre: "BTS",
      descripcion: "Boyband surcoreana que debutó en 2013 con 'No More Dream', revolucionando el K-pop con su mensaje positivo, coreografías impactantes y una base global de fans llamada ARMY.",
      url_img: "https://th.bing.com/th/id/OIP.LCphAr5S07jlyoo0BncFBAAAAA?rs=1&pid=ImgDetMain"
    },
    {
      id: 16,
      nombre: "Coldplay",
      descripcion: "Banda británica de pop rock formada en 1997, conocida por su estilo melódico, letras emotivas y éxitos globales como 'Yellow' y 'Viva la Vida'",
      url_img: "https://yt3.ggpht.com/-5E9R-kUK4H0/AAAAAAAAAAI/AAAAAAAAAAA/8RWanSWSVOI/s900-c-k-no-rj-c0xffffff/photo.jpg"
    },
    {
      id: 17,
      nombre: "MARINA",
      descripcion: "Cantautora galesa de origen griego, antes conocida como Marina and the Diamonds, famosa por su estilo electropop y letras introspectivas sobre identidad y sociedad.",
      url_img: "https://th.bing.com/th/id/OIP.bGNG9AusmKOp3m5znt7DQwAAAA?rs=1&pid=ImgDetMain"
    },
    {
      id: 18,
      nombre: "Rammstein",
      descripcion: "Grupo alemán de metal industrial fundado en 1994, célebre por su sonido potente, letras provocadoras en alemán y espectáculos en vivo cargados de pirotecnia.",
      url_img: "https://images.mediabiz.de/s/f%C3%BCllen-die-hallen-nach-belieben-rammstein/newspics/406/281406_1/b2780x1450.jpg"
    }
  ],
  genero: [
    {
      id: 1,
      nombre: "Música Electrónica",
      descripcion: "La música electrónica es un género musical que utiliza tecnología electrónica para crear sonidos y ritmos, abarcando una amplia variedad de estilos."
    },
    {
      id: 2,
      nombre: "Pop",
      descripcion: "El pop es un género musical popular caracterizado por melodías pegajosas y letras accesibles, abarcando una amplia gama de estilos y artistas."
    },
    {
      id: 3,
      nombre: "Rock",
      descripcion: "El rock es un género musical que se originó en la década de 1950, caracterizado por el uso de guitarras eléctricas, batería y una fuerte presencia vocal."
    },
    {
      id: 4,
      nombre: "Hip Hop",
      descripcion: "El hip hop es un género musical y cultural que se originó en la década de 1970, caracterizado por el rap, el DJing y el breakdancing."
    },
    {
      id: 5,
      nombre: "R&B",
      descripcion: "El R&B (Rhythm and Blues) es un género musical que combina elementos de soul, funk y pop, con un enfoque en las melodías vocales y ritmos pegajosos."
    },
    {
      id: 6,
      nombre: "Country",
      descripcion: "El country es un género musical estadounidense que se originó en el sur, caracterizado por sus historias narrativas y el uso de instrumentos como la guitarra acústica y el banjo."
    },
    {
      id: 7,
      nombre: "Jazz",
      descripcion: "El jazz es un género musical que se originó a principios del siglo XX, caracterizado por su improvisación, ritmos complejos y una rica tradición instrumental."
    }
  ],
  album: [
    {
      id: 1,
      nombre: "True",
      artista: "Avicii",
      id_artista: 1,
      descripcion: "El álbum 'True' de Avicii es una mezcla innovadora de música electrónica y folk, con éxitos como 'Wake Me Up' y 'Hey Brother'.",
      url_img: "https://i.scdn.co/image/ab67616d0000b273e14f11f796cef9f9a82691a7"
    },
    {
      id: 2,
      nombre: "Marshmello",
      artista: "Marshmello",
      id_artista: 2,
      descripcion: "El álbum homónimo de Marshmello presenta una colección de sus éxitos más populares, destacando su estilo distintivo en la música electrónica.",
      url_img: "https://mosaic.scdn.co/640/ab67616d00001e0204bfd5a5fd5aa6ca648f66aaab67616d00001e02779b026a1fd1aa96c6deac6dab67616d00001e02c3055e5c1073d11b1ae2e553ab67616d00001e02c89e7ad65c4486567cbf4759"
    },
    {
      id: 3,
      nombre: "Animals",
      artista: "Martin Garrix",
      id_artista: 3,
      descripcion: "El álbum 'Animals' de Martin Garrix incluye su famoso sencillo del mismo nombre, consolidando su lugar en la escena de la música electrónica.",
      url_img: "https://i.scdn.co/image/ab67616d0000b2736abad6915a2216dc18e7e3a7"
    },
    {
      id: 4,
      nombre: "Nothing but the Beat",
      artista: "David Guetta",
      id_artista: 4,
      descripcion: "El álbum 'Nothing but the Beat' de David Guetta es un hito en la música electrónica, con colaboraciones de artistas destacados y éxitos globales.",
      url_img: "https://i.scdn.co/image/ab67616d0000b27354e095b51d4ba95496cd60d7"
    },
    {
      id: 5,
      nombre: "Despacito",
      artista: "Luis Fonsi ft. Daddy Yankee",
      id_artista: 5,
      descripcion: "'Despacito' es un sencillo icónico que ha alcanzado el estatus de fenómeno mundial, fusionando ritmos latinos con pop.",
      url_img: "https://i.scdn.co/image/ab67616d0000b273343bd0b686fe428dd9ab6d28"
    },
    {
      id: 6,
      nombre: "Divide",
      artista: "Ed Sheeran",
      id_artista: 6,
      descripcion: "'Divide' es un álbum aclamado por la crítica que presenta una variedad de estilos musicales, destacando la versatilidad de Ed Sheeran.",
      url_img: "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96"
    },
    {
      id: 7,
      nombre: "A Night at the Opera",
      artista: "Queen",
      id_artista: 7,
      descripcion: "'A Night at the Opera' es un álbum clásico de Queen, conocido por su innovador sonido y la épica 'Bohemian Rhapsody'.",
      url_img: "https://i.scdn.co/image/ab67616d0000b2737110a2b3dc32dc1224b7670f"
    },
    {
      id: 8,
      nombre: "Caifanes",
      artista: "Caifanes",
      id_artista: 8,
      descripcion: "'Caifanes' es el álbum debut de la banda mexicana, que fusiona rock y música latina, estableciendo su legado en la escena musical.",
      url_img: "https://i.scdn.co/image/ab67616d00001e0252842eb76a050aa8daec1251"
    },
    {
      id: 9,
      nombre: "El Diablito",
      artista: "Caifanes",
      id_artista: 8,
      descripcion: "'El Diablito' es un álbum que marcó un hito en la música rock en español, con letras poéticas y una fusión de géneros.",
      url_img: "https://upload.wikimedia.org/wikipedia/en/5/5c/Caifanes_ElDiablitoLP_cover.jpeg"
    },
    {
      id: 10,
      nombre: "El Silencio",
      artista: "Caifanes",
      id_artista: 8,
      descripcion: "'El Silencio' es un álbum emblemático de Caifanes, que consolidó su estatus como una de las bandas más influyentes del rock en español.",
      url_img: "https://i.scdn.co/image/ab67616d0000b273bc4d989c48ad5b154fb0781d"
    },
    {
      id: 11,
      nombre: "El Nervio del Volcán",
      artista: "Caifanes",
      id_artista: 8,
      descripcion: "'El Nervio del Volcán' es un álbum que muestra la evolución musical de Caifanes, con letras profundas y una fusión de géneros.",
      url_img: "https://i.scdn.co/image/ab67616d0000b27336aeaab4dc91a8dea53a2d8f"
    }
  ]
};

let botonArtistas = document.getElementById("artistasBoton");

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

