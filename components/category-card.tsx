import type { NextPage } from "next";
import Image from "next/image";
import styles from "./category-card.module.css";

export type CategoryCardType = {
  className?: string;
  iconPhones?: string;
  phones?: string;
};

const CategoryCard: NextPage<CategoryCardType> = ({
  className = "",
  iconPhones,
  phones,
}) => {
  return (
    <div className={[styles.categoryCard, className].join(" ")}>
      <div className={styles.iconphonesWrapper}>
        <Image
          className={styles.iconphones}
          loading="lazy"
          width={48}
          height={48}
          alt=""
          src="/iconphones.svg"
        />
      </div>
      <div className={styles.phones}>{phones}</div>
    </div>
  );
};

export default CategoryCard;
