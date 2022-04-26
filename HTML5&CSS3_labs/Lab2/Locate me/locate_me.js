



var btn_loc=document.getElementById("Location");


function showposition(obj)
{
    
    var link="https://www.google.com/maps?q=@"+obj.coords.latitude+","+obj.coords.longitude;

    window.open(link,"_blank");
}


function me_location()
{
    navigator.geolocation.getCurrentPosition(showposition);
}



btn_loc.addEventListener("click",me_location);