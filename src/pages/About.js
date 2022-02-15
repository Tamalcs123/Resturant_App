import React from "react";
import MultiplePizzas from "../assets/masala.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          McDonald's, Burger King, and Pizza Hut are examples of chain
          restaurants that are all over the world. These restaurants serve fast
          food, that is, inexpensive food, prepared and served quickly. At some,
          you do not have to even get out of the car to eat. You can pay and get
          your order from a window. These places are called drive-throughs.
          There are also chain restaurants that serve slightly more expensive
          food. They are called fast casual restaurants. Applebee's and Perkins
          are examples of this type of chain restaurant. Haute cuisine or 'fine
          dining' is found in a guide, such as the Michelin Guide, the most
          famous restaurant guide in the world. Their 3-star rosettes are given
          only to restaurants with the highest standards of cooking and service.
          Interestingly, the Guide gives more 3-stars to Tokyo and Kyoto than to
          Paris, London and New York together.[1][2] Traditionally, the
          restaurants of top hotels such as the Hotel de Paris in Monte Carlo or
          the Hôtel Ritz Paris were the main places recognized for fine dining.
          Today, most Michelin Guide restaurants are separate establishments.
        </p>
      </div>
    </div>
  );
}

export default About;
