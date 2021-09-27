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
      src: "imgs/rice-field-2k.jpg",
      id: "SiteImage",
    });
    const header = e(SiteHeader);
    const slogan = e("h1", { id: "Slogan" }, "APPLY. CONSULT. PROJECT.");
    return e(
      "div",
      { id: "SiteHeader", style: { opacity: 0 } },
      image,
      header,
      slogan
    );
  }
}

class SurveyPrompt extends React.Component {
  render() {
    const label = e(
      "p",
      { className: "Header1" },
      "Take our survey for initial agricultural consulting information."
    );
    const surveyButton = e("a", { href: "", id: "SurveyButton" }, "SURVEY");
    return e("div", {}, label, surveyButton);
  }
}

function AboutUs_Block(props) {
  const image = e("img", { className: "AboutUs_LinkImg", src: props.img });
  const smallDescr = e("p", { className: "SmallDescr" }, props.name);
  return e(
    "a",
    { className: "AboutUsBlock", href: props.link },
    image,
    smallDescr
  );
}

class AboutUs extends React.Component {
  render() {
    const header = e("p", { id: "AboutUsHeader" }, "About Us");
    const img = e("img", {
      src: "imgs/front.jpg",
      id: "AboutUsImage",
      align: "left",
      vspace: "15",
      hspace: "15",
    });
    const AboutUsDescription =
      "We are focusing on creating a service that makes agricultural consulting, agricultural data, and agricultural products, considerate and accessible. We want to provide an opportunity for the farmers to learn how to effectively use agricultural products to maximize their crop's success. We are dedicated to helping farmers who are unsure which agricultural products to use or who are finding new products to increase their farm's efficiency and yield.";
    const description = e("p", { id: "AboutUsDescr" }, AboutUsDescription);
    const AboutUsInfo = e("div", { id: "AboutUs" }, header, img, description);

    const CommunityImpact = e(AboutUs_Block, {
      name: "Community Impact",
      img: "imgs/community.jpg",
    });
    const ProductsSold = e(AboutUs_Block, {
      name: "Agricultural Products Sold",
      img: "imgs/pesticides.jpg",
    });
    const Credibility = e(AboutUs_Block, {
      name: "Our Credibility",
      img: "imgs/credibility.jpg",
    });

    return e(
      "div",
      {},
      AboutUsInfo,
      CommunityImpact,
      ProductsSold,
      Credibility
    );
  }
}

function Video(props) {
  const header = e("p", { className: "Header1" }, props.title);
  const video = e("iframe", {
    src: props.src,
    className: "Video",
  });
  const aspectRatio = e("div", { className: "VideoSpace" });
  const vidContainer = e(
    "div",
    {
      className: "VideoContainer",
    },
    header,
    aspectRatio,
    video
  );

  return e("div", {}, header, vidContainer);
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
    e("br"),
    e(AboutUs),
    e(Video, { src: "video_sample.mp4", title: "Video" })
  );
}

const contentContainer = document.querySelector("#content");
ReactDOM.render(e(Page), contentContainer);

// Fade In effect
window.onload = fadeInHeader;

function fadeInHeader() {
  var fade = document.getElementById("SiteHeader");
  var opacity = 0;
  var intervalID = setInterval(function () {
    if (opacity < 1) {
      opacity = opacity + 0.1;
      fade.style.opacity = opacity;
    } else {
      clearInterval(intervalID);
    }
  }, 100);
}
