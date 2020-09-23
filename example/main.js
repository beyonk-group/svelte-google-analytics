import App from './App.svelte'

const app = new App({
  target: document.body
})

export default app

if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    app.$destroy()
  })
  import.meta.hot.accept()
}