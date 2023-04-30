class Bootloader extends Phaser.Scene{
    constructor(){
        super({
            key: 'Bootloader'
        });
    }

    init() {
        console.log('Escena Bootloader');
    }
    preload() {
        this.load.path = './assets/';      
        this.load.image(['yoshif', 'yoshi']);
        this.load.image('contenedor', 'contenedor.png');
    }
    createOLD() {
        //this.yoshi = this.add.image(100, 100, 'yoshi');
        this.yoshi = this.add.image(300, 100, 'yoshi')
        //.setDepth(2)
        .setScale(0.7);
        this.contenedor = this.add.image(200, 100, 'contenedor');
        this.texto = this.add.text(90, 90, 'PUNTOS 0', {
            fontSize: 30
        });
        const container = this.add.container(0, -300);
        container.add([
            this.contenedor,
            this.yoshi,
            this.texto
        ]);
        this.add.tween({
            targets: [container],
            y: 100,
            ease: 'Bounce'
        });

        // this.add.tween({
        //     targets: [this.yoshi, this.contenedor, this.texto],
        //     y: 200
        // });
    }
    create()
    {
        const container = this.add.container(320, -100);
       //this.yoshi = this.add.image(300, 100, 'yoshi')
        //.setDepth(2)
        //.setScale(0.7);
        this.contenedor = this.add.image(0, 0, 'contenedor');
        
        container.add([
            this.contenedor,
            //this.yoshi,
            //this.texto
        ]);
        //a. ¿Cuál es el Origen del contenedor lógico? (coméntalo en tu código)
        //El origen del contenedor logico es en la esquina del canvas
        //b. ¿Cuál es el Origen del contenedor gráfico? (coméntalo en tu código)
        //El origen del contenedor grafico es afuera del rango visible de la pantalla y/o canvas
        
        this.texto = this.add.text(-110, -15, 'PUNTOS 0', {
            fontSize: 30
        });
        container.add([
            this.texto
        ]);
        //a. ¿Cuál es el Origen del texto? (coméntalo en tu código)
        //El origen es la esquina derecha del contenedor logico
        
        this.yoshi = this.add.image(100, 0, 'yoshi')
        .setScale(0.7);
        container.add([
            this.yoshi
        ]);

        this.add.tween({
            targets: [container],
            y: 170,
            ease: 'Bounce'
        });
    }
    update(time, delta) {
        // ESTA FUNCION CREA UN CICLO INFINITO
    }
}

export default Bootloader;