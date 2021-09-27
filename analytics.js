"use strict";

function Intro(props) {
  const header = e("p", { id: "AnalyticsTitle" }, "Analytics");
  return e("div", {}, header);
}

function MapDescription(props) {
  const description = e(
    "p",
    { id: "MapDescription" },
    "Using GIS, we allow customers to choose better agricultural products based on the climate and soil composition of your region. Just search your location on the map displayed to discover the climate conditions and soil composition of your location. "
  );
  return description;
}

const contentContainer = document.querySelector("#content");
const mapDescrContainer = document.querySelector("#map-description");
ReactDOM.render(e(Intro), contentContainer);
ReactDOM.render(e(MapDescription), mapDescrContainer);
