import "./assets/styles/index.scss";
import Header from "./components/header/Header";
import Particle from "./components/particles/Particle";
import Landing from "./pages/landing/Landing";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <Landing />
      <Particle />
    </div>
  );
}

export default App;
