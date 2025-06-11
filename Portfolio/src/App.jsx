import {Outlet, ScrollRestoration} from "react-router-dom";
import "./assets/styles/index.scss";
import Header from "./components/header/Header";
import Particle from "./components/particles/Particle";
import {Toaster} from "react-hot-toast";
import SplashCursor from "./components/bits/SplashCursor";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <Outlet />
      <Particle />
      <SplashCursor />
      <ScrollRestoration />
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}

export default App;
