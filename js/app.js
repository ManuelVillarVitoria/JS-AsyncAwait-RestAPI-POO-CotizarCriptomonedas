const ui = new Interfaz(); //Instanciando la clase

//Leer el formulario
const formulario = document.querySelector('#formulario');

//Event Listener
formulario.addEventListener('submit',(e) => {
    e.preventDefault();
    //console.log('Enviando....');

    //Leer la moneda seleccionada
    const monedaSelect = document.querySelector('#moneda');
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;

    //Leer la criptomoneda seleccionada
    const criptoMonedaSelect = document.querySelector('#criptomoneda');
    const criptoMonedaSeleccionada =  criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;

    //console.log(monedaSeleccionada);
    //console.log(criptoMonedaSeleccionada);

    //Comprobar que ambos campos tengan algo seleccionado
    if(monedaSeleccionada === '' || criptoMonedaSeleccionada === ''){
        //console.log('selecciona algo');
        //Arrojar una alerta de error mediante el método mostrar mensaje de la clase Interfaz
        ui.mostrarMensaje('Ambos campos son Obligatorios','alert bg-danger text-center');
    } else {
        //Todo bien, consultar la API
    }
})
