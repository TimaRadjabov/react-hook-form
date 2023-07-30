import { Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

export const Result = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <Confetti
        width={windowDimensions.width}
        height={windowDimensions.height}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9999,
        }}
      />
      <Paper elevation={2} sx={{ padding: "10px" }}>
        <Typography variant="h4">Congratulation!</Typography>
      </Paper>
    </>
  );
};
