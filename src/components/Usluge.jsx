import React from "react";
import "./usluge.scss";
import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

    const Usluge = () => {
        const scrollRef = useRef();
        const isInView = useInView(scrollRef);
        useEffect(() => {
          if (isInView) seeRef();
        }, [isInView]);
        var timlineRef = useRef();
        console.log(timlineRef.current);
      
        const seeRef = () => {
          console.log(timlineRef.current); // <h1 ></h1>
          if (timlineRef.current !== undefined) {
            var sections = timlineRef.current.querySelectorAll(".agn-card");
            var timeline = timlineRef.current.querySelector(".agn-timeline");
            var line = timlineRef.current.querySelector(".agn-line");
            console.log(sections);
            console.log(timeline);
            console.log(line);
            line.style.bottom = `calc(100% - 20px)`;
            let prevScrollY = window.scrollY;
            let up, down;
            let full = false;
            let set = 50;
            const targetY = window.innerHeight * 0.8;
      
            function scrollHandler(e) {
              const { scrollY } = window;
              up = scrollY < prevScrollY;
              down = !up;
              const timelineRect = timeline.getBoundingClientRect();
              
      
              const dist = targetY - timelineRect.top + 50;
              console.log(dist);
      
              if (down && !full) {
                set = Math.max(set, dist);
                line.style.bottom = `calc(100% - ${set}px)`;
              }
      
              if (dist > timeline.offsetHeight - 70 && !full) {
                full = true;
                line.style.bottom = `70px`;
              }
      
              sections.forEach((item) => {
                
                const rect = item.getBoundingClientRect(); 
      
                if (rect.top + item.offsetHeight / 5 < targetY) {
                  item.classList.add("show-me");
                }
              }); 
      
              prevScrollY = window.scrollY;
            }
      
            scrollHandler();
            line.style.display = "block";
            window.addEventListener("scroll", scrollHandler);
          }
        };
    return(
        <div id="usluge" className="agn-section" ref={timlineRef}>
            <div className="usluge-nesto">
            <div className="usluge-h1"><h1>Usluge</h1></div>
            <div>
              <p className="usluge-text">Niste sigurni kako da poboljšate svoju fizičku formu, imate loše navike u ishrani, teško Vam ide treniranje i 
                    potrebna vam je specijalizovana podrška? Konstruktori su tu za Vas, jer zajedno gradimo most preko prepreka.
              </p>
            </div>
            <div className="usluge-h2"><h2 ref={scrollRef}>Koje usluge mi pružamo?</h2></div>
            </div>
      
      <div className="agn-timeline">
        <div className="agn-line"></div>
        <div className="agn-card">
        <div className="agn-bead"></div>
          <div className="agn-content">
            <div className="agn-text">
              <h2 className="agn-date">1.</h2>
              <p className="agn-descr">
                Izrada plana zdrave ishrane prema potrebi pojedinca
              </p>
            </div>
          </div>
        </div>

        <div className="agn-card">
          <div className="agn-bead"></div>
          <div className="agn-content">
            <div className="agn-pseudo"></div>
            <div className="agn-text">
              <h2 className="agn-date">2. </h2>
              <p className="agn-descr">
              Izrada personalizovanog plana treninga
                
              </p>
            </div>
          </div>
        </div>

        <div className="agn-card">
          <div className="agn-bead"></div>
          <div className="agn-content">
            <div className="agn-pseudo"></div>
            <div className="agn-text">
              <h2 className="agn-date">3.</h2>
              <p className="agn-descr">
              Stručna podrška tokom procesa treniranja
                
              </p>
            </div>
          </div>
        </div>
        <div className="agn-card">
          <div className="agn-bead"></div>
          <div className="agn-content">
            <div className="agn-pseudo"></div>
            <div className="agn-text">
              <h2 className="agn-date">4.</h2>
              <p className="agn-descr">
              Kontinuirano merenje napretka i unapređenje programa treninga
                
              </p>
            </div>
          </div>
        </div>
        
        <div className="agn-card">
          <div className="agn-bead"></div>
          <div className="agn-content">
            <div className="agn-pseudo"></div>
            <div className="agn-text">
              <h2 className="agn-date">5.</h2>
              <p className="agn-descr">
              Željena fizička forma
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}


export default Usluge;