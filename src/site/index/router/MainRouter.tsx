import { Router, Routes, Route } from "@solidjs/router";
import { lazy } from "solid-js";
const Home = lazy(() => import("@/site/index/page/Home"));
const About = lazy(() => import("@/site/index/page/About"));

export default function MainRouter() {
  return (
    <Router>
      <div>MainRouter</div>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/home/*" component={Home} />
        <Route path="/about/*" component={About} />
      </Routes>
    </Router>
  );
}
