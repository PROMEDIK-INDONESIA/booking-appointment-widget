(function() {
  "use strict";
  (function() {
    const MyWidget = {
      init: ({ containerId }) => {
        const container = document.getElementById(containerId);
        if (!container) {
          console.error(`[MyWidget] Container #${containerId} not found`);
          return;
        }
        const widgetElement = document.createElement("div");
        widgetElement.innerHTML = `<p style="padding: 10px; background: #f0f0f0; border-radius: 5px;">Hello from MyWidget FROM MY WIDGET COMPONENT!</p>`;
        container.appendChild(widgetElement);
      }
    };
    window.MyWidget = MyWidget;
  })();
})();
