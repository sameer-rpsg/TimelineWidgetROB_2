import React, { useEffect } from "react";
import styles from "@/components/TimeLineWidget2.module.css";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
const TimeLineWidget2 = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(
      `.${styles.TimeLineWidget2highlight}`
    );

    const handleScroll = () => {
      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        const bottom = section.getBoundingClientRect().bottom;

        if (top < window.innerHeight - 100 && bottom > 0) {
          section.classList.add(styles._into_view);
        } else {
          section.classList.remove(styles._into_view);
        }
      });
    };

    handleScroll(); // Run on mount
    window.addEventListener("scroll", handleScroll);
    const images = document.querySelectorAll(`.${styles.lazyloadd}`);

    images.forEach((img) => {
      // Parallax effect - move the image slightly on scroll
      gsap.to(img, {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: img.parentElement, // The wrapper div of the image
          start: "top bottom", // Start when image enters viewport
          end: "bottom top", // End when it leaves
          scrub: true, // Smooth scrubbing
        },
      });

      // Optional: zoom-in effect on entry
      gsap.fromTo(
        img,
        { scale: 1.1 },
        {
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: img.parentElement,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="" className={styles.TimeLineWidget2}>
      <div className={styles.TimeLineWidget2container}>
        <div className={styles.part_12}>
          <div className={styles.TimeLineWidget2highlights}>
            <div className={styles.TimeLineWidget2highlight}>
              <span className={styles.highlight__year}>
                <span>1992</span>
              </span>
              <h6 className={styles.highlightsmallTitle}>La Tomatina, Spain</h6>
              <h4 className={styles.highlightsmallpara}>
             When in Spain, let the tomatoes take you down!
              </h4>
              <div className={styles.highlight__text}>
                <p className={styles.hightlight__textpara}>
                  <span>
                  If you are a Bollywood fan, I bet you have always wanted to take part in the tomato festival that you saw in Zindagi Na Milegi Dobara, that released in 2011
                  </span>
                </p>
              </div>
              <div className={`${styles.highlight__layout} ${styles._large}`}>
                <div className={styles.highlight_image}>
                  <div className={styles.image__inner}>
                    <img
                      className={`${styles.lazyloadd} ${styles.image__img}`}
                      src="https://www.manifestmagazine.in/_next/image?url=https%3A%2F%2Fcdn.manifestmagazine.in%2Feditor-images%2F2025-09-03T12%253A32%253A02.211Z-La%2520Tomatina%252C%2520Spain.jpg&w=1920&q=75"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.TimeLineWidget2highlight}>
              <span className={styles.highlight__year}>
                <span>2005</span>
              </span>
              <h6 className={styles.highlightsmallTitle}>Hogmanay, Scotland</h6>
              <h4 className={styles.highlightsmallpara}>
               Nothing screams romantic than an evening under the Edinburgh castel! 
              </h4>
              <div className={styles.highlight__text}>
                <p>
                  <span>
                   A new year’s special, if you are planning your honeymoon between December 29 to January 1, this festival allows you to ring in the New Year with fireworks and music at Edinburgh’s legendary Hogmanay. 
                  </span>
                </p>
              </div>
              <div className={`${styles.highlight__layout} ${styles._halfes}`}>
                <div className={styles.highlight_image}>
                  <div className={styles.image__inner}>
                    <img
                      className={`${styles.lazyloadd} ${styles.image__img}`}
                      src="https://www.manifestmagazine.in/_next/image?url=https%3A%2F%2Fcdn.manifestmagazine.in%2Feditor-images%2F2025-09-03T12%253A34%253A11.011Z-Yi%2520Peng%2520%2526%2520Loi%2520Krathong%2520festival.jpg&w=1920&q=75"
                    />
                  </div>
                </div>
                <div className={styles.highlight_image}>
                  <div className={styles.image__inner}>
                    <img
                      className={`${styles.lazyloadd} ${styles.image__img}`}
                      src="https://www.manifestmagazine.in/_next/image?url=https%3A%2F%2Fcdn.manifestmagazine.in%2Feditor-images%2F2025-09-03T12%253A29%253A50.040Z-Big%2520things%2520are%2520happening%2520at%2520Hogmanay%2520HQ...Listen%2520out%2520to%2520%2540forth1official%2520tomorrow%2520at%25208am%2520to%2520hear%2520.jpg&w=1920&q=75"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.TimeLineWidget2highlight}>
              <span className={styles.highlight__year}>
                <span>2007</span>
              </span>
              <h6 className={styles.highlightsmallTitle}>Cherry Blossom Festival, Japan</h6>
              <h4 className={styles.highlightsmallpara}>
             Let the Pink-hued city be your tinted goggles for your honeymoon
              </h4>
              <div className={styles.highlight__text}>
                <p className={styles.hightlight__textpara}>
                  <span>
                  Hanami, Japan’s tradition of flower-viewing picnics under blooming cherry trees, is exclusively for the newlyweds.
                  </span>
                </p>
              </div>
              <div className={`${styles.highlight__layout} ${styles._large}`}>
                <div className={styles.highlight_image}>
                  <div className={styles.image__inner}>
                    <img
                      className={`${styles.lazyloadd} ${styles.image__img}`}
                      src="https://www.manifestmagazine.in/_next/image?url=https%3A%2F%2Fcdn.manifestmagazine.in%2Feditor-images%2F2025-09-03T12%253A33%253A12.654Z-Cherry%2520Blossom%2520Festival%252C%2520Japan.JPG&w=1920&q=75"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.TimeLineWidget2highlight}>
              <span className={styles.highlight__year}>
                <span>2008</span>
              </span>
              <h6 className={styles.highlightsmallTitle}>Venice Carnival, Italy</h6>
              <h4 className={styles.highlightsmallpara}>
                A masquerade that screams romance
              </h4>
              <div className={styles.highlight__text}>
                <p>
                  <span>
                   Hosted in January to February, the Venice Carnival in Italy gives you a chance to step into an absolute fairytale where baroque costumes transform the city into a stage and feathered masks and canal-side masquerades make for a scene right out of a Shakespearean play.
                  </span>
                </p>
              </div>
              <div className={`${styles.highlight__layout} ${styles._overlay}`}>
                <div className={styles.highlight_image}>
                  <div className={styles.image__inner}>
                    <img
                      className={`${styles.lazyloadd} ${styles.image__img}`}
                      src="https://www.manifestmagazine.in/_next/image?url=https%3A%2F%2Fcdn.manifestmagazine.in%2Feditor-images%2F2025-09-03T12%253A35%253A04.847Z-Venice%2520Carnival%252C%2520Italy.jpg&w=1920&q=75"
                    />
                  </div>
                </div>
                <div className={styles.highlight_image}>
                  <div className={styles.image__inner}>
                    <img
                      className={`${styles.lazyloadd} ${styles.image__img}`}
                      src="https://www.manifestmagazine.in/_next/image?url=https%3A%2F%2Fcdn.manifestmagazine.in%2Feditor-images%2F2025-09-03T12%253A32%253A02.211Z-La%2520Tomatina%252C%2520Spain.jpg&w=1920&q=75"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeLineWidget2;
