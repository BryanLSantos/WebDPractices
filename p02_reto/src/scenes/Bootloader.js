var i = 10;
var cond = false;
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
        // preload() {
        // console.log("Soy preload");
        // }
        // create() {
        // console.log("Soy create");
        // }
        // update(time, delta) {
        // // ESTA FUNCION CREA UN CICLO INFINITO
        // }
        preload() {
            this.load.path = "./assets/"; //Ruta de todas las imágenes
            this.load.image("redtrainer", "redtrainer.png"); //alias y archivo
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
            this.load.image("kirby","kirby.png");
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
            this.redtrainer.setScale(0.10,0.10);
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
            this.kirby.setScale(0.20,0.20);

            // this.roca5 = this.add.image(450,270,"roca5");
            // this.roca5.setScale(0.1,0.1);
            // this.yoshi.flipX = true; //Voltear imagen en horizontalmente.
            // this.yoshi.flopY = true; //Voltear imagen en verticalmente.
            // this.yoshi.setVisible(true); //Mostrar u ocultar la imagen.
            // this.yoshi.setScale(3, 2); //Escalar la imagen.
            // this.yoshi.setAlpha(0.8); //Transparencia y opacidad [0,1]
            // this.yoshi.setTint(0x008000); //Entintar de un color la imagen.
            // this.yoshi.x = 50; //Posición en X en el canvas
            // this.yoshi.y = 100; //Posición en Y en el canvas
            // this.yoshi.angle = 50; //Giro en el eje Z
            // this.yoshi.rotation = 70; //Giro en el eje Z
            // this.yoshi.setDepth(2); //Número de capa (la primera es 0)
            // console.log(this.yoshi);
            // console.log(this.yoshif);
            // this.yoshif.x = 200;
            // this.yoshi.y = 250;
        }

        update(time, delta) {
            
            setTimeout(() => { this.kirby.setTint(0x008000) } , 1000);
            setTimeout(() => { this.kirby.setTint(0xe62e1b) } , 1000);
            if(this.redtrainer.x==300)
            {
                cond = true;
            }
            if(this.redtrainer.x==400)
            {
                cond = false;
            }
            if(cond == true)
            {
                setTimeout(() => { this.redtrainer.x += 1 }, 1000 );
                this.redtrainer.setScale(1,2);
                // setTimeout(() => { this.redtrainer.y += 10 }, 500 );
                // setTimeout(() => { this.redtrainer.y -= 10 }, 500 );
            }
            if(cond == false)
            {
                setTimeout(() => { this.redtrainer.x -= 1; }, 1000 );
                this.redtrainer.angle += 50;
                
                // setTimeout(() => { this.redtrainer.y += 30; }, 1000 );
                // setTimeout(() => { this.redtrainer.y -= 30; }, 1000 );
            }
        }   
    }
    
export default Bootloader;