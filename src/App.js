import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
import { Route, Switch } from "react-router-dom";
import Children from "../src/Assets/children.png";

function App() {
  return (
    <div>
      <Navbar images={Children} text="Empowering the next Generation" />
      <Content />
    </div>
  );
}

export default App;
