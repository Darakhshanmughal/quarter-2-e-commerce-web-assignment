import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./button1.module.css";

export type Button1Type = {
  className?: string;
  buttonText?: string;

  /** Variant props */
  icon?: boolean;
  state?: "Fill Small";

  /** Style props */
  labelHeight?: CSSProperties["height"];
  labelWidth?: CSSProperties["width"];
  labelDisplay?: CSSProperties["display"];
};

const Button1: NextPage<Button1Type> = ({
  className = "",
  icon = true,
  state = "Small Stroke",
  buttonText = "Buy Now",
  labelHeight,
  labelWidth,
  labelDisplay,
}) => {
  const labelStyle: CSSProperties = useMemo(() => {
    return {
      height: labelHeight,
      width: labelWidth,
      display: labelDisplay,
    };
  }, [labelHeight, labelWidth, labelDisplay]);

  return (
    <div
      className={[styles.button, className].join(" ")}
      data-icon={icon}
      data-state={state}
    >
      <div className={styles.label} style={labelStyle}>
        {buttonText}
      </div>
    </div>
  );
};

export default Button1;
