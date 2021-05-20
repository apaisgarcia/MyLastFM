var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        document.getElementById("demo2").innerHTML = myObj.name;
    }
};
xmlhttp.open("GET", "consultaDepeche.txt", true);
xmlhttp.send();