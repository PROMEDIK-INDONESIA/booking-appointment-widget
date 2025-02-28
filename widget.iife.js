var MyWidget = function() {
  "use strict";
  const MyWidget2 = {
    init: ({ containerId }) => {
      const container = document.getElementById(containerId);
      if (!container) {
        console.error(`[MyWidget] Container #${containerId} not found`);
        return;
      }
      const widgetElement = document.createElement("div");
      widgetElement.innerHTML = `<p style="padding: 10px; background: #f0f0f0; border-radius: 5px;">Hello from MyWidget!</p>`;
      container.appendChild(widgetElement);
    }
  };
  window.MyWidget = MyWidget2;
  return MyWidget2;
}();
