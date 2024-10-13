import "./App.css";
import { Company } from "./components/Company";
import { Highlights } from "./components/highlights";
import { Home } from "./components/home";
import { Services } from "./components/Services";

function App() {
  return (
    <>
      <Home />
      <Highlights />
      <Company />
      <Services />
    </>
  );
}

export default App;
