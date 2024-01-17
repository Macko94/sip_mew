ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:2180").setExtent([242685.662185, 718804.653469, 277286.080144, 748130.811206]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Baltyk_batymetria_w_granicy_wse_PL1992_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Baltyk_batymetria_w_granicy_wse_PL1992",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Baltyk_batymetria_w_granicy_wse_PL1992_1.png",
    attributions: ' ',
                                projection: 'EPSG:2180',
                                alwaysInRange: true,
                                imageExtent: [176372.225800, 672125.038600, 541713.269800, 906299.115100]
                            })
                        });
var format_Izobaty_m_2 = new ol.format.GeoJSON();
var features_Izobaty_m_2 = format_Izobaty_m_2.readFeatures(json_Izobaty_m_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_Izobaty_m_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Izobaty_m_2.addFeatures(features_Izobaty_m_2);
var lyr_Izobaty_m_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Izobaty_m_2, 
                style: style_Izobaty_m_2,
                interactive: true,
    title: 'Izobaty_[m]<br />\
    <img src="styles/legend/Izobaty_m_2_0.png" /> -100 - -70<br />\
    <img src="styles/legend/Izobaty_m_2_1.png" /> -70 - -40<br />\
    <img src="styles/legend/Izobaty_m_2_2.png" /> -40 - -10<br />\
    <img src="styles/legend/Izobaty_m_2_3.png" /> -10 - 20<br />\
    <img src="styles/legend/Izobaty_m_2_4.png" /> 20 - 50<br />'
        });
var lyr_NEWA_predkosc_wiatru_na_100m_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "NEWA_predkosc_wiatru_na_100m",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NEWA_predkosc_wiatru_na_100m_3.png",
    attributions: ' ',
                                projection: 'EPSG:2180',
                                alwaysInRange: true,
                                imageExtent: [193210.398300, 687375.503000, 360343.786200, 812692.086500]
                            })
                        });
var format_N2000_strefa_buforowa_2km_4 = new ol.format.GeoJSON();
var features_N2000_strefa_buforowa_2km_4 = format_N2000_strefa_buforowa_2km_4.readFeatures(json_N2000_strefa_buforowa_2km_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_N2000_strefa_buforowa_2km_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N2000_strefa_buforowa_2km_4.addFeatures(features_N2000_strefa_buforowa_2km_4);
var lyr_N2000_strefa_buforowa_2km_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_N2000_strefa_buforowa_2km_4, 
                style: style_N2000_strefa_buforowa_2km_4,
                interactive: true,
                title: '<img src="styles/legend/N2000_strefa_buforowa_2km_4.png" /> N2000_strefa_buforowa_2km'
            });
var format_N2000_Baltyk_poludniowy_5 = new ol.format.GeoJSON();
var features_N2000_Baltyk_poludniowy_5 = format_N2000_Baltyk_poludniowy_5.readFeatures(json_N2000_Baltyk_poludniowy_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_N2000_Baltyk_poludniowy_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N2000_Baltyk_poludniowy_5.addFeatures(features_N2000_Baltyk_poludniowy_5);
var lyr_N2000_Baltyk_poludniowy_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_N2000_Baltyk_poludniowy_5, 
                style: style_N2000_Baltyk_poludniowy_5,
                interactive: true,
                title: '<img src="styles/legend/N2000_Baltyk_poludniowy_5.png" /> N2000_Baltyk_poludniowy'
            });
var format_obiekty_punktowe_dna_6 = new ol.format.GeoJSON();
var features_obiekty_punktowe_dna_6 = format_obiekty_punktowe_dna_6.readFeatures(json_obiekty_punktowe_dna_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_obiekty_punktowe_dna_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_obiekty_punktowe_dna_6.addFeatures(features_obiekty_punktowe_dna_6);cluster_obiekty_punktowe_dna_6 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_obiekty_punktowe_dna_6
});
var lyr_obiekty_punktowe_dna_6 = new ol.layer.Vector({
                declutter: true,
                source:cluster_obiekty_punktowe_dna_6, 
                style: style_obiekty_punktowe_dna_6,
                interactive: true,
                title: '<img src="styles/legend/obiekty_punktowe_dna_6.png" /> obiekty_punktowe_dna'
            });
