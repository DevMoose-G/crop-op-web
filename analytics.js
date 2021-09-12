"use strict";

function Intro(props) {
  const header = e("p", { id: "AnalyticsTitle" }, "Analytics");
  return e("div", {}, header);
}

const contentContainer = document.querySelector("#content");
ReactDOM.render(e(Intro), contentContainer);
