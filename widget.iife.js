(function(){"use strict";(function(){const i={init:({containerId:e})=>{const n=document.getElementById(e);if(!n){console.error(`[MyWidget] Container #${e} not found`);return}const t=document.createElement("div");t.innerHTML='<p style="padding: 10px; background: #f0f0f0; border-radius: 5px;">Hello from MyWidget FROM MY WIDGET COMPONENT! main.jsx</p>',n.appendChild(t)}};window.MyWidget=i})()})();
