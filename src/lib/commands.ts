import { RNPlugin } from '@remnote/plugin-sdk';
import { getSyncer } from './syncer';

export async function registerCommands(plugin: RNPlugin) {
  const syncer = getSyncer(plugin);
  await plugin.app.registerCommand({
    id: 'syncLatestHighlights',
    name: 'Readwise Sync Latest',
    description:
      'Sync any unsynced Readwise books and highlights since the last sync time. This command is run automatically for you in the background every 2 minutes.',
    action: async () => {
      await syncer.syncLatest(true);
    },
  });

  plugin.app.registerCommand({
    id: 'resetLastSync',
    name: 'Readwise Reset Last Sync',
    description:
      'Reset the last sync time. This will force a sync of all highlights and books.',
    action: async () => {
      await syncer.resetLastSync();
    },
  });

  plugin.app.registerCommand({
    id: 'syncAllHighlights',
    name: 'Readwise Sync All',
    description:
      'Sync all Readwise books and highlights into RemNote. You should only need to run this command the first time you use the plugin.',
    action: async () => {
      await syncer.syncAll();
    },
  });
}
