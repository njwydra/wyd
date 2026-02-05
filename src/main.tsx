import { h, render } from "preact";
import { wyd as Wyd } from "./components/wyd";
import "./style.css";

h;

function App() {
  return (
    <div id="title">
      <Wyd />
    </div>
  );
}

render(<App />, document.querySelector("#app")!);
