import { declareIndexPlugin, ReactRNPlugin } from '@remnote/plugin-sdk';
import '../style.css';
import '../App.css';
import { registerCommands } from '../lib/commands';
import { registerPowerups } from '../lib/powerup';
import { registerSettings } from '../lib/settings';
import { getSyncer } from '../lib/syncer';
import { registerWidgets } from '../lib/widgets';
import { settings, storage } from '../lib/consts';

async function onActivate(plugin: ReactRNPlugin) {
  await plugin.app.waitForInitialSync();
  await registerPowerups(plugin);
  await registerSettings(plugin);
  await registerCommands(plugin);
  await registerWidgets(plugin);
  const syncer = getSyncer(plugin);
  const autoSync = await plugin.settings.getSetting<boolean>(settings.autoSync);
  if (autoSync && await plugin.storage.getSynced(storage.hasDoneFirstRun)) {
    syncer.syncLatest();
  }
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
