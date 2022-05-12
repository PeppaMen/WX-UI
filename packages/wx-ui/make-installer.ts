// import { provideGlobalConfig } from '@wx-ui/hooks'
import { version } from './version'
import type { App, Plugin } from 'vue'
// import type { ConfigProviderContext } from '@wx-ui/tokens'

// const INSTALLED_KEY = Symbol('INSTALLED_KEY')

export const makeInstaller = (components: Plugin[] = []) => {
  // const install = (app: App, options: ConfigProviderContext = {}) => {
  //   if (app[INSTALLED_KEY]) return

  //   app[INSTALLED_KEY] = true
  //   components.forEach((c) => app.use(c))
  //   provideGlobalConfig(options, app, true)
  // }

  const install = (app: App) => {
    components.forEach((c) => app.use(c))
  }

  return {
    version,
    install,
  }
}
