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
            this.load.image("yoshi", "yoshi.png"); //alias y archivo
            this.load.image("yoshi_fondo"); //Sin nombre de archivo, se toma por
            //defecto el nombre del alias
            
        }
        // preload() {
        //     this.load.path = "./assets/";
        //     this.load.image(["yoshi_fondo", "yoshi"]); //Arreglo de imágenes
        //     }
        create() {
            this.yoshi = this.add.image(130, 130, "yoshi"); //atributo
            this.yoshif = this.add.image(100, 100, "yoshi_fondo");//atributo
            this.yoshi.setOrigin(0.5,1);
            
            this.yoshif.setOrigin(0,1);

            this.yoshi.flipX = true; //Voltear imagen en horizontalmente.
            this.yoshi.flopY = true; //Voltear imagen en verticalmente.
            this.yoshi.setVisible(true); //Mostrar u ocultar la imagen.
            this.yoshi.setScale(3, 2); //Escalar la imagen.
            this.yoshi.setAlpha(0.8); //Transparencia y opacidad [0,1]
            this.yoshi.setTint(0x008000); //Entintar de un color la imagen.
            this.yoshi.x = 50; //Posición en X en el canvas
            this.yoshi.y = 100; //Posición en Y en el canvas
            this.yoshi.angle = 50; //Giro en el eje Z
            this.yoshi.rotation = 70; //Giro en el eje Z
            this.yoshi.setDepth(2); //Número de capa (la primera es 0)
            console.log(this.yoshi);
            console.log(this.yoshif);
            this.yoshif.x = 200;
            this.yoshi.y = 250;
        }
        
        update(time, delta) {
            
            if(this.yoshif.x == this.maximo)
            {
                cond = true;
            }
            if(this.yoshif.x == 0)
            {
                cond = false;
            }
            if(cond == false){
                this.yoshif.x += i;
                this.yoshi.x += i;
                this.yoshif.flipX = false;
                this.yoshi.flipX = false;
            }
            if(cond == true)
            {
                this.yoshif.x -= i;
                this.yoshi.x -= i;
                this.yoshif.flipX = true;
                this.yoshi.flipX = true;
            }
                //setInteval(this.yoshif.x<500) {, 2000);
                //setTimeout(() => {} , 500);
                // setTimeout(() => { this.yoshif.x = 200+i+10; } , 1000);
            
        }

    }
    
export default Bootloader;