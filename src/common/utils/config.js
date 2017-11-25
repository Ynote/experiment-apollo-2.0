import { Config as ConfigFile } from '../../config/app'

export const Config = {
  fetch: () => {
    const storageKey = ConfigFile.app.name
    const appConfig = localStorage.getItem(storageKey)

    if (!!appConfig) return JSON.parse(appConfig)

    throw new Error('Try Apollo: no configuration set for this app!')
  },
  getGithubToken: () => {
    const config = Config.fetch()
    const hasToken = config.github && config.github.token

    if (hasToken) return config.github.token

    throw new Error('Try Apollo: no github token set for this app!')
  }
}
