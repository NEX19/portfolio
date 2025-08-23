// components/AboutMe.tsx
import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

const AboutMe: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 3, md: 4 }, // reduced vertical rhythm so it sits closer to Hero
      }}
    >
      <Card
        elevation={0}
        sx={{
          bgcolor: "rgba(0,0,0,0.85)",
          color: "common.white",
          borderRadius: 2,
        }}
      >
        <CardContent sx={{ px: { xs: 2, md: 3 }, py: { xs: 2, md: 3 } }}>
          {/* Header with accent bar; centered on small screens, left on md+ */}
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
                // make the header visually confident
                letterSpacing: 0.3,
                textTransform: "none",
                // responsive font size (optional — theme.h4 may handle this)
                fontSize: { xs: "1.4rem", md: "2rem" },
                lineHeight: 1.05,
              }}
            >
              About me
            </Typography>
          </Box>

          <Grid
            container
            spacing={2}
            alignItems="center" // vertically center image with text
          >
            {/* Text (left on md+, full width on xs) */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="body1"
                paragraph
                sx={{ color: "rgba(255,255,255,0.92)", lineHeight: 1.7 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante, accumsan tempus nibh. Curabitur vitae
                placerat nisl. Phasellus euismod, urna eget luctus consequat,
                nisi erat faucibus urna, non bibendum nunc lectus at justo. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur.
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AboutMe;
