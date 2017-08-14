const beasts = {
  frog: 'frog',
  snake: 'snake',
  turtle: 'turtle'
}

const mapUrlToBeast = {
  frog: 'beasts/frog.jpg',
  snake: 'beasts/snake.jpg',
  turtle: 'beasts/turtle.jpg'
}

function beastNameToURL (beastName) {
  return browser.extension.getURL(mapUrlToBeast[beasts[beastName]])
}

function gettingActiveTab () {
  return browser.tabs.query({ active: true, currentWindow: true })
}

function injectContentScript () {
  browser.tabs.executeScript(null, {
    file: '/content_scripts/beastify.js'
  })
}

function sendMessageToContentScriptInActiveTab (gettingActiveTab, beastURL) {
  gettingActiveTab.then((tabs) => {
    browser.tabs.sendMessage(tabs[0].id, { beastURL })
  })
}

function reloadTab () {
  browser.tabs.reload()
}

function closePopup () {
  window.close()
}

document.addEventListener('click', ({ target }) => {
  if (target.classList.contains('beast')) {
    const chosenBeast = target.dataset.beast
    const beastURL = beastNameToURL(chosenBeast)
    injectContentScript()
    sendMessageToContentScriptInActiveTab(gettingActiveTab(), beastURL)
  } else if (target.classList.contains('clear')) {
    reloadTab()
    closePopup()
  }
})