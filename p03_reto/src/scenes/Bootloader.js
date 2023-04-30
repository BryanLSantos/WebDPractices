var i = 10;
var cond = false;
var col = false;


class Bootloader extends Phaser.Scene{
    constructor(){
    super({
    key: "Bootloader" //Nombre interno o clave de referencia
    });
    }
    init() {
        console.log("Soy init");
        this.maximo = 640;
        }

        preload() {
            this.load.path = "./assets/"; //Ruta de todas las imágenes
            this.load.image("redtrainer", "redtrainerRedim.png"); //alias y archivo
            //this.load.image("tree", "tree2.png"); //Sin nombre de archivo, se toma por
            //defecto el nombre del alias
            this.load.image("fondo", "fondo_dia.png");
            this.load.image("casa", "casa.png");
            this.load.image("arbol","tree3.png");
            this.load.image("roca","rock2.png");
            this.load.image("roca2","rock2.png");
            this.load.image("roca3","rock2.png");
            this.load.image("roca4","rock2.png");
            this.load.image("roca5","rock.png");
            this.load.image("pikachu","pikachu.png");
            this.load.image("kirby","kirbyRedim.png");
        }
        // preload() {
        //     this.load.path = "./assets/";
        //     this.load.image(["yoshi_fondo", "yoshi"]); //Arreglo de imágenes
        //     }
        create() {
            // this.yoshi = this.add.image(130, 130, "yoshi"); //atributo
            // this.yoshif = this.add.image(100, 100, "yoshi_fondo");//atributo
            // this.yoshi.setOrigin(0.5,1);
            this.fondo = this.add.image(0,0,"fondo");
            this.fondo.setScale(1,0.8);
            //this.fondo.setScale(1,1.25); SIRVE CUANDO AGREGE EL FONDO DE NOCHE
            //this.tree = this.add.image(100, 100, "tree");

            //      RED TRAINER
            this.redtrainer = this.add.image(50,50,"redtrainer");
            //this.redtrainer.setScale(0.10,0.10);
            this.redtrainer.x = 550;
            this.redtrainer.y = 265;
            this.redtrainer.setDepth(2);

            //      CASA
            this.casa = this.add.image(110,215,"casa");
            this.casa.setScale(0.3,0.3);

            //      ARBOL
            this.arbol = this.add.image(280,230,"arbol");
            this.arbol.setScale(0.1,0.1);

            //      ROCAS
            this.roca = this.add.image(230,280,"roca");
            this.roca.setScale(0.03,0.03);
            this.roca2 = this.add.image(20,340,"roca2");
            this.roca2.setScale(0.03,0.03);
            this.roca3 = this.add.image(360,280,"roca3");
            this.roca3.setScale(0.03,0.03);
            this.roca4 = this.add.image(615,340,"roca4");
            this.roca4.setScale(0.03,0.03);

            this.pikachu = this.add.image(390,200,"pikachu");
            this.pikachu.setScale(0.05,0.05);

            this.kirby = this.add.image(190,270,"kirby");
            //Prueba
            const keyCodes = Phaser.Input.Keyboard.KeyCodes;
            // console.log(keyCodes);
            // this.teclaA = this.input.keyboard.addKey(keyCodes.A);
            
            // this.teclaA.on( 'down', () => {
            //     console.log('Has presionado la tecla A');
            //     this.kirby.setScale(0.40,0.40);
            // });
            // this.teclaA.on( 'up', () => {
            //     console.log('Has soltado la tecla A');
            //     this.kirby.setScale(0.20,0.20);
            // });
            
            // this.teclas = this.input.keyboard.addKeys({
            //     arriba: keyCodes.UP,
            //     abajo: keyCodes.DOWN,
            //     s: keyCodes.S
            //     });
            
            // this.teclas = this.input.keyboard.addKeys('up, down, s');

            this.cursor = this.input.keyboard.createCursorKeys();
            console.log(this.cursor); 
            
            this.teclas = this.input.keyboard.addKeys('w, s, d, a, shift');
            // Para ver el contenido
            // this.cursor.left.on('down', () => {
            //     console.log('Has presionado la tecla IZQUIERDA');
            // });
            //Creacion de combo para solo 1 una vez
            // this.combo = this.input.keyboard.createCombo([
            //     keyCodes.DOWN, keyCodes.RIGHT
            // ]);

            //Creacion de combo para varias veces
           
            this.combo = this.input.keyboard.createCombo(
                [keyCodes.DOWN, keyCodes.RIGHT],
                {resetOnMatch: true}
            );

            this.combo2 = this.input.keyboard.createCombo(
                [keyCodes.A, keyCodes.S],
                {resetOnMatch: true}
            );
            
            this.input.keyboard.on('keycombomatch', () => {
                this.comb1 = true;
                setTimeout(() => {
                    this.comb1 = false;
                    this.kirby.setTint('0xffffff');
                    this.combo.matched = false;
                    this.combo.resetOnMatch = true;
                    this.combo.resetOnMatch = false;
                }, 4500);
            });

            this.input.keyboard.on('keycombomatch', () => {
                this.comb2 = true;
                setTimeout(() => {
                    this.comb2 = false;
                    this.redtrainer.setTint('0xffffff');
                    this.combo2.matched = false;
                    this.combo2.resetOnMatch = true;
                    this.combo2.resetOnMatch = false;
                }, 4500);
            });

            this.text1 = this.add.text(40, 335, 'Combo Personaje1: [↓][→] ', {
                fontFamily: 'Consolas', fontSize: '14px'});
            this.text2 = this.add.text(350, 335, 'Combo Personaje2: [A][S]', {
                fontFamily: 'Consolas', fontSize: '14px'});

        }   

