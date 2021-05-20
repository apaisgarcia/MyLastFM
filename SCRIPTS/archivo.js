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
    xhttp.open("GET", "../examplequery.xml", true);
    xhttp.send();


}

function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>PlayCount</th><th>Nombre album</th><th>Foto</th></tr>";
    var x = xmlDoc.getElementsByTagName("album");
    for (i = 0; i <x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("playcount")[0].childNodes[0].nodeValue+

            "</td><td>" +

            x[i].getElementsByTagName("artist")[0].getElementsByTagName("name")[0].childNodes[0].nodeValue +
            "</td><td><img src="+

            x[i].getElementsByTagName("image")[0].childNodes[0].nodeValue +
    "></img></td></tr>";


    }
    document.getElementById("demo").innerHTML = table;
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