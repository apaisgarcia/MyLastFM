/**
 * @author - Alia Pais
 *
 * @params  myApi_key - es la clave
 * @params myshared_secret - clave compartida
 * @params url - la url
 * @params captured - token
 * @params artista -
 * @last_url - url con la que debe iniciar la consulta
 *
 * @type {string}
 *
 */
var myAPI_key="c45b29231e8dc2ddc58480caba8cf4da";
var myshared_secret="16d08d69864296d96b762af568231392";
var url = window.location.href; // or window.location.href for current url
var captured = /token=([^&]+)/.exec(url)[1]; // Value is in [1] ('384' in our case)
var result = captured ? captured : 'myDefaultValue';
console.log(captured);
var artista ;
var nombreGlobal;
var nombreReal;
var last_url="http://ws.audioscrobbler.com/2.0/?";
var usuarioWeb= new FmClass();


/**
 *  * function window.onload - para que se carguela función cuando comencemos la página
 *
 *  @data - guarda datos del parametro de la consulta
 *
 */
window.onload = function() {
  //  var apisigGetSession;
   // console.log("token sin codificar ",captured);
    var data = {
        'token': captured,
        'api_key': "c45b29231e8dc2ddc58480caba8cf4da",
        'method': 'auth.getSession'
    };
  //  console.log("token codificado",Utf8.encode(captured) );
    data["api_sig"] = calculateApiSig( data);

    data["format"] = "json";

  //  console.log("DATa", data);


     primerallamada(data);



    //console.log("Nombre Usuario antes getinfo" ,nombreGlobal);


};

/**
 * function segundallamada(nomUsuari) - para calcualar el api_sig
 *
 * @param nomUsuari
 * @data2 - para obtener el nombre del Usuario conectado
 * $ajax - datos de la consulta (url necesaria)
 *
 *
 * function success(res) - si la respuesta tiene éxito
 * @params  foto - para descargar la foto
 * @nombreReal- Nombre del usuario (el que tiene en lastFM)
 *
 * function error (xhr,status, error) - en el caso de que no se pueda conectar
 *
 */
function segundallamada(nomUsuari){
    console.log( "al principo de segunda llama da nomUsuari", nomUsuari);
    var data2 = {
        'user': nomUsuari,
        'api_key': "c45b29231e8dc2ddc58480caba8cf4da"
    };
    data2["method"] = "user.getInfo";
    data2["format"] = "json";

    $.ajax({
        user: "GET",
        url: last_url,
        data: data2,
        dataType: 'json',
        //"success" gets called when the returned code is a "200" (successfull request). "error" gets called whenever another code is returned (e.g. 404, 500).
        success: function (res) {

            //  console.log("Resposta: Name " + res.user.realname);// Should return session key.
            //  console.log("Resposta: image " + res.user.url);
            //    console.log("Resposta: image " + res.user.image[2]['#text']);
          //  nombreGlobal = res.user.name;
           // console.log("Mi segundo nombreUser", nombreGlobal);
            $("#nombreReal").text(res.user.realname);
            $("#foto").attr("src",res.user.image[1]['#text']);

            console.log("Nombre Usuario segunda llamada" ,nomUsuari);

            localStorage.setItem("login","loginsi");

            //trackLoveXMlHttpRequestSendQuery(); --funciona (es para llamar al TrackLove)
        },
        error: function (xhr, status, error) {
            var errorMessage = xhr.status + ': ' + xhr.statusText
            console.log('Error - ' + errorMessage);
        }
    });

}

/**
 * function primerallama (data)- para realizar la consulta
 * @param data - parametros para la consulta
 * @returns {*} - devuelve los datos
 *
 * function success(res) - si se devuelve con éxito la function primerallamada(data)
 * @params #nombreUser - nombre usuario
 *
 * @params mySessionKey - guarda el sesion Key
 * @params mySessionName -  guarda el sesion Name
 */
function primerallamada(data){
    let rer;
    $.ajax({
        type: "GET",
        url: last_url,
        data:data,
        dataType: 'json',
        //"success" gets called when the returned code is a "200" (successfull request). "error" gets called whenever another code is returned (e.g. 404, 500).
        success: function(res){

            console.log("Resposta: Name " + res.session.name);// Should return session key.
            console.log("Resposta: Key " + res.session.key);
            rer = res.session.name;
        //    resrKey=res.session.key;
            // console.log("Mi primer nombreUser", nombreGlobal);
             $("#nombreUser").text(res.session.name);
            sessionStorage.setItem("mySessionKey", res.session.key);
            sessionStorage.setItem("mySessionName", res.session.name);

            segundallamada(res.session.name);
           // trackLoveXMlHttpRequestSendQuery(); //llamo al trackLove
        },
        error : function(xhr, status, error){
            var errorMessage = xhr.status + ': ' + xhr.statusText
            console.log('Error - ' + errorMessage);
        }
    });

    return rer;
}
/**
 * function calculateApiSig (params)- calcula el api_sig , añadiendo todos los datos y ordenándolos por orden alfabético
 * @params params - paremetro que le pasamos
 * utilizamos Utf8 - para no tener espacios y que los caracteres sean validos
 * ulitizamos Md5
 * @returns{*} - Devuelve el api_sig ordenado para utilizar en la consulta
 *
 * */

