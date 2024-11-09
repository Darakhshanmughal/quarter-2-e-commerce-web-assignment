import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";
import Button from "./button";
import styles from "./big-banner.module.css";

export type BigBannerType = {
  className?: string;
  samsungGalaxy?: string;
  image41?: string;

  /** Style props */
  bigBannerBackgroundColor?: CSSProperties["backgroundColor"];
  samsungGalaxyColor?: CSSProperties["color"];
  image41IconHeight?: CSSProperties["height"];
};

const BigBanner: NextPage<BigBannerType> = ({
  className = "",
  bigBannerBackgroundColor,
  samsungGalaxy,
  samsungGalaxyColor,
  image41,
  image41IconHeight,
}) => {
  const bigBannerStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: bigBannerBackgroundColor,
    };
  }, [bigBannerBackgroundColor]);

  const samsungGalaxyStyle: CSSProperties = useMemo(() => {
    return {
      color: samsungGalaxyColor,
    };
  }, [samsungGalaxyColor]);

  const image41IconStyle: CSSProperties = useMemo(() => {
    return {
      height: image41IconHeight,
    };
  }, [image41IconHeight]);

  return (
    <div
      className={[styles.bigBanner, className].join(" ")}
      style={bigBannerStyle}
    >
      <div className={styles.titletext}>
        <h1 className={styles.samsungGalaxy} style={samsungGalaxyStyle}>
          {samsungGalaxy}
        </h1>
        <div className={styles.ipadCombinesA}>
          iPad combines a magnificent 10.2-inch Retina display, incredible
          performance, multitasking and ease of use.
        </div>
        <Button icon={false} state="Black Stroke" buttonText="Shop Now" />
      </div>
      <Image
        className={styles.image41Icon}
        loading="lazy"
        width={360}
        height={360}
        alt=""
        src="/image-41@2x.png"
        style={image41IconStyle}
      />
    </div>
  );
};

export default BigBanner;
