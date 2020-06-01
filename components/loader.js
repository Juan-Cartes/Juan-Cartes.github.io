document.addEventListener('DOMContentLoaded', function(){

    loadHTML(document.querySelector(".navbar-load"), "/components/nav.html");

});

function loadHTML(element, url) {
    var xmlhttp;
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                element.innerHTML = xmlhttp.responseText;
            }
        }
    }

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}