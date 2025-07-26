var highlightLayer;
function highlightFeature(e) {
    highlightLayer = e.target;

    if (e.target.feature.geometry.type === 'LineString' || e.target.feature.geometry.type === 'MultiLineString') {
        highlightLayer.setStyle({
        color: '#1f78b4',
        });
    } else {
        highlightLayer.setStyle({
        fillColor: '#1f78b4',
        fillOpacity: 1
        });
    }
    highlightLayer.openPopup();
}
var map = L.map('map', {
    zoomControl:true, maxZoom:28, minZoom:2
}).fitBounds([[19.247435104217182,-97.22292980962034],[19.646161127916244,-96.41484506825692]]);
var hash = new L.Hash(map);
map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>');
var autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});
function removeEmptyRowsFromPopupContent(content, feature) {
    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    var rows = tempDiv.querySelectorAll('tr');
    for (var i = 0; i < rows.length; i++) {
        var td = rows[i].querySelector('td.visible-with-data');
        var key = td ? td.id : '';
        if (td && td.classList.contains('visible-with-data') && feature.properties[key] == null) {
            rows[i].parentNode.removeChild(rows[i]);
        }
    }
    return tempDiv.innerHTML;
}
document.querySelector(".leaflet-popup-pane").addEventListener("load", function(event) {
    var tagName = event.target.tagName,
    popup = map._popup;
    // Also check if flag is already set.
    if (tagName === "IMG" && popup && !popup._updated) {
    popup._updated = true; // Set flag to prevent looping.
    popup.update();
    }
}, true);
var measureControl = new L.Control.Measure({
    position: 'topleft',
    primaryLengthUnit: 'feet',
    secondaryLengthUnit: 'miles',
    primaryAreaUnit: 'sqfeet',
    secondaryAreaUnit: 'sqmiles'
});
measureControl.addTo(map);
document.getElementsByClassName('leaflet-control-measure-toggle')[0]
.innerHTML = '';
document.getElementsByClassName('leaflet-control-measure-toggle')[0]
.className += ' fas fa-ruler';
var bounds_group = new L.featureGroup([]);
function setBounds() {
}
map.createPane('pane_ESRISatellite_0');
map.getPane('pane_ESRISatellite_0').style.zIndex = 400;
var layer_ESRISatellite_0 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    pane: 'pane_ESRISatellite_0',
    opacity: 1.0,
    attribution: '',
    minZoom: 2,
    maxZoom: 28,
    minNativeZoom: 0,
    maxNativeZoom: 20
});
layer_ESRISatellite_0;
map.addLayer(layer_ESRISatellite_0);
map.createPane('pane_OpenStreetMap_1');
map.getPane('pane_OpenStreetMap_1').style.zIndex = 401;
var layer_OpenStreetMap_1 = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    pane: 'pane_OpenStreetMap_1',
    opacity: 1.0,
    attribution: '',
    minZoom: 2,
    maxZoom: 28,
    minNativeZoom: 0,
    maxNativeZoom: 19
});
layer_OpenStreetMap_1;
map.addLayer(layer_OpenStreetMap_1);
function pop_ANPParqueLinealQuetzalapanSedeoANPParque_LinealQuetzalapanSedeo_2(feature, layer) {
    layer.on({
        mouseout: function(e) {
            for (var i in e.target._eventParents) {
                if (typeof e.target._eventParents[i].resetStyle === 'function') {
                    e.target._eventParents[i].resetStyle(e.target);
                }
            }
            if (typeof layer.closePopup == 'function') {
                layer.closePopup();
            } else {
                layer.eachLayer(function(feature){
                    feature.closePopup()
                });
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['Name'] !== null ? autolinker.link(feature.properties['Name'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['description'] !== null ? autolinker.link(feature.properties['description'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
    var popup = layer.getPopup();
    var content = popup.getContent();
    var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
    popup.setContent(updatedContent);
}

function style_ANPParqueLinealQuetzalapanSedeoANPParque_LinealQuetzalapanSedeo_2_0() {
    return {
        pane: 'pane_ANPParqueLinealQuetzalapanSedeoANPParque_LinealQuetzalapanSedeo_2',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(44,160,121,1.0)',
        interactive: true,
    }
}
map.createPane('pane_ANPParqueLinealQuetzalapanSedeoANPParque_LinealQuetzalapanSedeo_2');
map.getPane('pane_ANPParqueLinealQuetzalapanSedeoANPParque_LinealQuetzalapanSedeo_2').style.zIndex = 402;
map.getPane('pane_ANPParqueLinealQuetzalapanSedeoANPParque_LinealQuetzalapanSedeo_2').style['mix-blend-mode'] = 'normal';
var layer_ANPParqueLinealQuetzalapanSedeoANPParque_LinealQuetzalapanSedeo_2 = new L.geoJson(json_ANPParqueLinealQuetzalapanSedeoANPParque_LinealQuetzalapanSedeo_2, {
    attribution: '',
    interactive: true,
    dataVar: 'json_ANPParqueLinealQuetzalapanSedeoANPParque_LinealQuetzalapanSedeo_2',
    layerName: 'layer_ANPParqueLinealQuetzalapanSedeoANPParque_LinealQuetzalapanSedeo_2',
    pane: 'pane_ANPParqueLinealQuetzalapanSedeoANPParque_LinealQuetzalapanSedeo_2',
    onEachFeature: pop_ANPParqueLinealQuetzalapanSedeoANPParque_LinealQuetzalapanSedeo_2,
    style: style_ANPParqueLinealQuetzalapanSedeoANPParque_LinealQuetzalapanSedeo_2_0,
});
bounds_group.addLayer(layer_ANPParqueLinealQuetzalapanSedeoANPParque_LinealQuetzalapanSedeo_2);
map.addLayer(layer_ANPParqueLinealQuetzalapanSedeoANPParque_LinealQuetzalapanSedeo_2);
function pop_AchipilagodeBosquesySelvasdelaReginCapitalANPArchipelagodeBosquesySelvasdelaReginCapital_3(feature, layer) {
    layer.on({
        mouseout: function(e) {
            for (var i in e.target._eventParents) {
                if (typeof e.target._eventParents[i].resetStyle === 'function') {
                    e.target._eventParents[i].resetStyle(e.target);
                }
            }
            if (typeof layer.closePopup == 'function') {
                layer.closePopup();
            } else {
                layer.eachLayer(function(feature){
                    feature.closePopup()
                });
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['Name'] !== null ? autolinker.link(feature.properties['Name'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['description'] !== null ? autolinker.link(feature.properties['description'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
    var popup = layer.getPopup();
    var content = popup.getContent();
    var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
    popup.setContent(updatedContent);
}

function style_AchipilagodeBosquesySelvasdelaReginCapitalANPArchipelagodeBosquesySelvasdelaReginCapital_3_0() {
    return {
        pane: 'pane_AchipilagodeBosquesySelvasdelaReginCapitalANPArchipelagodeBosquesySelvasdelaReginCapital_3',
        opacity: 1,
        color: 'rgba(44,117,41,0.39)',
        dashArray: '',
        lineCap: 'square',
        lineJoin: 'bevel',
        weight: 1.0,
        fillOpacity: 0,
        interactive: true,
    }
}
function style_AchipilagodeBosquesySelvasdelaReginCapitalANPArchipelagodeBosquesySelvasdelaReginCapital_3_1() {
    return {
        pane: 'pane_AchipilagodeBosquesySelvasdelaReginCapitalANPArchipelagodeBosquesySelvasdelaReginCapital_3',
        opacity: 1,
        color: 'rgba(35,35,35,0.39)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(51,160,44,0.39)',
        interactive: true,
    }
}
map.createPane('pane_AchipilagodeBosquesySelvasdelaReginCapitalANPArchipelagodeBosquesySelvasdelaReginCapital_3');
map.getPane('pane_AchipilagodeBosquesySelvasdelaReginCapitalANPArchipelagodeBosquesySelvasdelaReginCapital_3').style.zIndex = 403;
map.getPane('pane_AchipilagodeBosquesySelvasdelaReginCapitalANPArchipelagodeBosquesySelvasdelaReginCapital_3').style['mix-blend-mode'] = 'normal';
var layer_AchipilagodeBosquesySelvasdelaReginCapitalANPArchipelagodeBosquesySelvasdelaReginCapital_3 = new L.geoJson.multiStyle(json_AchipilagodeBosquesySelvasdelaReginCapitalANPArchipelagodeBosquesySelvasdelaReginCapital_3, {
    attribution: '',
    interactive: true,
    dataVar: 'json_AchipilagodeBosquesySelvasdelaReginCapitalANPArchipelagodeBosquesySelvasdelaReginCapital_3',
    layerName: 'layer_AchipilagodeBosquesySelvasdelaReginCapitalANPArchipelagodeBosquesySelvasdelaReginCapital_3',
    pane: 'pane_AchipilagodeBosquesySelvasdelaReginCapitalANPArchipelagodeBosquesySelvasdelaReginCapital_3',
    onEachFeature: pop_AchipilagodeBosquesySelvasdelaReginCapitalANPArchipelagodeBosquesySelvasdelaReginCapital_3,
    styles: [style_AchipilagodeBosquesySelvasdelaReginCapitalANPArchipelagodeBosquesySelvasdelaReginCapital_3_0,style_AchipilagodeBosquesySelvasdelaReginCapitalANPArchipelagodeBosquesySelvasdelaReginCapital_3_1,]
});
bounds_group.addLayer(layer_AchipilagodeBosquesySelvasdelaReginCapitalANPArchipelagodeBosquesySelvasdelaReginCapital_3);
map.addLayer(layer_AchipilagodeBosquesySelvasdelaReginCapitalANPArchipelagodeBosquesySelvasdelaReginCapital_3);
function pop_CofrePerote1937_4(feature, layer) {
    layer.on({
        mouseout: function(e) {
            for (var i in e.target._eventParents) {
                if (typeof e.target._eventParents[i].resetStyle === 'function') {
                    e.target._eventParents[i].resetStyle(e.target);
                }
            }
            if (typeof layer.closePopup == 'function') {
                layer.closePopup();
            } else {
                layer.eachLayer(function(feature){
                    feature.closePopup()
                });
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['ID_ANP'] !== null ? autolinker.link(feature.properties['ID_ANP'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['NOMBRE'] !== null ? autolinker.link(feature.properties['NOMBRE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['SUPERFICIE'] !== null ? autolinker.link(feature.properties['SUPERFICIE'].toLocaleString()) : '') + '</td>\
            </tr>\
    </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
    var popup = layer.getPopup();
    var content = popup.getContent();
    var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
    popup.setContent(updatedContent);
}

function style_CofrePerote1937_4_0() {
    return {
        pane: 'pane_CofrePerote1937_4',
        opacity: 1,
        color: 'rgba(56,128,54,0.524)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(85,121,22,0.524)',
        interactive: true,
    }
}
map.createPane('pane_CofrePerote1937_4');
map.getPane('pane_CofrePerote1937_4').style.zIndex = 404;
map.getPane('pane_CofrePerote1937_4').style['mix-blend-mode'] = 'normal';
var layer_CofrePerote1937_4 = new L.geoJson(json_CofrePerote1937_4, {
    attribution: '',
    interactive: true,
    dataVar: 'json_CofrePerote1937_4',
    layerName: 'layer_CofrePerote1937_4',
    pane: 'pane_CofrePerote1937_4',
    onEachFeature: pop_CofrePerote1937_4,
    style: style_CofrePerote1937_4_0,
});
bounds_group.addLayer(layer_CofrePerote1937_4);
map.addLayer(layer_CofrePerote1937_4);
function pop_RecorridosManantialesenlaarena_5(feature, layer) {
    layer.on({
        mouseout: function(e) {
            for (var i in e.target._eventParents) {
                if (typeof e.target._eventParents[i].resetStyle === 'function') {
                    e.target._eventParents[i].resetStyle(e.target);
                }
            }
            if (typeof layer.closePopup == 'function') {
                layer.closePopup();
            } else {
                layer.eachLayer(function(feature){
                    feature.closePopup()
                });
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['Name'] !== null ? autolinker.link(feature.properties['Name'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['descriptio'] !== null ? autolinker.link(feature.properties['descriptio'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
    var popup = layer.getPopup();
    var content = popup.getContent();
    var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
    popup.setContent(updatedContent);
}

function style_RecorridosManantialesenlaarena_5_0() {
    return {
        pane: 'pane_RecorridosManantialesenlaarena_5',
        opacity: 1,
        color: 'rgba(125,139,143,1.0)',
        dashArray: '',
        lineCap: 'square',
        lineJoin: 'bevel',
        weight: 1.0,
        fillOpacity: 0,
        interactive: true,
    }
}
map.createPane('pane_RecorridosManantialesenlaarena_5');
map.getPane('pane_RecorridosManantialesenlaarena_5').style.zIndex = 405;
map.getPane('pane_RecorridosManantialesenlaarena_5').style['mix-blend-mode'] = 'normal';
var layer_RecorridosManantialesenlaarena_5 = new L.geoJson(json_RecorridosManantialesenlaarena_5, {
    attribution: '',
    interactive: true,
    dataVar: 'json_RecorridosManantialesenlaarena_5',
    layerName: 'layer_RecorridosManantialesenlaarena_5',
    pane: 'pane_RecorridosManantialesenlaarena_5',
    onEachFeature: pop_RecorridosManantialesenlaarena_5,
    style: style_RecorridosManantialesenlaarena_5_0,
});
bounds_group.addLayer(layer_RecorridosManantialesenlaarena_5);
map.addLayer(layer_RecorridosManantialesenlaarena_5);
function pop_IniciativaAguapasapormiCasa_6(feature, layer) {
    layer.on({
        mouseout: function(e) {
            for (var i in e.target._eventParents) {
                if (typeof e.target._eventParents[i].resetStyle === 'function') {
                    e.target._eventParents[i].resetStyle(e.target);
                }
            }
            if (typeof layer.closePopup == 'function') {
                layer.closePopup();
            } else {
                layer.eachLayer(function(feature){
                    feature.closePopup()
                });
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['Name'] !== null ? autolinker.link(feature.properties['Name'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['descriptio'] !== null ? autolinker.link(feature.properties['descriptio'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['gx_media_l'] !== null ? autolinker.link(feature.properties['gx_media_l'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
    var popup = layer.getPopup();
    var content = popup.getContent();
    var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
    popup.setContent(updatedContent);
}

function style_IniciativaAguapasapormiCasa_6_0() {
    return {
        pane: 'pane_IniciativaAguapasapormiCasa_6',
        radius: 4.0,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(183,72,75,1.0)',
        interactive: true,
    }
}
map.createPane('pane_IniciativaAguapasapormiCasa_6');
map.getPane('pane_IniciativaAguapasapormiCasa_6').style.zIndex = 406;
map.getPane('pane_IniciativaAguapasapormiCasa_6').style['mix-blend-mode'] = 'normal';
var layer_IniciativaAguapasapormiCasa_6 = new L.geoJson(json_IniciativaAguapasapormiCasa_6, {
    attribution: '',
    interactive: true,
    dataVar: 'json_IniciativaAguapasapormiCasa_6',
    layerName: 'layer_IniciativaAguapasapormiCasa_6',
    pane: 'pane_IniciativaAguapasapormiCasa_6',
    onEachFeature: pop_IniciativaAguapasapormiCasa_6,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_IniciativaAguapasapormiCasa_6_0(feature));
    },
});
bounds_group.addLayer(layer_IniciativaAguapasapormiCasa_6);
map.addLayer(layer_IniciativaAguapasapormiCasa_6);
function pop_BlitzNaolinco20072021_7(feature, layer) {
    layer.on({
        mouseout: function(e) {
            for (var i in e.target._eventParents) {
                if (typeof e.target._eventParents[i].resetStyle === 'function') {
                    e.target._eventParents[i].resetStyle(e.target);
                }
            }
            if (typeof layer.closePopup == 'function') {
                layer.closePopup();
            } else {
                layer.eachLayer(function(feature){
                    feature.closePopup()
                });
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['Name'] !== null ? autolinker.link(feature.properties['Name'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['descriptio'] !== null ? autolinker.link(feature.properties['descriptio'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['E__coli'] !== null ? autolinker.link(feature.properties['E__coli'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
    var popup = layer.getPopup();
    var content = popup.getContent();
    var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
    popup.setContent(updatedContent);
}

function style_BlitzNaolinco20072021_7_0() {
    return {
        pane: 'pane_BlitzNaolinco20072021_7',
        radius: 4.0,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(196,60,57,1.0)',
        interactive: true,
    }
}
map.createPane('pane_BlitzNaolinco20072021_7');
map.getPane('pane_BlitzNaolinco20072021_7').style.zIndex = 407;
map.getPane('pane_BlitzNaolinco20072021_7').style['mix-blend-mode'] = 'normal';
var layer_BlitzNaolinco20072021_7 = new L.geoJson(json_BlitzNaolinco20072021_7, {
    attribution: '',
    interactive: true,
    dataVar: 'json_BlitzNaolinco20072021_7',
    layerName: 'layer_BlitzNaolinco20072021_7',
    pane: 'pane_BlitzNaolinco20072021_7',
    onEachFeature: pop_BlitzNaolinco20072021_7,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_BlitzNaolinco20072021_7_0(feature));
    },
});
bounds_group.addLayer(layer_BlitzNaolinco20072021_7);
map.addLayer(layer_BlitzNaolinco20072021_7);
function pop_Blitz20182_8(feature, layer) {
    layer.on({
        mouseout: function(e) {
            for (var i in e.target._eventParents) {
                if (typeof e.target._eventParents[i].resetStyle === 'function') {
                    e.target._eventParents[i].resetStyle(e.target);
                }
            }
            if (typeof layer.closePopup == 'function') {
                layer.closePopup();
            } else {
                layer.eachLayer(function(feature){
                    feature.closePopup()
                });
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['Name'] !== null ? autolinker.link(feature.properties['Name'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['descriptio'] !== null ? autolinker.link(feature.properties['descriptio'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['REPRESENTA'] !== null ? autolinker.link(feature.properties['REPRESENTA'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['PROMEDIO'] !== null ? autolinker.link(feature.properties['PROMEDIO'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CATEGORIA'] !== null ? autolinker.link(feature.properties['CATEGORIA'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['gx_media_l'] !== null ? autolinker.link(feature.properties['gx_media_l'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
    var popup = layer.getPopup();
    var content = popup.getContent();
    var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
    popup.setContent(updatedContent);
}

function style_Blitz20182_8_0() {
    return {
        pane: 'pane_Blitz20182_8',
        radius: 4.0,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255,127,0,1.0)',
        interactive: true,
    }
}
map.createPane('pane_Blitz20182_8');
map.getPane('pane_Blitz20182_8').style.zIndex = 408;
map.getPane('pane_Blitz20182_8').style['mix-blend-mode'] = 'normal';
var layer_Blitz20182_8 = new L.geoJson(json_Blitz20182_8, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Blitz20182_8',
    layerName: 'layer_Blitz20182_8',
    pane: 'pane_Blitz20182_8',
    onEachFeature: pop_Blitz20182_8,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_Blitz20182_8_0(feature));
    },
});
bounds_group.addLayer(layer_Blitz20182_8);
map.addLayer(layer_Blitz20182_8);
function pop_BlitzMuestreo2018_9(feature, layer) {
    layer.on({
        mouseout: function(e) {
            for (var i in e.target._eventParents) {
                if (typeof e.target._eventParents[i].resetStyle === 'function') {
                    e.target._eventParents[i].resetStyle(e.target);
                }
            }
            if (typeof layer.closePopup == 'function') {
                layer.closePopup();
            } else {
                layer.eachLayer(function(feature){
                    feature.closePopup()
                });
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['Name'] !== null ? autolinker.link(feature.properties['Name'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['descriptio'] !== null ? autolinker.link(feature.properties['descriptio'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['REPRESENTA'] !== null ? autolinker.link(feature.properties['REPRESENTA'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['PROMEDIO'] !== null ? autolinker.link(feature.properties['PROMEDIO'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CATEGORIA'] !== null ? autolinker.link(feature.properties['CATEGORIA'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['gx_media_l'] !== null ? autolinker.link(feature.properties['gx_media_l'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
    var popup = layer.getPopup();
    var content = popup.getContent();
    var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
    popup.setContent(updatedContent);
}

function style_BlitzMuestreo2018_9_0() {
    return {
        pane: 'pane_BlitzMuestreo2018_9',
        radius: 4.0,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(183,72,75,1.0)',
        interactive: true,
    }
}
map.createPane('pane_BlitzMuestreo2018_9');
map.getPane('pane_BlitzMuestreo2018_9').style.zIndex = 409;
map.getPane('pane_BlitzMuestreo2018_9').style['mix-blend-mode'] = 'normal';
var layer_BlitzMuestreo2018_9 = new L.geoJson(json_BlitzMuestreo2018_9, {
    attribution: '',
    interactive: true,
    dataVar: 'json_BlitzMuestreo2018_9',
    layerName: 'layer_BlitzMuestreo2018_9',
    pane: 'pane_BlitzMuestreo2018_9',
    onEachFeature: pop_BlitzMuestreo2018_9,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_BlitzMuestreo2018_9_0(feature));
    },
});
bounds_group.addLayer(layer_BlitzMuestreo2018_9);
map.addLayer(layer_BlitzMuestreo2018_9);
function pop_BlitzMuestreo2010_10(feature, layer) {
    layer.on({
        mouseout: function(e) {
            for (var i in e.target._eventParents) {
                if (typeof e.target._eventParents[i].resetStyle === 'function') {
                    e.target._eventParents[i].resetStyle(e.target);
                }
            }
            if (typeof layer.closePopup == 'function') {
                layer.closePopup();
            } else {
                layer.eachLayer(function(feature){
                    feature.closePopup()
                });
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['Name'] !== null ? autolinker.link(feature.properties['Name'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['descriptio'] !== null ? autolinker.link(feature.properties['descriptio'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['REPRESENTA'] !== null ? autolinker.link(feature.properties['REPRESENTA'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['PROMEDIO'] !== null ? autolinker.link(feature.properties['PROMEDIO'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CATEGORIA'] !== null ? autolinker.link(feature.properties['CATEGORIA'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['gx_media_l'] !== null ? autolinker.link(feature.properties['gx_media_l'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
    var popup = layer.getPopup();
    var content = popup.getContent();
    var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
    popup.setContent(updatedContent);
}

function style_BlitzMuestreo2010_10_0() {
    return {
        pane: 'pane_BlitzMuestreo2010_10',
        radius: 4.0,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(141,90,153,1.0)',
        interactive: true,
    }
}
map.createPane('pane_BlitzMuestreo2010_10');
map.getPane('pane_BlitzMuestreo2010_10').style.zIndex = 410;
map.getPane('pane_BlitzMuestreo2010_10').style['mix-blend-mode'] = 'normal';
var layer_BlitzMuestreo2010_10 = new L.geoJson(json_BlitzMuestreo2010_10, {
    attribution: '',
    interactive: true,
    dataVar: 'json_BlitzMuestreo2010_10',
    layerName: 'layer_BlitzMuestreo2010_10',
    pane: 'pane_BlitzMuestreo2010_10',
    onEachFeature: pop_BlitzMuestreo2010_10,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_BlitzMuestreo2010_10_0(feature));
    },
});
bounds_group.addLayer(layer_BlitzMuestreo2010_10);
map.addLayer(layer_BlitzMuestreo2010_10);
function pop_REPDA20213Concesiones12mpiosregionxalapa_11(feature, layer) {
    layer.on({
        mouseout: function(e) {
            for (var i in e.target._eventParents) {
                if (typeof e.target._eventParents[i].resetStyle === 'function') {
                    e.target._eventParents[i].resetStyle(e.target);
                }
            }
            if (typeof layer.closePopup == 'function') {
                layer.closePopup();
            } else {
                layer.eachLayer(function(feature){
                    feature.closePopup()
                });
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['Tipo aprov'] !== null ? autolinker.link(feature.properties['Tipo aprov'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Titular'] !== null ? autolinker.link(feature.properties['Titular'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
    var popup = layer.getPopup();
    var content = popup.getContent();
    var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
    popup.setContent(updatedContent);
}

function style_REPDA20213Concesiones12mpiosregionxalapa_11_0(feature) {
    switch(String(feature.properties['Tipo aprov'])) {
        default:
            return {
        pane: 'pane_REPDA20213Concesiones12mpiosregionxalapa_11',
        radius: 4.0,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(17,230,134,1.0)',
        interactive: true,
    }
            break;
        case 'DESCARGA':
            return {
        pane: 'pane_REPDA20213Concesiones12mpiosregionxalapa_11',
        shape: 'triangle',
        radius: 8.0,
        opacity: 1,
        color: 'rgba(50,87,128,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 2.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(158,103,36,1.0)',
        interactive: true,
    }
            break;
        case 'SUBTERRANEO':
            return {
        pane: 'pane_REPDA20213Concesiones12mpiosregionxalapa_11',
        radius: 4.0,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(57,38,144,1.0)',
        interactive: true,
    }
            break;
        case 'SUPERFICIAL':
            return {
        pane: 'pane_REPDA20213Concesiones12mpiosregionxalapa_11',
        radius: 8.0,
        opacity: 1,
        color: 'rgba(0,0,0,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 2.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(29,149,240,1.0)',
        interactive: true,
    }
            break;
        case 'ZONA FEDERAL':
            return {
        pane: 'pane_REPDA20213Concesiones12mpiosregionxalapa_11',
        radius: 4.0,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(205,219,133,1.0)',
        interactive: true,
    }
            break;
    }
}
map.createPane('pane_REPDA20213Concesiones12mpiosregionxalapa_11');
map.getPane('pane_REPDA20213Concesiones12mpiosregionxalapa_11').style.zIndex = 411;
map.getPane('pane_REPDA20213Concesiones12mpiosregionxalapa_11').style['mix-blend-mode'] = 'normal';
var layer_REPDA20213Concesiones12mpiosregionxalapa_11 = new L.geoJson(json_REPDA20213Concesiones12mpiosregionxalapa_11, {
    attribution: '',
    interactive: true,
    dataVar: 'json_REPDA20213Concesiones12mpiosregionxalapa_11',
    layerName: 'layer_REPDA20213Concesiones12mpiosregionxalapa_11',
    pane: 'pane_REPDA20213Concesiones12mpiosregionxalapa_11',
    onEachFeature: pop_REPDA20213Concesiones12mpiosregionxalapa_11,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_REPDA20213Concesiones12mpiosregionxalapa_11_0(feature));
    },
});
bounds_group.addLayer(layer_REPDA20213Concesiones12mpiosregionxalapa_11);
map.addLayer(layer_REPDA20213Concesiones12mpiosregionxalapa_11);
function pop_mpioszonacentralver_12(feature, layer) {
    layer.on({
        mouseout: function(e) {
            for (var i in e.target._eventParents) {
                if (typeof e.target._eventParents[i].resetStyle === 'function') {
                    e.target._eventParents[i].resetStyle(e.target);
                }
            }
            if (typeof layer.closePopup == 'function') {
                layer.closePopup();
            } else {
                layer.eachLayer(function(feature){
                    feature.closePopup()
                });
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['CVEGEO'] !== null ? autolinker.link(feature.properties['CVEGEO'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['NOMGEO'] !== null ? autolinker.link(feature.properties['NOMGEO'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Liga'] !== null ? autolinker.link(feature.properties['Liga'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
    var popup = layer.getPopup();
    var content = popup.getContent();
    var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
    popup.setContent(updatedContent);
}

function style_mpioszonacentralver_12_0() {
    return {
        pane: 'pane_mpioszonacentralver_12',
        opacity: 1,
        color: 'rgba(171,15,168,1.0)',
        dashArray: '8.0,4.0,2.0,4.0',
        lineCap: 'square',
        lineJoin: 'bevel',
        weight: 2.0,
        fillOpacity: 0,
        interactive: true,
    }
}
map.createPane('pane_mpioszonacentralver_12');
map.getPane('pane_mpioszonacentralver_12').style.zIndex = 412;
map.getPane('pane_mpioszonacentralver_12').style['mix-blend-mode'] = 'normal';
var layer_mpioszonacentralver_12 = new L.geoJson(json_mpioszonacentralver_12, {
    attribution: '',
    interactive: true,
    dataVar: 'json_mpioszonacentralver_12',
    layerName: 'layer_mpioszonacentralver_12',
    pane: 'pane_mpioszonacentralver_12',
    onEachFeature: pop_mpioszonacentralver_12,
    style: style_mpioszonacentralver_12_0,
});
bounds_group.addLayer(layer_mpioszonacentralver_12);
map.addLayer(layer_mpioszonacentralver_12);
function pop_CuencascentroVeracruzcuencascentrovershp_13(feature, layer) {
    layer.on({
        mouseout: function(e) {
            for (var i in e.target._eventParents) {
                if (typeof e.target._eventParents[i].resetStyle === 'function') {
                    e.target._eventParents[i].resetStyle(e.target);
                }
            }
            if (typeof layer.closePopup == 'function') {
                layer.closePopup();
            } else {
                layer.eachLayer(function(feature){
                    feature.closePopup()
                });
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['TOPONIMO'] !== null ? autolinker.link(feature.properties['TOPONIMO'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
    var popup = layer.getPopup();
    var content = popup.getContent();
    var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
    popup.setContent(updatedContent);
}

function style_CuencascentroVeracruzcuencascentrovershp_13_0() {
    return {
        pane: 'pane_CuencascentroVeracruzcuencascentrovershp_13',
        opacity: 1,
        color: 'rgba(247,91,48,1.0)',
        dashArray: '20.0,10.0,5.0,10.0,5.0,10.0',
        lineCap: 'square',
        lineJoin: 'bevel',
        weight: 5.0,
        fillOpacity: 0,
        interactive: true,
    }
}
map.createPane('pane_CuencascentroVeracruzcuencascentrovershp_13');
map.getPane('pane_CuencascentroVeracruzcuencascentrovershp_13').style.zIndex = 413;
map.getPane('pane_CuencascentroVeracruzcuencascentrovershp_13').style['mix-blend-mode'] = 'screen';
var layer_CuencascentroVeracruzcuencascentrovershp_13 = new L.geoJson(json_CuencascentroVeracruzcuencascentrovershp_13, {
    attribution: '',
    interactive: true,
    dataVar: 'json_CuencascentroVeracruzcuencascentrovershp_13',
    layerName: 'layer_CuencascentroVeracruzcuencascentrovershp_13',
    pane: 'pane_CuencascentroVeracruzcuencascentrovershp_13',
    onEachFeature: pop_CuencascentroVeracruzcuencascentrovershp_13,
    style: style_CuencascentroVeracruzcuencascentrovershp_13_0,
});
bounds_group.addLayer(layer_CuencascentroVeracruzcuencascentrovershp_13);
map.addLayer(layer_CuencascentroVeracruzcuencascentrovershp_13);
function pop_Hidrologacentrover_14(feature, layer) {
    layer.on({
        mouseout: function(e) {
            for (var i in e.target._eventParents) {
                if (typeof e.target._eventParents[i].resetStyle === 'function') {
                    e.target._eventParents[i].resetStyle(e.target);
                }
            }
            if (typeof layer.closePopup == 'function') {
                layer.closePopup();
            } else {
                layer.eachLayer(function(feature){
                    feature.closePopup()
                });
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['TIPO'] !== null ? autolinker.link(feature.properties['TIPO'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
    var popup = layer.getPopup();
    var content = popup.getContent();
    var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
    popup.setContent(updatedContent);
}

function style_Hidrologacentrover_14_0() {
    return {
        pane: 'pane_Hidrologacentrover_14',
        opacity: 1,
        color: 'rgba(72,111,183,1.0)',
        dashArray: '',
        lineCap: 'square',
        lineJoin: 'bevel',
        weight: 2.0,
        fillOpacity: 0,
        interactive: true,
    }
}
map.createPane('pane_Hidrologacentrover_14');
map.getPane('pane_Hidrologacentrover_14').style.zIndex = 414;
map.getPane('pane_Hidrologacentrover_14').style['mix-blend-mode'] = 'normal';
var layer_Hidrologacentrover_14 = new L.geoJson(json_Hidrologacentrover_14, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Hidrologacentrover_14',
    layerName: 'layer_Hidrologacentrover_14',
    pane: 'pane_Hidrologacentrover_14',
    onEachFeature: pop_Hidrologacentrover_14,
    style: style_Hidrologacentrover_14_0,
});
bounds_group.addLayer(layer_Hidrologacentrover_14);
map.addLayer(layer_Hidrologacentrover_14);
map.on("zoomend", function(e) {
    if (map.getZoom() <= 19 && map.getZoom() >= 2) {
        map.addLayer(layer_ANPParqueLinealQuetzalapanSedeoANPParque_LinealQuetzalapanSedeo_2);
    } else if (map.getZoom() > 19 || map.getZoom() < 2) {
        map.removeLayer(layer_ANPParqueLinealQuetzalapanSedeoANPParque_LinealQuetzalapanSedeo_2);
    }
});
    if (map.getZoom() <= 19 && map.getZoom() >= 2) {
        map.addLayer(layer_ANPParqueLinealQuetzalapanSedeoANPParque_LinealQuetzalapanSedeo_2);
    } else if (map.getZoom() > 19 || map.getZoom() < 2) {
        map.removeLayer(layer_ANPParqueLinealQuetzalapanSedeoANPParque_LinealQuetzalapanSedeo_2);
    }
    var title = new L.Control();
    title.onAdd = function (map) {
        this._div = L.DomUtil.create('div', 'info');
        this.update();
        return this._div;
    };
    title.update = function () {
        this._div.innerHTML = '<h2>SIG Guardianes</h2>';
    };
    title.addTo(map);
var baseMaps = {};
var overlaysTree = [
    {label: '<img src="w/themes/custom/asamblea/mapa_guardianxs/legend/Hidrologacentrover_14.png" width="5px" height=auto /> Hidrología centro Veracruz', layer: layer_Hidrologacentrover_14},
    {label: '<img src="w/themes/custom/asamblea/mapa_guardianxs/legend/CuencascentroVeracruzcuencascentrovershp_13.png" width="5px" height=auto /> Cuencas centro Veracruz', layer: layer_CuencascentroVeracruzcuencascentrovershp_13},
    {label: '<img src="w/themes/custom/asamblea/mapa_guardianxs/legend/mpioszonacentralver_12.png"width="5px" height=auto /> Municipios zona central Veracruz', layer: layer_mpioszonacentralver_12},
    {label: 'REPDA 2021 Concesiones región Xalapa<br /><table><tr><td style="text-align: center;"><img src="w/themes/custom/asamblea/mapa_guardianxs/legend/REPDA20213Concesiones12mpiosregionxalapa_11_DESCARGA1.png" width="5px" height=auto /></td><td>DESCARGA</td></tr><tr><td style="text-align: center;"><img src="w/themes/custom/asamblea/mapa_guardianxs/legend/REPDA20213Concesiones12mpiosregionxalapa_11_SUBTERRANEO2.png" width="5px" height=auto/></td><td>SUBTERRANEO</td></tr><tr><td style="text-align: center;"><img src="/web/themes/custom/asamblea/mapa_guardianxs/legend/REPDA20213Concesiones12mpiosregionxalapa_11_SUPERFICIAL3.png" /></td><td>SUPERFICIAL</td></tr><tr><td style="text-align: center;"><img src="/web/themes/custom/asamblea/mapa_guardianxs/legend/REPDA20213Concesiones12mpiosregionxalapa_11_ZONAFEDERAL4.png" /></td><td>ZONA FEDERAL</td></tr></table>', layer: layer_REPDA20213Concesiones12mpiosregionxalapa_11},
{label: '<b>Monitoreo calidad del agua -GWW</b>', selectAllCheckbox: true, children: [
    {label: '<img src="w/themes/custom/asamblea/mapa_guardianxs/legend/BlitzMuestreo2010_10.png" width="5px" height=auto /> Blitz Muestreo 2010', layer: layer_BlitzMuestreo2010_10},
    {label: '<img src="w/themes/custom/asamblea/mapa_guardianxs/legend/BlitzMuestreo2018_9.png" width="5px" height=auto /> Blitz Muestreo 2018', layer: layer_BlitzMuestreo2018_9},
    {label: '<img src="w/themes/custom/asamblea/mapa_guardianxs/legend/Blitz20182_8.png" width="5px" height=auto /> Blitz 2018-2', layer: layer_Blitz20182_8},
    {label: '<img src="w/themes/custom/asamblea/mapa_guardianxs/legend/BlitzNaolinco20072021_7.png" width="5px" height=auto /> Blitz Naolinco 2007-2021', layer: layer_BlitzNaolinco20072021_7},]},
{label: '<b>Acciones por el agua</b>', selectAllCheckbox: true, children: [
    {label: '<img src="web/themes/custom/asamblea/mapa_guardianxs/legend/IniciativaAguapasapormiCasa_6.png" width="5px" height=auto /> Iniciativa Agua pasa por mi Casa', layer: layer_IniciativaAguapasapormiCasa_6},
    {label: '<img src="web/themes/custom/asamblea/mapa_guardianxs/legend/RecorridosManantialesenlaarena_5.png" width="5px" height=auto /> Recorridos Manantiales en la arena', layer: layer_RecorridosManantialesenlaarena_5},]},
{label: '<b>ANPs</b>', selectAllCheckbox: true, children: [
    {label: '<img src="web/themes/custom/asamblea/mapa_guardianxs/legend/CofrePerote1937_4.png" width="5px" height=auto /> Cofre de Perote 1937', layer: layer_CofrePerote1937_4},
    {label: '<img src="web/themes/custom/asamblea/mapa_guardianxs/legend/AchipilagodeBosquesySelvasdelaReginCapitalANPArchipelagodeBosquesySelvasdelaReginCapital_3.png" width="5px" height=auto /> ANP Arch. de Bosques y Selvas Región Capital', layer: layer_AchipilagodeBosquesySelvasdelaReginCapitalANPArchipelagodeBosquesySelvasdelaReginCapital_3},
    {label: '<img src="web/themes/custom/asamblea/mapa_guardianxs/legend/ANPParqueLinealQuetzalapanSedeoANPParque_LinealQuetzalapanSedeo_2.png" width="5px" height=auto/> ANP Parque Lineal Quetzalapan-Sedeño', layer: layer_ANPParqueLinealQuetzalapanSedeoANPParque_LinealQuetzalapanSedeo_2},]},
    {label: "OpenStreetMap", layer: layer_OpenStreetMap_1},
    {label: "ESRI Satellite", layer: layer_ESRISatellite_0},]
var lay = L.control.layers.tree(null, overlaysTree,{
    //namedToggle: true,
    //selectorBack: false,
    //closedSymbol: '&#8862; &#x1f5c0;',
    //openedSymbol: '&#8863; &#x1f5c1;',
    //collapseAll: 'Collapse all',
    //expandAll: 'Expand all',
    collapsed: false,
});
lay.addTo(map);
setBounds();
var i = 0;
layer_CofrePerote1937_4.eachLayer(function(layer) {
    var context = {
        feature: layer.feature,
        variables: {}
    };
    layer.bindTooltip((layer.feature.properties['NOMBRE'] !== null?String('<div style="color: #b4ba0e; font-size: 12pt; font-family: \'Open Sans\', sans-serif;">' + layer.feature.properties['NOMBRE']) + '</div>':''), {permanent: true, offset: [-0, -16], className: 'css_CofrePerote1937_4'});
    labels.push(layer);
    totalMarkers += 1;
        layer.added = true;
        addLabel(layer, i);
        i++;
});
var i = 0;
layer_mpioszonacentralver_12.eachLayer(function(layer) {
    var context = {
        feature: layer.feature,
        variables: {}
    };
    layer.bindTooltip((layer.feature.properties['NOMGEO'] !== null?String('<div style="color: #c036bb; font-size: 10pt; font-family: \'Open Sans\', sans-serif;">' + layer.feature.properties['NOMGEO']) + '</div>':''), {permanent: true, offset: [-0, -16], className: 'css_mpioszonacentralver_12'});
    labels.push(layer);
    totalMarkers += 1;
        layer.added = true;
        addLabel(layer, i);
        i++;
});
var i = 0;
layer_CuencascentroVeracruzcuencascentrovershp_13.eachLayer(function(layer) {
    var context = {
        feature: layer.feature,
        variables: {}
    };
    layer.bindTooltip((layer.feature.properties['TOPONIMO'] !== null?String('<div style="color: #f2b946; font-size: 10pt; font-family: \'Open Sans\', sans-serif;">' + layer.feature.properties['TOPONIMO']) + '</div>':''), {permanent: true, offset: [-0, -16], className: 'css_CuencascentroVeracruzcuencascentrovershp_13'});
    labels.push(layer);
    totalMarkers += 1;
        layer.added = true;
        addLabel(layer, i);
        i++;
});
resetLabels([layer_CofrePerote1937_4,layer_BlitzMuestreo2010_10,layer_mpioszonacentralver_12,layer_CuencascentroVeracruzcuencascentrovershp_13]);
map.on("zoomend", function(){
    resetLabels([layer_CofrePerote1937_4,layer_BlitzMuestreo2010_10,layer_mpioszonacentralver_12,layer_CuencascentroVeracruzcuencascentrovershp_13]);
});
map.on("layeradd", function(){
    resetLabels([layer_CofrePerote1937_4,layer_BlitzMuestreo2010_10,layer_mpioszonacentralver_12,layer_CuencascentroVeracruzcuencascentrovershp_13]);
});
map.on("layerremove", function(){
    resetLabels([layer_CofrePerote1937_4,layer_BlitzMuestreo2010_10,layer_mpioszonacentralver_12,layer_CuencascentroVeracruzcuencascentrovershp_13]);
});
