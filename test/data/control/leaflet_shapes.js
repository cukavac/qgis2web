<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="initial-scale=1,user-scalable=no,maximum-scale=1,width=device-width">
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <link rel="stylesheet" href="css/leaflet.css">
        <link rel="stylesheet" href="css/qgis2web.css">
        <style>
        html, body, #map {
            width: 100%;
            height: 100%;
            padding: 0;
            margin: 0;
        }
        </style>
        <title></title>
    </head>
    <body>
        <div id="map">
        </div>
        <script src="js/qgis2web_expressions.js"></script>
        <script src="js/leaflet.js"></script>
        <script src="js/leaflet-svg-shape-markers.min.js"></script>
        <script src="js/leaflet.rotatedMarker.js"></script>
        <script src="js/leaflet.pattern.js"></script>
        <script src="js/leaflet-hash.js"></script>
        <script src="js/Autolinker.min.js"></script>
        <script src="js/rbush.min.js"></script>
        <script src="js/labelgun.min.js"></script>
        <script src="js/labels.js"></script>
        <script src="data/airports0.js"></script>
        <script>
        var map = L.map('map', {
            zoomControl:true, maxZoom:28, minZoom:1
        })
        var hash = new L.Hash(map);
        map.attributionControl.addAttribution('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a>');
        var bounds_group = new L.featureGroup([]);
        function setBounds() {
            if (bounds_group.getLayers().length) {
                map.fitBounds(bounds_group.getBounds());
            }
        }
        function pop_airports0(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['ID'] !== null ? Autolinker.link(String(feature.properties['ID'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['fk_region'] !== null ? Autolinker.link(String(feature.properties['fk_region'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['ELEV'] !== null ? Autolinker.link(String(feature.properties['ELEV'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['NAME'] !== null ? Autolinker.link(String(feature.properties['NAME'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['USE'] !== null ? Autolinker.link(String(feature.properties['USE'])) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent);
        }

        function style_airports0_0(feature) {
            switch(feature.properties['NAME'].toString()) {
                case 'ALLEN AAF':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(32,224,176,1.0)',
            }
                    break;
                case 'AMBLER':
                    return {
                pane: 'pane_airports0',
                shape: 'square',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(215,126,151,1.0)',
            }
                    break;
                case 'ANCHORAGE INTL':
                    return {
                pane: 'pane_airports0',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(229,153,125,1.0)',
            }
                    break;
                case 'ANIAK':
                    return {
                pane: 'pane_airports0',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(146,20,219,1.0)',
            }
                    break;
                case 'ANNETTE ISLAND':
                    return {
                pane: 'pane_airports0',
                shape: 'triangle',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(177,129,228,1.0)',
            }
                    break;
                case 'ANVIK':
                    return {
                pane: 'pane_airports0',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(200,169,27,1.0)',
            }
                    break;
                case 'ATKA':
                    return {
                pane: 'pane_airports0',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(215,76,213,1.0)',
            }
                    break;
                case 'BETHEL':
                    return {
                pane: 'pane_airports0',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(115,212,128,1.0)',
            }
                    break;
                case 'BETTLES':
                    return {
                pane: 'pane_airports0',
                shape: 'x',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(109,219,166,1.0)',
            }
                    break;
                case 'BIG LAKE':
                    return {
                pane: 'pane_airports0',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(108,42,206,1.0)',
            }
                    break;
                case 'BIG MOUNTAIN AFS':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(226,234,63,1.0)',
            }
                    break;
                case 'BRYANT AHP':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(207,202,57,1.0)',
            }
                    break;
                case 'BUCKLAND':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(180,200,24,1.0)',
            }
                    break;
                case 'CAPE NEWENHAM LRRS':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(227,151,134,1.0)',
            }
                    break;
                case 'CAPE ROMANZOF LRRS':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(114,142,208,1.0)',
            }
                    break;
                case 'CLEAR':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(106,146,211,1.0)',
            }
                    break;
                case 'COLD BAY':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(44,195,240,1.0)',
            }
                    break;
                case 'DILLINGHAM':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(238,131,177,1.0)',
            }
                    break;
                case 'EDWARD G PITKA SR':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(204,20,13,1.0)',
            }
                    break;
                case 'EIELSON AFB':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(103,203,220,1.0)',
            }
                    break;
                case 'ELMENDORF AFB':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(225,153,18,1.0)',
            }
                    break;
                case 'EMMONAK':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(220,77,58,1.0)',
            }
                    break;
                case 'FAIRBANKS INTL':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(64,209,161,1.0)',
            }
                    break;
                case 'FORT YUKON':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(171,240,146,1.0)',
            }
                    break;
                case 'GAMBELL':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(142,109,212,1.0)',
            }
                    break;
                case 'GRANITE MOUNTAIN AFS':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(238,99,148,1.0)',
            }
                    break;
                case 'GULKANA':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(195,90,200,1.0)',
            }
                    break;
                case 'GUSTAVUS':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(222,42,63,1.0)',
            }
                    break;
                case 'HAINES':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(63,60,209,1.0)',
            }
                    break;
                case 'HOMER':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(202,66,239,1.0)',
            }
                    break;
                case 'HOONAH':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(59,216,214,1.0)',
            }
                    break;
                case 'ILIAMNA':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(200,92,216,1.0)',
            }
                    break;
                case 'INDIAN MOUNTAIN LRRS':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(19,165,232,1.0)',
            }
                    break;
                case 'KAKE':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(200,31,39,1.0)',
            }
                    break;
                case 'KALAKAKET CREEK  AS':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(212,50,145,1.0)',
            }
                    break;
                case 'KENAI MUNI':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(129,213,46,1.0)',
            }
                    break;
                case 'KING SALMON':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(210,105,30,1.0)',
            }
                    break;
                case 'KLAWOCK':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(139,233,174,1.0)',
            }
                    break;
                case 'KODIAK':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(137,213,36,1.0)',
            }
                    break;
                case 'KOYUK':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(97,170,233,1.0)',
            }
                    break;
                case 'MC GRATH':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(136,236,226,1.0)',
            }
                    break;
                case 'MEKORYUK':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(117,208,51,1.0)',
            }
                    break;
                case 'MERLE K MUDHOLE SMITH':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(219,144,68,1.0)',
            }
                    break;
                case 'MERRILL FLD':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(216,98,159,1.0)',
            }
                    break;
                case 'MINCHUMINA':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(137,127,239,1.0)',
            }
                    break;
                case 'MOSES POINT':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(105,148,200,1.0)',
            }
                    break;
                case 'NENANA MUNI':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(156,83,215,1.0)',
            }
                    break;
                case 'NIKOLSKI AS':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(23,202,172,1.0)',
            }
                    break;
                case 'NOATAK':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(212,82,180,1.0)',
            }
                    break;
                case 'NOME':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(207,196,111,1.0)',
            }
                    break;
                case 'NORTHWAY':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(97,225,68,1.0)',
            }
                    break;
                case 'PALMER MUNI':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(72,200,98,1.0)',
            }
                    break;
                case 'PETERSBURG JAMES A JOHNSON':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(115,205,112,1.0)',
            }
                    break;
                case 'PORT CLARENCE CGS':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(115,205,112,1.0)',
            }
                    break;
                case 'PORT HEIDEN':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(183,220,36,1.0)',
            }
                    break;
                case 'RALPH M CALHOUN':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(112,94,205,1.0)',
            }
                    break;
                case 'RALPH WIEN MEM':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(22,217,77,1.0)',
            }
                    break;
                case 'SAVOONGA':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(114,82,211,1.0)',
            }
                    break;
                case 'SELAWIK':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(214,120,205,1.0)',
            }
                    break;
                case 'SEWARD':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(222,113,202,1.0)',
            }
                    break;
                case 'SKAGWAY':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(219,176,115,1.0)',
            }
                    break;
                case 'SOLDOTNA':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(92,221,78,1.0)',
            }
                    break;
                case 'SPARREVOHN LRRS':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(17,47,217,1.0)',
            }
                    break;
                case 'ST GEORGE':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(69,237,142,1.0)',
            }
                    break;
                case 'ST MARYS':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(182,235,83,1.0)',
            }
                    break;
                case 'ST PAUL ISLAND':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(200,235,109,1.0)',
            }
                    break;
                case 'TALKEETNA':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(53,158,223,1.0)',
            }
                    break;
                case 'TANACROSS':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(47,236,56,1.0)',
            }
                    break;
                case 'TATALINA LRRS':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(74,236,171,1.0)',
            }
                    break;
                case 'TIN CITY LRRS':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(122,200,82,1.0)',
            }
                    break;
                case 'UNALAKLEET':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(22,35,215,1.0)',
            }
                    break;
                case 'UNALASKA':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(218,88,18,1.0)',
            }
                    break;
                case 'VALDEZ':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(164,74,200,1.0)',
            }
                    break;
                case 'WAINWRIGHT AAF':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(224,198,124,1.0)',
            }
                    break;
                case 'WRANGELL':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(45,194,207,1.0)',
            }
                    break;
                case 'YAKUTAT':
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(234,122,197,1.0)',
            }
                    break;
                default:
                    return {
                pane: 'pane_airports0',
                shape: 'diamond',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fillOpacity: 1,
                fillColor: 'rgba(96,119,201,1.0)',
            }
                    break;
            }
        }
        map.createPane('pane_airports0');
        map.getPane('pane_airports0').style.zIndex = 400;
        map.getPane('pane_airports0').style['mix-blend-mode'] = 'normal';
        var layer_airports0 = new L.geoJson(json_airports0, {
            attribution: '<a href=""></a>',
            pane: 'pane_airports0',
            onEachFeature: pop_airports0,
            pointToLayer: function (feature, latlng) {
                var context = {
                    feature: feature,
                    variables: {}
                };
                return L.shapeMarker(latlng, style_airports0_0(feature));
            },
        });
        bounds_group.addLayer(layer_airports0);
        map.addLayer(layer_airports0);
        setBounds();
        </script>
    </body>
</html>
