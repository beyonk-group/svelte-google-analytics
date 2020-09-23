import { gaStore } from './store.js'

function sendToStore (type, data) {
  gaStore.update(exisiting => [ ...exisiting, { type, data } ])
}

export function pageView (options) {
  sendToStore('config', options)
}

export function event (options) {
  sendToStore('event', options)
}
