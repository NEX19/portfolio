// components/Projects.tsx (renovated — 3-up carousel with thumbnails)
import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  useTheme,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// sample data — replace `image` values with your real image paths
const sampleProjects = [
  {
    title: "Project Alpha",
    desc: "A modern single-page app demonstrating performant UX patterns.",
    href: "#",
    image: "/images/project-alpha.jpg",
  },
  {
    title: "Project Beta",
    desc: "A productivity tool with a clean, accessible UI.",
    href: "#",
    image: "/images/project-beta.jpg",
  },
  {
    title: "Project Gamma",
    desc: "Experimental visualizations and WebGL experiments.",
    href: "#",
    image: "/images/project-gamma.jpg",
  },
  {
    title: "Project Delta",
    desc: "Design system and component library for internal tools.",
    href: "#",
    image: "/images/project-delta.jpg",
  },
  {
    title: "Project Epsilon",
    desc: "Realtime collaboration prototype using WebRTC.",
    href: "#",
    image: "/images/project-epsilon.jpg",
  },
  {
    title: "Project Zeta",
    desc: "Small experimental proof-of-concept with neat UI details.",
    href: "#",
    image: "/images/project-zeta.jpg",
  },
];

const VISIBLE = 3; // always show exactly 3 cards in the viewport

const Projects: React.FC = () => {
  const theme = useTheme();

  // indexPage: which page (0-based) of groups of VISIBLE items we're showing
  const [indexPage, setIndexPage] = React.useState(0);

  const pages = Math.max(1, Math.ceil(sampleProjects.length / VISIBLE));
  const maxPage = pages - 1;

  const prev = () => setIndexPage((p) => Math.max(0, p - 1));
  const next = () => setIndexPage((p) => Math.min(maxPage, p + 1));

  // keyboard support
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [maxPage]);

  return (
    <Box component="section" sx={{ py: { xs: 3, md: 4 } }}>
      <Card
        elevation={0}
        sx={{
          bgcolor: "rgba(0,0,0,0.85)",
          color: "common.white",
          borderRadius: 2,
        }}
      >
        <Box
          component={CardContent}
          sx={{
            px: { xs: 2, md: 3 },
            py: { xs: 2, md: 3 },
            position: "relative",
          }}
        >
          {/* Header (matches AboutMe style) */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", md: "flex-start" },
              mb: 2,
              gap: 1,
            }}
          >
            <Box
              sx={{
                width: 48,
                height: 6,
                borderRadius: 1,
                bgcolor: "primary.main",
                boxShadow: (t) => `0 1px 0 ${t.palette.primary.dark}`,
              }}
              aria-hidden
            />
            <Typography
              variant="h4"
              sx={{
                color: "inherit",
                fontWeight: 800,
                letterSpacing: 0.3,
                textTransform: "none",
                fontSize: { xs: "1.4rem", md: "2rem" },
                lineHeight: 1.05,
              }}
            >
              Projects
            </Typography>
          </Box>

          {/* Carousel wrapper */}
          <Box sx={{ position: "relative" }}>
            {/* Desktop arrows (left/right) */}
            <IconButton
              aria-label="Previous projects"
              onClick={prev}
              disabled={indexPage === 0}
              sx={{
                position: "absolute",
                left: -18,
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: "rgba(255,255,255,0.04)",
                color: "common.white",
                borderRadius: 1,
                boxShadow: 1,
                zIndex: 3,
                display: { xs: "none", md: "inline-flex" },
              }}
            >
              <ChevronLeftIcon />
            </IconButton>

            <IconButton
              aria-label="Next projects"
              onClick={next}
              disabled={indexPage === maxPage}
              sx={{
                position: "absolute",
                right: -18,
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: "rgba(255,255,255,0.04)",
                color: "common.white",
                borderRadius: 1,
                boxShadow: 1,
                zIndex: 3,
                display: { xs: "none", md: "inline-flex" },
              }}
            >
              <ChevronRightIcon />
            </IconButton>

            {/* Viewport: hides overflow */}
            <Box sx={{ overflow: "hidden" }}>
              <Box
                sx={{
                  display: "flex",
                  transition: "transform 450ms cubic-bezier(.2,.8,.2,1)",
                  // slide by full pages (indexPage * 100%)
                  transform: `translateX(-${indexPage * 100}%)`,
                  width: `${pages * 100}%`,
                }}
              >
                {/* build pages; each page contains exactly VISIBLE items */}
                {Array.from({ length: pages }).map((_, pageIndex) => (
                  <Box
                    key={pageIndex}
                    sx={{
                      width: `${100 / pages}%`,
                      display: "flex",
                      gap: 2,
                      px: 1,
                      boxSizing: "border-box",
                    }}
                  >
                    {sampleProjects
                      .slice(pageIndex * VISIBLE, pageIndex * VISIBLE + VISIBLE)
                      .map((p) => (
                        <Card
                          key={p.title}
                          elevation={0}
                          sx={{
                            bgcolor: "transparent",
                            borderRadius: 1,
                            border: "1px solid rgba(255,255,255,0.06)",
                            flex: `0 0 ${100 / VISIBLE}%`,
                            display: "flex",
                            flexDirection: "column",
                            minHeight: 360, // slightly bigger cards to contain image + text
                          }}
                        >
                          {/* Image area */}
                          {p.image ? (
                            <CardMedia
                              component="img"
                              image={p.image}
                              alt={p.title}
                              sx={{
                                height: 180,
                                objectFit: "cover",
                                borderTopLeftRadius: 6,
                                borderTopRightRadius: 6,
                              }}
                            />
                          ) : (
                            <Box
                              sx={{
                                height: 180,
                                bgcolor: "rgba(255,255,255,0.03)",
                              }}
                            />
                          )}

                          <CardContent sx={{ pt: 2, flexGrow: 1 }}>
                            <Typography
                              variant="h6"
                              sx={{ color: "common.white", fontWeight: 700 }}
                            >
                              {p.title}
                            </Typography>

                            <Typography
                              variant="body2"
                              paragraph
                              sx={{
                                color: "rgba(255,255,255,0.92)",
                                lineHeight: 1.6,
                              }}
                            >
                              {p.desc}
                            </Typography>

                            <Button
                              size="small"
                              variant="outlined"
                              href={p.href}
                              sx={{ mt: 1 }}
                            >
                              View
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Mobile / small screens: simple controls below the carousel */}
            <Box
              sx={{
                mt: 2,
                display: { xs: "flex", md: "none" },
                justifyContent: "center",
                gap: 2,
              }}
            >
              <IconButton
                aria-label="Previous"
                onClick={prev}
                disabled={indexPage === 0}
              >
                <ChevronLeftIcon />
              </IconButton>
              <IconButton
                aria-label="Next"
                onClick={next}
                disabled={indexPage === maxPage}
              >
                <ChevronRightIcon />
              </IconButton>
            </Box>

            {/* Page indicators (small dots) */}
            <Box
              sx={{ mt: 2, display: "flex", justifyContent: "center", gap: 1 }}
            >
              {Array.from({ length: pages }).map((_, i) => (
                <Box
                  key={i}
                  onClick={() => setIndexPage(i)}
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    bgcolor:
                      i === indexPage
                        ? "primary.main"
                        : "rgba(255,255,255,0.12)",
                    cursor: "pointer",
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default Projects;