        update(time, delta) {

            let tiempo = Math.round(time);

            if(this.combo.matched == true)
            {
                if(this.comb1 == true && tiempo%3 == 0 )
                {
                    console.log("okok1 ");
                    this.kirby.setTint("0xff0000");
                }
                else
                {
                    if(this.comb1 == true && tiempo%3 != 0)
                    {
                        console.log("okok2 ");
                        this.kirby.setTint("0xffffff");
                    }
                }
            }

            if(this.combo2.matched == true)
            {
                if(this.comb2 == true && tiempo%3 == 0 )
                {
                    console.log("okok1 ");
                    this.redtrainer.setTint("0xff0000");
                }
                else
                {
                    if(this.comb2 == true && tiempo%3 != 0)
                    {
                        console.log("okok2 ");
                        this.redtrainer.setTint("0xffffff");
                    }
                }
            }

            if( this.cursor.space.isDown){
                // se detecta exactamente la ' '
                console.log('Se ha presionado la tecla espacio');
                this.kirby.setAlpha(0.8);
            };

            if( this.cursor.space.isUp){
                // se detecta exactamente la ' '
                //console.log('Se ha soltado la tecla espacio');
                this.kirby.setAlpha(1.0);
            };

            //var mov = true;
            if( this.cursor.up.isDown){
                // se detecta exactamente la 'up'
                var aux = this.kirby.y - 9;
                if((Math.sqrt(Math.pow(this.kirby.x-this.redtrainer.x,2)+(Math.pow(aux-this.redtrainer.y,2))))>(61)){
                // if(mov == true){
                    console.log('Se ha presionado la tecla arriba');
                    this.kirby.y -= 3;
                    this.kirby.y -= 3;
                    this.kirby.y -= 3;
                //     mov = false;
                // }
                // if(mov == false){
                //     setTimeout(() => { 
                //         console.log("salto ahora baja");
                //         this.kirby.y += 3; } , 700 );
                //     setTimeout(() => { 
                //         console.log("salto ahora baja");
                //         this.kirby.y += 3; } , 700 );
                //     setTimeout(() => { 
                //         console.log("salto ahora baja");
                //         this.kirby.y += 3; } , 700 );
                //     mov = true; 
                // }
            }
            };
            if( this.cursor.down.isDown){
                // se detecta exactamente la 'up'
                var aux = this.kirby.y + 9;
                if((Math.sqrt(Math.pow(this.kirby.x-this.redtrainer.x,2)+(Math.pow(aux-this.redtrainer.y,2))))>(61)){
                // if(mov == true){
                    console.log('Se ha presionado la tecla abajo');
                    this.kirby.y += 3;
                    this.kirby.y += 3;
                    this.kirby.y += 3;
                //     mov = false;
                // }
                // if(mov == false){
                //     setTimeout(() => { 
                //         console.log("salto ahora baja");
                //         this.kirby.y += 3; } , 700 );
                //     setTimeout(() => { 
                //         console.log("salto ahora baja");
                //         this.kirby.y += 3; } , 700 );
                //     setTimeout(() => { 
                //         console.log("salto ahora baja");
                //         this.kirby.y += 3; } , 700 );
                //     mov = true; 
                // }
            }
            };
            var aux = this.kirby.x - 9;
            if( this.cursor.left.isDown){
                if((Math.sqrt(Math.pow(aux-this.redtrainer.x,2)+(Math.pow(this.kirby.y-this.redtrainer.y,2))))>(61)){
                // se detecta exactamente la 'up'
                    console.log('Se ha presionado la tecla derecha');
                    this.kirby.x -= 3;
                    this.kirby.x -= 3;
                    this.kirby.x -= 3;
                }
            };
            var aux = this.kirby.x + 9;
            if( this.cursor.right.isDown){
                if((Math.sqrt(Math.pow(aux-this.redtrainer.x,2)+(Math.pow(this.kirby.y-this.redtrainer.y,2))))>(61)){
                // se detecta exactamente la 'up'
                    console.log('Se ha presionado la tecla derecha');
                    this.kirby.x += 3;
                    this.kirby.x += 3;
                    this.kirby.x += 3;
                }
            };

            // var mov2 = true;
            var aux = this.redtrainer.y - 9;
            if( this.teclas.w.isDown){
                console.log('Has presionado la tecla w');
                if((Math.sqrt(Math.pow(this.kirby.x-this.redtrainer.x,2)+(Math.pow(this.kirby.y-aux,2))))>(61)){
                    // if(mov2 == true){
                        console.log('Se ha presionado la tecla arriba');
                        this.redtrainer.y -= 3;
                        this.redtrainer.y -= 3;
                        this.redtrainer.y -= 3;
                        //mov2 = false;
                    //}
                    // if(mov2 == false){
                    //     setTimeout(() => { 
                    //         console.log("salto ahora baja");
                    //         this.redtrainer.y += 3; } , 700 );
                    //     setTimeout(() => { 
                    //         console.log("salto ahora baja");
                    //         this.redtrainer.y += 3; } , 700 );
                    //     setTimeout(() => { 
                    //         console.log("salto ahora baja");
                    //         this.redtrainer.y += 3; } , 700 );
                    //     mov2 = true; 
                    // }
                }
            }
            var aux = this.redtrainer.y + 9;
            if( this.teclas.s.isDown){
                console.log('Has presionado la tecla s');
                
                if((Math.sqrt(Math.pow(this.kirby.x-this.redtrainer.x,2)+(Math.pow(this.kirby.y-aux,2))))>(61)){
                        console.log('Se ha presionado la tecla arriba');
                        this.redtrainer.y += 3;
                        this.redtrainer.y += 3;
                        this.redtrainer.y += 3;
                }
            }
            var aux = this.redtrainer.x - 9;
            if( this.teclas.a.isDown){
               
                if((Math.sqrt(Math.pow(this.kirby.x-aux,2)+(Math.pow(this.kirby.y-this.redtrainer.y,2))))>(61)){
                // se detecta exactamente la 'd'
                    console.log('Se ha presionado la tecla izquierda');
                    this.redtrainer.x -= 3;
                    this.redtrainer.x -= 3;
                    this.redtrainer.x -= 3;
                }
            };
            var aux = this.redtrainer.x + 9;
            if( this.teclas.d.isDown){
                // se detecta exactamente la 'izquierda'
                    console.log('Se ha presionado la tecla derecha');
                    if((Math.sqrt(Math.pow(this.kirby.x-aux,2)+(Math.pow(this.kirby.y-this.redtrainer.y,2))))>(61)){
                        this.redtrainer.x += 3;
                        this.redtrainer.x += 3;
                        this.redtrainer.x += 3;
                }
            };

            if( this.cursor.shift.isDown){
                // se detecta exactamente la ' '
                console.log('Se ha presionado la tecla shift');
                this.redtrainer.setAlpha(0.8);
            };

            if( this.cursor.shift.isUp){
                // se detecta exactamente la ' '
                //console.log('Se ha soltado la tecla shift');
                this.redtrainer.setAlpha(1.0);
            };

        }   
    } 
    
export default Bootloader;