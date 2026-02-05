import { h } from "preact";

import "./wyd.css";

h;

export const wyd = () => (
  <div class="canvas">
    <div class="bracket b-l"></div>

    <div className="letters">
      <div class="letter w">
        <div class="bar left"></div>
        <div class="bar mid"></div>
        <div class="bar right"></div>
      </div>
      <div class="letter y">
        <div class="bar left"></div>
        <div class="bar right"></div>
      </div>
      <div class="letter d">
        <div class="bar left"></div>
        <div class="bar right"></div>
      </div>
    </div>

    <div class="bracket b-r"></div>
  </div>
);
