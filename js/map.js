/*function createMap(lat, lng, zoomVal) {
  var mapOptions = { center: new google.maps.LatLng(lat, lng),    
  zoom: zoomVal,   
  scrollwheel: false,  
  mapTypeId: google.maps.MapTypeId.ROADMAP 
}; 
map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);


var myLatlnglow = new google.maps.LatLng(23.654332,-79.387867);

var markerlow1 = new google.maps.Marker({
     position: myLatlnglow,
     icon: 'images/map-dot.png',
     map: map,
     url: '#',
     title: 'Name'
});
google.maps.event.addListener(markerlow1, 'click', function() {
window.location.href = markerlow1.url;
});


var myLatlnglow = new google.maps.LatLng(23.688458,-79.300619);

var markerlow = new google.maps.Marker({
     position: myLatlnglow,
     icon: 'images/map-dot.png',
     map: map,
     url: '#',
     title: 'Name'
});
google.maps.event.addListener(markerlow, 'click', function() {
window.location.href = markerlow.url;
});


}

var map;
function initialize() { 
  createMap(23.668493, -29.410812,12);
   if(navigator.geolocation) {  
   success = function(position) {    
  createMap(position.coords.latitude, position.coords.longitude,13);  
};   
error = function() {
  createMap(23.648493, -29.410812,12); 
}    
  navigator.geolocation.getCurrentPosition(success, error);  
} 
}
    
    */



    
   var map;
   var markers = {};
    
    
    // inside function createMap(...)
  
    markerData = {
        bing: {
            lat: 23.654332,
            lng: -79.387867,
            icon: "http://labs.google.com/ridefinder/images/mm_20_red.png",
            url: "http://www.bing.com/",
            title: "some search engine"
        },
        yahoo: {
            lat: 23.688458,
            lng: -79.300619,
            icon: "http://labs.google.com/ridefinder/images/mm_20_blue.png",
            url: "http://www.yahoo.com/",
            title: "Great free games"
        }
    };

    for (markerId in markerData) {
        markers[markerId] = createMarker(markerData[markerId]);
    }
    alert("1");
    markers['bing'].setTitle("new title");


function createMarker(data) {
    var myLatLng = new google.maps.LatLng(data.lat, data.lng);

    var marker = new google.maps.Marker({
        position: myLatLng,
        icon: data.icon,
        map: map,
        title: data.title
    });
  }