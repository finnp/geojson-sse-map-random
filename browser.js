var L = require('leaflet')

L.Icon.Default.imagePath = 'node_modules/leaflet/dist/images/'

var map = L.map('map')
map.setView([0, 0], 3)


var attribution = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>';
 
var tiles = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
 
L.tileLayer(tiles, {
  maxZoom: 18,
  attribution: attribution
}).addTo(map);

var source = new EventSource('http://randomgeojson.herokuapp.com/')

source.onmessage = function (messsage) {
  var feature = JSON.parse(messsage.data)
  console.log(feature)
  var marker = L.marker(feature.geometry.coordinates)
  marker.addTo(map);
}