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
        this.load.image(['Puntero','FondoStartA','Title', 'Start','text','BookB','BookR','Pergamino','Eggs','Story'
        ]);

        this.load.image([
            {key: '0', url:'01.png'},
            {key: '1', url:'02.png'},
            {key: '2', url:'03.png'},
            {key: '3', url:'04.png'},
            {key: '4', url:'05.png'},
            {key: '5', url:'06.png'},
            {key: '6', url:'07.png'},
            {key: '7', url:'08.png'},
            {key: '8', url:'09.png'},
    ]);
        this.load.audio({
            key: "musica",
            url: "cancion.mp3"
        });

        this.load.spritesheet('star','star.png',    
        {
            frameWidth: 64,
            frameHeight: 64,
            //margin: 1
        })
        this.load.spritesheet('ajustes','ajustes.png',    
        {
            frameWidth: 100,
            frameHeight: 100,
            //margin: 1
            padding: 1,
        })


        this.eggy= new Array(9);
    }
    create() {


        //Estrellas animadas
        this.star = this.add.sprite(270, 850, 'star', 0).setScale(1.4).setDepth(5).setTint(0x546E7A);
        this.stara = this.add.sprite(460, 450, 'star', 0).setDepth(5).setTint(0x546E7A);
        this.starb = this.add.sprite(210, 150, 'star', 0).setScale(1.4).setDepth(5).setTint(0x546E7A);
        this.starc = this.add.sprite(870, 950, 'star', 0).setScale(1.4).setDepth(5).setTint(0x546E7A);
        this.stard = this.add.sprite(1550, 820, 'star', 0).setScale(1.4).setDepth(5).setTint(0x546E7A);
        this.stare = this.add.sprite(1620, 180, 'star', 0).setDepth(5).setTint(0x546E7A);
        this.starf = this.add.sprite(1380, 350, 'star', 0).setScale(1.4).setDepth(5).setTint(0x546E7A);
        this.starg = this.add.sprite(930, 120, 'star', 0).setDepth(5).setTint(0x546E7A);
        this.starh = this.add.sprite(270, 850, 'star', 0).setDepth(5).setTint(0x546E7A);
        this.stari = this.add.sprite(270, 850, 'star', 0).setScale(1.4).setDepth(5).setTint(0x546E7A);
        this.stark = this.add.sprite(270, 850, 'star', 0).setDepth(5).setTint(0x546E7A);
        this.starl = this.add.sprite(270, 850, 'star', 0).setScale(1.4).setDepth(5).setTint(0x546E7A);
        //Ajuste animado
        this.ajustes = this.add.sprite(270, 950, 'ajustes', 0).setScale(1.4).setDepth(5);
        

        //Animacion estrellas
        this.anims.create({
            // Nombre de la animación
            key: 'star_animation',
            
            // Se cargan los frames por números
            // NOTA: generateFrameNames() se
            // usa cuando ya existe un Atlas
            frames: this.anims.generateFrameNumbers('star', {
                start: 0,
                end: 59
            }),
            repeat: -1,
            frameRate: 12
        });

        this.star.anims.play('star_animation');
        this.stara.anims.play('star_animation');
        this.starb.anims.play('star_animation');
        this.starc.anims.play('star_animation');
        this.stard.anims.play('star_animation');
        this.stare.anims.play('star_animation');
        this.starf.anims.play('star_animation');
        this.starg.anims.play('star_animation');
        this.starh.anims.play('star_animation');
        this.stari.anims.play('star_animation');
        this.stark.anims.play('star_animation');
        this.starl.anims.play('star_animation');

        //Animacion Ajustes
        this.anims.create({
            // Nombre de la animación
            key: 'ajustes_animation',
            // Se cargan los frames por números
            // NOTA: generateFrameNames() se
            // usa cuando ya existe un Atlas
            frames: this.anims.generateFrameNumbers('ajustes', {
                start: 0,
                end: 2
            }),
            repeat: -1,
            frameRate: 3
        });

        this.ajustes.anims.play('ajustes_animation');
        //Play de musica de fondo
        this.musica = this.sound.add("musica");
        this.musica.play({
            volume: 1,
            loop: true
        });
        //Puntero
        this.puntero = this.add.image(0, 0, 'Puntero').setOrigin(0.15, 0.15).setDepth(12).setScale(1.5);
        //Background con movimiento
        this.bgs = [
            this.add.image(0, 0, "FondoStartA").setOrigin(0, 0).setDepth(-1).setScale(2),
            this.add.image(0, 0, "FondoStartA").setOrigin(0, 0).setDepth(-1).setScale(2),
        ];
        this.bgs[1].x = - this.bgs[0].displayWidth;
        //Imagen de Titulo
        this.title = this.add.image(
            this.width / 2,
            this.height / 2 - 150,
            "Title",
        ).setDepth(0).setScale(1.1);
        //Texto de debajo del titulo
        this.text = this.add.image(
            this.width / 2,
            this.height / 2 - 50,
            "text",
        ).setDepth(0).setScale(1.4);
        //Boton de Start
        this.start = this.add.image(
            this.width / 2,
            this.height / 2 + 30,
            "Start",
        ).setDepth(0).setInteractive();
        //Imagen del libro azul
        this.bookb = this.add.image(
            this.width / 2 + 70,
            this.height / 2 + 180,
            "BookB",
        ).setDepth(0).setInteractive().setScale(3);
        //Imagen del libro rojo
        this.bookr = this.add.image(
            this.width / 2 - 70,
            this.height / 2 + 180,
            "BookR",
        ).setDepth(0).setInteractive().setScale(3);

        const events = Phaser.Input.Events;
        const eventos = Phaser.Input.Events;
        const keyCodes = Phaser.Input.Keyboard.KeyCodes;

        this.start.on('pointerdown',()=>{
            // cargar la esena de boot
            this.scene.start('Level');
        });

        
        this.bookr.on('pointerdown',()=>{
            // cargar la esena de boot
            //this.scene.start('BookR');
            this.story = this.add.image(
                this.width / 2,
                this.height / 2,
                "Story",
            ).setDepth(6).setScale(2).setInteractive();

            this.story.on('pointerdown',()=>{
                // cargar la esena de boot
                //this.scene.start('BookR');
              
                this.story.visible=false;
            });
        });

        this.bookb.on('pointerdown',()=>{
            // cargar la esena de boot
            //this.scene.start('BookR');
          
            this.eggs = this.add.image(
                this.width / 2,
                this.height / 2,
                "Eggs",
            ).setDepth(6).setScale(2).setInteractive();

            for (let index = 0; index < (3); index++){
                this.eggy[index] = this.add.image(843 + (index*100), 400, index).setOrigin(0,0).setScale(5).setDepth(7).setInteractive();
                this.eggy[index+3] = this.add.image(843 + (index*100), 500, index+3).setOrigin(0,0).setScale(5).setDepth(7).setInteractive();
                this.eggy[index+6] = this.add.image(843 + (index*100), 600, index+6).setOrigin(0,0).setScale(5).setDepth(7).setInteractive();
            }
        //Escalar los huevos cuando se pasa el mouse sobre ellos 
        this.eggy[0].on(eventos.POINTER_OVER, function() {
            this.setScale(5.5);
        });
        this.eggy[0].on(eventos.POINTER_OUT, function() {
            this.setScale(5);
        });
        this.eggy[1].on(eventos.POINTER_OVER, function() {
            this.setScale(5.5);
        });
        this.eggy[1].on(eventos.POINTER_OUT, function() {
            this.setScale(5);
        });
        this.eggy[2].on(eventos.POINTER_OVER, function() {
            this.setScale(5.5);
        });
        this.eggy[2].on(eventos.POINTER_OUT, function() {
            this.setScale(5);
        });
        this.eggy[3].on(eventos.POINTER_OVER, function() {
            this.setScale(5.5);
        });
        this.eggy[3].on(eventos.POINTER_OUT, function() {
            this.setScale(5);
        });
        this.eggy[4].on(eventos.POINTER_OVER, function() {
            this.setScale(5.5);
        });
        this.eggy[4].on(eventos.POINTER_OUT, function() {
            this.setScale(5);
        });
        this.eggy[5].on(eventos.POINTER_OVER, function() {
            this.setScale(5.5);
        });
        this.eggy[5].on(eventos.POINTER_OUT, function() {
            this.setScale(5);
        });
        this.eggy[6].on(eventos.POINTER_OVER, function() {
            this.setScale(5.5);
        });
        this.eggy[6].on(eventos.POINTER_OUT, function() {
            this.setScale(5);
        });
        this.eggy[7].on(eventos.POINTER_OVER, function() {
            this.setScale(5.5);
        });
        this.eggy[7].on(eventos.POINTER_OUT, function() {
            this.setScale(5);
        });
        this.eggy[8].on(eventos.POINTER_OVER, function() {
            this.setScale(5.5);
        });
        this.eggy[8].on(eventos.POINTER_OUT, function() {
            this.setScale(5);
        });
        //Quitar Pergamino
        this.eggs.on('pointerdown',()=>{

                this.eggs.visible=false;

            for (let index = 0; index < (3); index++){
                this.eggy[index].visible=false;
                this.eggy[index+3].visible=false;
                this.eggy[index+6].visible=false;
            }
            });

        });

        //Movimiento del puntero sobre el canvas
        this.sys.canvas.style.cursor = 'none';
        this.input.on(events.POINTER_MOVE, (event) => {
            this.puntero.x = event.worldX;
            this.puntero.y = event.worldY;
        });
        //Eventos del boton start
        this.start.on(eventos.POINTER_OVER, function() {
            this.setScale(1.2);
        });
        this.start.on(eventos.POINTER_OUT, function() {
            this.setScale(1);
        });
        //Eventos del libro azul
        this.bookb.on(eventos.POINTER_OVER, function() {
            this.setScale(3.5);
        });
        this.bookb.on(eventos.POINTER_OUT, function() {
            this.setScale(3);
        });
        //Eventos del libro rojo
        this.bookr.on(eventos.POINTER_OVER, function() {
            this.setScale(3.5);
        });
        this.bookr.on(eventos.POINTER_OUT, function() {
            this.setScale(3);
        });
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