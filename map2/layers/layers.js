ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:2180").setExtent([223937.715312, 734447.245070, 269217.157110, 748815.669190]);
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
jsonSource_obiekty_punktowe_dna_6.addFeatures(features_obiekty_punktowe_dna_6);
var lyr_obiekty_punktowe_dna_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_obiekty_punktowe_dna_6, 
                style: style_obiekty_punktowe_dna_6,
                interactive: true,
                title: '<img src="styles/legend/obiekty_punktowe_dna_6.png" /> obiekty_punktowe_dna'
            });
var format_wrak_statku_7 = new ol.format.GeoJSON();
var features_wrak_statku_7 = format_wrak_statku_7.readFeatures(json_wrak_statku_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_wrak_statku_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wrak_statku_7.addFeatures(features_wrak_statku_7);
var lyr_wrak_statku_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_wrak_statku_7, 
                style: style_wrak_statku_7,
                interactive: true,
                title: '<img src="styles/legend/wrak_statku_7.png" /> wrak_statku'
            });
var format_Obszary_ograniczonego_dostepu_8 = new ol.format.GeoJSON();
var features_Obszary_ograniczonego_dostepu_8 = format_Obszary_ograniczonego_dostepu_8.readFeatures(json_Obszary_ograniczonego_dostepu_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_Obszary_ograniczonego_dostepu_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obszary_ograniczonego_dostepu_8.addFeatures(features_Obszary_ograniczonego_dostepu_8);
var lyr_Obszary_ograniczonego_dostepu_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Obszary_ograniczonego_dostepu_8, 
                style: style_Obszary_ograniczonego_dostepu_8,
                interactive: true,
                title: '<img src="styles/legend/Obszary_ograniczonego_dostepu_8.png" /> Obszary_ograniczonego_dostepu'
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
var format_Projekt14E2_kable_wewnetrzne_14 = new ol.format.GeoJSON();
var features_Projekt14E2_kable_wewnetrzne_14 = format_Projekt14E2_kable_wewnetrzne_14.readFeatures(json_Projekt14E2_kable_wewnetrzne_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_Projekt14E2_kable_wewnetrzne_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Projekt14E2_kable_wewnetrzne_14.addFeatures(features_Projekt14E2_kable_wewnetrzne_14);
var lyr_Projekt14E2_kable_wewnetrzne_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Projekt14E2_kable_wewnetrzne_14, 
                style: style_Projekt14E2_kable_wewnetrzne_14,
                interactive: true,
                title: '<img src="styles/legend/Projekt14E2_kable_wewnetrzne_14.png" /> Projekt14E2_kable_wewnetrzne'
            });
var format_Projekt14E2_lokalizacje_turbin_15 = new ol.format.GeoJSON();
var features_Projekt14E2_lokalizacje_turbin_15 = format_Projekt14E2_lokalizacje_turbin_15.readFeatures(json_Projekt14E2_lokalizacje_turbin_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_Projekt14E2_lokalizacje_turbin_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Projekt14E2_lokalizacje_turbin_15.addFeatures(features_Projekt14E2_lokalizacje_turbin_15);
var lyr_Projekt14E2_lokalizacje_turbin_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Projekt14E2_lokalizacje_turbin_15, 
                style: style_Projekt14E2_lokalizacje_turbin_15,
                interactive: true,
                title: '<img src="styles/legend/Projekt14E2_lokalizacje_turbin_15.png" /> Projekt14E2_lokalizacje_turbin'
            });
