function initMap() {
    var lat = 23.7449458;
    var lng = 90.3889624;
    var uluru = {lat: lat, lng: lng};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
};

$('.res-point, .overly').click(function(){
    $('.main-nav').animate({
        width: "toggle"
      });
})
$('.res-subnav').click(function(){
    $('.sub-nav').slideToggle();
})


var d = new Date();
document.getElementById("year").innerHTML = d.getFullYear();
