import type { NextPage } from "next";
import { Input } from "@chakra-ui/react";
import Image from "next/image";
import styles from "./header-top.module.css";

export type HeaderTopType = {
  className?: string;
};

const HeaderTop: NextPage<HeaderTopType> = ({ className = "" }) => {
  return (
    <header className={[styles.headerTop, className].join(" ")}>
      <div className={styles.logo}>
        <div className={styles.logo1}>
          <Image
            className={styles.logoVectorIcon}
            loading="lazy"
            width={65}
            height={23}
            alt=""
            src="/logo-vector.svg"
          />
        </div>
      </div>
      <Input className={styles.searchField} placeholder="Search" />
      <nav className={styles.navigation}>
        <a className={styles.home}>Home</a>
        <a className={styles.about}>About</a>
        <a className={styles.contactUs}>Contact Us</a>
        <a className={styles.blog}>Blog</a>
      </nav>
      <div className={styles.icons}>
        <Image
          className={styles.icon32pxfavorites}
          loading="lazy"
          width={32}
          height={32}
          alt=""
          src="/icon32pxfavorites.svg"
        />
        <Image
          className={styles.icon32pxcart}
          loading="lazy"
          width={32}
          height={32}
          alt=""
          src="/icon32pxcart.svg"
        />
        <Image
          className={styles.icon32pxfavorites}
          loading="lazy"
          width={32}
          height={32}
          alt=""
          src="/icon32pxuser.svg"
        />
      </div>
    </header>
  );
};

export default HeaderTop;
