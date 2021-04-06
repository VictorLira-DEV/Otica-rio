let map
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -20.3784033, lng: -40.3686145},
        zoom: 15,
    });

    let marker = new google.maps.Marker({
        position: { lat: -20.3784033, lng: -40.3686145 },
        map: map
    });
   
}
