"use strict";

const e = React.createElement;

function NavButton(props) {
  return e("a", { href: props.loc, className: "NavButton" }, props.name);
}

//props.links example: [index.html, store.html]
function NavDropDown(props) {
  let links = [];
  for (let link of props.links) {
    let linkName = link.substr(0, link.length - 5);
    linkName = linkName.charAt(0).toUpperCase() + linkName.slice(1);
    links.push(e("a", { href: link }, linkName));
  }
  const dropdown = e("div", { className: "dropdown-content" }, links);
  return e(
    "div",
    {},
    e(NavButton, { name: props.name, loc: props.loc }),
    dropdown
  );
}

function SearchButton(props) {
  const magImg = e("img", {
    src: "imgs/search.png",
    width: "100%",
    display: "block",
  });
  return e("a", { href: "", className: "SearchButton" }, magImg);
}

class NavBar extends React.Component {
  render() {
    // all the buttons

    const button1 = e(
      NavButton,
      { name: "Partnerships", loc: "partnerships.html" },
      ""
    );
    const button2 = e(
      NavButton,
      { name: "About Us", loc: "about-us.html" },
      ""
    );
    const button3 = e(
      NavButton,
      {
        name: "Analytics",
        loc: "analytics.html",
      },
      ""
    );
    const button4 = e(
      NavButton,
      { name: "Contact Us", loc: "contact-us.html" },
      ""
    );

    const searchButton = e(SearchButton, {});

    return e(
      "div",
      { className: this.props.className },
      button1,
      button2,
      button3,
      button4,
      searchButton
    );
  }
}

function SiteLogo(props) {
  const img = e("img", {
    className: "LogoImage",
    src: "imgs/cropop.png",
  });
  return e(
    "a",
    { padding: "8px", href: "index.html", className: "SiteLogo" },
    img
  );
}

function SiteHeader() {
  const logo = e(SiteLogo);
  const menu = e(NavBar, { className: "Menu" });
  return e("div", {}, logo, menu);
}

const domContainer = document.querySelector("#nav-bar");
ReactDOM.render(e(SiteHeader, {}), domContainer);
