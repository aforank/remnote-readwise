import { RNPlugin } from '@remnote/plugin-sdk';

function getTime() {
  return new Date().toTimeString().substring(0, 8);
}

export async function log(plugin: RNPlugin, message: string, notify: boolean = false) {
  console.log(`[${getTime()}] (Readwise Plugin): ${message} Notification: ${notify}`);
  if (notify) {
    await plugin.app.toast(message);
  }
}
