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
    
        this.load.image("fondo", "Fondo.png");
        this.load.image("fondoEMP", "FondoEmpty.png");
        this.load.image('Puntero','Puntero.png');


        this.load.image([
            { key: '0', url: ['Cards/CardBN1.png'] },
            { key: '1', url: ['Cards/CardBN2.png'] },
            { key: '2', url: ['Cards/CardBN3.png'] },
            { key: '3', url: ['Cards/CardBN4.png'] },
            { key: '4', url: ['Cards/Card1.png'] },
            { key: '5', url: ['Cards/Card2.png'] },
            { key: '6', url: ['Cards/Card3.png'] },
            { key: '7', url: ['Cards/Card4.png'] }
        ]);

        this.load.audio({
            key: "click",
            url: "click.ogg"
        });

        this.load.audio({
            key: "moonF",
            url: "Hero Knight/moonF.mp3"
        });

        this.load.audio({
            key: "kingF",
            url: "Medieval King/kingF.mp3"
        });

        this.load.audio({
            key: "hieroF",
            url: "Hiero/hieroF.mp3"
        });

        this.load.audio({
            key: "witchF",
            url: "witch/witchF.mp3"
        });

        this.arrayCards = new Array(4);
        this.arrayFront = new Array(4);
        this.load.spritesheet('moon','Hero Knight/Idle.png',
        {
            frameWidth: 180,
            frameHeight: 180,
            margin: 1
        })

        this.load.spritesheet('moon_r','Hero Knight/run.png',
        {
            frameWidth: 180,
            frameHeight: 180
        })

        this.load.spritesheet('moon_j','Hero Knight/jump.png',
        {
            frameWidth: 180,
            frameHeight: 180
        })

        this.load.spritesheet('moon_a','Hero Knight/attack.png',
        {
            frameWidth: 180,
            frameHeight: 180
        })

        this.load.spritesheet('king','Medieval King/Sprites/Idle.png',
        {
            frameWidth: 160,
            frameHeight: 111
        })

        this.load.spritesheet('king_r','Medieval King/Sprites/Run.png',
        {
            frameWidth: 160,
            frameHeight: 111,
        })

        this.load.spritesheet('king_j','Medieval King/Sprites/Jump.png',
        {
            frameWidth: 160,
            frameHeight: 111,
        })

        this.load.spritesheet('king_q','Medieval King/Sprites/Attack1.png',
        {
            frameWidth: 160,
            frameHeight: 111
        })

        this.load.spritesheet('king_e','Medieval King/Sprites/Attack2.png',
        {
            frameWidth: 160,
            frameHeight: 111
        })

        this.load.spritesheet('hiero','Hiero/Idle.png',
        {
            frameWidth: 288,
            frameHeight: 128,
        })
        
        this.load.spritesheet('hiero_r','Hiero/run.png',
        {
            frameWidth: 288,
            frameHeight: 128,
        })

        this.load.spritesheet('hiero_q','Hiero/attack1.png',
        {
            frameWidth: 288,
            frameHeight: 128,
        })

        this.load.spritesheet('hiero_e','Hiero/attack2.png',
        {
            frameWidth: 288,
            frameHeight: 128,
        })

        this.load.atlas('witch_idle', 'witch/witch_idle/witch_idle.png', 'witch/witch_idle/witch_idle_atlas.json');
        this.load.animation('witch_idle', 'witch/witch_idle_anim/witch_idle_anim.json');  

        this.load.atlas('witch_attack', 'witch/witch_attack/witch_attack.png', 'witch/witch_attack/witch_attack_atlas.json');
        this.load.animation('witch_attack', 'witch/witch_attack_anim/witch_attack_anim.json');

        this.load.atlas('witch_charge', 'witch/witch_charge/witch_charge.png', 'witch/witch_charge/witch_charge_atlas.json');
        this.load.animation('witch_charge', 'witch/witch_charge_anim/witch_charge_anim.json');
        
        this.load.atlas('witch_run', 'witch/witch_run/witch_run.png', 'witch/witch_run/witch_run_atlas.json');
        this.load.animation('witch_run', 'witch/witch_run_anim/witch_run_anim.json');  
        
    }
    
    create() {

        this.add.image(0, 0, "fondo").setOrigin(0, 0).setDepth(-1);
        this.puntero = this.add.image(0, 0, 'Puntero').setOrigin(0.15, 0.15).setDepth(5).setScale(1.5);
        
        this.text1 = this.add.text(640, 170, '\t\t\t\t\t\t\t\tClick para Seleccionar\nPresiona ESC para cancelar selección', {
            fontFamily: 'Consolas', fontSize: '30px'
        }).setDepth(10);

        this.text1 = this.add.text(500, 970, '\t\t\t\t\t\t\t\t\t\t[←]CORRER A LA IZQ \t\t\t[→]CORRER A LA DER\n\n[Q] ATAQUE PRIMARIO \t\t\t[R] SALTO, CARGA, ATAQUE SECUNDARIO', {
            fontFamily: 'Consolas', fontSize: '30px'
        }).setDepth(10);

        const keyCodes = Phaser.Input.Keyboard.KeyCodes;
        const eventos = Phaser.Input.Events;

        for (let index = 0; index < this.arrayCards.length; index++) {
            this.arrayCards[index] = this.add.image(130 + (index*434), 275, index).setOrigin(0,0).setScale(1.05).setTint(0x4A148C,0xEA80FC,0x37474F,0x000099);
        }

        this.moon = this.add.sprite(270, 590, 'moon', 0).setScale(5);
        this.anims.create({
            // Nombre de la animación
            key: 'moon_idle',
            // Se cargan los frames por números
            // NOTA: generateFrameNames() se
            // usa cuando ya existe un Atlas
            frames: this.anims.generateFrameNumbers('moon', {
                start: 0,
                end: 10
            }),
            repeat: -1,
            frameRate: 12
        });
        
        this.anims.create({
            // Nombre de la animación
            key: 'moon_run',
            // Se cargan los frames por números
            // NOTA: generateFrameNames() se
            // usa cuando ya existe un Atlas
            frames: this.anims.generateFrameNumbers('moon_r', {
                start: 0,
                end: 7
            }),
            repeat: -1,
            frameRate: 6
        });

        this.anims.create({
            // Nombre de la animación
            key: 'moon_jump',
            // Se cargan los frames por números
            // NOTA: generateFrameNames() se
            // usa cuando ya existe un Atlas
            frames: this.anims.generateFrameNumbers('moon_j', {
                start: 0,
                end: 2
            }),
            repeat: -1,
            frameRate: 2
        });

        this.anims.create({
            // Nombre de la animación
            key: 'moon_attack',
            // Se cargan los frames por números
            // NOTA: generateFrameNames() se
            // usa cuando ya existe un Atlas
            frames: this.anims.generateFrameNumbers('moon_a', {
                start: 0,
                end: 6
            }),
            repeat: -1,
            frameRate: 10
        });
        
        this.king = this.add.sprite(730, 420, 'king', 0).setScale(6);
        this.anims.create({
            // Nombre de la animación
            key: 'king_idle',
            // Se cargan los frames por números
            // NOTA: generateFrameNames() se
            // usa cuando ya existe un Atlas
            frames: this.anims.generateFrameNumbers('king', {
                start: 0,
                end: 7
            }),
            repeat: -1,
            frameRate: 6
        });

        this.anims.create({
            // Nombre de la animación
            key: 'king_run',
            // Se cargan los frames por números
            // NOTA: generateFrameNames() se
            // usa cuando ya existe un Atlas
            frames: this.anims.generateFrameNumbers('king_r', {
                start: 0,
                end: 7
            }),
            repeat: -1,
            frameRate: 6
        });

        this.anims.create({
            // Nombre de la animación
            key: 'king_jump',
            // Se cargan los frames por números
            // NOTA: generateFrameNames() se
            // usa cuando ya existe un Atlas
            frames: this.anims.generateFrameNumbers('king_j', {
                start: 0,
                end: 1
            }),
            repeat: -1,
            frameRate: 1
        });

        this.anims.create({
            // Nombre de la animación
            key: 'king_attack',
            // Se cargan los frames por números
            // NOTA: generateFrameNames() se
            // usa cuando ya existe un Atlas
            frames: this.anims.generateFrameNumbers('king_q', {
                start: 0,
                end: 3
            }),
            repeat: -1,
            frameRate: 7
        });

        this.anims.create({
            // Nombre de la animación
            key: 'king_attack2',
            // Se cargan los frames por números
            // NOTA: generateFrameNames() se
            // usa cuando ya existe un Atlas
            frames: this.anims.generateFrameNumbers('king_e', {
                start: 0,
                end: 3
            }),
            repeat: -1,
            frameRate: 7
        });
        
        this.hiero = this.add.sprite(1180, 270, 'hiero', 0).setScale(8);
        this.anims.create({
            // Nombre de la animación
            key: 'hiero_idle',
            // Se cargan los frames por números
            // NOTA: generateFrameNames() se
            // usa cuando ya existe un Atlas
            frames: this.anims.generateFrameNumbers('hiero', {
                start: 0,
                end: 15
            }),
            repeat: -1,
            frameRate: 14
        });

        this.anims.create({
            // Nombre de la animación
            key: 'hiero_run',
            // Se cargan los frames por números
            // NOTA: generateFrameNames() se
            // usa cuando ya existe un Atlas
            frames: this.anims.generateFrameNumbers('hiero_r', {
                start: 0,
                end: 7
            }),
            repeat: -1,
            frameRate: 6
        });

        this.anims.create({
            // Nombre de la animación
            key: 'hiero_attack',
            // Se cargan los frames por números
            // NOTA: generateFrameNames() se
            // usa cuando ya existe un Atlas
            frames: this.anims.generateFrameNumbers('hiero_q', {
                start: 0,
                end: 7
            }),
            repeat: -1,
            frameRate: 9
        });

        this.anims.create({
            // Nombre de la animación
            key: 'hiero_attack2',
            // Se cargan los frames por números
            // NOTA: generateFrameNames() se
            // usa cuando ya existe un Atlas
            frames: this.anims.generateFrameNumbers('hiero_e', {
                start: 0,
                end: 5
            }),
            repeat: -1,
            frameRate: 9
        });
        

        this.witch = this.add.sprite(1620, 575, 'witch_idle',0).setScale(6);

        this.sys.canvas.style.cursor = 'none';
        this.input.on(eventos.POINTER_MOVE, (evento) => {
            this.puntero.x = evento.worldX;
            this.puntero.y = evento.worldY;
        });
        
        this.add.image(0, 0, "fondoEMP").setOrigin(-0.01, 0);
        this.add.image(0, 0, "fondoEMP").setOrigin(0, 0).setDepth(1);
        
        for (let index = 0; index < this.arrayCards.length; index++) {
            this.arrayFront[index] = this.add.image(127 + (index*434), 269, index+4).setOrigin(0,0).setScale(1.05).setInteractive().setTint(0x4A148C,0xEA80FC,0x37474F,0x000099);;
        }

        this.input.on(eventos.GAMEOBJECT_OVER, (pointer, gameObject) => {
            gameObject.clearTint();
            gameObject.x = gameObject.x - 10;
            gameObject.setScale(1.1);
            this.music = this.sound.add("click");
            this.music.play({
                volume: 3
            });
        });

        this.input.on(eventos.GAMEOBJECT_OUT, (pointer, gameObject) => {

            gameObject.setTint(0x4A148C,0xEA80FC,0x37474F,0x000099);
            gameObject.setScale(1.05);
            gameObject.x = gameObject.x + 10;
        });

        this.input.on(eventos.GAMEOBJECT_DOWN, (pointer, gameObject) =>
        {
            gameObject.visible = false;
            for (let index = 0; index < this.arrayFront.length; index++) {
                if (this.arrayFront[0].visible == false)
                {
                    this.moon.anims.play('moon_idle');
                    this.music = this.sound.add("moonF");
                    this.music.play({
                        volume: 0.75
                    });
                }
                else if (this.arrayFront[1].visible == false) {
                    this.king.anims.play('king_idle');
                    this.music = this.sound.add("kingF");
                    this.music.play({
                        volume: 0.25
                    });
                }
                else if (this.arrayFront[2].visible == false) {
                    this.hiero.anims.play('hiero_idle');
                    this.music = this.sound.add("hieroF");
                    this.music.play({
                        volume: 0.25
                    });
                }
                else if (this.arrayFront[3].visible == false) {
                    this.witch.anims.play('witch_idle');
                    this.music = this.sound.add("witchF");
                    this.music.play({
                        volume: 0.25
                    });
                }
            }
        });  

        this.teclas = this.input.keyboard.addKeys({
            izq: keyCodes.A,
            der: keyCodes.D,
            sup: keyCodes.W,
            powQ: keyCodes.Q,
            powR: keyCodes.R,
            powEsc: keyCodes.ESC,
        });

        this.teclas.izq.on('down', ()=>{
            if (this.arrayFront[0].visible == false)
                {
                    this.moon.flipX = true;
                    this.moon.x = 330;
                    this.moon.anims.play('moon_run');
                }
                else if (this.arrayFront[1].visible == false) {
                    this.king.flipX = true;
                    this.king.x = 730;
                    this.king.anims.play('king_run');
                }
                else if (this.arrayFront[2].visible == false) {
                    this.hiero.flipX = true;
                    this.hiero.anims.play('hiero_run');
                }
                else if (this.arrayFront[3].visible == false) {
                    this.witch.flipX = true;
                    this.witch.play('witch_run');
                    this.timelineRotation.play();
            }
        });

        this.teclas.izq.on('up', ()=>{
            if (this.arrayFront[0].visible == false)
                {
                    this.moon.stop();
                    this.moon.anims.play('moon_idle');
                }
                else if (this.arrayFront[1].visible == false) {
                    this.king.anims.stop();
                    this.king.anims.play('king_idle');
                }
                else if (this.arrayFront[2].visible == false) {
                    this.hiero.anims.stop();
                    this.hiero.anims.play('hiero_idle');
                }
                else if (this.arrayFront[3].visible == false) {
                    this.witch.stop();
                    this.witch.play('witch_idle');
            }
        });

        this.teclas.der.on('down', ()=>{
            if (this.arrayFront[0].visible == false)
                {
                    this.moon.flipX = false;
                    this.moon.x = 270;
                    this.moon.anims.play('moon_run');
                }
                else if (this.arrayFront[1].visible == false) {
                    this.king.flipX = false;
                    this.king.x = 760;
                    this.king.anims.play('king_run');
                }
                else if (this.arrayFront[2].visible == false) {
                    this.hiero.flipX = false;
                    this.hiero.anims.play('hiero_run');
                }
                else if (this.arrayFront[3].visible == false) {
                    this.witch.flipX = false;
                    this.witch.play('witch_run');
                    this.timelineMovement.play();
            }
        });

        this.teclas.der.on('up', ()=>{
            if (this.arrayFront[0].visible == false)
                {
                    this.moon.stop()
                    this.moon.anims.play('moon_idle');
                }
                else if (this.arrayFront[1].visible == false) {
                    this.king.anims.stop();
                    this.king.anims.play('king_idle');
                }
                else if (this.arrayFront[2].visible == false) {
                    this.hiero.anims.stop();
                    this.hiero.anims.play('hiero_idle');
                }
                else if (this.arrayFront[3].visible == false) {
                    this.witch.stop();
                    this.witch.play('witch_idle');
            }
        });

        this.teclas.powQ.on('down', ()=>{
            if (this.arrayFront[0].visible == false)
            {
                if (this.moon.flipX == false) {
                    this.moon.x = 180;
                }
                else
                {
                    this.moon.x = 420;
                }
                this.moon.play('moon_attack');
            }
            else if (this.arrayFront[1].visible == false) {
                if (this.king.flipX == false) {
                    this.king.x = 720;
                }
                else
                {
                    this.king.x = 750;
                }
                this.king.play('king_attack');
            }
            else if (this.arrayFront[2].visible == false) {
                if (this.hiero.flipX == false) {
                    this.hiero.x = 1090;
                }
                else
                {
                    this.hiero.x = 1270;
                }
                this.hiero.play('hiero_attack');
            }
            else if (this.arrayFront[3].visible == false) {
                if (this.witch.flipX == false) {
                    this.witch.x = 1770;
                }
                else
                {
                    this.witch.x = 1470;
                }
                this.witch.play('witch_attack');
                this.timelineScalation.play();
            }
        });

        this.teclas.powQ.on('up', ()=>{
            if (this.arrayFront[0].visible == false)
            {
                this.moon.anims.stop();
                this.moon.x = 300;
                this.moon.play('moon_idle');
            }
            else if (this.arrayFront[1].visible == false) {
                this.king.anims.stop();
                this.king.x = 730;
                this.king.play('king_idle');
            }
            else if (this.arrayFront[2].visible == false) {
                this.hiero.anims.stop();
                this.hiero.x = 1180;
                this.hiero.play('hiero_idle');
            }
            else if (this.arrayFront[3].visible == false) {
                this.witch.anims.stop();
                this.witch.x = 1620;
                this.witch.play('witch_idle');
            }
        });

        this.teclas.powR.on('down', ()=>{
            if (this.arrayFront[0].visible == false)
            {
                this.moon.x = 300;
                this.moon.y = 550;
                this.moon.play('moon_jump');
            }
            else if (this.arrayFront[1].visible == false) {
                if (this.king.flipX == false) {
                    this.king.x = 790;
                }
                else
                {
                    this.king.x = 720;
                }
                this.king.play('king_attack2');
            }
            else if (this.arrayFront[2].visible == false) {
                if (this.hiero.flipX == false) {
                    this.hiero.x = 1100;
                }
                else
                {
                    this.hiero.x = 1250;
                }
                
                this.hiero.play('hiero_attack2');
            }
            else if (this.arrayFront[3].visible == false) {
                this.witch.play('witch_charge');
                this.timeline.play();
            }
        });
        this.teclas.powR.on('up', ()=>{
            if (this.arrayFront[0].visible == false)
            {
                this.moon.anims.stop();
                this.moon.x = 300;
                this.moon.y = 590;
                this.moon.play('moon_idle');
            }
            else if (this.arrayFront[1].visible == false) {
                this.king.anims.stop();
                this.king.x = 730;
                this.king.play('king_idle');
            }
            else if (this.arrayFront[2].visible == false) {
                this.hiero.anims.stop();
                this.hiero.x = 1180;
                this.hiero.play('hiero_idle');
            }
            else if (this.arrayFront[3].visible == false) {
                this.witch.anims.stop();
                this.witch.x = 1620;
                this.witch.play('witch_idle');
            }
        });

        this.teclas.powEsc.on('down', ()=>{
            for (let index = 0; index < this.arrayFront.length; index++) {
                if (this.arrayFront[index].visible == false) {
                    this.arrayFront[index].visible = true;
                }
            }
        });

        this.timeline = this.tweens.createTimeline();
        this.timeline.add({
            targets: [this.witch],
            ease: 'Circ',
            repeat: 0,
            x: 1630,
            y: 525,
            yoyo: true,
            alpha: 0.6,
            onStart: (tween, obj, target) => {	
                this.witch.setTint(0xffff00);
            }, //Se puede poner tambien onStartParams
            onComplete: (tween, obj, target) => {
                target.setTint(0xff0000);
                setInterval(() => {
                    target.clearTint();
                    //target.alpha = 1; 
                }, 1000);
                console.log('Se completa el tween de Tinte y Transparencia');
            },
            onCompleteParams: [this.witch]
        });

        // this.timelineMovement = this.tweens.createTimeline();
        // this.timelineMovement.add({
        //     targets: [this.witch],
        //     ease: bounce,
        //     repeat: 0,
        //     x: 1650,
        //     y: 300,
        //     yoyo: true,
        //     onComplete: () => {
        //         console.log("Se completa el tween de movimiento");
        //     }
        // });
        this.timelineMovement = this.tweens.timeline({
            targets: [this.witch],
            paused: true,
            ease: 'elastic',
            repeat: 0,
            totalDuration: 3000,
            tweens: [
            {
            x: 1660,
            },
            {
            y: 300
            },
            {
            x: 1500
            },
            {
            y: 575,
            x: 1620
            }
            ],
            onComplete: (tween, obj, target) => {
                console.log("Se completa el tween de Rebote y Movimiento");
            }
        });

        
        this.timelineRotation = this.tweens.createTimeline();
        this.timelineRotation.add({
            angle: 90,
            ease: 'Bounce',
            targets: [this.witch],
            yoyo: true,
            onComplete: (tween, obj, target) => {
                console.log("Se completa el tween de Rotacion");
            }
        });

        this.timelineScalation = this.tweens.createTimeline();
        this.timelineScalation.add({
            targets: [this.witch],
            scale: 3,
            x: 1570,
            ease: 'Power1',
            targets: [this.witch],
            yoyo: true,
            onComplete: (tween, obj, target) => {
                console.log("Se completa el tween de Escalado");
                target.x = 1620; 
            },
            onCompleteParams: [this.witch]
        });
    }
    
    update(time, delta) {
        for (let index = 0; index < this.arrayFront.length; index++) {
            if (this.arrayFront[0].visible == false)
            {
                this.arrayFront[1].disableInteractive();
                this.arrayFront[2].disableInteractive();
                this.arrayFront[3].disableInteractive();
            }
            else if (this.arrayFront[1].visible == false) {
                this.arrayFront[0].disableInteractive();
                this.arrayFront[2].disableInteractive();
                this.arrayFront[3].disableInteractive();
            }
            else if (this.arrayFront[2].visible == false) {
                this.arrayFront[1].disableInteractive();
                this.arrayFront[0].disableInteractive();
                this.arrayFront[3].disableInteractive();
            }
            else if (this.arrayFront[3].visible == false) {
                this.arrayFront[1].disableInteractive();
                this.arrayFront[2].disableInteractive();
                this.arrayFront[0].disableInteractive();
            }
            else if(this.arrayFront[0].visible != false && this.arrayFront[1].visible != false && this.arrayFront[2].visible != false && this.arrayFront[3].visible != false)
            {
                this.arrayFront[0].setInteractive();
                this.arrayFront[1].setInteractive();
                this.arrayFront[2].setInteractive();
                this.arrayFront[3].setInteractive();
            }
        }
    }
}

export default Bootloader;