"use client";
import React, { useState, useEffect } from "react";
import "./appicon.css"; 

const valueData = {
  content: {
    titleImg: "/roll_content_text.svg",
    iconImg: "/content.svg",
    keywordImgs: [
      "/roll_content_keyword.svg"
    ]
  },
  action: {
    titleImg: "/roll_act_text.svg",
    iconImg: "/act.svg",
    keywordImgs: [
      "/roll_act_keyword.svg" 
    ]
  },
  home: {
    titleImg: "/roll_home_text.svg",
    iconImg: "/home.svg",
    keywordImgs: [
      "/roll_home_keyword.svg"
    ]
  },
  community: {
    titleImg: "/roll_commu_text.svg",
    iconImg: "/commu.svg",
    keywordImgs: [
      "/roll_commu_keyword.svg"
    ]
  },
  my: {
    titleImg: "/roll_my_text.svg",
    iconImg: "/my.svg",
    keywordImgs: [
      "/roll_my_keyword.svg"
    ]
  }
};

export default function Page() {
  
  const [activeValue, setActiveValue] = useState('home');

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const imgs = document.querySelectorAll(".card img[data-alt]");
    const cardClickHandler = (e) => {
      const img = e.currentTarget;
      const cur = img.getAttribute("src");
      const alt = img.getAttribute("data-alt");
      img.setAttribute("src", alt);
      img.setAttribute("data-alt", cur);
    };
    imgs.forEach((img) => {
      img.style.cursor = "pointer";
      img.addEventListener("click", cardClickHandler);
    });
    
    return () => {
      imgs.forEach((img) => img.removeEventListener("click", cardClickHandler));
    };
  }, []); 

  return (
      <section id="value" className="value-section">
        <div className="value-left-column">
          <div className="value-text-content">
            <img 
              src={valueData[activeValue].titleImg} 
              alt="" 
              className="value-title-img" 
            />
            <div className="value-keyword-row">
              <img 
                src={valueData[activeValue].iconImg} 
                alt="" 
                className="value-icon" 
              />
              {valueData[activeValue].keywordImgs.map((src, index) => (
                <img 
                  key={index} 
                  src={src} 
                  alt="" 
                  className="value-keyword-img" 
                />
              ))}
            </div>
          </div>
        </div>

        <div className="value-right-column">
          <img src="/phone-mockup.png" alt="App Preview" className="value-phone" />
          <div className="dial-container">
            <div className={`dial-rotor ${activeValue}`}>
              <button 
                className="dial-button icon-content" 
                onClick={() => setActiveValue('content')}
                aria-label="콘텐츠"
              >
                <img src={valueData.content.iconImg} alt="content" />
              </button>
              
              <button 
                className="dial-button icon-action" 
                onClick={() => setActiveValue('action')}
                aria-label="활동"
              >
                <img src={valueData.action.iconImg} alt="action" />
              </button>

              <button 
                className="dial-button icon-home" 
                onClick={() => setActiveValue('home')}
                aria-label="홈"
              >
                <img src={valueData.home.iconImg} alt="home" />
              </button>
              
              <button 
                className="dial-button icon-community" 
                onClick={() => setActiveValue('community')}
                aria-label="소통"
              >
                <img src={valueData.community.iconImg} alt="community" />
              </button>

              <button 
                className="dial-button icon-my" 
                onClick={() => setActiveValue('my')}
                aria-label="마이페이지"
              >
                <img src={valueData.my.iconImg} alt="my" />
              </button>
            </div>
          </div>
        </div>
      </section>
  );
}