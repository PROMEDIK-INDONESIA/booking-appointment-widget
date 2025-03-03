import React from "react";
import ReactDOM from "react-dom";
import WidgetContent from "./components/WidgetContent";

const MyWidget = {
  init: ({ containerId }) => {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`[MyWidget] Container #${containerId} not found`);
      return;
    }
    const widgetElement = document.createElement("div");
    widgetElement.innerHTML = `<p style="padding: 10px; background: #f0f0f0; border-radius: 5px;">Hello from MyWidget FROM MY WIDGET COMPONENT widget.jsx!</p>`;
    container.appendChild(widgetElement);
  },
};

// **Ensure global access**
window.MyWidget = MyWidget;
