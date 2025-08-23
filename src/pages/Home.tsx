import * as React from "react";
import { Container } from "@mui/material";
import FullPageVideo from "../components/FullPageVideo";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";

const Home: React.FC = () => {
  return (
    <>
      {/* full-page background: update file paths to your actual assets */}
      <FullPageVideo
        sources={[
          { src: "/back1.webm", type: "video/webm" },
          { src: "/back1.mp4", type: "video/mp4" },
        ]}
        poster="/back1-poster.jpg"
      />

      <Container maxWidth="md">
        <Hero />
        <AboutMe />
        <Projects />
      </Container>
    </>
  );
};

export default Home;
