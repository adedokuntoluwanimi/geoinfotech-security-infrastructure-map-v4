var size = 0;
var placement = 'point';

var style_RiskIndex_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("risk_score");
    var labelFont = "13.0px 'Open Sans', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';

    if ("" !== null) {
        labelText = String("");
    }

    // 33 – 190
    if (value >= 33.000000 && value <= 189.600000) {
        style = [ new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'rgba(35,35,35,1.0)',
                lineDash: null,
                lineCap: 'butt',
                lineJoin: 'miter',
                width: 0.988
            }),
            fill: new ol.style.Fill({
                color: 'rgba(255,204,188,1.0)'
            }),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                                  labelFill, placement, bufferColor,
                                  bufferWidth)
        })];

    // 190 – 390
    } else if (value >= 189.600000 && value <= 389.800000) {
        style = [ new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'rgba(35,35,35,1.0)',
                lineDash: null,
                lineCap: 'butt',
                lineJoin: 'miter',
                width: 0.988
            }),
            fill: new ol.style.Fill({
                color: 'rgba(255,155,123,1.0)'
            }),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                                  labelFill, placement, bufferColor,
                                  bufferWidth)
        })];

    // 390 – 889
    } else if (value >= 389.800000 && value <= 889.200000) {
        style = [ new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'rgba(35,35,35,1.0)',
                lineDash: null,
                lineCap: 'butt',
                lineJoin: 'miter',
                width: 0.988
            }),
            fill: new ol.style.Fill({
                color: 'rgba(255,96,77,1.0)'
            }),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                                  labelFill, placement, bufferColor,
                                  bufferWidth)
        })];

    // 889 – 3757
    } else if (value >= 889.200000 && value <= 3756.800000) {
        style = [ new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'rgba(35,35,35,1.0)',
                lineDash: null,
                lineCap: 'butt',
                lineJoin: 'miter',
                width: 0.988
            }),
            fill: new ol.style.Fill({
                color: 'rgba(220,45,45,1.0)'
            }),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                                  labelFill, placement, bufferColor,
                                  bufferWidth)
        })];

    // 3757 – 2807984
    } else if (value >= 3756.800000 && value <= 2807984.000000) {
        style = [ new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'rgba(128,14,16,1.0)',
                lineDash: null,
                lineCap: 'butt',
                lineJoin: 'miter',
                width: 0.988
            }),
            fill: new ol.style.Fill({
                color: 'rgba(153,0,0,1.0)'
            }),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                                  labelFill, placement, bufferColor,
                                  bufferWidth)
        })];
    }

    return style;
};
