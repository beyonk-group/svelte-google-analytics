import { gaStore } from './store.js'

function pushEvent (type, data) {
  gaStore.update(exisiting => [ ...exisiting, { type, data } ])
}

export function pageView (options) {
  pushEvent('config', options)
}

export function event (options) {
  pushEvent('event', options)
}
