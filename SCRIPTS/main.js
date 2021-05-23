
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
window.onload = function() {
    var apisigGetSession;
    var data = {
        'token': Utf8.encode(captured),
        'api_key': "c45b29231e8dc2ddc58480caba8cf4da",
        'method': 'auth.getSession'
    };

    data["api_sig"] = calculateApiSig( data);

    data["format"] = "json";

    console.log("DATa", data);


     primerallamada(data);



    //console.log("Nombre Usuario antes getinfo" ,nombreGlobal);


};
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
            console.log("Nombre Usuario segunda llamada" ,nomUsuari);
        },
        error: function (xhr, status, error) {
            var errorMessage = xhr.status + ': ' + xhr.statusText
            console.log('Error - ' + errorMessage);
        }
    });

}
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
            // console.log("Mi primer nombreUser", nombreGlobal);
             $("#nombreUser").text(res.session.name);
            sessionStorage.setItem("mySessionKey", res.session.key);
            sessionStorage.setItem("mySessionName", res.session.name);

            segundallamada(res.session.name);
        },
        error : function(xhr, status, error){
            var errorMessage = xhr.status + ': ' + xhr.statusText
            console.log('Error - ' + errorMessage);
        }
    });

    return rer;
}
/*
$(document).ready(function() { //esto lo que hace es que se recargue de forma autómatica el get sesión cuando se carga la págnia
    // Set elsewhere but hacked into this example:

    //var nombreUser;

});
*/
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







function albumInformacion(){
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









