import { h } from "preact";

import "./wyd.css";

h;

export const Wyd = () => (
  <div class="canvas" role="img" aria-label="WYD Logo">
    <div class="bracket b-l" aria-hidden="true"></div>

    <div className="letters" aria-hidden="true">
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
