"use strict";

require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView",
  "esri/widgets/Locate",

  "esri/widgets/Track",
  "esri/widgets/Search",
  "esri/Graphic",
], function (esriConfig, Map, MapView, Locate, Track, Search, Graphic) {
  esriConfig.apiKey =
    "AAPK1cb5b336a34045a098422f7bc6ed20e41aT1VNBK2OmkcLSE7YTEOJ2M-w0IeodvU4L5-O74iKhB76pkU1_kP7UY6yKW54h1";

  const map = new Map({
    basemap: "arcgis-topographic",
  });

  const view = new MapView({
    container: "arc-map",
    map: map,
    center: [-40, 28],
    zoom: 2,
  });

  const search = new Search({
    view: view,
  });

  view.ui.add(search, "top-right");
});
