const list = document.querySelector('#events')!

// Get the connection type.
let type = navigator.connection.type

// Register for event changes:
navigator.connection.addEventListener('change', function () {
  if (type !== type) {
    log(`Connection type changed from ${type} to ${navigator.connection.effectiveType}`)
    type = navigator.connection.effectiveType
  }
})

function log(text: string): void {
  const item = document.createElement('li')
  item.textContent = `[${new Date().toLocaleTimeString()}] ${text}`
  list.append(item)
}

document.addEventListener('DOMContentLoaded', () => {
  if (navigator.onLine) {
    log("We're online!")
  } else {
    log("We're offline!")
  }
})

window.addEventListener('offline', () => log('The network connection has been lost.'))
window.addEventListener('online', () => log('The network connection has been established.'))
