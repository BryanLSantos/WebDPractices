const config = {
    title: "Curso Phaser", //Nombre del juego (opcional)
    url: "http://google.es", //Dirección de la página del juego (opcional)
    version: "0.0.1", //Versión alfanumérica (opcional)
    type: Phaser.AUTO, //Tipo de renderizado (WEBGL, CANVAS, AUTO)
    // AUTO: busca primero WEBGL y si no está disponible
    // eligirá CANVAS
    
    width: 640, //Ancho de pantalla del juego
    height: 360, //Alto de pantalla del juego
    parent: "contenedor", //Nombre del id del elemento <div> en el index.html
    // se refiere a dónde se pondrá el canvas o lienzo
    pixelArt: true, //Diseño con pixeles definidos (no borrosos)
    backgroundColor: "#34495e", //Color de fondo del canvas ()
    scene: {    // Configuracion de la escena
        init,   // Para inicializar y cargar datos
        preload,    // Para pre-cargar archivos
        create,     // Para cargar los objetos
        update,     // Bucle del juego



    }, //Configuración de la escena o mundos de phaser
    banner:{

        hidePhaser: true, //ocultar leyenda Phaser y versión
        text: "#fff00f", //cambiar color de texto
        background: [ //cambiar color de fondo:
        "#16a085", //cambiar color de barras 1
        "#2ecc71", //cambiar color de barras 2
        "#e74c3c", //cambiar color de barras 3
        "#000000"] //cambiar color de fondo del texto
        }
    };
    function init() 
    {
        console.log("Soy init");
    }
    function preload() 
    {
        console.log("Soy preload");
    }
    function create()
    {
        console.log("Soy create");
    }
    function update(time, delta)
    {
        // ESTA FUNCION CREA UN CILO INFINITO
        //time: ¿?;
        //delta: ¿?;
        console.log(time);
        console.log(delta);
    }

    const game = new Phaser.Game(config);