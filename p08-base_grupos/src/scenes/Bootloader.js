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
        this.load.atlas('monedas',
        'moneda/monedas.png',
        'moneda/monedas_atlas.json');
        this.load.animation('monedaAnim',
        'moneda/monedas_anim.json');
    }
    createOLD() {
        //this.yoshi = this.add.image(100, 100, 'yoshi');
        this.moneda = this.add.sprite(100, 100, 'monedas');
        //.setScale(4);
        //this.moneda.anims.play('moneda');
        
        //FORMA1
        this.grupo = this.add.group();
        this.grupo.add(this.moneda);
        //console.log(this.grupo);
      
        //FORMA2
        this.grupo = this.add.group({
            key: 'monedas',
            setXY: {
            x: 150,
            y: 150
            }
        });
        //FORMA3
        this.grupo.create(200, 200, 'monedas');

        console.log(this.grupo.getChildren());
        console.log(this.grupo);

        this.grupo.children.iterate( (moneda) => {
            moneda.setScale(4);
            moneda.anims.play('moneda');
        } );
        //2DA FORMA
        //this.grupo.playAnimation('moneda');
    }
    create()
    {
        //this.grupo = this.physics.add.staticGroup({
        this.grupo = this.physics.add.group({
            key: 'monedas',
            repeat: 5,
            setXY: {
            x: 150,
            y: 150,
            stepX: 50
            }
            });
            this.grupo.children.iterate( (moneda) => {
                moneda.setScale(4);
                moneda.body.setAllowGravity(false);
            } );
            this.grupo.getChildren()[1].destroy();
            this.grupo.playAnimation('moneda');

            // this.add.tween({
            //     targets: this.grupo.getChildren(),
            //     y: 200,
            //     yoyo: true,
            //     duration: 500,
            //     repeat: -1,
            //     easy: 'Power1'
            // });
    }
    update(time, delta) {
        // ESTA FUNCION CREA UN CICLO INFINITO
    }
}

export default Bootloader;