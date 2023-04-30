import Bootloader from "./scenes/Bootloader.js";
const config = {
    title: "P04_Reto",
    version: "0.0.1",
    type: Phaser.AUTO,
    scale: {
        parent: "contenedor",
        width: 5120,
        height: 2038,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: "#33475b",
    pixelArt: true,
    physics: {
        default: "arcade",
        "arcade": {
            gravity: {
                y: 500
            }
        }
    },
    scene: [Bootloader]
    };
    const game = new Phaser.Game(config);