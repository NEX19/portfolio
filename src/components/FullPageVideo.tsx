import React, { useEffect, useState } from "react";
import { Box, GlobalStyles } from "@mui/material";

type Source = { src: string; type: string };

interface Props {
  sources?: Source[]; // e.g. [{ src: "/back1.webm", type: "video/webm" }, { src: "/back1.mp4", type: "video/mp4" }]
  poster?: string; // fallback image shown when reduced motion or if video hasn't loaded
}

const FullPageVideo: React.FC<Props> = ({ sources = [], poster }) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = () => setPrefersReducedMotion(mq.matches);
    handler();
    // media query listeners: modern & fallback
    if (mq.addEventListener) mq.addEventListener("change", handler);
    else mq.addListener(handler);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handler);
      else mq.removeListener(handler);
    };
  }, []);

  // If user prefers reduced motion, use the poster as a static background
  if (prefersReducedMotion) {
    return (
      <>
        <GlobalStyles
          styles={{
            html: { height: "100%" },
            body: { height: "100%", margin: 0, overflowX: "hidden" },
            "#root": { height: "100%" },
          }}
        />
        <Box
          aria-hidden
          sx={{
            position: "fixed",
            inset: 0,
            zIndex: -1,
            backgroundImage: poster ? `url(${poster})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            marginLeft: "calc(50% - 50vw)",
            marginRight: "calc(50% - 50vw)",
            pointerEvents: "none",
          }}
        />
      </>
    );
  }

  return (
    <>
      <GlobalStyles
        styles={{
          html: { height: "100%" },
          body: { height: "100%", margin: 0, overflowX: "hidden" },
          "#root": { height: "100%" },
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          marginLeft: "calc(50% - 50vw)",
          marginRight: "calc(50% - 50vw)",
          zIndex: -1, // put behind page content
          overflow: "hidden",
          pointerEvents: "none", // allow clicks through to content
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        >
          {sources.map((s) => (
            <source key={s.src} src={s.src} type={s.type} />
          ))}
          {/* no <track> needed for background video */}
        </video>
      </Box>
    </>
  );
};

export default FullPageVideo;
