function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if(this.readyState ==0  ){
        console.log("0:request not initialized");
    }else if(this.readyState ==1){
        console.log("1:server connection established");
       }else if(this.readyState ==2){
        console.log("2:request received");
    }else if(this.readyState ==3){
        console.log("3:processing request");
    }
        try { // le pongo un try catch
            if (this.readyState == 4 && this.status == 200) { // esto es que la consulta está perfectamente
                console.log("4:request finished and response is ready");
              //  document.getElementById("demo").innerHTML = this.responseText;
                myFunction(this);
            }
        }catch (error){
        console.log(error);
        }
    };
    xhttp.open("GET", "http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=depeche%20mode&api_key=c45b29231e8dc2ddc58480caba8cf4da", true);
    xhttp.send();


}

function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>Album Name</th><th>Listeners</th><th>Url</th><th>Image</th></tr>";
    var x = xmlDoc.getElementsByTagName("track");
    for (i = 0; i <x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue+

            "</td><td>" +

            x[i].getElementsByTagName("listeners")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("url")[0].childNodes[0].nodeValue +
            "</td><td>" +
            "<img src="+

            x[i].getElementsByTagName("image")[0].childNodes[0].nodeValue +
    "></img></td></tr>";


    }
    document.getElementById("demo").innerHTML = table;
}
function loadDoc2() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState ==0  ){
            console.log("0:request not initialized");
        }else if(this.readyState ==1){
            console.log("1:server connection established");
        }else if(this.readyState ==2){
            console.log("2:request received");
        }else if(this.readyState ==3){
            console.log("3:processing request");
        }
        try { // le pongo un try catch
            if (this.readyState == 4 && this.status == 200) { // esto es que la consulta está perfectamente
                console.log("4:request finished and response is ready");
                //  document.getElementById("demo").innerHTML = this.responseText;
                myFunction2(this);
            }
        }catch (error){
            console.log(error);
        }
    };
    xhttp.open("GET", "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=David%20Gaham&api_key=c45b29231e8dc2ddc58480caba8cf4da", true);
    xhttp.send();


}

function myFunction2(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>Name</th><th>Url</th><th>Image</th></tr>";
    var x = xmlDoc.getElementsByTagName("artist");
    for (i = 0; i <x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue+

            "</td><td>" +

            x[i].getElementsByTagName("url")[0].childNodes[0].nodeValue +
            "</td><td> </tr>";



    }
    document.getElementById("demo3").innerHTML = table;
}

function loadDoc3() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState ==0  ){
            console.log("0:request not initialized");
        }else if(this.readyState ==1){
            console.log("1:server connection established");
        }else if(this.readyState ==2){
            console.log("2:request received");
        }else if(this.readyState ==3){
            console.log("3:processing request");
        }
        try { // le pongo un try catch
            if (this.readyState == 4 && this.status == 200) { // esto es que la consulta está perfectamente
                console.log("4:request finished and response is ready");
                //  document.getElementById("demo").innerHTML = this.responseText;
                myFunction3(this);
            }
        }catch (error){
            console.log(error);
        }
    };
    xhttp.open("GET", "http://ws.audioscrobbler.com/2.0/?method=tag.getinfo&tag=depeche%20mode&api_key=c45b29231e8dc2ddc58480caba8cf4da", true);
    xhttp.send();


}

function myFunction3(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr></tr>";
    var x = xmlDoc.getElementsByTagName("tag");
    for (i = 0; i <x.length; i++) {
        table += "<tr><td>" +


            "<td>" +

            x[i].getElementsByTagName("wiki")[0].getElementsByTagName("content")[0].childNodes[0].nodeValue +
            "</td><td> </tr>";



    }
    document.getElementById("demo4").innerHTML = table;
}
function loadDoc4() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState ==0  ){
            console.log("0:request not initialized");
        }else if(this.readyState ==1){
            console.log("1:server connection established");
        }else if(this.readyState ==2){
            console.log("2:request received");
        }else if(this.readyState ==3){
            console.log("3:processing request");
        }
        try { // le pongo un try catch
            if (this.readyState == 4 && this.status == 200) { // esto es que la consulta está perfectamente
                console.log("4:request finished and response is ready");
                //  document.getElementById("demo").innerHTML = this.responseText;
                myFunction4(this);
            }
        }catch (error){
            console.log(error);
        }
    };
    xhttp.open("GET", "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Andrew%20Fletcher&api_key=c45b29231e8dc2ddc58480caba8cf4da", true);
    xhttp.send();


}

function myFunction4(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>Name</th><th>Url</th><th>Image</th></tr>";
    var x = xmlDoc.getElementsByTagName("artist");
    for (i = 0; i <x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue+

            "</td><td>" +

            x[i].getElementsByTagName("url")[0].childNodes[0].nodeValue +
            "</td><td> </tr>";



    }
    document.getElementById("demo4").innerHTML = table;
}

function loadDoc5() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState ==0  ){
            console.log("0:request not initialized");
        }else if(this.readyState ==1){
            console.log("1:server connection established");
        }else if(this.readyState ==2){
            console.log("2:request received");
        }else if(this.readyState ==3){
            console.log("3:processing request");
        }
        try { // le pongo un try catch
            if (this.readyState == 4 && this.status == 200) { // esto es que la consulta está perfectamente
                console.log("4:request finished and response is ready");
                //  document.getElementById("demo").innerHTML = this.responseText;
                myFunction5(this);
            }
        }catch (error){
            console.log(error);
        }
    };
    xhttp.open("GET", "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Martin%20Gore&api_key=c45b29231e8dc2ddc58480caba8cf4da", true);
    xhttp.send();


}

function myFunction5(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr></tr>";
    var x = xmlDoc.getElementsByTagName("artist");
    for (i = 0; i <x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue+

            "</td><td>" +

            x[i].getElementsByTagName("bio")[0].getElementsByTagName("summary")[0].childNodes[0].nodeValue +
            "</td><td></tr>";



    }
    document.getElementById("demo5").innerHTML = table;
}









/*
function  artista(){

    let l;
    let xmlDoc = xml.responseXML;
    let table="<tr><th>name</th><th>url</th><th>Foto</th></tr>";
    var x = xmlDoc.getElementsByTagName("artist");
    for (l = 0; l <x.length; l++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue+

            "</td><td>" +

            x[i].getElementsByTagName("artist")[0].getElementsByTagName("name")[0].childNodes[0].nodeValue +
            "</td><td><img src="+

            x[i].getElementsByTagName("image")[0].childNodes[0].nodeValue +
            "></img></td></tr>";


    }
    document.getElementById("demo").innerHTML = table;

}*/