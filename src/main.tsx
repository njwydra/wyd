import { h, render } from "preact";
import { useEffect } from "preact/hooks";
import { Wyd } from "./components/wyd";
import { Theme, ThemeToClassMap } from "./models/theme";
import "./style.css";

h;

function App() {
  useEffect(() => {
    document.body.classList.add(ThemeToClassMap[Theme.NEUMORPHISM_EMBOSS]);
  }, []);

  return (
    <div id="title">
      <Wyd />
    </div>
  );
}

render(<App />, document.querySelector("#app")!);
