import React from "react";

type OvalBackgroundProps = {
  width?: string;
  height?: string;
};

const OvalBackground: React.FC<OvalBackgroundProps> = ({
  width = "300px",
  height = "150px",
}) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "-8%",
        left: "50%",
        transform: "translateX(-50%)",
        width: width,
        height: height,
        background: "linear-gradient(180deg, #E85444 0%, #E85444 10%)",
        borderRadius: "200%",
        zIndex: 0,
        opacity: "10%",
      }}
    />
  );
};

export default OvalBackground;
