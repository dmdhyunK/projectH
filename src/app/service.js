"use client";
import React, { useEffect, useRef } from "react";
import "./service.css"; 

export default function Service() {
  
  const wrapperRef = useRef(null);
  const panelRef = useRef(null);
  const letterRef = useRef(null);
  const programRef = useRef(null);
  const pointRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const wrapper = wrapperRef.current;
    const panel = panelRef.current;
    const slides = [letterRef.current, programRef.current, pointRef.current];

    if (!wrapper || !panel || !slides.every(s => s)) {
      return;
    }

    const scrollHandler = () => {
      const wrapperRect = wrapper.getBoundingClientRect();
      const wrapperTop = wrapperRect.top;
      const scrollableHeight = wrapper.scrollHeight - window.innerHeight;

      if (scrollableHeight <= 0) return;

      let progress = (-wrapperTop / scrollableHeight);
      progress = Math.max(0, Math.min(1, progress));

      const totalSlides = 3;
      let currentSlideIndex = Math.floor(progress * totalSlides);
      if (currentSlideIndex >= totalSlides) {
        currentSlideIndex = totalSlides - 1;
      }

      slides.forEach((slide, index) => {
        if (index === currentSlideIndex) {
          slide.classList.add('is-visible');
        } else {
          slide.classList.remove('is-visible');
        }
      });
    };

    window.addEventListener('scroll', scrollHandler, { passive: true });
    scrollHandler(); 

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []); 

  return (
    <section 
      id="service" 
      className="service-wrapper" 
      ref={wrapperRef}
    >
      <div className="sticky-panel" ref={panelRef}>
        <div className="service-slide letter-slide" ref={letterRef}>
          <div className="service-content-box is-blue">
            <img 
              src="/letter.svg" 
              alt="letter envelope" 
              className="anim-letter-envelope" 
            />
            <h2 className="anim-final-text">
              초대장 시스템으로<br/>고향에 편지로 인사해봐요!
            </h2>
          </div>
        </div>

        <div className="service-slide program-slide" ref={programRef}>
          <div className="service-content-box">
            <img 
              src="/slide2.svg" 
              alt="program view" 
              className="program-img" 
            />
            <div className="slide-text-content">
              <h3>지역과 함께 만드는 경험</h3>
              <p>
                호스트가 직접 기획한 봉사활동, 창작 워크숍, 커뮤니티 미션을 통해<br/>
                게스트가 지역의 삶과 문화를 몸소 경험하고 교류할 수 있어요.
              </p>
            </div>
          </div>
        </div>

        <div className="service-slide point-slide" ref={pointRef}>
          <div className="service-content-box is-blue">
            <img 
              src="/slide3_back p.svg" 
              alt="point" 
              className="point-img" 
            />
            <div className="slide-text-content">
              <h3>참여로 쌓고, 지역에 돌려주는<br/>로컬 포인트</h3>
              <p>
                봉사활동이나 프로그램 참여로 로컬 포인트를 적립해요.<br/>
                모은 포인트는 지역 식당, 카페, 편의시설에서 사용되어<br/>
                작은 소비가 지역의 활력으로 이어집니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}