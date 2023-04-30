class Level extends Phaser.Scene{
    constructor(){
        super({
            key: 'Level'
        });
    }

    init() {
        console.log('Escena Level');
        this.width = this.sys.game.canvas.width;
        this.height = this.sys.game.canvas.height;
        this.maximo=690;
        this.minimo=0;
        this.direc=true;

        this.minScale = 0.75;
        this.maxScale = 1;
        this.deckSizeDelta = 0.05;

        this.bgDelta = 2;
    }
    
    preload() {
        this.load.path = './assets/';
        this.load.image(['Puntero','FondoStart','Layer',
        ]);

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

        this.load.audio({
            key: "move",
            url: "Hero Knight/move.mp3"
        });
        this.load.audio({
            key: "attack",
            url: "Hero Knight/attack.mp3"
        });
        this.load.audio({
            key: "jump",
            url: "Hero Knight/jump.mp3"
        }); 

        
    }

    create(){

        this.bgs = [
            this.add.image(0, 0, "FondoStart").setOrigin(0, 0).setDepth(-1).setScale(2),
            this.add.image(0, 0, "FondoStart").setOrigin(0, 0).setDepth(-1).setScale(2),
        ];
        this.bgs[1].x = - this.bgs[0].displayWidth;
        const keyCodes = Phaser.Input.Keyboard.KeyCodes;
        const eventos = Phaser.Input.Events;

        this.moon = this.add.sprite(270, 850, 'moon', 0).setScale(5).setDepth(5);
        this.layer = this.add.image(770, 250, 'Layer', 0.5).setScale(2.5); 
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

        this.moon.anims.play('moon_idle');
        
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

        this.text1 = this.add.text(500, 1000, '\t\t\t\t\t\t\t\t\t\t[←]CORRER A LA IZQ \t\t\t[→]CORRER A LA DER\n[Q] ATAQUE PRIMARIO \t\t\t[R] SALTO, CARGA, ATAQUE SECUNDARIO', {
            fontFamily: 'Consolas', fontSize: '30px'
        }).setDepth(10);

        this.teclas = this.input.keyboard.addKeys({
            izq: keyCodes.A,
            der: keyCodes.D,
            powQ: keyCodes.Q,
            powR: keyCodes.R,
        });

        this.teclas.izq.on('down', ()=>{
                this.moon.flipX = true;
                this.moon.anims.play('moon_run');

                this.musicA = this.sound.add("move");
                this.musicA.play({
                    volume: 0.75
                });
        });

        this.teclas.izq.on('up', ()=>{

                    this.moon.stop();
                    this.moon.anims.play('moon_idle');
                    this.musicA.stop();
        });

        this.teclas.der.on('down', ()=>{
                    this.moon.flipX = false;
                    this.moon.anims.play('moon_run');
                    this.musicB = this.sound.add("move");
                    this.musicB.play({
                        volume: 0.75
                    });
        });

        this.teclas.der.on('up', ()=>{

                    this.moon.stop()
                    this.moon.anims.play('moon_idle');
                    this.musicB.stop();
        });

        this.teclas.powQ.on('down', ()=>{
                this.moon.play('moon_attack');
                this.musicC = this.sound.add("attack");
                this.musicC.play({
                    volume: 0.75
                });
        });

        this.teclas.powQ.on('up', ()=>{
                this.moon.anims.stop();
                this.moon.play('moon_idle');
                this.musicC.stop(); 
        });

        this.teclas.powR.on('down', ()=>{
                this.moon.y = 750;
                this.moon.play('moon_jump');
                this.musicD = this.sound.add("jump");
                this.musicD.play({
                    volume: 0.75
                });
        });
        this.teclas.powR.on('up', ()=>{
                this.moon.anims.stop();
                this.moon.y = 850;
                this.moon.play('moon_idle');
                this.musicD.stop(); 
        });

    }
    update(time, delta) {
        // this.bgs.forEach((bg) => {
        //     bg.x += this.bgDelta;
        //     if (bg.x >= bg.displayWidth) {
        //         bg.x = - bg.displayWidth + bg.x % bg.displayWidth;
        //     }
        // })

        if (this.teclas.der.isDown) {
            this.moon.x += 2;
            if (this.moon.x >= 1800) {
                this.moon.x = 1800;
            }

            this.bgs.forEach((bg) => {
                bg.x -= this.bgDelta;
                if (bg.x >= bg.displayWidth) {
                    bg.x = - bg.displayWidth + bg.x % bg.displayWidth;
                }
            })
            this.timeline3 = this.tweens.timeline({
                paused: true,
                //duration: 1000,
                totalDuration: 1000,
                loop: 0,
                ease: 'Sine.easeInOut ',
                targets: [this.moon],
                tweens: [
                    {
                        //x: 300,
                        //duration: 3000,
                    },
                    {
                        y: 850,
                        offset: 400,
                        onStart: (tween, obj, target) => {
                            //obj[0].setTint(0x4A148C,0xEA80FC,0x37474F,0x000099);
                            //obj[0].setTint(0x37474F,0x000099,0xff0000,0x000000);
                            obj[0].setScale(4.5);
                            console.log('Se completa el tween');
                        }
                    },
                    {
                        //x: 100
                        y: 850,
                    },
                    {
                        //x:  this.moon.x,
                        y: 830,
                        //ease: 'Elastic',
                        onComplete: (tween, obj, target) => {
                            //obj[0].clearTint();
                            obj[0].setScale(5);
                            obj[0].y = 850;
                            console.log('Se completa el tween');
                        }
                    }
                ]
            });
            this.timeline3.play();


        }

        if (this.teclas.izq.isDown) {

            this.bgs.forEach((bg) => {
                bg.x += this.bgDelta;
                if (bg.x >= bg.displayWidth) {
                    bg.x = - bg.displayWidth + bg.x % bg.displayWidth;
                }
            })
            this.moon.x -= 2;
            if (this.moon.x <= 120) {
                this.moon.x = 120;
            }
            this.timeline4 = this.tweens.timeline({
                paused: true,
                //duration: 1000,
                totalDuration: 1000,
                loop: 0,
                ease: 'Sine.easeInOut ',
                targets: [this.moon],
                tweens: [
                    {
                        //x: 300,
                        //duration: 3000,
                    },
                    {
                        y: 850,
                        offset: 400,
                        onStart: (tween, obj, target) => {
                            //obj[0].setTint(0x4A148C,0xEA80FC,0x37474F,0x000099);
                            //obj[0].setTint(0x37474F,0x000099,0xff0000,0x000000);
                            obj[0].setScale(4.5);
                            console.log('Se completa el tween');
                        }
                    },
                    {
                        //x: 100
                        y: 850,
                    },
                    {
                        //x:  this.moon.x,
                        y: 830,
                        //ease: 'Elastic',
                        onComplete: (tween, obj, target) => {
                            //obj[0].clearTint();
                            obj[0].setScale(5);
                            obj[0].y = 850;
                            console.log('Se completa el tween');
                        }
                    }
                ]
            });
            this.timeline4.play();

        }
        if (this.teclas.powR.isDown) {

            this.timeline = this.tweens.timeline({
                paused: true,
                //duration: 1000,
                totalDuration: 1000,
                loop: 0,
                ease: 'Bounce',
                targets: [this.moon],
                tweens: [
                    {
                        //x: 300,
                        //duration: 3000,
                    },
                    {
                        y: 850,
                        //ease: 'Bounce',
                        offset: 400,
                        onStart: (tween, obj, target) => {
                            //obj[0].setTint(0x4A148C,0xEA80FC,0x37474F,0x000099);
                            obj[0].setAlpha(0.2);
                            console.log('Se completa el tween');
                        }
                    },
                    {
                        //x: 100
                    },
                    {
                        y: 150,
                        onComplete: (tween, obj, target) => {
                            obj[0].setAlpha(1);
                            obj[0].y = 780;
                            console.log('Se completa el tween');
                        }
                    }
                ]
            });
            this.timeline.play();
        }

        if (this.teclas.powQ.isDown) {

            this.timeline2 = this.tweens.timeline({
                paused: true,
                //duration: 1000,
                totalDuration: 1000,
                loop: 0,
                ease: 'Elastic',
                targets: [this.moon],
                tweens: [
                    {
                        //x: 300,
                        //duration: 3000,
                    },
                    {
                        x: this.moon.x - 200,
                        offset: 400,
                        onStart: (tween, obj, target) => {
                            //obj[0].setTint(0x4A148C,0xEA80FC,0x37474F,0x000099);
                            obj[0].setTint(0x37474F, 0x000099, 0x000000, 0xff0000);
                            //obj[0].setAlpha(0.2);
                            console.log('Se completa el tween');
                        }
                    },
                    {
                        //x: 100

                    },
                    {
                        x: this.moon.x + 80,
                        //ease: 'Elastic',
                        onComplete: (tween, obj, target) => {
                            obj[0].clearTint();
                            //obj[0].x=180;
                            obj[0].x = this.moon.x - 200;
                            console.log('Se completa el tween');
                        }
                    }
                ]
            });
            this.timeline2.play();
        }
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

export default Level;