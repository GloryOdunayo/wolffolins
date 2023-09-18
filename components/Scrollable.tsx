// components/ScrollingSection.tsx

import { useEffect, useRef } from "react";
import NavBar from "./NavBar";

const ScrollingSection = () => {
  const sections = Array.from({ length: 8 });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const sectionRefs = sections.map(() => useRef<HTMLDivElement>(null));
  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  };
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the element is in the viewport
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sectionRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      {sections.map((_, index) => (
        <div
          key={index}
          ref={sectionRefs[index]}
          className={`section ${index === 0 ? "visible" : ""}`}
        >
          <div className="">
            <NavBar leftColor="rgb(255,235,0)" rightColor="rgb(255,235,0)" />
          </div>
          <h1>Section {index + 1}</h1>
        </div>
      ))}
    </div>
  );
};

export default ScrollingSection;
