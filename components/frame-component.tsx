import type { NextPage } from "next";
import Image from "next/image";
import Button from "./button";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section className={[styles.smallerBannersWrapper, className].join(" ")}>
      <div className={styles.smallerBanners}>
        <div className={styles.leftBanners}>
          <div className={styles.wideSquare}>
          <Image
            className={styles.playstation}
            width={360}
            height={343}
            alt="Playstation 5"
            src="/playstation@2x.png"
          />
            <div className={styles.titletext}>
              <h1 className={styles.playstation5}>Playstation 5</h1>
              <div className={styles.incrediblyPowerfulCpus}>
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                will redefine your PlayStation experience.
              </div>
            </div>
          </div>
          <div className={styles.squares}>
            <div className={styles.squareBanner}>
              <div className={styles.titletext1}>
                <h1 className={styles.appleAirpodsMaxContainer}>
                  <p className={styles.apple}>{`Apple `}</p>
                  <p className={styles.airpodsMax}>
                    <span className={styles.airpods}>{`AirPods `}</span>
                    <span className={styles.max}>Max</span>
                  </p>
                </h1>
                <div className={styles.incrediblyPowerfulCpus}>
                  Computational audio. Listen, it's powerful
                </div>
              </div>
              <Image
                className={styles.heroGnfk5g59t0qeXlarge2x1Icon}
                loading="lazy"
                width={104}
                height={272}
                alt=""
                src="/hero--gnfk5g59t0qe-xlarge-2x-1@2x.png"
              />
            </div>
            <div className={styles.squareBanner1}>
              <div className={styles.titletext2}>
                <h1 className={styles.appleVisionProContainer}>
                  <p className={styles.apple}>{`Apple `}</p>
                  <p className={styles.airpodsMax}>
                    <span className={styles.airpods}>{`Vision `}</span>
                    <span className={styles.max}>Pro</span>
                  </p>
                </h1>
                <div className={styles.incrediblyPowerfulCpus}>
                  An immersive way to experience entertainment
                </div>
              </div>
              <Image
                className={styles.image36Icon}
                loading="lazy"
                width={136}
                height={190}
                alt=""
                src="/image-36@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.bigBanner}>
          <div className={styles.content}>
            <div className={styles.titletext3}>
              <h1 className={styles.macbookAir}>
                <span className={styles.macbook}>{`Macbook `}</span>
                <span className={styles.air}>Air</span>
              </h1>
              <div className={styles.incrediblyPowerfulCpus}>
                The new 15‑inch MacBook Air makes room for more of what you love
                with a spacious Liquid Retina display.
              </div>
            </div>
            <Button icon={false} state="Black Stroke" buttonText="Shop Now" />
          </div>
          <Image
            className={styles.macbookPro14}
            loading="lazy"
            width={292}
            height={502}
            alt=""
            src="/macbook-pro-14@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
