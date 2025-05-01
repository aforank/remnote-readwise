import { RNPlugin } from '@remnote/plugin-sdk';
import { settings } from './consts';

export const registerSettings = async (plugin: RNPlugin) => {
  await plugin.settings.registerStringSetting({
    id: settings.apiKey,
    title: 'Readwise API Key',
    defaultValue: '',
    description:
      'Paste your Readwise API key here. Follow the instructions here if you do not have a key: https://www.readwise.io/access_token',
  });

  await plugin.settings.registerStringSetting({
    id: settings.initDate,
    title: 'Initial Sync Date',
    defaultValue: new Date().toISOString(),
    description:
      'Specify the date from which you would want to start the sync. Leave blank if you want the sync from the beginning. Format: YYYY-MM-DDTHH:mm:ssZ',
  });

  await plugin.settings.registerBooleanSetting({
    id: settings.autoSync,
    title: 'Enable Auto Sync',
    defaultValue: true,
    description:
      'Automatically sync your Readwise highlights and books every 2 minutes. Disable this if you want to manually sync.',
  });

  await plugin.settings.registerNumberSetting({
    id: settings.syncInterval,
    title: 'Auto Sync Interval',
    defaultValue: 2,
    description:
      'Auto Sync interval in minutes. Default is 2 minutes.',
  });

  await plugin.settings.registerBooleanSetting({
    id: settings.highlightSource,
    title: 'Add source to each highlight',
    defaultValue: true,
    description:
      'Add the source of the highlight to the end of the highlight.',
  });
};
