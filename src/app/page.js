"use client";
import "./home.css";
import Header from "./header.js";
import Service from "./service.js";
import AppIcon from "./appicon.js";
import Kiosk_ani from "./kiosk_ani";
import { useState, useEffect, useRef } from "react";

export default function Page() {
  useEffect(() => {
    const imgs = document.querySelectorAll(".card img[data-alt]");

    const handler = (e) => {
      const img = e.currentTarget;
      const cur = img.getAttribute("src");
      const alt = img.getAttribute("data-alt");
      img.setAttribute("src", alt);
      img.setAttribute("data-alt", cur);
    };
    

    imgs.forEach((img) => {
      img.style.cursor = "pointer";
      img.addEventListener("click", handler);
    });

    return () => imgs.forEach((img) => img.removeEventListener("click", handler));
  }, []);

  const videoRef = useRef(null);
  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };


  return (
    <main>
      <section id="main">
      <div className="hero">
        <Header/>
        <div className="container">19
          <h1 className="title">Project H.</h1>
          <div className="phones">
            <img src="/phone.svg" alt="app preview"/>
            <h5>새로운 삶을 찾아 떠나는 일들을 <br/>위한 마음의 고향 만들기</h5>
          </div>
        </div>
      </div>
         <div className="section">
          <div className="container">
            <h4>Market Research</h4>
            <a>단순히 빈집을 채우는 것을 넘어, 현대 사회와<br/>개인의 삶이 직면한 복잡한 문제들이 있습니다.</a>
            <div className="card">
              <img src="/blem_1_1.svg" data-alt="/blem_1_2.svg" />
              <img src="/blem_2_1.svg" data-alt="/blem_2_2.svg" />
              <img src="/blem_3_1.svg" data-alt="/blem_3_2.svg" />
            </div>
            <a>‘프로젝트 하우스’는 새로운 삶의 방식과 공동체를 제시합니다. 단순한 거주 공간이 아니라, <br/>
            함께 살아가는 방식을 다시 고민하고 실험하게 합니다. 각자의 삶이 연결되고 순환하며, <br/>
            지역과 개인이 함께 성장할 수 있는 새로운 형태의 공동체를 만들어갑니다.</a>
        </div>
      </div>
    </section>
      <section id="background" className="mission">
        <div className="container">
          <p className="mission-typo">
            개인의 <b>유목민적 삶</b>을 보장하면서,<br/>
            각 지역의 <b>정서적 고향</b>을 구축해<br/>
            <b>지속 가능한 공동체</b>를 만드는 것
          </p>
          </div>
          </section>
          <div className="bg-rows">
            <article className="bg-item">
              <h4><span className="sq"/> 유목민적 삶</h4>
              <p>
                한곳에 매몰되지 않고 이동하며 살아가는 현대인의 삶을 존중합니다.
                Project H는 원하는 지역에서 머물고 떠날 수 있는 유연한 거주 방식을 제안합니다.
              </p>
            </article>

            <article className="bg-item">
              <h4><span className="sq"/> 정서적 고향</h4>
              <p>
                자주 이동해도 마음이 쉴 곳은 필요합니다. Project H는 지역과 사람을 연결해
                언제든 돌아올 수 있는 정서적 기반을 만듭니다.
              </p>
            </article>

            <article className="bg-item">
              <h4><span className="sq"/> 지속 가능한 공동체</h4>
              <p>
                개인과 지역이 함께 성장하는 순환형 구조를 지향합니다.
                공간의 재활용과 협업을 통해 오래 지속될 수 있는 공동체를 구축합니다.
              </p>
            </article>
          </div>
            <div className="section">
            <div className="container">
              <h4>Logo</h4>
              <div className="logo">
                <div className="logos-row">
                  <img className="logo-project" src="/logo_project.svg"/>
                  <div className="box-wrap">
                    <img className="logo-box" src="/logo_box.svg"/>
                    <img className="logo-house" src="/logo_house.svg"/>
                  </div>
                </div>
                <img className="logo-H" src="/logo_H.svg"/>
                <a>자유로운 삶을 꿈꾸는 당신에게,<br/>
                Project H.는 '<b>당신만의 프로젝트</b>'를 위한 공간이자<br/>
                '<b>진정한 마음의 고향</b>'을 찾아가는 여정입니다.</a>
            </div>
          </div>
        </div>

          <div className="bg-icons">
            <div className="thumb">
              <img className="img-base" src="/32.svg"/>
              <img className="img-alt"  src="/32_2.svg"/>
            </div>
            <div className="thumb">
              <img className="img-base" src="/28.svg"/>
              <img className="img-alt"  src="/28_2.svg"/>
            </div>
            <div className="thumb">
              <img className="img-base" src="/40.svg" />
              <img className="img-alt"  src="/40_2.svg"/>
            </div>
            <div className="thumb">
              <img className="img-base" src="/61.svg"/>
              <img className="img-alt"  src="/61_2.svg"/>
            </div>
          </div>

          <Service />

          <AppIcon/>

          <Kiosk_ani/>

          <section className="brand">
            <img src="/branding_logo.svg"/>
            <img src="/branding_font.svg"/>
          </section>

          <section id="video" className="story_vid" onClick={handleVideoClick}>
            <video
              ref={videoRef}
              src={"/project.h.mp4"}  
              playsInline 
            >
              Your browser does not support the video tag.
            </video>
          </section>
          <section id="display">
            <img className="footer" src="footer.svg"/>
          </section>
    </main>
  );
}
