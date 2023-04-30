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
        // WITCH IDLE                          
        this.load.atlas('witch_idle', 'witch/witch_idle/witch_idle.png', //IMG con los recortes unidos y hecho el json
        'witch/witch_idle/witch_idle_atlas.json');
        this.load.animation('witch_idle', 'witch/witch_idle_anim/witch_idle_anim.json');  
        //WITCH ATTACK
        this.load.atlas('witch_attack', 'witch/witch_attack/witch_attack.png', //IMG con los recortes unidos y hecho el json
        'witch/witch_attack/witch_attack_atlas.json');
        this.load.animation('witch_attack', 'witch/witch_attack_anim/witch_attack_anim.json');  
        this.load.atlas('witch_charge', 'witch/witch_charge/witch_charge.png', //IMG con los recortes unidos y hecho el json
        'witch/witch_charge/witch_charge_atlas.json');
        this.load.animation('witch_charge', 'witch/witch_charge_anim/witch_charge_anim.json');  4
        this.load.atlas('witch_run', 'witch/witch_run/witch_run.png', //IMG con los recortes unidos y hecho el json
        'witch/witch_run/witch_run_atlas.json');
        this.load.animation('witch_run', 'witch/witch_run_anim/witch_run_anim.json');  
        //El atributo key del json debe de ser el mismo que el primer argumento de .animation()      
    }

    create() {
        this.witch = this.add.sprite(100, 100, 'witch_idle',0).setScale(4);
        this.witch.anims.play('witch_idle'); //El argumento debe de ser el mismo nombre de la animacion 
        //this.witch = this.add.sprite(400, 100, 'witch_attack',0).setScale(4);
        //this.witch.anims.play('witch_attack'); //El argumento debe de ser el mismo nombre de la animacion 
        //this.witch = this.add.sprite(100, 250, 'witch_charge',0).setScale(4);
        //this.witch.anims.play('witch_charge'); //El argumento debe de ser el mismo nombre de la animacion 
        //this.witch = this.add.sprite(280, 270, 'witch_run',0).setScale(4);
        //this.witch.anims.play('witch_run'); //El argumento debe de ser el mismo nombre de la animacion 
        // add animations to sprite
        // this.witch.anims.add('walk_down',  [0,1,2,3]);
        // this.witch.anims.add('walk_left',  [4,5,6,7]);
        // this.witch.anims.add('walk_right', [8,9,10,11]);
        // this.witch.anims.add('walk_up',    [12,13,14,15]);

        // // when LEFT cursor key presssed
        // if (cursors.left.isDown) {
        //     playersprite.animations.play('walk_left', 10, true);
                
        //         //this.tomato.anims.play('tomato_walk');
        //     }

        const keyCodes = Phaser.Input.Keyboard.KeyCodes;
        console.log(keyCodes);
        const eventos = Phaser.Input.Events;
        console.log(eventos);
        this.teclas = this.input.keyboard.addKeys({
            izq: keyCodes.A,
            der: keyCodes.D,
            sup: keyCodes.W,
            powQ: keyCodes.Q,
            powR: keyCodes.R,
        });
        this.teclas.izq.on('down', ()=>{
            console.log('MOVER personaje izq');
            this.witch.flipX = true;
            this.witch.play('witch_run');
        });
        
        this.teclas.der.on('down', ()=>{
            console.log('MOVER personaje der');
            this.witch.flipX = false;
            this.witch.play('witch_run');
        });

        this.teclas.powQ.on('down', ()=>{
            this.witch.play('witch_attack');
        });

        this.teclas.powR.on('down', ()=>{
            this.witch.play('witch_charge');
        });

    }

    update(time, delta) {
        if(this.teclas.der.isDown){
            console.log('derecha');
            this.witch.x += 3;
        }
        if(this.teclas.izq.isDown){
            console.log('izq');
            this.witch.x -= 3;
        }

        // if(Phaser.Input.Keyboard.JustDown(this.teclas.powQ)){
        //     this.witch.play("witch_attack");
        // }
        if(Phaser.Input.Keyboard.JustUp(this.teclas.izq)){
            this.witch.play("witch_idle");
        }
        if(Phaser.Input.Keyboard.JustUp(this.teclas.der)){
            this.witch.play("witch_idle");
        }
        if(Phaser.Input.Keyboard.JustUp(this.teclas.powQ)){
            this.witch.play("witch_idle");
        }
        if(Phaser.Input.Keyboard.JustUp(this.teclas.powR)){
            this.witch.play("witch_idle");
        }
    }
}

export default Bootloader;