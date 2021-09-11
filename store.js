"use strict";

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const nameLabel = e("h2", { className: "NameLabel" }, this.props.name);
    const effectiveLabel = e(
      "p",
      { className: "EffectiveLabel" },
      "Effective Against: " + this.props.effective.join(", ")
    );

    const priceLabel = e(
      "h3",
      { className: "PriceLabel" },
      "$" + String(this.props.price)
    );
    const buyButton = e("button", {}, "Buy");
    return e(
      "div",
      { className: "Item" },
      nameLabel,
      effectiveLabel,
      priceLabel,
      buyButton
    );
  }
}

class Store extends React.Component {
  render() {
    const item1 = e(Item, {
      name: "Pesticide 1",
      price: "54.00",
      effective: ["Larva", "Caterpillars"],
    });
    const item2 = e(Item, {
      name: "Pesticide 2",
      price: "34.00",
      effective: ["Moths", "Caterpillars"],
    });
    return e("div", {}, item1, item2);
  }
}

const container = document.querySelector("#store");
ReactDOM.render(e(Store), container);