var format_Projekt14E2_lokalizacje_MST_16 = new ol.format.GeoJSON();
var features_Projekt14E2_lokalizacje_MST_16 = format_Projekt14E2_lokalizacje_MST_16.readFeatures(json_Projekt14E2_lokalizacje_MST_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_Projekt14E2_lokalizacje_MST_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Projekt14E2_lokalizacje_MST_16.addFeatures(features_Projekt14E2_lokalizacje_MST_16);
var lyr_Projekt14E2_lokalizacje_MST_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Projekt14E2_lokalizacje_MST_16, 
                style: style_Projekt14E2_lokalizacje_MST_16,
                interactive: true,
                title: '<img src="styles/legend/Projekt14E2_lokalizacje_MST_16.png" /> Projekt14E2_lokalizacje_MST'
            });
            var layersList = [
                new ol.layer.Group({
                    title: 'Mapa_bazowa',
                    fold: 'close',
                    layers: [lyr_OpenStreetMap_0]
                }),
                new ol.layer.Group({
                    title: 'Rozpoznanie_obszaru',
                    fold: 'close',
                    layers: [lyr_Baltyk_batymetria_w_granicy_wse_PL1992_1, lyr_Izobaty_m_2]
                }),
                new ol.layer.Group({
                    title: 'Meteo',
                    fold: 'close',
                    layers: [lyr_NEWA_predkosc_wiatru_na_100m_3]
                }),
                new ol.layer.Group({
                    title: 'Środowisko',
                    fold: 'close',
                    layers: [lyr_N2000_strefa_buforowa_2km_4, lyr_N2000_Baltyk_poludniowy_5, lyr_obiekty_punktowe_dna_6, lyr_wrak_statku_7]
                }),
                new ol.layer.Group({
                    title: 'Pozwolenia&Administracja',
                    fold: 'close',
                    layers: [lyr_Obszary_ograniczonego_dostepu_8, lyr_Granica_WSE_9, lyr_PSzW_Faza_II_10, lyr_PSzW_11, lyr_wnioski_pod_kable_MFW_12]
                }),
                lyr_PSzW_bufor500m_13,lyr_Projekt14E2_kable_wewnetrzne_14,lyr_Projekt14E2_lokalizacje_turbin_15,lyr_Projekt14E2_lokalizacje_MST_16
            ];
