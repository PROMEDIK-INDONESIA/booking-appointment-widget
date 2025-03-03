import React from "react";
import ReactDOM from "react-dom";
import WidgetContent from "./components/WidgetContent";

window.MyWidget = {
  init: ({ containerId }) => {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`[MyWidget] Container #${containerId} not found`);
      return;
    }

    ReactDOM.render(<WidgetContent />, container); // ✅ This works for both React 17 & 18
  },
};


// (function() {
//   "use strict";

//   const MyWidget = {
//     init: ({ containerId }) => {
//       const container = document.getElementById(containerId);
//       if (!container) {
//         console.error(`[MyWidget] Container #${containerId} not found`);
//         return;
//       }
//       const widgetElement = document.createElement("div");
//       widgetElement.innerHTML = `<p style="padding: 10px; background: #f0f0f0; border-radius: 5px;">Hello from MyWidget FROM MY WIDGET COMPONENT! main.jsx</p>`;
//       container.appendChild(widgetElement);
//     }
//   };

//   // ✅ Ensure MyWidget is globally accessible
//   window.MyWidget = MyWidget;
// })();

// (function () {
//   "use strict";

//   const MyWidget = {
//     init: ({ containerId }) => {
//       const container = document.getElementById(containerId);
//       if (!container) {
//         console.error(`[MyWidget] Container #${containerId} not found`);
//         return;
//       }

//       // ✅ Clear any previous content
//       container.innerHTML = "";

//       // ✅ Render React component into the container
//       ReactDOM.createRoot(container).render(<WidgetContent />);
//     }
//   };

//   // ✅ Make MyWidget globally accessible
//   window.MyWidget = MyWidget;
// })();