var format_Obszary_ograniczonego_dostepu_7 = new ol.format.GeoJSON();
var features_Obszary_ograniczonego_dostepu_7 = format_Obszary_ograniczonego_dostepu_7.readFeatures(json_Obszary_ograniczonego_dostepu_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_Obszary_ograniczonego_dostepu_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obszary_ograniczonego_dostepu_7.addFeatures(features_Obszary_ograniczonego_dostepu_7);
var lyr_Obszary_ograniczonego_dostepu_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Obszary_ograniczonego_dostepu_7, 
                style: style_Obszary_ograniczonego_dostepu_7,
                interactive: true,
                title: '<img src="styles/legend/Obszary_ograniczonego_dostepu_7.png" /> Obszary_ograniczonego_dostepu'
            });
var format_wrakstatku_8 = new ol.format.GeoJSON();
var features_wrakstatku_8 = format_wrakstatku_8.readFeatures(json_wrakstatku_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_wrakstatku_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wrakstatku_8.addFeatures(features_wrakstatku_8);cluster_wrakstatku_8 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_wrakstatku_8
});
var lyr_wrakstatku_8 = new ol.layer.Vector({
                declutter: true,
                source:cluster_wrakstatku_8, 
                style: style_wrakstatku_8,
                interactive: true,
                title: '<img src="styles/legend/wrakstatku_8.png" /> wrak statku'
            });
var format_Granica_WSE_9 = new ol.format.GeoJSON();
var features_Granica_WSE_9 = format_Granica_WSE_9.readFeatures(json_Granica_WSE_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_Granica_WSE_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Granica_WSE_9.addFeatures(features_Granica_WSE_9);
var lyr_Granica_WSE_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Granica_WSE_9, 
                style: style_Granica_WSE_9,
                interactive: true,
                title: '<img src="styles/legend/Granica_WSE_9.png" /> Granica_WSE'
            });
var format_PSzW_Faza_II_10 = new ol.format.GeoJSON();
var features_PSzW_Faza_II_10 = format_PSzW_Faza_II_10.readFeatures(json_PSzW_Faza_II_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_PSzW_Faza_II_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PSzW_Faza_II_10.addFeatures(features_PSzW_Faza_II_10);
var lyr_PSzW_Faza_II_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PSzW_Faza_II_10, 
                style: style_PSzW_Faza_II_10,
                interactive: true,
                title: '<img src="styles/legend/PSzW_Faza_II_10.png" /> PSzW_Faza_II'
            });
var format_PSzW_11 = new ol.format.GeoJSON();
var features_PSzW_11 = format_PSzW_11.readFeatures(json_PSzW_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_PSzW_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PSzW_11.addFeatures(features_PSzW_11);
var lyr_PSzW_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PSzW_11, 
                style: style_PSzW_11,
                interactive: true,
                title: '<img src="styles/legend/PSzW_11.png" /> PSzW'
            });
var format_wnioski_pod_kable_MFW_12 = new ol.format.GeoJSON();
var features_wnioski_pod_kable_MFW_12 = format_wnioski_pod_kable_MFW_12.readFeatures(json_wnioski_pod_kable_MFW_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_wnioski_pod_kable_MFW_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wnioski_pod_kable_MFW_12.addFeatures(features_wnioski_pod_kable_MFW_12);
var lyr_wnioski_pod_kable_MFW_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_wnioski_pod_kable_MFW_12, 
                style: style_wnioski_pod_kable_MFW_12,
                interactive: true,
                title: '<img src="styles/legend/wnioski_pod_kable_MFW_12.png" /> wnioski_pod_kable_MFW'
            });
var format_PSzW_bufor500m_13 = new ol.format.GeoJSON();
var features_PSzW_bufor500m_13 = format_PSzW_bufor500m_13.readFeatures(json_PSzW_bufor500m_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_PSzW_bufor500m_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PSzW_bufor500m_13.addFeatures(features_PSzW_bufor500m_13);
var lyr_PSzW_bufor500m_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PSzW_bufor500m_13, 
                style: style_PSzW_bufor500m_13,
                interactive: true,
                title: '<img src="styles/legend/PSzW_bufor500m_13.png" /> PSzW_bufor500m'
            });
var format_Projekt14E1_kable_wewnetrzne_14 = new ol.format.GeoJSON();
var features_Projekt14E1_kable_wewnetrzne_14 = format_Projekt14E1_kable_wewnetrzne_14.readFeatures(json_Projekt14E1_kable_wewnetrzne_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_Projekt14E1_kable_wewnetrzne_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Projekt14E1_kable_wewnetrzne_14.addFeatures(features_Projekt14E1_kable_wewnetrzne_14);
var lyr_Projekt14E1_kable_wewnetrzne_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Projekt14E1_kable_wewnetrzne_14, 
                style: style_Projekt14E1_kable_wewnetrzne_14,
                interactive: true,
                title: '<img src="styles/legend/Projekt14E1_kable_wewnetrzne_14.png" /> Projekt14E1_kable_wewnetrzne'
            });
