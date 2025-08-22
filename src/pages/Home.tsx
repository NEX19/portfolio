import * as React from "react";
import { Container } from "@mui/material";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";

const Home: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Hero />
      <AboutMe />
      <Projects />
    </Container>
  );
};

export default Home;
