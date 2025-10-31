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
              <h6 className={styles.highlightsmallTitle}>Fauchon, Paris</h6>
              <h4 className={styles.highlightsmallpara}>
           Fauchon Paris turns everyday groceries into art, with jewel-like macarons, foie gras, and elegantly packaged teas that delight both sight and taste.
              </h4>
              <div className={styles.highlight__text}>
                <p className={styles.hightlight__textpara}>
                  <span>
               Parisian maisons such as Fauchon transform staples into objets of desire. At its boutiques, jewel-like macarons, tins of foie gras, and elegantly packaged teas make grocery shopping feel like stepping into an art gallery.
                  </span>
                </p>
              </div>
              <div className={`${styles.highlight__layout} ${styles._large}`}>
                <div className={styles.highlight_image}>
                  <div className={styles.image__inner}>
                    <img
                      className={`${styles.lazyloadd} ${styles.image__img}`}
                      src="https://www.hollywoodreporterindia.com/_next/image?url=https%3A%2F%2Fcdn.robbreportindia.com%2Feditor-images%2F2025-09-25T10%253A18%253A18.834Z-WhatsApp%2520Image%25202025-09-25%2520at%25203.45.21%2520PM%2520%25281%2529.jpeg&w=3840&q=75"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.TimeLineWidget2highlight}>
              <span className={styles.highlight__year}>
                <span>2005</span>
              </span>
              <h6 className={styles.highlightsmallTitle}>KaDeWe Gourmet Floor, Berlin</h6>
              <h4 className={styles.highlightsmallpara}>
              KaDeWe Berlin’s Gourmet Floor is a culinary wonderland, where 30,000 products, oyster bars, and sweeping city views make shopping a spectacular experience.
              </h4>
              <div className={styles.highlight__text}>
                <p>
                  <span>
                  Located on the sixth and seventh floors of Kaufhaus des Westens, KaDeWe’s Gourmet Floor is a culinary wonderland. With over 30,000 products, oyster bars, charcuterie counters, and sweeping views of Berlin, this is where shopping meets spectacle.
                  </span>
                </p>
              </div>
              <div className={`${styles.highlight__layout} ${styles._halfes}`}>
                <div className={styles.highlight_image}>
                  <div className={styles.image__inner}>
                    <img
                      className={`${styles.lazyloadd} ${styles.image__img}`}
                      src="https://www.robbreportindia.com/_next/image?url=https%3A%2F%2Fcdn.robbreportindia.com%2Feditor-images%2F2025-09-25T10%253A18%253A18.822Z-WhatsApp%2520Image%25202025-09-25%2520at%25203.45.21%2520PM%2520%25285%2529.jpeg&w=1200&q=75"
                    />
                  </div>
                </div>
                <div className={styles.highlight_image}>
                  <div className={styles.image__inner}>
                    <img
                      className={`${styles.lazyloadd} ${styles.image__img}`}
                      src="https://www.hollywoodreporterindia.com/_next/image?url=https%3A%2F%2Fcdn.robbreportindia.com%2Feditor-images%2F2025-09-25T10%253A18%253A18.824Z-WhatsApp%2520Image%25202025-09-25%2520at%25203.45.21%2520PM%2520%25284%2529.jpeg&w=3840&q=75"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.TimeLineWidget2highlight}>
              <span className={styles.highlight__year}>
                <span>2007</span>
              </span>
              <h6 className={styles.highlightsmallTitle}>Eataly, New York and Worldwide</h6>
              <h4 className={styles.highlightsmallpara}>
            Eataly New York blends market, restaurant, and classes, letting you shop fresh pasta, taste mozzarella, and sip regional wines all under one roof.
              </h4>
              <div className={styles.highlight__text}>
                <p className={styles.hightlight__textpara}>
                  <span>
                 Part marketplace and part cultural hub, Eataly celebrates Italian food with a format that combines market stalls, counters, restaurants, and classes.
                  </span>
                </p>
              </div>
              <div className={`${styles.highlight__layout} ${styles._large}`}>
                <div className={styles.highlight_image}>
                  <div className={styles.image__inner}>
                    <img
                      className={`${styles.lazyloadd} ${styles.image__img}`}
                      src="https://www.hollywoodreporterindia.com/_next/image?url=https%3A%2F%2Fcdn.robbreportindia.com%2Feditor-images%2F2025-09-25T10%253A18%253A18.836Z-WhatsApp%2520Image%25202025-09-25%2520at%25203.45.21%2520PM.jpeg&w=3840&q=75"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.TimeLineWidget2highlight}>
              <span className={styles.highlight__year}>
                <span>2008</span>
              </span>
              <h6 className={styles.highlightsmallTitle}>Fortnum & Mason, Piccadilly, London</h6>
              <h4 className={styles.highlightsmallpara}>
               Fortnum & Mason, London, has been serving royalty and tastemakers since 1707, where iconic hampers, rare teas and jewel-toned preserves turn grocery shopping into a journey.
              </h4>
              <div className={styles.highlight__text}>
                <p>
                  <span>
                  Founded in 1707, Fortnum & Mason has been supplying to royalty and tastemakers for over three centuries now. Its famed hampers, jewel-toned preserves, and rare teas are as much cultural artefacts as they are groceries. A visit to the Piccadilly flagship is a journey into British heritage served with elegance.
                  </span>
                </p>
              </div>
              <div className={`${styles.highlight__layout} ${styles._overlay}`}>
                <div className={styles.highlight_image}>
                  <div className={styles.image__inner}>
                    <img
                      className={`${styles.lazyloadd} ${styles.image__img}`}
                      src="https://www.robbreportindia.com/_next/image?url=https%3A%2F%2Fcdn.robbreportindia.com%2Feditor-images%2F2025-09-25T10%253A18%253A18.831Z-WhatsApp%2520Image%25202025-09-25%2520at%25203.45.21%2520PM%2520%25282%2529.jpeg&w=1200&q=75"
                    />
                  </div>
                </div>
                <div className={styles.highlight_image}>
                  <div className={styles.image__inner}>
                    <img
                      className={`${styles.lazyloadd} ${styles.image__img}`}
                      src="https://www.robbreportindia.com/_next/image?url=https%3A%2F%2Fcdn.robbreportindia.com%2Feditor-images%2F2025-09-25T10%253A18%253A18.827Z-WhatsApp%2520Image%25202025-09-25%2520at%25203.45.21%2520PM%2520%25283%2529.jpeg&w=1920&q=75"
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
