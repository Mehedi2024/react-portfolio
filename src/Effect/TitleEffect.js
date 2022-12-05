import React from "react";

const TitleEffect = ({ classAdd = '', title = '', h1, sectinoName = "" }) => {
  //Mouse Hover Effect
  const addClass = (event) => {
    event.target.className += ` rabber_band`;
    setTimeout(() => {
      event.target.className = `blast`;
    }, 1000);
  };


  return (
    <h1 className={`main_heading_title ${classAdd} ${sectinoName}`}>
      {title.split('').map((item) => (
        <span
          key={Math.random()}
          onMouseEnter={(e) => addClass(e)}
          className="blast"
        >
          {item === "" && "\u00A0"}
          {item === "<br/> " ? "<br/> " : item}
        </span>
      ))}
      &nbsp;
      {h1}
    </h1>
  );
};

export default TitleEffect;
