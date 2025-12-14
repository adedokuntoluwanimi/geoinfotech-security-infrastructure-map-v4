var wms_layers = [];



// OpenStreetMap
var osmBase = new ol.layer.Tile({
    title: 'OpenStreetMap',
    type: 'base',
    visible: false,
    source: new ol.source.OSM()
});

// Esri World Street Map
var esriStreet = new ol.layer.Tile({
    title: 'Esri Street',
    type: 'base',
    visible: true,
    source: new ol.source.XYZ({
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
        attributions: 'Tiles © Esri'
    })
});


var format_WardBoundaries_0 = new ol.format.GeoJSON();
var features_WardBoundaries_0 = format_WardBoundaries_0.readFeatures(json_WardBoundaries_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WardBoundaries_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WardBoundaries_0.addFeatures(features_WardBoundaries_0);
var lyr_WardBoundaries_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WardBoundaries_0, 
                style: style_WardBoundaries_0,
                popuplayertitle: 'Ward Boundaries',
                interactive: true,
                title: '<img src="styles/legend/WardBoundaries_0.png" /> Ward Boundaries'
            });
var format_RiskIndex_1 = new ol.format.GeoJSON();
var features_RiskIndex_1 = format_RiskIndex_1.readFeatures(json_RiskIndex_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiskIndex_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiskIndex_1.addFeatures(features_RiskIndex_1);
var lyr_RiskIndex_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiskIndex_1, 
                style: style_RiskIndex_1,
                popuplayertitle: 'Risk Index',
                interactive: true,
    title: 'Risk Index<br />\
    <img src="styles/legend/RiskIndex_1_0.png" /> 33 - 190<br />\
    <img src="styles/legend/RiskIndex_1_1.png" /> 190 - 390<br />\
    <img src="styles/legend/RiskIndex_1_2.png" /> 390 - 889<br />\
    <img src="styles/legend/RiskIndex_1_3.png" /> 889 - 3757<br />\
    <img src="styles/legend/RiskIndex_1_4.png" /> 3757 - 2807984<br />' });
var format_MajorRoads_2 = new ol.format.GeoJSON();
var features_MajorRoads_2 = format_MajorRoads_2.readFeatures(json_MajorRoads_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MajorRoads_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MajorRoads_2.addFeatures(features_MajorRoads_2);
var lyr_MajorRoads_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MajorRoads_2, 
                style: style_MajorRoads_2,
                popuplayertitle: 'Major Roads',
                interactive: true,
                title: '<img src="styles/legend/MajorRoads_2.png" /> Major Roads'
            });

lyr_WardBoundaries_0.setVisible(true);lyr_RiskIndex_1.setVisible(true);lyr_MajorRoads_2.setVisible(true);
var layersList = [
    esriStreet,
    osmBase,
    lyr_WardBoundaries_0,
    lyr_RiskIndex_1,
    lyr_MajorRoads_2
];

