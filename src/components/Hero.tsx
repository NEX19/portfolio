import React from "react";
import { Box, Typography, IconButton, Link as MuiLink } from "@mui/material";

/* Minimal inline SVG icons */
const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
    <path
      d="M12 2C6.48 2 2 6.58 2 12.17c0 4.51 2.87 8.34 6.84 9.69.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.61-3.37-1.35-3.37-1.35-.45-1.17-1.11-1.48-1.11-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.55 2.34 1.1 2.91.84.09-.66.35-1.1.64-1.35-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.04A9.36 9.36 0 0112 6.8c.85.004 1.71.115 2.51.34 1.9-1.31 2.74-1.04 2.74-1.04.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92 0 1.38-.01 2.5-.01 2.84 0 .26.18.58.69.48A10.01 10.01 0 0022 12.17C22 6.58 17.52 2 12 2z"
      fill="currentColor"
    />
  </svg>
);

const LinkedInIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
    <path
      d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM8.34 18H6.16V10.5h2.18V18zM7.25 9.35a1.26 1.26 0 110-2.52 1.26 1.26 0 010 2.52zM18 18h-2.18v-3.45c0-.82-.02-1.88-1.15-1.88-1.15 0-1.33.9-1.33 1.82V18H11V10.5h2.09v1h.03c.29-.55 1-1.13 2.06-1.13 2.2 0 2.61 1.45 2.61 3.33V18z"
      fill="currentColor"
    />
  </svg>
);

const TelegramIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
    <path
      d="M22 2L2 9.5 7.5 12 9 21l4.5-3 2.5 2.5L22 2zM9.5 14.1l-1.3-3 9.2-6.2-7.9 9.2z"
      fill="currentColor"
    />
  </svg>
);

/**
 * Full-bleed hero WITHOUT causing horizontal scroll.
 * - Uses calc(50% - 50vw) margins + width:100vw to avoid scrollbar mismatch.
 * - Minimal & accessible social icons.
 */
const Hero: React.FC = () => (
  <Box
    component="section"
    sx={{
      position: "relative",
      width: "100vw",
      marginLeft: "calc(50% - 50vw)",
      marginRight: "calc(50% - 50vw)",
      height: "60vh",
      overflow: "hidden",
    }}
  >
    {/* Background video: replace src with your asset or remote url */}
    <video
      src="back1.mp4"
      autoPlay
      muted
      loop
      playsInline
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
      aria-hidden
    />

    {/* Dark overlay for contrast */}
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        background: "rgba(0,0,0,0.35)",
      }}
    />

    {/* Content */}
    <Box
      sx={{
        position: "relative",
        zIndex: 1,
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "common.white",
        px: 2,
      }}
    >
      <Box>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 700, mb: 1 }}>
          I build fast, accessible web apps
        </Typography>

        <Typography variant="subtitle1" sx={{ opacity: 0.9, mb: 2 }}>
          Frontend dev focused on simple UI & maintainable code.
        </Typography>

        <Box sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
          <MuiLink
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            sx={{ color: "inherit" }}
          >
            <IconButton
              sx={{ color: "inherit" }}
              size="large"
              aria-label="github"
            >
              <GithubIcon />
            </IconButton>
          </MuiLink>

          <MuiLink
            href="https://www.linkedin.com/in/your-username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            sx={{ color: "inherit" }}
          >
            <IconButton
              sx={{ color: "inherit" }}
              size="large"
              aria-label="linkedin"
            >
              <LinkedInIcon />
            </IconButton>
          </MuiLink>

          <MuiLink
            href="https://t.me/your-username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            sx={{ color: "inherit" }}
          >
            <IconButton
              sx={{ color: "inherit" }}
              size="large"
              aria-label="telegram"
            >
              <TelegramIcon />
            </IconButton>
          </MuiLink>
        </Box>
      </Box>
    </Box>
  </Box>
);

export default Hero;
