import { contextBridge } from 'electron'

if (!process.contextIsolated) {
  throw new Error('ContextIsolation must be enabled in the browserWindow')
}
try {
  contextBridge.exposeInMainWorld('context', {
    //todo: should
  })
} catch (error) {
  console.log(error)
}
