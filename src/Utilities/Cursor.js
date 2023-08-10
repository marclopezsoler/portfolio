import React from "react";
import "./Cursor.scss";

window.onload = function() {
  let mouseX = -50;
  let mouseY = -50;
  document.body.style.setProperty('--x',mouseX+'px');
  document.body.style.setProperty('--y',mouseY+'px');
}

function Cursor() {
  onmousemove = function (e) {
    document.body.style.setProperty('--x',e.clientX+'px');
    document.body.style.setProperty('--y',e.clientY+this.window.pageYOffset+'px');
  };

  return (
    <div>
      <h4 class="cursor"></h4>
    </div>
  );
}

export default Cursor;
