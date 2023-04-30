class Start extends Phaser.Scene {
    constructor() {
        super({ key: 'Start' });
    }

    init() {
        
        this.width = this.sys.game.canvas.width;
        this.height = this.sys.game.canvas.height;

        this.minScale = 0.75;
        this.maxScale = 1;
        this.deckSizeDelta = 0.05;

        this.bgDelta = 2;
    }
    preload() {
        this.load.path = './assets/';
        this.load.image(['Puntero','FondoStart','Title', 'Start'
        ]);
        this.load.audio({
            key: "musica",
            url: "cancion.mp3"
        });
        this.load.atlas('hearts',
        'hearts/hearts.png',
        'hearts/hearts_atlas.json');
        this.load.animation('heartsAnim',
        'hearts/hearts_anim.json');
        this.load.atlas('potions',
        'potions/potions.png',
        'potions/potions_atlas.json');
        this.load.animation('potionsAnim',
        'potions/potions_anim.json');
    }
    create() {
        
       
        this.musica = this.sound.add("musica");
        this.musica.play({
            volume: 1,
            loop: true
        });

        this.puntero = this.add.image(0, 0, 'Puntero').setOrigin(0.15, 0.15).setDepth(5).setScale(1.5);
       // this.add.image(0, 0, "fondo2").setOrigin(0.0).setDepth(-1);

        this.bgs = [
            this.add.image(0, 0, "FondoStart").setOrigin(0, 0).setDepth(-1).setScale(2),
            this.add.image(0, 0, "FondoStart").setOrigin(0, 0).setDepth(-1).setScale(2),
        ];
        this.bgs[1].x = - this.bgs[0].displayWidth;

        this.title = this.add.image(
            this.width / 2,
            this.height / 2 - 60,
            "Title",
        ).setDepth(0).setScale(1.5);


        this.start = this.add.image(
            this.width / 2,
            this.height / 2 + 100,
            "Start",
        ).setDepth(0).setInteractive().setScale(1.5);


        const events = Phaser.Input.Events;

        this.input.on(events.GAMEOBJECT_DOWN, (_, gameObject) => {
            //this.music.stop();
            this.scene.start("Bootloader", {
            });
        })
        this.sys.canvas.style.cursor = 'none';
        this.input.on(events.POINTER_MOVE, (event) => {
            this.puntero.x = event.worldX;
            this.puntero.y = event.worldY;
        });

        // this.grupo = this.physics.add.group({
        //     key: 'hearts',
        //     repeat: 3,
        //     setXY: {
        //     x: 150,
        //     y: 100,
        //     stepX: 100
        //     }
        //     });
        //     this.grupo.children.iterate( (corazon) => {
        //         corazon.setScale(1);
        //         corazon.body.setAllowGravity(false);
        //     } );
        // //this.grupo.getChildren()[1].destroy();
        // this.grupo.playAnimation('hearts');

        // this.grupo2 = this.physics.add.group({
        //     key: 'potions',
        //     repeat: 3,
        //     setXY: {
        //     x: 1450,
        //     y: 100,
        //     stepX: 100
        //     }
        //     });
        //     this.grupo2.children.iterate( (posion) => {
        //         posion.setScale(1);
        //         posion.body.setAllowGravity(false);
        //     } );
        //     //this.grupo.getChildren()[1].destroy();
        //     this.grupo2.playAnimation('potions');
    }
    update(time, delta) {
    
        this.bgs.forEach((bg) => {
            bg.x += this.bgDelta;
            if (bg.x >= bg.displayWidth) {
                bg.x = - bg.displayWidth + bg.x % bg.displayWidth;
            }
        })
    
    }

    changeDeckSize(deck, way) {
        deck.scale += way * this.deckSizeDelta;
        deck.scale =
            deck.scale > this.maxScale
                ? this.maxScale
                : deck.scale;
        deck.scale =
            deck.scale < this.minScale
                ? this.minScale
                : deck.scale;
    }

    
}
export default Start;