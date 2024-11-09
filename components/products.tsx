import type { NextPage } from "next";
import Image from "next/image";
import ProductCard from "./product-card";
import styles from "./products.module.css";

export type ProductsType = {
  className?: string;
};

const Products: NextPage<ProductsType> = ({ className = "" }) => {
  return (
    <section className={[styles.products, className].join(" ")}>
      <div className={styles.tags}>
        <div className={styles.selected}>
          <div className={styles.newArrival}>New Arrival</div>
          <Image
            className={styles.line}
            width={100}
            height={2}
            alt=""
            src="/line.svg"
          />
        </div>
        <div className={styles.bestseller}>Bestseller</div>
        <div className={styles.featuredProducts}>Featured Products</div>
      </div>
      <div className={styles.productsGrid}>
        <ProductCard
          like={false}
          showPrice
          price="$900"
          productDescription="Apple iPhone 14 Pro Max 128GB Deep Purple "
          showButton
          iphone14Pro1="/iphone-14-pro-1@2x.png"
        />
        <ProductCard
          like={false}
          showPrice
          price="$2535"
          productDescription="Blackmagic Pocket Cinema Camera 6k"
          showButton
          productCardHeight="432px"
          iphone14Pro1="/iphone-14-pro-1-1@2x.png"
          appleIPhone14Width="236px"
          appleIPhone14Display="inline-block"
          appleIPhone14AlignSelf="unset"
          emptyListWidth="236px"
          emptyListAlignSelf="unset"
        />
        <ProductCard
          like={false}
          showPrice
          price="$399"
          productDescription="Apple Watch Series 9 GPS 41mm Starlight Aluminium "
          showButton
          productCardHeight="432px"
          iphone14Pro1="/iphone-14-pro-1-2@2x.png"
          appleIPhone14Width="236px"
          appleIPhone14Display="inline-block"
          appleIPhone14AlignSelf="unset"
          emptyListWidth="236px"
          emptyListAlignSelf="unset"
        />
        <ProductCard
          like={false}
          showPrice
          price="$549"
          showButton
          productCardHeight="432px"
          iphone14Pro1="/iphone-14-pro-1-3@2x.png"
          appleIPhone14Width="236px"
          appleIPhone14Display="inline-block"
          appleIPhone14AlignSelf="unset"
        />
        <ProductCard
          like={false}
          showPrice
          price="$369"
          productDescription="Samsung Galaxy Watch6 Classic 47mm Black"
          showButton
          productCardHeight="432px"
          iphone14Pro1="/iphone-14-pro-1-4@2x.png"
          appleIPhone14Width="236px"
          appleIPhone14Display="inline-block"
          appleIPhone14AlignSelf="unset"
          emptyListWidth="236px"
          emptyListAlignSelf="unset"
        />
        <ProductCard
          like
          showPrice
          price="$1799"
          productDescription="Galaxy Z Fold5 Unlocked | 256GB | Phantom Black"
          showButton
          productCardHeight="432px"
          iphone14Pro1="/iphone-14-pro-1-5@2x.png"
          appleIPhone14Width="236px"
          appleIPhone14Display="inline-block"
          appleIPhone14AlignSelf="unset"
          emptyListWidth="236px"
          emptyListAlignSelf="unset"
        />
        <ProductCard
          like={false}
          showPrice
          price="$99.99"
          showButton
          productCardHeight="432px"
          iphone14Pro1="/iphone-14-pro-1-6@2x.png"
          appleIPhone14Width="236px"
          appleIPhone14Display="inline-block"
          appleIPhone14AlignSelf="unset"
        />
        <ProductCard
          like={false}
          showPrice
          price="$398"
          productDescription={`Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021`}
          showButton
          productCardHeight="432px"
          iphone14Pro1="/iphone-14-pro-1-7@2x.png"
          appleIPhone14Width="236px"
          appleIPhone14Display="inline-block"
          appleIPhone14AlignSelf="unset"
          emptyListWidth="236px"
          emptyListAlignSelf="unset"
        />
      </div>
    </section>
  );
};

export default Products;
