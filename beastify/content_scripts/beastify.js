function beastify({beastURL}) {
  removeEverything();
  insertBeast(beastURL);
  browser.runtime.onMessage.removeListener(beastify);
}


function removeEverything() {
  while (document.body.firstChild) {
    document.body.firstChild.remove();
  }
}

function insertBeast(beastURL) {
  const beastImage = document.createElement("img");
  beastImage.setAttribute("src", beastURL);
  beastImage.setAttribute("style", "width: 100vw");
  beastImage.setAttribute("style", "height: 100vh");
  document.body.appendChild(beastImage);
}

browser.runtime.onMessage.addListener(beastify);