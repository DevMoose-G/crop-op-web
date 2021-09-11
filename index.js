"use strict";

class LabelField extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const input = e("input", {});
    const label = e("label", {}, this.props.label, input);
    return label;
  }
}

function Button() {
  const img = e("img", { src: "imgs/Crop.png" });
  return e("a", {}, img);
}

class SiteGreeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const image = e("img", {
      src: "imgs/rice-field-4k.jpg",
      id: "SiteImage",
    });
    const header = e(SiteHeader);
    const slogan = e("h1", { id: "Slogan" }, "APPLY. CONSULT. PROJECT.");
    return e("div", { id: "SiteHeader" }, image, header, slogan);
  }
}

class SurveyPrompt extends React.Component {
  render() {
    const label = e(
      "p",
      { id: "SurveyLabel" },
      "Take our survey for initial agricultural consulting information."
    );
    const surveyButton = e("a", { href: "", id: "SurveyButton" }, "SURVEY");
    return e("div", {}, label, surveyButton);
  }
}

function AboutUs_Block(props) {
  const largeStat = e("p", { className: "LargeStat" }, props.stat);
  const smallDescr = e("p", { className: "SmallDescr" }, props.descr);
  return e("div", { className: "AboutUsBlock" }, largeStat, smallDescr);
}

class AboutUs extends React.Component {
  render() {
    const header = e("p", { id: "AboutUsHeader" }, "About Us");
    const impacted = e(AboutUs_Block, {
      stat: "??",
      descr: "COMMUNITIES IMPACTED",
    });
    const productsSold = e(AboutUs_Block, {
      stat: "??",
      descr: "AGRICULTURAL PRODUCTS SOLD",
    });
    const satisfaction = e(AboutUs_Block, {
      stat: "99%",
      descr: "SATISFACTION",
    });
    return e("div", {}, header, impacted, productsSold, satisfaction);
  }
}

class FeaturedBlock extends React.Component {
  render() {
    const img = e("img", { src: this.props.img, className: "FeaturedImg" });
    const name = e("p", { className: "FeaturedName" }, this.props.name);
    return e(
      "a",
      { href: this.props.loc, className: "FeaturedBlock" },
      img,
      name
    );
  }
}

class Featured extends React.Component {
  render(props) {
    const title = e("p", { id: "FeaturedTitle" }, "Featured");

    const block1 = e(FeaturedBlock, {
      img: "imgs/invasiveSpecies.jpg",
      name: "Invasive Species",
      loc: "databases.html",
    });
    const block2 = e(FeaturedBlock, {
      img: "imgs/fertilizer.jfif",
      name: "Fertilizers",
    });
    const block3 = e(FeaturedBlock, {
      img: "imgs/pesticides.jpg",
      name: "Pesticides",
    });

    return e("div", {}, title, block1, block2, block3);
  }
}

function Page(props) {
  return e(
    "div",
    {},
    e(SiteGreeting),
    e(SurveyPrompt),
    e(AboutUs),
    e(Featured)
  );
}

const contentContainer = document.querySelector("#content");
ReactDOM.render(e(Page), contentContainer);
