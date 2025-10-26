"use client";
import React, { useEffect, useRef } from "react";
import "./home.css"; 

export default function Kiosk_ani() {
  
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const currentRef = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5, 
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section className="kiosk" ref={sectionRef}>
      <img src="/kiosk_ex.svg" />
      <img src="/kiosk.svg" className="kiosk_ex"/>
    </section>
  );
}