var createLoginLayer = (function () {
  var div;
  return function () {
    if (!div) {
      div = document.createElement("div");
      div.innerHTML = "悬浮窗";
      div.style.display = "none";
      document.body.appendChild(div);
    }

    return div;
  };
})();

document.getElementById("loginBtn").onclick = function () {
  var loginLayer = createLoginLayer();
  loginLayer.style.display = "block";
};
