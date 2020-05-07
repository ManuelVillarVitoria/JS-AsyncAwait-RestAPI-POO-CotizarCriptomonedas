class API {
    constructor(apikey){
        this.apikey = apikey;
    }

    //Obtener todas las monedas
    async obtenerMonedasAPI() {
        const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`;

        //Fetch a la API
        const urlObtenerMonedas = await fetch(url);

        //Respuesta en JSON
        const monedas = await urlObtenerMonedas.json();
        //console.log(monedas);
        return{
            monedas
        }
    }

    async obtenerValores(moneda,criptomoneda) {
        //Cogemos la url que sale en el GET de la API:
        //https://min-api.cryptocompare.com/documentation?key=Price&cat=multipleSymbolsFullPriceEndpoint&api_key=14d1a251cb70dc7d9ae666abf53c55f623b50f291735384e588186e04a1ab562
        //en el apartado de Documentation -> $Price -> Multiple Symbols Full Data

        //const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD,EUR`;

        //Eliminamos los parámetros que salen de criptomoneda y moneda por los que pasamos por el método
        // y añadimos con el símbolo de ampersand el 'api_key' para la autentificación del usuario.
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}&api_key=$
        {this.apikey}`;

        //consultar en Rest API
        const urlConvertir = await fetch(url);

        const resultado = await urlConvertir.json();

        return {
            resultado
        }
    }
}