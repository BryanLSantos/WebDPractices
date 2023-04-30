import Level from "./scenes/Level.js"
import Bootloader from "./scenes/Bootloader.js"
import Start from "./scenes/Start.js";

const config = {
    //zoom: 1.5,
    title: "Curso Phaser",		    //Nombre del juego (opcional)
    url: "http://google.es",	    //Dirección de la página del juego (opcional)
    version: "0.0.1",		        //Versión alfanumérica (opcional)
    type: Phaser.AUTO,
    scale: {
        parent: "phaser_container",
        width: 1920,
        height: 1080,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },		        //Tipo de renderizado (WEBGL, CANVAS, AUTO)
                                    // AUTO: busca primero WEBGL y si no está disponible eligirá CANVAS
    //width: 640,			            //Ancho de pantalla del juego
    //height: 360, 			        //Alto de pantalla del juego
    //parent: "contenedor",		    //Nombre del id del elemento <div> en el index.html
                                    // se refiere a dónde se pondrá el canvas o lienzo
    pixelArt: true,		            //Diseño con pixeles definidos (no borrosos)
    backgroundColor: "#000000", 	//Color de fondo del canvas ()
    scene: [
        Start,
        Bootloader,
        Level],    //Aquí irá la lista de scenas del juego
    banner:{
        hidePhaser: true,
        text: "#fff00f",
        background: [
                "#16a085",
                "#2ecc71",
                "#e74c3c", 
                "#000000"]
    },
    physics: {
        default: 'arcade',
        'arcade': {
            'gravity': {
                y: 800
            },
            'debug': true
        }
    }
};

const game = new Phaser.Game(config);