lyr_WardBoundaries_0.set('fieldAliases', {'FID': 'FID', 'globalid': 'globalid', 'uniq_id': 'uniq_id', 'timestamp': 'timestamp', 'editor': 'editor', 'wardname': 'wardname', 'wardcode': 'wardcode', 'lganame': 'lganame', 'lgacode': 'lgacode', 'statename': 'statename', 'statecode': 'statecode', 'amapcode': 'amapcode', 'status': 'status', 'source': 'source', 'urban': 'urban', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'road_risk': 'road_risk', 'policerisk': 'policerisk', 'milirisk': 'milirisk', 'crimeclean': 'crimeclean', 'final_risk': 'final_risk', });
lyr_RiskIndex_1.set('fieldAliases', {'fid': 'fid', 'globalid': 'globalid', 'uniq_id': 'uniq_id', 'timestamp': 'timestamp', 'editor': 'editor', 'wardname': 'wardname', 'wardcode': 'wardcode', 'lganame': 'lganame', 'lgacode': 'lgacode', 'statecode': 'statecode', 'amapcode': 'amapcode', 'status': 'status', 'source': 'source', 'urban': 'urban', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'statename': 'statename', 'summary_total_num': 'summary_total_num', 'lu_group_count': 'lu_group_count', 'lu_group_min': 'lu_group_min', 'lu_group_max': 'lu_group_max', 'pop_proxy': 'pop_proxy', 'crime_norm': 'crime_norm', 'fid_count': 'fid_count', 'globalid_count': 'globalid_count', 'uniq_id_count': 'uniq_id_count', 'timestamp_count': 'timestamp_count', 'editor_count': 'editor_count', 'scdy_edtor_count': 'scdy_edtor_count', 'wardname_count': 'wardname_count', 'wardcode_count': 'wardcode_count', 'lganame_count': 'lganame_count', 'lgacode_count': 'lgacode_count', 'statename_count': 'statename_count', 'statecode_count': 'statecode_count', 'source_count': 'source_count', 'plc_st_nam_count': 'plc_st_nam_count', 'full_id_count': 'full_id_count', 'osm_id_count': 'osm_id_count', 'osm_type_count': 'osm_type_count', 'amenity_count': 'amenity_count', 'internet_access:fee_count': 'internet_access:fee_count', 'internet_access_count': 'internet_access_count', 'branch_count': 'branch_count', 'source:position_count': 'source:position_count', 'operator:type_count': 'operator:type_count', 'source:date_count': 'source:date_count', 'survey:date_count': 'survey:date_count', 'visibility_count': 'visibility_count', 'tessellate_count': 'tessellate_count', 'extrude_count': 'extrude_count', 'entrance_count': 'entrance_count', 'place_count': 'place_count', 'office_count': 'office_count', 'phone_count': 'phone_count', 'ele_count': 'ele_count', 'email_count': 'email_count', 'addr:postcode_count': 'addr:postcode_count', 'opening_hours_count': 'opening_hours_count', 'project:pdevii_count': 'project:pdevii_count', 'wheelchair_count': 'wheelchair_count', 'check_date_count': 'check_date_count', 'addr:housenumber_count': 'addr:housenumber_count', 'name:en_count': 'name:en_count', 'name:ar_count': 'name:ar_count', 'barrier_count': 'barrier_count', 'project:mappingforniger_count': 'project:mappingforniger_count', 'alt_name_count': 'alt_name_count', 'addr:street_count': 'addr:street_count', 'addr:city_count': 'addr:city_count', 'designation_count': 'designation_count', 'name:fr_count': 'name:fr_count', 'description_count': 'description_count', 'access_count': 'access_count', 'shop_count': 'shop_count', 'operator_count': 'operator_count', 'name_count': 'name_count', 'historic_count': 'historic_count', 'layer_count': 'layer_count', 'path_count': 'path_count', 'police_norm': 'police_norm', 'fid_count_2': 'fid_count_2', 'sn_count': 'sn_count', 'Name_count_2': 'Name_count_2', 'State_count': 'State_count', 'Military_count': 'Military_count', 'Latitude_count': 'Latitude_count', 'Longitude_count': 'Longitude_count', 'full_id_count_2': 'full_id_count_2', 'osm_id_count_2': 'osm_id_count_2', 'osm_type_count_2': 'osm_type_count_2', 'landuse_count': 'landuse_count', 'source:url_count': 'source:url_count', 'military_service_count': 'military_service_count', 'addr:street_count_2': 'addr:street_count_2', 'addr:city_count_2': 'addr:city_count_2', 'description_count_2': 'description_count_2', 'access_count_2': 'access_count_2', 'entrance_count_2': 'entrance_count_2', 'barrier_count_2': 'barrier_count_2', 'layer_count_2': 'layer_count_2', 'path_count_2': 'path_count_2', 'wardname_count_2': 'wardname_count_2', 'lganame_count_2': 'lganame_count_2', 'statename_count_2': 'statename_count_2', 'military_norm': 'military_norm', 'road_length': 'road_length', 'road_count': 'road_count', 'risk_score': 'risk_score', 'military_adj': 'military_adj', 'crime adj': 'crime adj', });
lyr_MajorRoads_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'id': 'id', 'country': 'country', 'iso3': 'iso3', 'source_id': 'source_id', 'class': 'class', 'speed_estimate': 'speed_estimate', 'speed_estimate_method': 'speed_estimate_method', 'road_surface': 'road_surface', 'names': 'names', 'subclass': 'subclass', 'speed_limits': 'speed_limits', 'date': 'date', 'source_acronym': 'source_acronym', });
lyr_WardBoundaries_0.set('fieldImages', {'FID': 'Range', 'globalid': 'TextEdit', 'uniq_id': 'Range', 'timestamp': 'DateTime', 'editor': 'TextEdit', 'wardname': 'TextEdit', 'wardcode': 'TextEdit', 'lganame': 'TextEdit', 'lgacode': 'TextEdit', 'statename': 'TextEdit', 'statecode': 'TextEdit', 'amapcode': 'TextEdit', 'status': 'TextEdit', 'source': 'TextEdit', 'urban': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'road_risk': 'TextEdit', 'policerisk': 'TextEdit', 'milirisk': 'TextEdit', 'crimeclean': 'TextEdit', 'final_risk': 'TextEdit', });
lyr_RiskIndex_1.set('fieldImages', {'fid': 'TextEdit', 'globalid': 'TextEdit', 'uniq_id': 'Range', 'timestamp': 'DateTime', 'editor': 'TextEdit', 'wardname': 'TextEdit', 'wardcode': 'TextEdit', 'lganame': 'TextEdit', 'lgacode': 'TextEdit', 'statecode': 'TextEdit', 'amapcode': 'TextEdit', 'status': 'TextEdit', 'source': 'TextEdit', 'urban': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'statename': 'TextEdit', 'summary_total_num': 'TextEdit', 'lu_group_count': 'TextEdit', 'lu_group_min': 'TextEdit', 'lu_group_max': 'TextEdit', 'pop_proxy': 'TextEdit', 'crime_norm': 'TextEdit', 'fid_count': 'TextEdit', 'globalid_count': 'TextEdit', 'uniq_id_count': 'TextEdit', 'timestamp_count': 'TextEdit', 'editor_count': 'TextEdit', 'scdy_edtor_count': 'TextEdit', 'wardname_count': 'TextEdit', 'wardcode_count': 'TextEdit', 'lganame_count': 'TextEdit', 'lgacode_count': 'TextEdit', 'statename_count': 'TextEdit', 'statecode_count': 'TextEdit', 'source_count': 'TextEdit', 'plc_st_nam_count': 'TextEdit', 'full_id_count': 'TextEdit', 'osm_id_count': 'TextEdit', 'osm_type_count': 'TextEdit', 'amenity_count': 'TextEdit', 'internet_access:fee_count': 'TextEdit', 'internet_access_count': 'TextEdit', 'branch_count': 'TextEdit', 'source:position_count': 'TextEdit', 'operator:type_count': 'TextEdit', 'source:date_count': 'TextEdit', 'survey:date_count': 'TextEdit', 'visibility_count': 'TextEdit', 'tessellate_count': 'TextEdit', 'extrude_count': 'TextEdit', 'entrance_count': 'TextEdit', 'place_count': 'TextEdit', 'office_count': 'TextEdit', 'phone_count': 'TextEdit', 'ele_count': 'TextEdit', 'email_count': 'TextEdit', 'addr:postcode_count': 'TextEdit', 'opening_hours_count': 'TextEdit', 'project:pdevii_count': 'TextEdit', 'wheelchair_count': 'TextEdit', 'check_date_count': 'TextEdit', 'addr:housenumber_count': 'TextEdit', 'name:en_count': 'TextEdit', 'name:ar_count': 'TextEdit', 'barrier_count': 'TextEdit', 'project:mappingforniger_count': 'TextEdit', 'alt_name_count': 'TextEdit', 'addr:street_count': 'TextEdit', 'addr:city_count': 'TextEdit', 'designation_count': 'TextEdit', 'name:fr_count': 'TextEdit', 'description_count': 'TextEdit', 'access_count': 'TextEdit', 'shop_count': 'TextEdit', 'operator_count': 'TextEdit', 'name_count': 'TextEdit', 'historic_count': 'TextEdit', 'layer_count': 'TextEdit', 'path_count': 'TextEdit', 'police_norm': 'TextEdit', 'fid_count_2': 'TextEdit', 'sn_count': 'TextEdit', 'Name_count_2': 'TextEdit', 'State_count': 'TextEdit', 'Military_count': 'TextEdit', 'Latitude_count': 'TextEdit', 'Longitude_count': 'TextEdit', 'full_id_count_2': 'TextEdit', 'osm_id_count_2': 'TextEdit', 'osm_type_count_2': 'TextEdit', 'landuse_count': 'TextEdit', 'source:url_count': 'TextEdit', 'military_service_count': 'TextEdit', 'addr:street_count_2': 'TextEdit', 'addr:city_count_2': 'TextEdit', 'description_count_2': 'TextEdit', 'access_count_2': 'TextEdit', 'entrance_count_2': 'TextEdit', 'barrier_count_2': 'TextEdit', 'layer_count_2': 'TextEdit', 'path_count_2': 'TextEdit', 'wardname_count_2': 'TextEdit', 'lganame_count_2': 'TextEdit', 'statename_count_2': 'TextEdit', 'military_norm': 'TextEdit', 'road_length': 'TextEdit', 'road_count': 'TextEdit', 'risk_score': 'Range', 'military_adj': 'TextEdit', 'crime adj': 'TextEdit', });
lyr_MajorRoads_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'id': 'TextEdit', 'country': 'TextEdit', 'iso3': 'TextEdit', 'source_id': 'TextEdit', 'class': 'TextEdit', 'speed_estimate': 'Range', 'speed_estimate_method': 'TextEdit', 'road_surface': 'TextEdit', 'names': 'TextEdit', 'subclass': 'TextEdit', 'speed_limits': 'TextEdit', 'date': 'TextEdit', 'source_acronym': 'TextEdit', });
lyr_WardBoundaries_0.set('fieldLabels', {'FID': 'no label', 'globalid': 'no label', 'uniq_id': 'no label', 'timestamp': 'no label', 'editor': 'no label', 'wardname': 'no label', 'wardcode': 'no label', 'lganame': 'no label', 'lgacode': 'no label', 'statename': 'no label', 'statecode': 'no label', 'amapcode': 'no label', 'status': 'no label', 'source': 'no label', 'urban': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', 'road_risk': 'no label', 'policerisk': 'no label', 'milirisk': 'no label', 'crimeclean': 'no label', 'final_risk': 'no label', });
lyr_RiskIndex_1.set('fieldLabels', {'fid': 'no label', 'globalid': 'no label', 'uniq_id': 'no label', 'timestamp': 'no label', 'editor': 'no label', 'wardname': 'no label', 'wardcode': 'no label', 'lganame': 'no label', 'lgacode': 'no label', 'statecode': 'no label', 'amapcode': 'no label', 'status': 'no label', 'source': 'no label', 'urban': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', 'statename': 'no label', 'summary_total_num': 'no label', 'lu_group_count': 'no label', 'lu_group_min': 'no label', 'lu_group_max': 'no label', 'pop_proxy': 'no label', 'crime_norm': 'no label', 'fid_count': 'no label', 'globalid_count': 'no label', 'uniq_id_count': 'no label', 'timestamp_count': 'no label', 'editor_count': 'no label', 'scdy_edtor_count': 'no label', 'wardname_count': 'no label', 'wardcode_count': 'no label', 'lganame_count': 'no label', 'lgacode_count': 'no label', 'statename_count': 'no label', 'statecode_count': 'no label', 'source_count': 'no label', 'plc_st_nam_count': 'no label', 'full_id_count': 'no label', 'osm_id_count': 'no label', 'osm_type_count': 'no label', 'amenity_count': 'no label', 'internet_access:fee_count': 'no label', 'internet_access_count': 'no label', 'branch_count': 'no label', 'source:position_count': 'no label', 'operator:type_count': 'no label', 'source:date_count': 'no label', 'survey:date_count': 'no label', 'visibility_count': 'no label', 'tessellate_count': 'no label', 'extrude_count': 'no label', 'entrance_count': 'no label', 'place_count': 'no label', 'office_count': 'no label', 'phone_count': 'no label', 'ele_count': 'no label', 'email_count': 'no label', 'addr:postcode_count': 'no label', 'opening_hours_count': 'no label', 'project:pdevii_count': 'no label', 'wheelchair_count': 'no label', 'check_date_count': 'no label', 'addr:housenumber_count': 'no label', 'name:en_count': 'no label', 'name:ar_count': 'no label', 'barrier_count': 'no label', 'project:mappingforniger_count': 'no label', 'alt_name_count': 'no label', 'addr:street_count': 'no label', 'addr:city_count': 'no label', 'designation_count': 'no label', 'name:fr_count': 'no label', 'description_count': 'no label', 'access_count': 'no label', 'shop_count': 'no label', 'operator_count': 'no label', 'name_count': 'no label', 'historic_count': 'no label', 'layer_count': 'no label', 'path_count': 'no label', 'police_norm': 'no label', 'fid_count_2': 'no label', 'sn_count': 'no label', 'Name_count_2': 'no label', 'State_count': 'no label', 'Military_count': 'no label', 'Latitude_count': 'no label', 'Longitude_count': 'no label', 'full_id_count_2': 'no label', 'osm_id_count_2': 'no label', 'osm_type_count_2': 'no label', 'landuse_count': 'no label', 'source:url_count': 'no label', 'military_service_count': 'no label', 'addr:street_count_2': 'no label', 'addr:city_count_2': 'no label', 'description_count_2': 'no label', 'access_count_2': 'no label', 'entrance_count_2': 'no label', 'barrier_count_2': 'no label', 'layer_count_2': 'no label', 'path_count_2': 'no label', 'wardname_count_2': 'no label', 'lganame_count_2': 'no label', 'statename_count_2': 'no label', 'military_norm': 'no label', 'road_length': 'no label', 'road_count': 'no label', 'risk_score': 'no label', 'military_adj': 'no label', 'crime adj': 'no label', });
lyr_MajorRoads_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'id': 'no label', 'country': 'no label', 'iso3': 'no label', 'source_id': 'no label', 'class': 'no label', 'speed_estimate': 'no label', 'speed_estimate_method': 'no label', 'road_surface': 'no label', 'names': 'no label', 'subclass': 'no label', 'speed_limits': 'no label', 'date': 'no label', 'source_acronym': 'no label', });
lyr_MajorRoads_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
