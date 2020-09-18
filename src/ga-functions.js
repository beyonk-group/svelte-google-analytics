import { gaStore } from './store.js'

function sendToStore (type, data) {
  console.log('send to store', type)
  gaStore.update(exisiting => [ ...exisiting, { type, data } ])
}

export function pageView (options) {
  sendToStore('config', options)
}

export function event (options) {
  sendToStore('event', options)
}
