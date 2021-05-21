


function myLoginFunction(){
    try {
        /*
        params api_key ( my api key)
        cb the web that goes when user is authenticated relative path ( depends on the server is launched): http://localhost:3000/mainpage.ht*/
        var url = 'http://www.last.fm/api/auth/?api_key=c45b29231e8dc2ddc58480caba8cf4da&cb=http://localhost:63342/MyLastFM/HTML/new.html';

        window.location.replace(url);
    }
    catch (error){
        console.log("error login");
    }
}