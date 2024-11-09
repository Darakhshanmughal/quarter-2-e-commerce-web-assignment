import type { NextPage } from "next";
import HeaderTop from "../components/header-top";
import Banner from "../components/banner";
import FrameComponent from "../components/frame-component";
import FrameComponent1 from "../components/frame-component1";
import Products from "../components/products";
import FrameComponent2 from "../components/frame-component2";
import DiscountProducts from "../components/discount-products";
import Button from "../components/button";
import Footer from "../components/footer";
import styles from "./index.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <HeaderTop />
      <Banner />
      <FrameComponent />
      <FrameComponent1 />
      <Products />
      <FrameComponent2 />
      <DiscountProducts />
      <section className={styles.banner2}>
        <div className={styles.content}>
          <div className={styles.titles}>
            <h1 className={styles.bigSummerSaleContainer}>
              <span className={styles.bigSummer}>Big Summer</span>
              <span className={styles.span}>{` `}</span>
              <span className={styles.sale}>Sale</span>
            </h1>
            <div className={styles.commodoFamesVitae}>
              Commodo fames vitae vitae leo mauris in. Eu consequat.
            </div>
          </div>
          <Button icon={false} state="White Stroke" buttonText="Shop Now" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
