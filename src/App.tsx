import { BrowserRouter, Routes, Route } from "react-router";
// layouts
import MainLayout from "./layouts/MainLayout.tsx";
// pages
import ProjectsList from "./pages/ProjectsList.tsx";
import Home from "./pages/Home.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="projects" element={<ProjectsList />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
