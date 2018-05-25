"use strict";
console.log("hey yo");
var map;
(function () {
    var mapOptions = {
        zoom: 10,
        center: {
            lat: 29.424122,
            lng: -98.493629
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    var address = "San Antonio, TX, 78219";
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({"address": address}, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
        } else {
            alert("Geocoding was not successful - STATUS:" + status);
        }
    });

})();