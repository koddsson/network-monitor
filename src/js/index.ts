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
  list.prepend(item)
}

async function ready(): Promise<void> {
  return new Promise(resolve => {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      resolve()
    } else {
      document.addEventListener('DOMContentLoaded', () => resolve())
    }
  })
}

window.addEventListener('online', () => {
  log('The network connection has been established.')
  document.body.style.backgroundColor = 'var(--green-5)'
})

window.addEventListener('offline', () => {
  log('The network connection has been lost.')
  document.body.style.backgroundColor = 'var(--red-5)'
})

await ready()
if (navigator.onLine) {
  log("We're online!")
  document.body.style.backgroundColor = 'var(--green-5)'
} else {
  log("We're offline!")
  document.body.style.backgroundColor = 'var(--red-5)'
}

export {}
