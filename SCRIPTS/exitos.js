
window.onload = function() {

    var mylogin = localStorage.getItem("login");
    console.log(mylogin);
if(mylogin!=null) {


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
               // console.log("4:request finished and response is ready");
                //  document.getElementById("demo").innerHTML = this.responseText;
                myFunction(this);
            }
        } catch (error) {
            console.log(error);
        }
    };
    xhttp.open("GET", "http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=depeche%20mode&api_key=c45b29231e8dc2ddc58480caba8cf4da", true);
    xhttp.send();
}
else {
    alert("Tienes que estar Logueado");
}
}
function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table = "<tr><th>Album Name</th><th>Listeners</th><th>Url</th><th>Image</th></tr>";
    var x = xmlDoc.getElementsByTagName("track");
    for (i = 0; i < x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +

            "</td><td>" +

            x[i].getElementsByTagName("listeners")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("url")[0].childNodes[0].nodeValue +
            "</td><td>" +
            "<img src=" +

            x[i].getElementsByTagName("image")[0].childNodes[0].nodeValue +
            "></img></td></tr>";


    }
    document.getElementById("demo").innerHTML = table;
}