lyr_OpenStreetMap_0.setVisible(true);lyr_Baltyk_batymetria_w_granicy_wse_PL1992_1.setVisible(true);lyr_Izobaty_m_2.setVisible(true);lyr_NEWA_predkosc_wiatru_na_100m_3.setVisible(false);lyr_N2000_strefa_buforowa_2km_4.setVisible(true);lyr_N2000_Baltyk_poludniowy_5.setVisible(true);lyr_obiekty_punktowe_dna_6.setVisible(true);lyr_wrak_statku_7.setVisible(true);lyr_Obszary_ograniczonego_dostepu_8.setVisible(true);lyr_Granica_WSE_9.setVisible(true);lyr_PSzW_Faza_II_10.setVisible(true);lyr_PSzW_11.setVisible(true);lyr_wnioski_pod_kable_MFW_12.setVisible(true);lyr_PSzW_bufor500m_13.setVisible(true);lyr_Projekt14E2_kable_wewnetrzne_14.setVisible(true);lyr_Projekt14E2_lokalizacje_turbin_15.setVisible(true);lyr_Projekt14E2_lokalizacje_MST_16.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Baltyk_batymetria_w_granicy_wse_PL1992_1,lyr_Izobaty_m_2,lyr_NEWA_predkosc_wiatru_na_100m_3,lyr_N2000_strefa_buforowa_2km_4,lyr_N2000_Baltyk_poludniowy_5,lyr_obiekty_punktowe_dna_6,lyr_wrak_statku_7,lyr_Obszary_ograniczonego_dostepu_8,lyr_Granica_WSE_9,lyr_PSzW_Faza_II_10,lyr_PSzW_11,lyr_wnioski_pod_kable_MFW_12,lyr_PSzW_bufor500m_13,lyr_Projekt14E2_kable_wewnetrzne_14,lyr_Projekt14E2_lokalizacje_turbin_15,lyr_Projekt14E2_lokalizacje_MST_16];
lyr_Izobaty_m_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_N2000_strefa_buforowa_2km_4.set('fieldAliases', {'id_0': 'id_0', 'id': 'id', 'sitecode': 'sitecode', 'sitename': 'sitename', 'ms': 'ms', 'sitetype': 'sitetype', 'inspire_id': 'inspire_id', });
lyr_N2000_Baltyk_poludniowy_5.set('fieldAliases', {'id_0': 'id_0', 'id': 'id', 'sitecode': 'sitecode', 'sitename': 'sitename', 'ms': 'ms', 'sitetype': 'sitetype', 'inspire_id': 'inspire_id', });
lyr_obiekty_punktowe_dna_6.set('fieldAliases', {'id_0': 'id_0', 'id': 'id', });
lyr_wrak_statku_7.set('fieldAliases', {'id': 'id', 'underwater': 'underwater', 'min_wreck_': 'min_wreck_', 'surroundin': 'surroundin', 'orientatio': 'orientatio', 'length': 'length', 'width': 'width', 'height': 'height', 'cultural_h': 'cultural_h', 'short_name': 'short_name', });
lyr_Obszary_ograniczonego_dostepu_8.set('fieldAliases', {'document_i': 'document_i', 'zone_restr': 'zone_restr', 'zone_closi': 'zone_closi', 'zone_clos0': 'zone_clos0', 'short_name': 'short_name', 'descriptio': 'descriptio', });
lyr_Granica_WSE_9.set('fieldAliases', {'document_i': 'document_i', 'eez_border': 'eez_border', 'full_name': 'full_name', 'short_name': 'short_name', 'descriptio': 'descriptio', 'comments': 'comments', 'notes': 'notes', 'country_1_': 'country_1_', 'country_2_': 'country_2_', 'country_10': 'country_10', 'country_20': 'country_20', 'sys_node_c': 'sys_node_c', 'sys_versio': 'sys_versio', 'sys_versi0': 'sys_versi0', 'sys_date_a': 'sys_date_a', 'sys_data_a': 'sys_data_a', 'sys_data_e': 'sys_data_e', 'sys_uuid': 'sys_uuid', 'legal_stat': 'legal_stat', });
lyr_PSzW_Faza_II_10.set('fieldAliases', {'full_name': 'full_name', 'short_name': 'short_name', 'comments': 'comments', 'notes': 'notes', 'dzu_pwee_z': 'dzu_pwee_z', 'sys_node_c': 'sys_node_c', 'sys_versio': 'sys_versio', 'sys_vers_1': 'sys_vers_1', 'sys_date_a': 'sys_date_a', 'sys_data_a': 'sys_data_a', 'sys_data_e': 'sys_data_e', 'document_i': 'document_i', });
lyr_PSzW_11.set('fieldAliases', {'id': 'id', 'document_i': 'document_i', 'investment': 'investment', 'structure_': 'structure_', 'eez_locati': 'eez_locati', 'investor_i': 'investor_i', 'investor_r': 'investor_r', 'permit_sta': 'permit_sta', 'permit_ter': 'permit_ter', 'permit_exp': 'permit_exp', 'advertisem': 'advertisem', 'conclusive': 'conclusive', 'sys_node_c': 'sys_node_c', 'sys_versio': 'sys_versio', 'sys_vers_1': 'sys_vers_1', 'sys_date_a': 'sys_date_a', 'sys_data_a': 'sys_data_a', 'sys_data_e': 'sys_data_e', 'full_name': 'full_name', 'short_name': 'short_name', 'comments': 'comments', 'notes': 'notes', 'sys_uuid': 'sys_uuid', 'legal_stat': 'legal_stat', });
lyr_wnioski_pod_kable_MFW_12.set('fieldAliases', {'id': 'id', 'inwestor': 'inwestor', 'nr_inwesto': 'nr_inwesto', 'data_wnios': 'data_wnios', 'status_pos': 'status_pos', 'rodzaj_dok': 'rodzaj_dok', 'data_dokum': 'data_dokum', 'numer_doku': 'numer_doku', 'organ_wyda': 'organ_wyda', 'podstawa_p': 'podstawa_p', 'opis_rozst': 'opis_rozst', 'status_dok': 'status_dok', 'data_ostat': 'data_ostat', 'full_name': 'full_name', 'short_name': 'short_name', 'comments': 'comments', 'notes': 'notes', 'owf_cable_': 'owf_cable_', 'sys_node_c': 'sys_node_c', 'sys_versio': 'sys_versio', 'sys_vers_1': 'sys_vers_1', 'sys_date_a': 'sys_date_a', 'sys_data_a': 'sys_data_a', 'sys_data_e': 'sys_data_e', 'document_i': 'document_i', });
lyr_PSzW_bufor500m_13.set('fieldAliases', {'id': 'id', 'full_name': 'full_name', 'area_km2': 'area_km2', });
lyr_Projekt14E2_kable_wewnetrzne_14.set('fieldAliases', {'id': 'id', 'dlugosc': 'dlugosc', 'napiecie_k': 'napiecie_k', });
lyr_Projekt14E2_lokalizacje_turbin_15.set('fieldAliases', {'id': 'id', 'nazwa': 'nazwa', 'model_turb': 'model_turb', 'wys_wiezy': 'wys_wiezy', 'rotor_d': 'rotor_d', 'batymetria': 'batymetria', });
lyr_Projekt14E2_lokalizacje_MST_16.set('fieldAliases', {'id': 'id', 'batymetria': 'batymetria', });
lyr_Izobaty_m_2.set('fieldImages', {'fid': '', 'ID': '', 'ELEV': '', });
lyr_N2000_strefa_buforowa_2km_4.set('fieldImages', {'id_0': '', 'id': '', 'sitecode': '', 'sitename': '', 'ms': '', 'sitetype': '', 'inspire_id': '', });
lyr_N2000_Baltyk_poludniowy_5.set('fieldImages', {'id_0': '', 'id': '', 'sitecode': '', 'sitename': '', 'ms': '', 'sitetype': '', 'inspire_id': '', });
lyr_obiekty_punktowe_dna_6.set('fieldImages', {'id_0': '', 'id': '', });
lyr_wrak_statku_7.set('fieldImages', {'id': '', 'underwater': '', 'min_wreck_': '', 'surroundin': '', 'orientatio': '', 'length': '', 'width': '', 'height': '', 'cultural_h': '', 'short_name': '', });
lyr_Obszary_ograniczonego_dostepu_8.set('fieldImages', {'document_i': '', 'zone_restr': '', 'zone_closi': '', 'zone_clos0': '', 'short_name': '', 'descriptio': '', });
lyr_Granica_WSE_9.set('fieldImages', {'document_i': '', 'eez_border': '', 'full_name': '', 'short_name': '', 'descriptio': '', 'comments': '', 'notes': '', 'country_1_': '', 'country_2_': '', 'country_10': '', 'country_20': '', 'sys_node_c': '', 'sys_versio': '', 'sys_versi0': '', 'sys_date_a': '', 'sys_data_a': '', 'sys_data_e': '', 'sys_uuid': '', 'legal_stat': '', });
lyr_PSzW_Faza_II_10.set('fieldImages', {'full_name': '', 'short_name': '', 'comments': '', 'notes': '', 'dzu_pwee_z': '', 'sys_node_c': '', 'sys_versio': '', 'sys_vers_1': '', 'sys_date_a': '', 'sys_data_a': '', 'sys_data_e': '', 'document_i': '', });
lyr_PSzW_11.set('fieldImages', {'id': '', 'document_i': '', 'investment': '', 'structure_': '', 'eez_locati': '', 'investor_i': '', 'investor_r': '', 'permit_sta': '', 'permit_ter': '', 'permit_exp': '', 'advertisem': '', 'conclusive': '', 'sys_node_c': '', 'sys_versio': '', 'sys_vers_1': '', 'sys_date_a': '', 'sys_data_a': '', 'sys_data_e': '', 'full_name': '', 'short_name': '', 'comments': '', 'notes': '', 'sys_uuid': '', 'legal_stat': '', });
lyr_wnioski_pod_kable_MFW_12.set('fieldImages', {'id': '', 'inwestor': '', 'nr_inwesto': '', 'data_wnios': '', 'status_pos': '', 'rodzaj_dok': '', 'data_dokum': '', 'numer_doku': '', 'organ_wyda': '', 'podstawa_p': '', 'opis_rozst': '', 'status_dok': '', 'data_ostat': '', 'full_name': '', 'short_name': '', 'comments': '', 'notes': '', 'owf_cable_': '', 'sys_node_c': '', 'sys_versio': '', 'sys_vers_1': '', 'sys_date_a': '', 'sys_data_a': '', 'sys_data_e': '', 'document_i': '', });
lyr_PSzW_bufor500m_13.set('fieldImages', {'id': '', 'full_name': '', 'area_km2': '', });
lyr_Projekt14E2_kable_wewnetrzne_14.set('fieldImages', {'id': '', 'dlugosc': '', 'napiecie_k': '', });
lyr_Projekt14E2_lokalizacje_turbin_15.set('fieldImages', {'id': '', 'nazwa': '', 'model_turb': '', 'wys_wiezy': '', 'rotor_d': '', 'batymetria': '', });
lyr_Projekt14E2_lokalizacje_MST_16.set('fieldImages', {'id': '', 'batymetria': '', });
lyr_Izobaty_m_2.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'no label', });
lyr_N2000_strefa_buforowa_2km_4.set('fieldLabels', {'id_0': 'no label', 'id': 'no label', 'sitecode': 'no label', 'sitename': 'no label', 'ms': 'no label', 'sitetype': 'no label', 'inspire_id': 'no label', });
lyr_N2000_Baltyk_poludniowy_5.set('fieldLabels', {'id_0': 'no label', 'id': 'no label', 'sitecode': 'no label', 'sitename': 'no label', 'ms': 'no label', 'sitetype': 'no label', 'inspire_id': 'no label', });
lyr_obiekty_punktowe_dna_6.set('fieldLabels', {'id_0': 'no label', 'id': 'no label', });
lyr_wrak_statku_7.set('fieldLabels', {'id': 'no label', 'underwater': 'no label', 'min_wreck_': 'no label', 'surroundin': 'no label', 'orientatio': 'no label', 'length': 'no label', 'width': 'no label', 'height': 'no label', 'cultural_h': 'no label', 'short_name': 'no label', });
lyr_Obszary_ograniczonego_dostepu_8.set('fieldLabels', {'document_i': 'no label', 'zone_restr': 'no label', 'zone_closi': 'no label', 'zone_clos0': 'no label', 'short_name': 'no label', 'descriptio': 'no label', });
lyr_Granica_WSE_9.set('fieldLabels', {'document_i': 'no label', 'eez_border': 'no label', 'full_name': 'no label', 'short_name': 'no label', 'descriptio': 'no label', 'comments': 'no label', 'notes': 'no label', 'country_1_': 'no label', 'country_2_': 'no label', 'country_10': 'no label', 'country_20': 'no label', 'sys_node_c': 'no label', 'sys_versio': 'no label', 'sys_versi0': 'no label', 'sys_date_a': 'no label', 'sys_data_a': 'no label', 'sys_data_e': 'no label', 'sys_uuid': 'no label', 'legal_stat': 'no label', });
lyr_PSzW_Faza_II_10.set('fieldLabels', {'full_name': 'no label', 'short_name': 'no label', 'comments': 'no label', 'notes': 'no label', 'dzu_pwee_z': 'no label', 'sys_node_c': 'no label', 'sys_versio': 'no label', 'sys_vers_1': 'no label', 'sys_date_a': 'no label', 'sys_data_a': 'no label', 'sys_data_e': 'no label', 'document_i': 'no label', });
lyr_PSzW_11.set('fieldLabels', {'id': 'no label', 'document_i': 'no label', 'investment': 'no label', 'structure_': 'no label', 'eez_locati': 'no label', 'investor_i': 'no label', 'investor_r': 'no label', 'permit_sta': 'no label', 'permit_ter': 'no label', 'permit_exp': 'no label', 'advertisem': 'no label', 'conclusive': 'no label', 'sys_node_c': 'no label', 'sys_versio': 'no label', 'sys_vers_1': 'no label', 'sys_date_a': 'no label', 'sys_data_a': 'no label', 'sys_data_e': 'no label', 'full_name': 'no label', 'short_name': 'no label', 'comments': 'no label', 'notes': 'no label', 'sys_uuid': 'no label', 'legal_stat': 'no label', });
lyr_wnioski_pod_kable_MFW_12.set('fieldLabels', {'id': 'inline label', 'inwestor': 'inline label', 'nr_inwesto': 'inline label', 'data_wnios': 'inline label', 'status_pos': 'inline label', 'rodzaj_dok': 'inline label', 'data_dokum': 'no label', 'numer_doku': 'no label', 'organ_wyda': 'no label', 'podstawa_p': 'no label', 'opis_rozst': 'no label', 'status_dok': 'no label', 'data_ostat': 'no label', 'full_name': 'no label', 'short_name': 'no label', 'comments': 'no label', 'notes': 'no label', 'owf_cable_': 'no label', 'sys_node_c': 'no label', 'sys_versio': 'no label', 'sys_vers_1': 'no label', 'sys_date_a': 'no label', 'sys_data_a': 'no label', 'sys_data_e': 'no label', 'document_i': 'no label', });
lyr_PSzW_bufor500m_13.set('fieldLabels', {'id': 'inline label', 'full_name': 'inline label', 'area_km2': 'inline label', });
lyr_Projekt14E2_kable_wewnetrzne_14.set('fieldLabels', {'id': 'inline label', 'dlugosc': 'inline label', 'napiecie_k': 'inline label', });
lyr_Projekt14E2_lokalizacje_turbin_15.set('fieldLabels', {'id': 'inline label', 'nazwa': 'inline label', 'model_turb': 'inline label', 'wys_wiezy': 'inline label', 'rotor_d': 'inline label', 'batymetria': 'inline label', });
lyr_Projekt14E2_lokalizacje_MST_16.set('fieldLabels', {'id': 'inline label', 'batymetria': 'inline label', });
lyr_Projekt14E2_lokalizacje_MST_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});