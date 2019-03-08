var ccolor = document.getElementById("svg2").addEventListener("click", targetLand);
var lastTarget;

function targetLand(e){
    if(lastTarget){
        document.getElementById(lastTarget.id).style.fill = "grey";
    }
    
    var target = e.target;
    
    document.getElementById(target.id).style.fill = "red";
    
    fetch('http://restcountries.eu/rest/v1/alpha?codes=' + target.id)
        .then(res => res.json())
        .then(data => document.getElementById("land").innerHTML =
        "<h4>" + data[0].name + "</h4>" +
        data[0].capital + "<br/>" +
        data[0].population + "<br/>" +
        data[0].timezones + "<br/>" +
        data[0].languages
        );
    
    
    lastTarget = target;
    
}