function calculateApiSig( params) {

    //Crec que només necessitem apikey, token i secret i no necessitem params, els podem treure de sessionStorage
    //Calcula l'apiSig a partir dels valors d'abans...
   var stringActual = "";
   var arrayKeysParams = [];
  // var so = {};
  //  so['api_key'] = params['api_key'];
 //   so['token'] = params['token'];
 //   so['method'] = metodo;

    Object.keys(params).forEach(function (key) {
        arrayKeysParams.push(key); // Get list of object keys
    });
    arrayKeysParams.sort(); // Alphabetise it

    arrayKeysParams.forEach(function (key) {
        stringActual = stringActual + key + params[key]; // build string
    });

    console.log("Mi primer chorizo:" , stringActual);

    stringActual = stringActual + myshared_secret;
    console.log("Mi primer chorizo con shared:" , stringActual);
    //stringActual = Utf8.encode(stringActual);
    console.log("Mi primer chorizo con shared limpio :" , stringActual);

  //  var hashed_sec = md5(stringActual); // "2063c1608d6e0baf80249c42e2be5804"
    var hashed_sec = md5(unescape(encodeURIComponent(stringActual)));
    console.log("La apiSig es: " + hashed_sec);

    return hashed_sec; // Returns signed POSTable objec */

}

/**
 * function artistaInfo() - Nos da la información del artista - es este caso el nombre del grupo
 * $ajax - para guardar los datos
 * @last_url - url necesaria para dar comienzo a la consulta
 *
 * function success(res) - para ver si la consulta tiene éxito
 * @params res -
 * @artista - para obtener el nombre del grupo
 *
 * function error(shr,status, error) -
 * @params shr
 * @params status
 * @params error
 *
 */



function artistaInfo() {

    let last_url = "http://ws.audioscrobbler.com/2.0/?";
    $.ajax({
        type: "GET",
        url: last_url,
    //    artist: 'artist=Depeche mode',
        data: 'method=artist.getinfo' +

           '&artist=Depeche mode'+
            '&api_key=' + "c45b29231e8dc2ddc58480caba8cf4da"+


            '&format=json',
        dataType: 'json',

        //"success" gets called when the returned code is a "200" (successfull request). "error" gets called whenever another code is returned (e.g. 404, 500).
       success: function (res) {
            //No caldria aquesta instrucció perque ja guaredem els que ens convé en sessionStorage
           // data[method] = res;
           console.log("Res", res);
           // let myres= JSON.parse(res);
            console.log("Resposta: Name " + res.artist.name);// Should return session key.
            //console.log("Resposta: Key " + res.url);
           artista = res.artist.name;
            $("#Nombreartista").text(res.artist.name);

            //store session key for further authenticate operations...
          //  sessionStorage.setItem("mySessionUser", res.session.name);
            //sessionStorage.setItem("mySessionKey", res.session.key);
        },
        error: function (xhr, status, error) {
            var errorMessage = xhr.status + ': ' + xhr.statusText
            console.log('Error - ' + errorMessage);
        }
    });

}

/**
 * function albumInformacion()
 * @last_url - url necesaria para dar comienzo a la consulta
 * $ajax - datos  para realizar la consulta
 *
 */


function albumInformacion(){ //nombre del grupo
    let last_url = "http://ws.audioscrobbler.com/2.0/?";
    $.ajax({
        type: "GET",
        url: last_url,
        //    artist: 'artist=Depeche mode',
        data:
            'method=album.getInfo' +
            '&api_key=' + myAPI_key+
            '&artist=Depeche mode'+
            'album=violator'+



            '&format=xml',
        dataType: 'xml',


    });


}

/**
 * function trackLoveXMlHttpRequestSendQuery()
 * @params dadestl - le paso los datos de la consulta
 * @params last_url - le paso la url (dónde despues se añadirán los parametros)
 * @params xhr - respuesta de la consulta
 * @params urlquery - devolución de la query (xml)
 *
 *
 */

    function trackLoveXMlHttpRequestSendQuery()
{
    console.log ("mySessionKey");
    if (sessionStorage.getItem("mySessionKey") == null)

    {
        console.log("Error no estas authenticat");
    }
    else {

        var dadestl = {
            method: 'track.Love',
            artist: Utf8.encode('Depeche Mode'),
            track: Utf8.encode('Personal Jesus'),
            api_key: myAPI_key,
            sk: sessionStorage.getItem("mySessionKey")
        };

        let last_url = "http://ws.audioscrobbler.com/2.0/";
        //let myapisiglove = calculateApiSig(dadestl);
        //dadestl['api_sig']= myapisiglove;

        dadestl['api_sig']= calculateApiSig(dadestl);

        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                processarRespostaLoveTrackXmlHtttpRequestSend(xhr);
            }
        }
        var urlquery ="http://ws.audioscrobbler.com/2.0/?method=track.Love"
            + "&artist=" + dadestl.artist
            + "&track=" + dadestl.track
            + "&api_key=" + dadestl.api_key
            + "&sk=" + dadestl.sk
            + "&api_sig=" + dadestl.api_sig;
        xhr.open('POST', urlquery, true);
        xhr.overrideMimeType('text/xml'); // Crec que sense aquesta linea funcionaria igual
        //xhr.responseType = 'document';
        xhr.send(null);

        function processarRespostaLoveTrackXmlHtttpRequestSend(xml) {

            var xmlDoc = xml.responseXML.documentElement;
            var txt = xmlDoc.getAttribute("status");
            if( txt == "ok")
            {
                document.getElementById("d1").innerHTML = "<h2>Se añadió el Love Correctamente</h2>";
            }
            else document.getElementById("d2").innerHTML = "<h2>Error al insertar el love</h2>";
        }
    }



    }


