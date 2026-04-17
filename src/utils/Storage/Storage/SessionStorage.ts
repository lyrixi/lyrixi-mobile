import DataParse from './DataParse'

const SessionStorage = {
  setSessionStorage: function (key: unknown, value: unknown) {
    window.sessionStorage.setItem(String(key), DataParse.stringify(value))
    return true
  },
  getSessionStorage: function (key: unknown) {
    if (!key || typeof key !== 'string') return null
    return DataParse.parse(window.sessionStorage.getItem(key))
  },
  getSessionStorageKeys: function (): string[] | null {
    const storages = window.sessionStorage
    if (storages.length === 0) return null
    const keys: string[] = []
    for (let i = 0; i < storages.length; i++) {
      const key = storages.key(i)
      if (key !== null) keys.push(key)
    }
    return keys
  },
  getSessionStorages: function (): Record<string, unknown> | null {
    const storages = window.sessionStorage
    if (storages.length === 0) return null
    const sessionStorages: Record<string, unknown> = {}
    for (let i = 0; i < storages.length; i++) {
      const key = storages.key(i)
      if (key === null) continue
      const raw = storages.getItem(key)
      sessionStorages[key] = DataParse.parse(raw)
    }
    return sessionStorages
  },
  removeSessionStorage: function (key: unknown) {
    window.sessionStorage.removeItem(String(key))
    return true
  },
  removeSessionStorages: function (filter: (key: string | null) => boolean) {
    if (typeof filter !== 'function') return false

    const removeKeys: string[] = []
    const storages = window.sessionStorage
    for (let i = 0; i < storages.length; i++) {
      const key = storages.key(i)
      if (key !== null && key !== undefined && filter(key)) {
        removeKeys.push(key)
      }
    }

    for (const removeKey of removeKeys) {
      window.sessionStorage.removeItem(removeKey)
    }

    return true
  },
  clearSessionStorage: function () {
    window.sessionStorage.clear()
    return true
  }
}

export default SessionStorage
