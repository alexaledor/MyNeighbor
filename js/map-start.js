/**Слои карт*/
var OSM = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    minZoom: 2,
    attribution: '© OpenStreetMap contributors. Tiles: CC-BY-SA 2.0\r\nMap data © OpenStreetMap contributors'
});

var googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3'],
    attribution: '© GoogleStreets contributors.'
});

var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3'],
    attribution: '© GoogleHybrid contributors.'
});

var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3'],
    attribution: '© GoogleSatMap contributors.'
});

var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

var OpenMapSurfer_Roads = L.tileLayer('https://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}', {
    maxZoom: 20,
    attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

var Esri_NatGeoWorldMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
    maxZoom: 16
});


var osmUrl = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    //osm = L.tileLayer(osmUrl, {maxZoom: 16, attribution: osmAttrib}),
    map = new L.Map('mapid', {zoomControl: false, center: new L.LatLng(50.450992, 30.519848), zoom: 17});

OSM.addTo(map);
//OSM.addTo(map);
//googleHybrid.addTo(map);

/**Положение кнопок масштабирования**/
L.control.zoom({position:'topright'}).addTo(map);

/**всплавющая подсказка (popUp)**/
var popup = L.popup();

/**Отображение координат по клику на карте**/
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(e.latlng.toString())
        .openOn(map);
}

/**Клик по карте**/
map.on('click', onMapClick);

/**Панель переключения слоев**/
map.addControl(new L.Control.Layers({
    'Esri_WorldImagery':Esri_WorldImagery,
    //'Esri_NatGeoWorldMap':Esri_NatGeoWorldMap,
    'OpenMapSurfer_Roads':OpenMapSurfer_Roads,
    //'OpenTopoMap':OpenTopoMap,
    'OpenStreetMap':OSM,
    'GoogleStreets':googleStreets,
    'GoogleHybrid':googleHybrid,
    'GoogleSat':googleSat

}));

/**масштабная линейка (внизу, справа)**/
L.control.scale({position:'bottomright', imperial: true}).addTo(map);
