import { css } from "@emotion/react";

const colors = {
  default: "#24292f",
  blue: "#ffffff"
};

const backGroundColors = {
  default: "#f6f8fa",
  blue: "#0466C8",
};

const sizeStyles = {
  sm: {
    fontSize: "12px",
    padding: "3px 12px",
  },
  md: {
    fontSize: "14px",
    padding: "5px 16px",
  },
  lg: {
    fontSize: "16px",
    padding: "9px 20px",
  },
  xl: {
    fontSize: "18px",
    padding: "14px 24px",
  },
};

function Button({ children, size = "md", variant = "default" }) {
  return (
    <button
      css={{
        borderRadius: "6px",
        border: "1px solid rgba(27, 31, 36, 0.15)",
        boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.1)",
        backgroundColor: backGroundColors[variant],
        color: colors[variant],
        fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
        fontWeight: "600",
        lineHeight: "20px",
        ...sizeStyles[size],
        textAlign: "center",
        cursor: "pointer",
        appearance: "none",
        userSelect: "none",
      }}
    >
      {children}
    </button>
  );
}

export default Button;
