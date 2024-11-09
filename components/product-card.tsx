import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";
import Button1 from "./button1";
import styles from "./product-card.module.css";

export type ProductCardType = {
  className?: string;
  showPrice?: boolean;
  price?: string;
  productDescription?: string;
  showButton?: boolean;
  iphone14Pro1?: string;

  /** Variant props */
  like?: boolean;

  /** Style props */
  productCardHeight?: CSSProperties["height"];
  appleIPhone14Width?: CSSProperties["width"];
  appleIPhone14Display?: CSSProperties["display"];
  appleIPhone14AlignSelf?: CSSProperties["alignSelf"];
  emptyListWidth?: CSSProperties["width"];
  emptyListAlignSelf?: CSSProperties["alignSelf"];
};

const ProductCard: NextPage<ProductCardType> = ({
  className = "",
  like = false,
  showPrice = true,
  price = "$900",
  productDescription = "Apple iPhone 14 Pro Max 128GB Deep Purple ",
  showButton = true,
  productCardHeight,
  iphone14Pro1,
  appleIPhone14Width,
  appleIPhone14Display,
  appleIPhone14AlignSelf,
  emptyListWidth,
  emptyListAlignSelf,
}) => {
  const productCardStyle: CSSProperties = useMemo(() => {
    return {
      height: productCardHeight,
    };
  }, [productCardHeight]);

  const appleIPhone14Style: CSSProperties = useMemo(() => {
    return {
      width: appleIPhone14Width,
      display: appleIPhone14Display,
      alignSelf: appleIPhone14AlignSelf,
    };
  }, [appleIPhone14Width, appleIPhone14Display, appleIPhone14AlignSelf]);

  const emptyListStyle: CSSProperties = useMemo(() => {
    return {
      width: emptyListWidth,
      alignSelf: emptyListAlignSelf,
    };
  }, [emptyListWidth, emptyListAlignSelf]);

  return (
    <div
      className={[styles.root, className].join(" ")}
      data-like={like}
      style={productCardStyle}
    >
      <div className={styles.topSection}>
        <Image
          className={styles.icon32pxlike}
          width={32}
          height={32}
          alt=""
          src="/icon32pxlike.svg"
        />
      </div>
        <Image
          className={styles.iphone14Pro1}
          loading="lazy"
          width={160}
          height={160}
          alt=""
          src={iphone14Pro1 || "\iphone-14-pro-1@2x.png"}
        />
      <div className={styles.texticon}>
        <div className={styles.info}>
          <div className={styles.appleIphone14} style={appleIPhone14Style}>
            {productDescription}
          </div>
          {showPrice && (
            <div className={styles.emptyList} style={emptyListStyle}>
              {price}
            </div>
          )}
        </div>
        {showButton && (
          <Button1 icon={false} state="Fill Small" buttonText="Buy Now" />
        )}
      </div>
    </div>
  );
};

export default ProductCard;
