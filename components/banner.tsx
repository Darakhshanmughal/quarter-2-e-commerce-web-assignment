import type { NextPage } from "next";
import Image from "next/image";
import Button from "./button";
import styles from "./banner.module.css";

export type BannerType = {
  className?: string;
};

const Banner: NextPage<BannerType> = ({ className = "" }) => {
  return (
    <section className={[styles.banner, className].join(" ")}>
      <div className={styles.content}>
        <div className={styles.titles}>
          <h2 className={styles.probeyond}>Pro.Beyond.</h2>
          <h1 className={styles.iphone14ProContainer}>
            <span className={styles.iphone14}>{`IPhone 14 `}</span>
            <span className={styles.pro}>Pro</span>
          </h1>
        </div>
        <div className={styles.createdToChange}>
          Created to change everything for the better. For everyone
        </div>
        <Button icon={false} state="White Stroke" buttonText="Shop Now" />
      </div>
      <Image
        className={styles.iphoneImageIcon}
        loading="lazy"
        width={406}
        height={632}
        alt=""
        src="/iphone-image@2x.png"
      />
    </section>
  );
};

export default Banner;
