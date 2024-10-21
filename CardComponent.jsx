import React from "react";
import Card from "./Card";

export default function CardComponent() {
  const data = [
    {
      header: "React",
      title: "React 18 - ReactJs Latest Version to Bring Lots...",
      text: "The extensively forecasted Version of React 18 has emerged finally. Its company has ultimately disclosed...",
      logo: "./chapter-247-logo.png",
      footerTxt: "Chapter 247",
      viewIcon: "./views-icon.png",
      totalViews: "122",
    },

    {
      img: "https://miro.medium.com/v2/resize:fit:1200/1*QdxrJ-_vQ1lllR8WoLmqEw.jpeg",
      header: "Figma",
      title: "20 Figma plugins every designer must have",
      text: "My favorite 20 plugins, which are important and necessary for every designer.",
      logo: "./UX-logo.png",
      footerTxt: "Dinessamala",
      viewIcon: "./views-icon.png",
      totalViews: "331",
    },

    {
      title: "How to Build a Design System if you're...",
      text: "It's always hard to be the only person in a company who is responsible for product design. Your day can be insanely...",
      footerTxt: "March 01, 2021",
      viewIcon: "./views-icon.png",
      totalViews: "440",
    },

    {
      img: "https://miro.medium.com/v2/resize:fit:2000/1*x4bKFiUGWQz4fO3717SC4A.jpeg",
      header: "React",
      title: "9 Figma plugins design system tips",
      text: "Most of these suggestions are ideal for when you're dealing with design systems or huge design files, but they're also...",
      footerTxt: "March 01, 2021",
      viewIcon: "./views-icon.png",
      totalViews: "111",
    },
  ];

  return (
    <div className="container">
      <div className="ui-kit">
        <h1>Card Article</h1>
        <h1>UI KIT</h1>

        <ul>
          <li>Auto Layout</li>
          <li>Customize Component</li>
          <li>Variant Component</li>
        </ul>

        <div className="accounts">
          <div className="fig-drib">
            <img src="./Figma-logo.png" />
            <p>@kristofeka</p>
          </div>

          <div className="vert-line"></div>

          <div className="fig-drib">
            <img src="./Dribble-logo.png" />
            <p>/@kristofeka</p>
          </div>
        </div>
      </div>

      <div className="cards">
        {data.map((item, i) => (
          <Card key={i} details={item} index={i} />
        ))}
      </div>
    </div>
  );
}
