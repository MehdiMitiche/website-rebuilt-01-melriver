/* eslint-disable react/prop-types */
import React, { useRef, useEffect } from "react";
import "./services.css";
import gsap from "gsap";

function CardService({ title, subtitle, img, delay }) {
  let card = useRef(null);
  let image = useRef(null);
  useEffect(() => {
    const t1 = gsap.timeline();
    t1.to(card, {
      duration: 1.4,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      delay,
      ease: "expo.inOut",
    }).to(image, { duration: 0.8, scale: 1 }, "-=1");
  });
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    // eslint-disable-next-line no-return-assign
    // eslint-disable-next-line react/jsx-filename-extension
    <div
      ref={(node) => {
        card = node;
      }}
      className="card-service"
    >
      <img
        // eslint-disable-next-line no-return-assign
        ref={(node) => (image = node)}
        src={img}
        alt="service-img"
        className="service-img"
      />
      <div className="overlay">
        <div className="card-service-content">
          <div className="servicee-subtitle">{subtitle}</div>
          <div className="servicee-title">{title}</div>
        </div>
      </div>
    </div>
  );
}

export default CardService;
