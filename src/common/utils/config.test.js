import { Config } from './config'
import { Config as ConfigFile } from '../../config/app'

describe('Config', () => {
  let config

  beforeAll(() => {
    config = { github: { token: 'alice-in-wonderland' } }

    const localStorageMock = () => {
      let store = {}

      return {
        getItem: key => store[key],
        setItem: (key, val) => store[key] = JSON.stringify(val),
        clear: () => store = {},
        removeItem: key => delete store[key],
        getStore: () => store,
      }
    }

    global.localStorage = localStorageMock()
  })

  afterEach(() => {
    global.localStorage.clear()
  })

  describe('.fetch', () => {
    describe('with a config set in localStorage', () => {
      beforeEach(() => {
        global.localStorage.setItem(ConfigFile.app.name, config)
      })

      it('returns an object with the app config', () => {
        expect(Config.fetch()).toEqual(config)
      })
    })

    describe('without a config set in localStorage', () => {
      it('throws an error', () => {
        expect(Config.fetch)
          .toThrow('Try Apollo: no configuration set for this app!')
      })
    })
  })

  describe('.getGithubToken', () => {
    describe('with a github token set in configuration', () => {
      beforeEach(() => {
        global.localStorage.setItem(ConfigFile.app.name, config)
      })

      it('return the github personnal token', () => {
        expect(Config.getGithubToken()).toEqual('alice-in-wonderland')
      })
    })

    describe('without a github token set in configuration', () => {
      beforeEach(() => {
        global.localStorage.setItem(ConfigFile.app.name, {})
      })

      it('throws an error', () => {
        expect(Config.getGithubToken)
          .toThrow('Try Apollo: no github token set for this app!')
      })
    })
  })
})
