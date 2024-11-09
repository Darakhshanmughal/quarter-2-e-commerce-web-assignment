import type { NextPage } from "next";
import Image from "next/image";
import styles from "./footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.info}>
        <div className={styles.logotext}>
          <div className={styles.logo}>
            <div className={styles.logo1}>
              <Image
                className={styles.logoVectorIcon}
                width={65}
                height={23}
                alt=""
                src="/logo-vector-1.svg"
              />
            </div>
          </div>
          <div className={styles.weAreA}>
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </div>
        </div>
        <div className={styles.footerNavigation}>
          <div className={styles.section}>
            <div className={styles.services}>Services</div>
            <div className={styles.bonusProgram}>Bonus program</div>
            <div className={styles.bonusProgram}>Gift cards</div>
            <div className={styles.bonusProgram}>Credit and payment</div>
            <div className={styles.bonusProgram}>Service contracts</div>
            <div className={styles.bonusProgram}>Non-cash account</div>
            <div className={styles.bonusProgram}>Payment</div>
          </div>
          <div className={styles.section}>
            <div className={styles.assistanceToThe}>
              Assistance to the buyer
            </div>
            <div className={styles.bonusProgram}>Find an order</div>
            <div className={styles.bonusProgram}>Terms of delivery</div>
            <div className={styles.bonusProgram}>
              Exchange and return of goods
            </div>
            <div className={styles.bonusProgram}>Guarantee</div>
            <div className={styles.bonusProgram}>
              Frequently asked questions
            </div>
            <div className={styles.bonusProgram}>Terms of use of the site</div>
          </div>
        </div>
      </div>
      <div className={styles.socialIcons}>
        <Image
          className={styles.icon16pxtwitter}
          loading="lazy"
          width={16}
          height={16}
          alt=""
          src="/icon16pxtwitter.svg"
        />
        <Image
          className={styles.icon16pxtwitter}
          loading="lazy"
          width={16}
          height={16}
          alt=""
          src="/icon16pxfacebook.svg"
        />
        <Image
          className={styles.icon16pxtwitter}
          loading="lazy"
          width={16}
          height={16}
          alt=""
          src="/icon16pxtiktok.svg"
        />
        <Image
          className={styles.icon16pxtwitter}
          loading="lazy"
          width={16}
          height={16}
          alt=""
          src="/icon16pxinstagram.svg"
        />
      </div>
    </footer>
  );
};

export default Footer;
