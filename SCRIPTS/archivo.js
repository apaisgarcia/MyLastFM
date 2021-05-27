/**
 * function loadDoc2() - para ver si carga bien la página con los parametros enviados
 *
  */



    function loadDoc2() { // Información sobre David Gahan
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 0) {
                console.log("0:request not initialized");
            } else if (this.readyState == 1) {
                console.log("1:server connection established");
            } else if (this.readyState == 2) {
                console.log("2:request received");
            } else if (this.readyState == 3) {
                console.log("3:processing request");
            }
            try { // le pongo un try catch
                if (this.readyState == 4 && this.status == 200) { // esto es que la consulta está perfectamente
                    console.log("4:request finished and response is ready");
                    //  document.getElementById("demo").innerHTML = this.responseText;
                    myFunction2(this);
                }
            } catch (error) {
                console.log(error);
            }
        };
        xhttp.open("GET", "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=David%20Gaham&api_key=c45b29231e8dc2ddc58480caba8cf4da", true);
        xhttp.send();


    }
/**
 * function myFunction2(xml) - le digo como quiero los datos y de donde sacarlos en el xml
 * @params xmlDoc - respuesta del xml
 * @params table - como construir la tabla a mostrar .
 * @params i - recorrer el for
 * @params x - etiqueta del xml (la de base)
 *

 */

    function myFunction2(xml) {
        var i;
        var xmlDoc = xml.responseXML;
        var table = "<tr><th>Name</th><th>Url</th><th>Image</th></tr>";
        var x = xmlDoc.getElementsByTagName("artist");
        for (i = 0; i < x.length; i++) {
            table += "<tr><td>" +
                x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +

                "</td><td>" +

                x[i].getElementsByTagName("url")[0].childNodes[0].nodeValue +
                "</td><td> </tr>";


        }
        document.getElementById("demo3").innerHTML = table;
    }

/**
 *function loadDoc3()
 * @params xhttp - repuesta de la consulta
 *
 */

function loadDoc3() {  //consulta Información en Inglés
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 0) {
                console.log("0:request not initialized");
            } else if (this.readyState == 1) {
                console.log("1:server connection established");
            } else if (this.readyState == 2) {
                console.log("2:request received");
            } else if (this.readyState == 3) {
                console.log("3:processing request");
            }
            try { // le pongo un try catch
                if (this.readyState == 4 && this.status == 200) { // esto es que la consulta está perfectamente
                    console.log("4:request finished and response is ready");
                    //  document.getElementById("demo").innerHTML = this.responseText;
                    myFunction3(this);
                }
            } catch (error) {
                console.log(error);
            }
        };
        xhttp.open("GET", "http://ws.audioscrobbler.com/2.0/?method=tag.getinfo&tag=depeche%20mode&api_key=c45b29231e8dc2ddc58480caba8cf4da", true);
        xhttp.send();


    }

/**
 * function myFunction3(xml) - le paso la consulta

 * @param xml
 * @params table - como construir la tabla a mostrar .
 * @params i - recorrer el for
 * @params x - etiqueta del xml (la de base)
 */
    function myFunction3(xml) { //Información en Inglés págnina Index
        var i;
        var xmlDoc = xml.responseXML;
        var table = "<tr></tr>";
        var x = xmlDoc.getElementsByTagName("tag");
        for (i = 0; i < x.length; i++) {
            table += "<tr><td>" +


                "<td>" +

                x[i].getElementsByTagName("wiki")[0].getElementsByTagName("content")[0].childNodes[0].nodeValue +
                "</td><td> </tr>";


        }
        document.getElementById("demo4").innerHTML = table;
    }

/**
 *function loadDoc4()
 * @params xhttp - repuesta de la consulta
 *
 */

function loadDoc4() { //Información sobre Andrew Fletcher
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 0) {
                console.log("0:request not initialized");
            } else if (this.readyState == 1) {
                console.log("1:server connection established");
            } else if (this.readyState == 2) {
                console.log("2:request received");
            } else if (this.readyState == 3) {
                console.log("3:processing request");
            }
            try { // le pongo un try catch
                if (this.readyState == 4 && this.status == 200) { // esto es que la consulta está perfectamente
                    console.log("4:request finished and response is ready");
                    //  document.getElementById("demo").innerHTML = this.responseText;
                    myFunction4(this);
                }
            } catch (error) {
                console.log(error);
            }
        };
        xhttp.open("GET", "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Andrew%20Fletcher&api_key=c45b29231e8dc2ddc58480caba8cf4da", true);
        xhttp.send();


    }

/**
 * function myFunction4(xml) - le paso la consulta en XML

 * @param xml
 * @params table - como construir la tabla a mostrar .
 * @params i - recorrer el for
 * @params x - etiqueta del xml (la de base)
 */

function myFunction4(xml) { //Información sobre Andrew Fletcher
        var i;
        var xmlDoc = xml.responseXML;
        var table = "<tr><th>Name</th><th>Url</th><th>Image</th></tr>";
        var x = xmlDoc.getElementsByTagName("artist");
        for (i = 0; i < x.length; i++) {
            table += "<tr><td>" +
                x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +

                "</td><td>" +

                x[i].getElementsByTagName("url")[0].childNodes[0].nodeValue +
                "</td><td> </tr>";


        }
        document.getElementById("demo4").innerHTML = table;
    }
/**
 *function loadDoc4()
 * @params xhttp - repuesta de la consulta
 *
 */


    function loadDoc5() { //Información sobre M. L. Gore


        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 0) {
                console.log("0:request not initialized");
            } else if (this.readyState == 1) {
                console.log("1:server connection established");
            } else if (this.readyState == 2) {
                console.log("2:request received");
            } else if (this.readyState == 3) {
                console.log("3:processing request");
            }
            try { // le pongo un try catch
                if (this.readyState == 4 && this.status == 200) { // esto es que la consulta está perfectamente
                    console.log("4:request finished and response is ready");
                    //  document.getElementById("demo").innerHTML = this.responseText;
                    myFunction5(this.response);
                }
            } catch (error) {
                console.log(error);
            }
        };
        xhttp.responseType = 'json';
        xhttp.open("GET", "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=martin%20gore&api_key=c45b29231e8dc2ddc58480caba8cf4da&format=json", true);
        xhttp.send();


    }

/**
 * function myFunction5(xml) - le paso la consulta

 * @param xml
 * @params table - como construir la tabla a mostrar .
 * @params i - recorrer el for
 * @params x - etiqueta del xml (la de base)
 */


function myFunction5(dades){
 console.log(dades);

 var txt = "";
 txt = "<h1> El artista es " +dades.artist.name +"</h1>";
 txt = "<h1> El artista es " +dades.artist.name +"</h1>";
    document.getElementById("demo5").innerHTML = txt;
}
/*
    function myFunction5(xml) { //Información sobre M.L Gore
        var i;
        var xmlDoc = xml.responseXML;
        var table = "<tr></tr>";
        var x = xmlDoc.getElementsByTagName("artist");
        for (i = 0; i < x.length; i++) {
            table += "<tr><td>" +
                x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +

                "</td><td>" +

                x[i].getElementsByTagName("bio")[0].getElementsByTagName("summary")[0].childNodes[0].nodeValue +
                "</td><td></tr>";


        }
        document.getElementById("demo5").innerHTML = table;

    }*/







