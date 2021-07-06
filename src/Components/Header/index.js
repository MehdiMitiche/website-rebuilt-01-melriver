import React, { useRef, useEffect } from "react";
import "./header.css";
import gsap from "gsap";

function Header() {
  const title = useRef([]);
  const rects = useRef([]);
  useEffect(() => {
    const t1 = gsap.timeline();
    t1.to(title.current, {
      duration: 1.1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0 100%)",
      stagger: 0.4,
      delay: 0.6,
    })
      .to(rects.current, {
        duration: 1.1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        stagger: 0.3,
        ease: "expo.inOut",
      })
      .to(title.current, { duration: 0.3, color: "black" }, "-=1.3");
  });

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="header">
      <div className="rect-container">
        <div
          ref={(node) => {
            rects.current[0] = node;
          }}
          className="rect rect-1"
        />
        <div
          ref={(node) => {
            rects.current[1] = node;
          }}
          className="rect rect-2"
        />
        <div
          ref={(node) => {
            rects.current[2] = node;
          }}
          className="rect rect-3"
        />
      </div>
      <div className="header-content">
        <div className="header-title">
          <div
            className="title-item"
            ref={(node) => {
              title.current[0] = node;
            }}
          >
            Creating unique brands is
          </div>
          <div
            className="title-item"
            ref={(node) => {
              title.current[1] = node;
            }}
          >
            {" "}
            what we do.
          </div>
        </div>
        <div className="header-cta">More about us</div>
      </div>
    </div>
  );
}

export default Header;
