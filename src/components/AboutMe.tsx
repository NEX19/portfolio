import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

const AboutMe: React.FC = () => {
  return (
    <Box component="section" sx={{ py: 4 }}>
      <Card elevation={0}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            About me
          </Typography>

          <Grid container spacing={2} alignItems="stretch">
            <Grid item xs={12} md={6}>
              <Typography variant="body1" color="text.secondary" paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante, accumsan tempus nibh. Curabitur vitae
                placerat nisl. Phasellus euismod, urna eget luctus consequat,
                nisi erat faucibus urna, non bibendum nunc lectus at justo. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="projects/space-invaders.png"
                alt="About me photo"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 1,
                }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AboutMe;
