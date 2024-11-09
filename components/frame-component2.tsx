import type { NextPage } from "next";
import Image from "next/image";
import Button from "./button";
import BigBanner from "./big-banner";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section className={[styles.bigBannerParent, className].join(" ")}>
      <div className={styles.bigBanner}>
        <h1 className={styles.popularProducts}>Popular Products</h1>
        <div className={styles.ipadCombinesA}>
          iPad combines a magnificent 10.2-inch Retina display, incredible
          performance, multitasking and ease of use.
        </div>
        <Button icon={false} state="Black Stroke" buttonText="Shop Now" />
        <div className={styles.image39Parent}>
          <Image
            className={styles.image39}
            width={285}
            height={283}
            alt=""
            src="/image-39@2x.png"
          />
          <Image
            className={styles.image12Icon}
            loading="lazy"
            width={243}
            height={236}
            alt=""
            src="/image-12@2x.png"
          />
        </div>
      </div>
      <div className={styles.bigBanner1}>
        <div className={styles.titletext}>
          <h1 className={styles.ipadPro}>Ipad Pro</h1>
          <div className={styles.ipadCombinesA1}>
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </div>
          <Button icon={false} state="Black Stroke" buttonText="Shop Now" />
        </div>
        <Image
          className={styles.image64Icon}
          loading="lazy"
          width={360}
          height={366}
          alt=""
          src="/image-64@2x.png"
        />
      </div>
      <BigBanner samsungGalaxy="Samsung Galaxy " image41="/image-41@2x.png" />
      <BigBanner
        bigBannerBackgroundColor="#2c2c2c"
        samsungGalaxy="Macbook Pro"
        samsungGalaxyColor="#fff"
        image41="/macbook-1@2x.png"
        image41IconHeight="376px"
      />
    </section>
  );
};

export default FrameComponent2;
