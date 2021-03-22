import Theme from 'vitepress/theme'
import './custom.css'
import './code-theme.css'
import { createPinia } from '../../../dist/pinia.esm-bundler'

/** @type {import('vitepress').Theme} */
const config = {
  ...Theme,
  enhanceApp({ app }) {
    app.use(createPinia())
  },
}

export default config
