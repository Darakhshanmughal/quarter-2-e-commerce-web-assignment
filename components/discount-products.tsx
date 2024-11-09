import type { NextPage } from "next";
import ProductCard from "./product-card";
import styles from "./discount-products.module.css";

export type DiscountProductsType = {
  className?: string;
};

const DiscountProducts: NextPage<DiscountProductsType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.discountProducts, className].join(" ")}>
      <h2 className={styles.discountsUpTo}>Discounts up to -50%</h2>
      <div className={styles.row}>
        <ProductCard
          like={false}
          showPrice
          price="$1437"
          productDescription="Apple iPhone 14 Pro 512GB Gold (MQ233)"
          showButton
          productCardHeight="unset"
          iphone14Pro1="/iphone-14-pro-1-8@2x.png"
          appleIPhone14Width="unset"
          appleIPhone14Display="unset"
          appleIPhone14AlignSelf="stretch"
          emptyListWidth="unset"
          emptyListAlignSelf="stretch"
        />
        <ProductCard
          like={false}
          showPrice
          price="$549"
          showButton
          productCardHeight="unset"
          iphone14Pro1="/iphone-14-pro-1-3@2x.png"
          appleIPhone14Width="unset"
          appleIPhone14Display="unset"
          appleIPhone14AlignSelf="stretch"
          emptyListWidth="unset"
          emptyListAlignSelf="stretch"
        />
        <ProductCard
          like={false}
          showPrice
          price="$399"
          productDescription="Apple Watch Series 9 GPS 41mm Starlight Aluminium "
          showButton
          productCardHeight="unset"
          iphone14Pro1="/iphone-14-pro-1-2@2x.png"
          appleIPhone14Width="unset"
          appleIPhone14Display="unset"
          appleIPhone14AlignSelf="stretch"
          emptyListWidth="unset"
          emptyListAlignSelf="stretch"
        />
        <ProductCard
          like={false}
          showPrice
          price="$1499"
          productDescription="Apple iPhone 14 Pro 1TB Gold (MQ2V3)"
          showButton
          productCardHeight="unset"
          iphone14Pro1="/iphone-14-pro-1-11@2x.png"
          appleIPhone14Width="unset"
          appleIPhone14Display="unset"
          appleIPhone14AlignSelf="stretch"
          emptyListWidth="unset"
          emptyListAlignSelf="stretch"
        />
      </div>
    </section>
  );
};

export default DiscountProducts;
