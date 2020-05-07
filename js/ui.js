class Interfaz {

    constructor() {
        this.init();
    }

    init() {
        this.construirSelect();
    }

    construirSelect() {
        cotizador.obtenerMonedasAPI()
            .then(monedas => {
                console.log(monedas);

                //console.log(monedas.monedas.Data.forEach(moneda => {
                    //console.log(moneda)// No podemos usar el método 'forEach' porque no tenemos un array
                                        //sino objetos anidados
                                    
                //console.log(Object.entries(monedas.monedas.Data));// Tomamos los objetos y los convertimos 
                                                                   //en arrays con 'Object.entries'

                // Recorremos los arrays que obtenemos al transformar el objeto anidado con 'Object.entries'
                for(const [key,value] of Object.entries(monedas.monedas.Data)) {
                    console.log(key);//Obtenemos el nombre de las llaves de los arrays
                    console.log(value);//Obtenemos el valorde los arrays
                }
            })      
    }

    mostrarMensaje(mensaje, clases) {
        const div = document.createElement('div');
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));
        //console.log(div);

        //Seleccionar mensajes
        const divMensaje = document.querySelector('.mensajes');
        divMensaje.appendChild(div);

        //Mostrar contenido
        setTimeout(() => {
            document.querySelector('.mensajes div').remove();
        },3000);
    }
}