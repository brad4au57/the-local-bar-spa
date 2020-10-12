import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Collapse from "react-bootstrap/Collapse";
import menuLogo from "../assets/vector/default-monochrome-black-w-slogan.svg";

export default function Menus() {
  const [viewFood, setViewFood] = useState(true);
  const [viewDrinks, setViewDrinks] = useState(false);
  return (
    <Container>
      <Row className="menu-header-row mx-auto w-75">
        <Col className="text-center menu-header-text">
          <span>Eat Local, Drink Local</span>
        </Col>
      </Row>
      <Row>
        <Col
          className="col-11 col-md-6 text-center mx-auto my-5 py-5 menu-card order-1"
          onClick={() => setViewFood(!viewFood)}
          aria-controls="food-menu-text"
          aria-expanded={viewFood}
          style={
            viewFood
              ? { backgroundColor: "#b40036" }
              : { backgroundColor: "#3e0123" }
          }
        >
          <span className="menu-card-title">FOOD</span>
          <span className="menu-click-text text-uppercase d-block">
            Click to see menu
          </span>
        </Col>
        <Col
          className="col-11 col-md-6 text-center mx-auto mb-5 py-5 menu-card order-3"
          onClick={() => setViewDrinks(!viewDrinks)}
          aria-controls="drink-menu-text"
          aria-expanded={viewDrinks}
          style={
            viewDrinks
              ? { backgroundColor: "#b40036" }
              : { backgroundColor: "#3e0123" }
          }
        >
          <span className="menu-card-title">DRINKS</span>
          <span className="menu-click-text text-uppercase d-block">
            Click to see menu
          </span>
        </Col>
        {/* COLLAPSED FOOD MENU */}
        <Collapse in={viewFood} className="order-2 p-2 full-menu-container">
          <div id="food-menu-text">
            <div className="w-75 mx-auto">
              <img src={menuLogo} alt="menu-bar-logo" className="py-3" />
            </div>
            {/* STARTERS */}
            <h1 className="text-center mb-3 menu-section-header w-50 mx-auto">
              Starters
            </h1>
            <h4>Irish Potato Bread</h4>
            <p className="menu-item-description">
              Squares of crispy potato flatbread similar to potato farls, the
              fried potato bread that’s a traditional part of the Northern Irish
              breakfast known as an Ulster Fry.
            </p>
            <h4>Potato & Irish Cheddar Rolls</h4>
            <p className="menu-item-description">
              The lightest and most delicious rolls you've ever tasted.
              Perfectly paired our with Irish Soups & Stews or just covered in a
              thick layer of Irish butter.
            </p>
            <h4>Spiced Mussels with Chorizo & Irish Cider</h4>
            <p className="menu-item-description">
              A big bowl of the freshest steamed mussels covered in a Gubeen
              chorizo and Longueville House Irish cider sauce.
            </p>
            {/* SOUPS */}
            <h1 className="text-center mb-3 menu-section-header w-50 mx-auto">
              Soups
            </h1>
            {/* MEAT PIES */}
            <h1 className="text-center mb-3 menu-section-header w-75 mx-auto">
              Meat Pies
            </h1>
            <h4>Colcannon Ham & Cabbage Pie</h4>
            <p className="menu-item-description">
              The ideal rib sticking pie you may require for those brisk Autumn
              evenings. A perfect pairing of creamy Irish mash, cabbage, and
              honey baked ham.
            </p>
            <h4>Colcannon Ham & Cabbage Pie</h4>
            <p className="menu-item-description">
              The ideal rib sticking pie you may require for those brisk Autumn
              evenings. A perfect pairing of creamy Irish mash, cabbage, and
              honey baked ham.
            </p>
            {/* DESSERTS */}
            <h1 className="text-center mb-3 menu-section-header w-50 mx-auto">
              Desserts
            </h1>
          </div>
        </Collapse>
        {/* COLLAPSED DRINK MENU */}
        <Collapse in={viewDrinks} className="order-4 p-2 full-menu-container">
          <div id="drink-menu-text">
            <div className="w-75 mx-auto">
              <img src={menuLogo} alt="menu-bar-logo" className="py-3" />
            </div>
            <h3>DRINKS</h3>
            <p>
              Lorem Ipsum Dolor Set Anum. Anim pariatur cliche reprehenderit,
              enim eiusmod high life accusamus terry richardson ad squid. Nihil
              anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident.
            </p>
          </div>
        </Collapse>
      </Row>
    </Container>
  );
}
