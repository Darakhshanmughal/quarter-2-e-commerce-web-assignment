import type { NextPage } from "next";
import styles from "./button.module.css";

export type ButtonType = {
  className?: string;
  buttonText?: string;

  /** Variant props */
  icon?: boolean;
  state?: "White Stroke" | "Black Stroke";
};

const Button: NextPage<ButtonType> = ({
  className = "",
  icon = false,
  state = "White Stroke",
  buttonText = "Shop Now",
}) => {
  return (
    <div
      className={[styles.root, className].join(" ")}
      data-icon={icon}
      data-state={state}
    >
      <div className={styles.label}>{buttonText}</div>
    </div>
  );
};

export default Button;
