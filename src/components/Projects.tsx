import * as React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
} from "@mui/material";

// project card component

const Projects: React.FC = () => (
  <Box sx={{ py: 4 }}>
    <Typography variant="h5" component="h3" gutterBottom>
      Projects
    </Typography>

    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Card elevation={0}>
          <CardContent>
            <Typography variant="h6">Project Alpha</Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              A tiny demo app showcasing forms and API integration.
            </Typography>
            <Button size="small">View</Button>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Card elevation={0}>
          <CardContent>
            <Typography variant="h6">Project Beta</Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              A productivity tool with a clean, accessible UI.
            </Typography>
            <Button size="small">View</Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Box>
);

export default Projects;
