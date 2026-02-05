import { h } from "preact";

export const wyd = () => (
  <div class="canvas">
    <div class="bracket b-l"></div>

    <div class="letter w">
      <div class="bar left"></div>
      <div class="bar mid" style="border-radius: 40px 40px 0 0"></div>
      <div class="bar right" style="border-bottom-right-radius: 40px"></div>
    </div>

    <div class="letter y">
      <div class="bar left" style="border-radius: 0 40px"></div>
      <div class="bar right"></div>
    </div>

    <div class="letter d">
      <div class="bar left" style="border-radius: 40px 0 0 40px"></div>
      <div class="bar right" style="border-radius: 40px 0"></div>
    </div>

    <div class="bracket b-r"></div>
  </div>
);
