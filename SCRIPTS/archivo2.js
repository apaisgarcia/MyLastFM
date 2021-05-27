/**
 * function xmlhttp.onreadystatechange - paresando Json y mostrando consulta
 * @type {XMLHttpRequest}
 */

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        document.getElementById("demo2").innerHTML = myObj.name;
    }
};
xmlhttp.open("GET", "consultaDepeche.txt", true);
xmlhttp.send();

/*
function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>PlayCount</th><th>Nombre album</th><th>Foto</th></tr>";
    var x = xmlDoc.getElementsByTagName("track");
    for (i = 0; i <x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue+

            "</td><td>" +

            x[i].getElementsByTagName("artist")[0].getElementsByTagName("name")[0].childNodes[0].nodeValue +
            "</td><td><img src="+

            x[i].getElementsByTagName("image")[0].childNodes[0].nodeValue +
    "></img></td></tr>";


    }
    document.getElementById("demo").innerHTML = table;
}
 */