import { Cloud } from "react-icon-cloud";
import React from "react";
import { v4 } from "uuid";

const wordTags = [
  {
    id: 0,
    title: "Typescript",
  },
  {
    id: 1,
    title: "Javascript",
  },
  {
    id: 2,
    title: "CSS3",
  },
  {
    id: 3,
    title: "HTML5",
  },
  {
    id: 4,
    title: "Node.js",
  },
  {
    id: 5,
    title: "Express.js",
  },
  {
    id: 6,
    title: "Figma",
  },
  {
    id: 7,
    title: "Visual-Studio-Code",
  },
  {
    id: 8,
    title: "Gitlab",
  },
  {
    id: 9,
    title: "Github",
  },
  {
    id: 10,
    title: "Jira",
  },
  {
    id: 11,
    title: "Git",
  },
  {
    id: 12,
    title: "Firebase",
  },
  {
    id: 13,
    title: "Redux",
  },
  {
    id: 14,
    title: "Typescript",
  },
  {
    id: 15,
    title: "Mongodb",
  },
  {
    id: 16,
    title: "SASS",
  },
  {
    id: 17,
    title: "Bootstrap",
  },
  {
    id: 18,
    title: "JQuery",
  },
  {
    id: 19,
    title: "Webpack",
  },
  {
    id:20,
    title: "REST API",
  },
  {
    id: 21,
    title: "JSON",
  },
  {
    id: 22,
    title: "npm",
  },
  {
    id: 23,
    title: "ES5/ES6",
  }
];

export default function TagCanvus() {
  const tagCanvasOptions = {
    textColour: "#FFDE34",
    outlineThickness: 0.5,
    outlineColour: "#fe0853",
    maxSpeed: 0.06,
    freezeActive: true,
    shuffleTags: true,
    shape: "sphere",
    zoom: 1,
    noSelect: true,
    pinchZoom: true,
    freezeDecel: true,
    fadeIn: 3000,
    initial: [0.3, -0.1],
    depth: 0.97,  
    reverse: true,
    clickToFront: 500,
    textHeight: 35,
    imageScale: 2,
    dragControl:true,
    tooltip: "native",
    tooltipDelay: 0,
    wheelZoom: true,
    textFont:'Arial, sans-serif',

  
  };

  return (
    <Cloud
      id={"word"}
      type={"word"}
      tags={wordTags}
      key={v4()}
      tagCanvasOptions={tagCanvasOptions}
    />
  );
}
