import type { NextPage } from "next";
import Image from "next/image";
import CategoryCard from "./category-card";
import IconSmartWatches from "./icon-smart-watches";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section className={[styles.categoriesContentWrapper, className].join(" ")}>
      <div className={styles.categoriesContent}>
        <div className={styles.top}>
          <h2 className={styles.browseByCategory}>Browse By Category</h2>
          <div className={styles.categoryNavigation}>
            <Image
              className={styles.icon32pxarrow}
              width={32}
              height={32}
              alt=""
              src="/icon32pxarrow.svg"
            />
            <Image
              className={styles.icon32pxarrow1}
              width={32}
              height={32}
              alt=""
              src="/icon32pxarrow-1.svg"
            />
          </div>
        </div>
        <div className={styles.categoryGrid}>
          <CategoryCard iconPhones="/iconphones.svg" phones="Phones" />
          <div className={styles.categoryCard}>
            <div className={styles.iconsmartWatchesWrapper}>
              <IconSmartWatches />
            </div>
            <div className={styles.smartWatches}>Smart Watches</div>
          </div>
          <CategoryCard iconPhones="/iconcameras.svg" phones="Cameras" />
          <div className={styles.categoryCard1}>
            <div className={styles.iconheadphonesWrapper}>
              <Image
                className={styles.iconheadphones}
                width={48}
                height={48}
                alt=""
                src="/iconheadphones.svg"
              />
            </div>
            <div className={styles.smartWatches}>Headphones</div>
          </div>
          <div className={styles.categoryCard2}>
            <div className={styles.iconcomputersWrapper}>
              <Image
                className={styles.iconheadphones}
                width={48}
                height={48}
                alt=""
                src="/iconcomputers.svg"
              />
            </div>
            <div className={styles.smartWatches}>Computers</div>
          </div>
          <div className={styles.categoryCard3}>
            <div className={styles.icongamingWrapper}>
              <Image
                className={styles.iconheadphones}
                width={48}
                height={48}
                alt=""
                src="/icongaming.svg"
              />
            </div>
            <div className={styles.smartWatches}>Gaming</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
