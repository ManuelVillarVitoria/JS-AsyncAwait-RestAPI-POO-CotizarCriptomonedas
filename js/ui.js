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
                //console.log(monedas);

                //console.log(monedas.monedas.Data.forEach(moneda => {
                    //console.log(moneda)// No podemos usar el método 'forEach' porque no tenemos un array
                                        //sino objetos anidados
                                    
                //console.log(Object.entries(monedas.monedas.Data));// Tomamos los objetos y los convertimos 
                                                                   //en arrays con 'Object.entries'

                //crear un selct de opciones                                               
                const select = document.querySelector('#criptomoneda');

                // Iteramos los arrays que obtenemos de la API, al transformar el objeto anidado con 'Object.entries'
                for(const [key,value] of Object.entries(monedas.monedas.Data)) {
                    //console.log(key);//Obtenemos el nombre de las llaves de los arrays
                    //console.log(value);//Obtenemos el valorde los arrays

                    //Añadir el Symbol y el Nombre como opciones
                    const opcion = document.createElement('option');
                    opcion.value = value.Symbol;
                    opcion.appendChild(document.createTextNode(value.CoinName));
                    select.appendChild(opcion);
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

    //Imprime el resultado de la cotización
    mostrarResultado(resultado,moneda,crypto) {
        //En caso de un resultado anterior,ocultarlo
        const resultadoAnterior =  document.querySelector('#resultado > div');

        if (resultadoAnterior) {
            resultadoAnterior.remove();
        }

        const datosMoneda = resultado[crypto][moneda];
        console.log(datosMoneda);

        //recortar dígitos de precio
        let precio = datosMoneda.PRICE.toFixed(2),
            porcentaje = datosMoneda.CHANGEPCTDAY.toFixed(2),
            actualizado = new Date(datosMoneda.LASTUPDATE * 1000).toLocaleDateString('es-ES');

        //Costruir el template
        let templateHTML = `
            <div class="card bg-warning">
                <div class="card-body text-light">
                    <h2 class="card-title"> Resultado: </h2>
                    <p>El precio de ${datosMoneda.FROMSYMBOL} a moneda ${datosMoneda.TOSYMBOL} es de: $ ${precio}</p>
                    <p>Variación último día: % ${porcentaje}</p>
                    <p>Última actualización: ${actualizado}</p>
                </div>
            </div>
        `;

        this.mostrarOcultarSpinner('block');

         setTimeout(() => {
            //Insertar el resultado
            document.querySelector('#resultado').innerHTML = templateHTML;
            //Ocultar el spinner
            this.mostrarOcultarSpinner('none');
         },3000);
    }     

    //Mostrar spinner de carga al enviar la cotización
    mostrarOcultarSpinner(vista) {
        const spinner = document.querySelector('.contenido-spinner');
        spinner.style.display = vista;
    }

}

    