var format_Projekt14E1_lokalizacje_MST_15 = new ol.format.GeoJSON();
var features_Projekt14E1_lokalizacje_MST_15 = format_Projekt14E1_lokalizacje_MST_15.readFeatures(json_Projekt14E1_lokalizacje_MST_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_Projekt14E1_lokalizacje_MST_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Projekt14E1_lokalizacje_MST_15.addFeatures(features_Projekt14E1_lokalizacje_MST_15);cluster_Projekt14E1_lokalizacje_MST_15 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Projekt14E1_lokalizacje_MST_15
});
var lyr_Projekt14E1_lokalizacje_MST_15 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Projekt14E1_lokalizacje_MST_15, 
                style: style_Projekt14E1_lokalizacje_MST_15,
                interactive: true,
                title: '<img src="styles/legend/Projekt14E1_lokalizacje_MST_15.png" /> Projekt14E1_lokalizacje_MST'
            });
var format_Projekt14E1_lokalizacje_turbin_16 = new ol.format.GeoJSON();
var features_Projekt14E1_lokalizacje_turbin_16 = format_Projekt14E1_lokalizacje_turbin_16.readFeatures(json_Projekt14E1_lokalizacje_turbin_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_Projekt14E1_lokalizacje_turbin_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Projekt14E1_lokalizacje_turbin_16.addFeatures(features_Projekt14E1_lokalizacje_turbin_16);
var lyr_Projekt14E1_lokalizacje_turbin_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Projekt14E1_lokalizacje_turbin_16, 
                style: style_Projekt14E1_lokalizacje_turbin_16,
                interactive: true,
                title: '<img src="styles/legend/Projekt14E1_lokalizacje_turbin_16.png" /> Projekt14E1_lokalizacje_turbin'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Baltyk_batymetria_w_granicy_wse_PL1992_1.setVisible(true);lyr_Izobaty_m_2.setVisible(true);lyr_NEWA_predkosc_wiatru_na_100m_3.setVisible(false);lyr_N2000_strefa_buforowa_2km_4.setVisible(true);lyr_N2000_Baltyk_poludniowy_5.setVisible(true);lyr_obiekty_punktowe_dna_6.setVisible(true);lyr_Obszary_ograniczonego_dostepu_7.setVisible(true);lyr_wrakstatku_8.setVisible(true);lyr_Granica_WSE_9.setVisible(true);lyr_PSzW_Faza_II_10.setVisible(true);lyr_PSzW_11.setVisible(true);lyr_wnioski_pod_kable_MFW_12.setVisible(true);lyr_PSzW_bufor500m_13.setVisible(true);lyr_Projekt14E1_kable_wewnetrzne_14.setVisible(true);lyr_Projekt14E1_lokalizacje_MST_15.setVisible(true);lyr_Projekt14E1_lokalizacje_turbin_16.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Baltyk_batymetria_w_granicy_wse_PL1992_1,lyr_Izobaty_m_2,lyr_NEWA_predkosc_wiatru_na_100m_3,lyr_N2000_strefa_buforowa_2km_4,lyr_N2000_Baltyk_poludniowy_5,lyr_obiekty_punktowe_dna_6,lyr_Obszary_ograniczonego_dostepu_7,lyr_wrakstatku_8,lyr_Granica_WSE_9,lyr_PSzW_Faza_II_10,lyr_PSzW_11,lyr_wnioski_pod_kable_MFW_12,lyr_PSzW_bufor500m_13,lyr_Projekt14E1_kable_wewnetrzne_14,lyr_Projekt14E1_lokalizacje_MST_15,lyr_Projekt14E1_lokalizacje_turbin_16];
