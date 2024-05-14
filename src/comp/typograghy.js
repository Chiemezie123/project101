import clsx from "clsx";
import React from "react";
import { cva } from "class-variance-authority";

const typography = cva("", {
  variants: {
    variant: {
      h1: "text-h-1 mxs:text-h-2",
      h2: "text-h-2 mxs:text-h-3",
      h3: "text-h-3 mxs:text-h-4",
      h4: "text-h-4 mxs:text-h-5",
      h5: "text-h-5 mxs:text-h-6",
      hm: "text-h-m mxs:text-h-1",

      "body-m": "text-body-m mxs:text-body-r",
      "body-d": "text-body-m mxs:text-body-r",
      "body-1": "text-body-m mxs:text-body-r",
      "body-2": "text-body-m mxs:text-body-r",
      "body-3": "text-body-m mxs:text-body-r",
      "body-4": "text-body-r mxs:text-body-s",
      "caption-s": "text-body-r mxs:text-body-s",
      "footer-m": "text-body-r mxs:text-body-s",
      "footer-s": "text-body-r mxs:text-body-s",
    },
    font: {
      Inter: "Inter",
      satoshi: "satoshi",
    },
    color: {
      info: "text-info",
      success: "text-success-900",
      warn: "text-warning",
      error: "text-error",
      secondary: "text-secondary-main",
      primary: "text-primary-main",
      "primary-light-100": "text-primary-light-100",
      "secondary-100": "text-secondary-100",
    },
    fontWeight: {
      thin: "font-thin",
      "extra-light": "font-extra-light",
      light: "font-light",
      regular: "font-regular",
      medium: "font-medium",
      "semi-bold": "font-semi-bold",
      bold: "font-bold",
      "extra-bold": "font-extra-bold",
      black: "font-black",
    },
    underline: { always: "underline", hover: "hover:underline", none: "" },
    align: {
      center: "text-center",
      start: "text-start",
      end: "text-end",
      left: "text-left",
      right: "text-right",
      justify: "text-justify",
    },
  },
  compoundVariants: [],
});

const Typography = ({
  variant,
  underline,
  fontWeight,
  color,
  align,
  font,
  customClassName,
  children,
  ...rest
}) => {
  // Resolved tag
  const Tag = "p";

  return (
    <Tag
      className={typography({
        variant,
        underline,
        fontWeight,
        color,
        align,
        font,
        className: `${customClassName}`,
      })}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export { Typography };
