"use client";
import { useState, useEffect, useRef } from "react";
import "./header.css";

export default function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const [isTeamOpen, setIsTeamOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY.current) {
          setIsHidden(true);
        } else {
          setIsHidden(false);
        }
      } else {
        setIsHidden(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); 

  const teamMembers = [
    { name: "박다빈", url: "#portfolio_link" },
    { name: "노권후", url: "#portfolio_link" },
    { name: "심정빈", url: "#portfolio_link" },
    { name: "오정은", url: "#portfolio_link" },
    { name: "배준일", url: "#portfolio_link" },
    { name: "김지현", url: "#portfolio_link" },
  ];

  return (
    <header className={`page-header ${isHidden ? "is-hidden" : ""}`}>
      
      <div className="logo-wrapper">
        <a href="#main">
          <img src="/logo.svg" alt="Project H Logo" />
        </a>
      </div>

      <nav className="gnb-wrapper glass-box">
        <a href="#main" className="nav-link">Main</a>
        <a href="#background" className="nav-link">Background</a>
        <a href="#value" className="nav-link">Value</a>
        <a href="#service" className="nav-link">Service</a>
        <a href="#video" className="nav-link">Video</a>
        <a href="#display" className="nav-link">Display</a>
      </nav>

      <div className="hamburger-wrapper glass-box">
        <button 
          className="hamburger-btn"
          onClick={() => setIsTeamOpen(!isTeamOpen)}
          aria-label="Team Menu"
        >
          <span className={`bar ${isTeamOpen ? "open" : ""}`}></span>
          <span className={`bar ${isTeamOpen ? "open" : ""}`}></span>
          <span className={`bar ${isTeamOpen ? "open" : ""}`}></span>
        </button>

        <div className={`team-dropdown ${isTeamOpen ? "open" : ""}`}>
          <h3>Team Members</h3>
          <ul>
            {teamMembers.map((member, index) => (
              <li key={index}>
                <a 
                  href={member.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {member.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}