lyr_Izobaty_m_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_N2000_strefa_buforowa_2km_4.set('fieldAliases', {'id_0': 'id_0', 'id': 'id', 'sitecode': 'sitecode', 'sitename': 'sitename', 'ms': 'ms', 'sitetype': 'sitetype', 'inspire_id': 'inspire_id', });
lyr_N2000_Baltyk_poludniowy_5.set('fieldAliases', {'id_0': 'Identyfikator', 'sitecode': 'Kod obiektu', 'sitename': 'Nazwa', 'ms': 'Kraj', 'sitetype': 'Typ obiektu', 'inspire_id': 'Kod Inspire', });
lyr_obiekty_punktowe_dna_6.set('fieldAliases', {'id': 'Identyfikator', });
lyr_Obszary_ograniczonego_dostepu_7.set('fieldAliases', {'zone_closi': 'Typ ograniczenia', 'zone_clos0': 'Forma ograniczenia', 'short_name': 'Nazwa obszaru', 'descriptio': 'Opis', });
lyr_wrakstatku_8.set('fieldAliases', {'id': 'Identyfikator', 'underwater': 'Oznaczenie obiektu', 'min_wreck_': 'Głębokość [m]', 'orientatio': 'Kirunek zalegania', 'length': 'Długość obiektu [m]', 'width': 'Szerokość obiektu [m]', 'height': 'Wysokość obiektu [m]', 'cultural_h': 'Typ obiektu', 'short_name': 'Nazwa', });
lyr_Granica_WSE_9.set('fieldAliases', {'full_name': 'Nazwa', 'short_name': 'Nazwa skrócona', 'country_1_': 'Kraj graniczący nr1', 'country_2_': 'Kraj graniczący nr2', 'country_10': 'Kraj graniczący nr3', 'country_20': 'Kraj graniczący nr4', });
lyr_PSzW_Faza_II_10.set('fieldAliases', {'full_name': 'Nazwa obszaru', 'id': 'Identyfikator', 'area_km': 'Powierzchnia [km2]', });
lyr_PSzW_11.set('fieldAliases', {'id': 'Identyfikator', 'investor_i': 'Inwestor', 'permit_sta': 'Status pozwolenia', 'permit_ter': 'Termin wygaśnięcia pozwolenia', 'full_name': 'Pełna nazwa', 'short_name': 'Nazwa skrócona', });
lyr_wnioski_pod_kable_MFW_12.set('fieldAliases', {'id': 'identyfikator', 'inwestor': 'Inwestor', 'full_name': 'Pełna nazwa', 'short_name': 'Nazwa skrótowa', 'comments': 'Komentarze', 'area_km': 'powierzchnia [km2]', });
lyr_PSzW_bufor500m_13.set('fieldAliases', {'full_name': 'Nazwa obszaru', 'id': 'identyfikator', 'area_km': 'area_km', });
lyr_Projekt14E1_kable_wewnetrzne_14.set('fieldAliases', {'id': 'identyfikator', 'dlugosc': 'długość [m]', 'napiecie_k': 'napięcie [kV]', });
lyr_Projekt14E1_lokalizacje_MST_15.set('fieldAliases', {'id': 'Identyfikator', 'batymetria': 'Batymetria [m]', });
lyr_Projekt14E1_lokalizacje_turbin_16.set('fieldAliases', {'id': 'Identyfikator', 'nazwa': 'Nazwa obiektu', 'model_turb': 'Model turbiny wiatrowej', 'wys_wiezy': 'Wysokość wieży [m]', 'rotor_d': 'Średnica rotora [m]', 'batymetria': 'głębokość dna [m]', });
lyr_Izobaty_m_2.set('fieldImages', {'fid': '', 'ID': '', 'ELEV': '', });
lyr_N2000_strefa_buforowa_2km_4.set('fieldImages', {'id_0': '', 'id': '', 'sitecode': '', 'sitename': '', 'ms': '', 'sitetype': '', 'inspire_id': '', });
lyr_N2000_Baltyk_poludniowy_5.set('fieldImages', {'id_0': 'TextEdit', 'sitecode': 'TextEdit', 'sitename': 'TextEdit', 'ms': 'TextEdit', 'sitetype': 'TextEdit', 'inspire_id': 'TextEdit', });
lyr_obiekty_punktowe_dna_6.set('fieldImages', {'id': 'TextEdit', });
lyr_Obszary_ograniczonego_dostepu_7.set('fieldImages', {'zone_closi': 'TextEdit', 'zone_clos0': 'TextEdit', 'short_name': 'TextEdit', 'descriptio': 'TextEdit', });
lyr_wrakstatku_8.set('fieldImages', {'id': 'TextEdit', 'underwater': 'TextEdit', 'min_wreck_': 'TextEdit', 'orientatio': 'TextEdit', 'length': 'TextEdit', 'width': 'TextEdit', 'height': 'TextEdit', 'cultural_h': 'TextEdit', 'short_name': 'TextEdit', });
lyr_Granica_WSE_9.set('fieldImages', {'full_name': 'TextEdit', 'short_name': 'TextEdit', 'country_1_': 'TextEdit', 'country_2_': 'TextEdit', 'country_10': 'TextEdit', 'country_20': 'TextEdit', });
lyr_PSzW_Faza_II_10.set('fieldImages', {'full_name': 'TextEdit', 'id': 'TextEdit', 'area_km': 'TextEdit', });
lyr_PSzW_11.set('fieldImages', {'id': 'TextEdit', 'investor_i': 'TextEdit', 'permit_sta': 'TextEdit', 'permit_ter': 'TextEdit', 'full_name': 'TextEdit', 'short_name': 'TextEdit', });
lyr_wnioski_pod_kable_MFW_12.set('fieldImages', {'id': 'TextEdit', 'inwestor': 'TextEdit', 'full_name': 'TextEdit', 'short_name': 'TextEdit', 'comments': 'TextEdit', 'area_km': 'TextEdit', });
lyr_PSzW_bufor500m_13.set('fieldImages', {'full_name': 'TextEdit', 'id': 'TextEdit', 'area_km': '', });
lyr_Projekt14E1_kable_wewnetrzne_14.set('fieldImages', {'id': 'TextEdit', 'dlugosc': 'TextEdit', 'napiecie_k': 'TextEdit', });
lyr_Projekt14E1_lokalizacje_MST_15.set('fieldImages', {'id': 'TextEdit', 'batymetria': 'TextEdit', });
lyr_Projekt14E1_lokalizacje_turbin_16.set('fieldImages', {'id': 'TextEdit', 'nazwa': 'TextEdit', 'model_turb': 'TextEdit', 'wys_wiezy': 'TextEdit', 'rotor_d': 'TextEdit', 'batymetria': 'TextEdit', });
lyr_Izobaty_m_2.set('fieldLabels', {'fid': 'inline label', 'ID': 'inline label', 'ELEV': 'inline label', });
lyr_N2000_strefa_buforowa_2km_4.set('fieldLabels', {'id_0': 'inline label', 'id': 'inline label', 'sitecode': 'inline label', 'sitename': 'inline label', 'ms': 'inline label', 'sitetype': 'inline label', 'inspire_id': 'inline label', });
lyr_N2000_Baltyk_poludniowy_5.set('fieldLabels', {'id_0': 'inline label', 'sitecode': 'inline label', 'sitename': 'inline label', 'ms': 'inline label', 'sitetype': 'inline label', 'inspire_id': 'inline label', });
lyr_obiekty_punktowe_dna_6.set('fieldLabels', {'id': 'inline label', });
lyr_Obszary_ograniczonego_dostepu_7.set('fieldLabels', {'zone_closi': 'inline label', 'zone_clos0': 'inline label', 'short_name': 'inline label', 'descriptio': 'inline label', });
lyr_wrakstatku_8.set('fieldLabels', {'id': 'inline label', 'underwater': 'inline label', 'min_wreck_': 'inline label', 'orientatio': 'inline label', 'length': 'inline label', 'width': 'inline label', 'height': 'inline label', 'cultural_h': 'inline label', 'short_name': 'inline label', });
lyr_Granica_WSE_9.set('fieldLabels', {'full_name': 'inline label', 'short_name': 'inline label', 'country_1_': 'inline label', 'country_2_': 'inline label', 'country_10': 'inline label', 'country_20': 'inline label', });
lyr_PSzW_Faza_II_10.set('fieldLabels', {'full_name': 'inline label', 'id': 'inline label', 'area_km': 'inline label', });
lyr_PSzW_11.set('fieldLabels', {'id': 'inline label', 'investor_i': 'inline label', 'permit_sta': 'inline label', 'permit_ter': 'inline label', 'full_name': 'inline label', 'short_name': 'inline label', });
lyr_wnioski_pod_kable_MFW_12.set('fieldLabels', {'id': 'inline label', 'inwestor': 'inline label', 'full_name': 'inline label', 'short_name': 'inline label', 'comments': 'inline label', 'area_km': 'inline label', });
lyr_PSzW_bufor500m_13.set('fieldLabels', {'full_name': 'inline label', 'id': 'inline label', 'area_km': 'no label', });
lyr_Projekt14E1_kable_wewnetrzne_14.set('fieldLabels', {'id': 'inline label', 'dlugosc': 'inline label', 'napiecie_k': 'inline label', });
lyr_Projekt14E1_lokalizacje_MST_15.set('fieldLabels', {'id': 'inline label', 'batymetria': 'inline label', });
lyr_Projekt14E1_lokalizacje_turbin_16.set('fieldLabels', {'id': 'inline label', 'nazwa': 'inline label', 'model_turb': 'inline label', 'wys_wiezy': 'inline label', 'rotor_d': 'inline label', 'batymetria': 'inline label', });
lyr_Projekt14E1_lokalizacje_turbin_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});