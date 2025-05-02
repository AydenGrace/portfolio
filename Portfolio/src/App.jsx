import { Outlet } from "react-router-dom";
import "./assets/styles/index.scss";
import Header from "./components/header/Header";
import Particle from "./components/particles/Particle";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <Outlet />
      <Particle />
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}

export default App;
