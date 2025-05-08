# Readwise Sync V2

** This is fork of the original Readwise plugin with additional features. Please see [Releases](https://github.com/aforank/remnote-readwise/releases/tag/1.0.0) for changelog **

## Features

- Sync your Readwise highlights into RemNote

## Usage

### Fresh Installation of Readwise Sync V2

- Add your Readwise API key in the plugin settings page. You can acquire a Readwise API key by following [these instructions](https://readwise.io/access_token).
- Enable or Disable Auto Sync
- Set Auto Sync Internal
- Enable / Disable adding source to each highlight
- By default `Initial Import Date` is set to today's date. Please reset accordingly
- On your first time using the plugin, you should use the `Readwise Sync All` command to load all of your existing highlights into RemNote. You can find this command in the Omnibar by pressing `ctrl/cmd+k` and searching for "Readwise Sync All".
  - If you have a really large Readwise collection, this could take up to 10 minutes. Please be patient :)
  - While the initial sync is running, **don't refresh the page or close the tab**.

![CleanShot 2024-05-30 at 10 51 15](https://github.com/bjsi/remnote-readwise/assets/58147075/0b88aade-3db0-4608-bfd6-1b0b6c6cf40e)

- Once the initial sync is done, future syncing will happen **automatically in the background** every 2 minutes by default. (Can be changed through settings)

### Migrating from Readwise Sync V1 to V2

- Uninstall Readwise Sync V1
- Install Readwise Sync V2
- Double check settings as mentioned above [Settings](https://github.com/aforank/remnote-readwise/edit/main/README.md#fresh-installation-of-readwise-sync-v2)
- Since it is a new plugin, you need to run `Readwise Sync All` command for the first time. To prevent the sync to run from the beginning and cause any duplicates, set the initial import date to today's date or as per your need. This will ensure the sync runs from the date you want.
- Ensure atleast one highlight is synchronized to update the last sync in the backend successfully. (Very Important)
- After that you may continue to use either Auto-Sync or Manual Sync by running the `Readwise Sync Latest` command

## Details

- Readwise books are stored under a Top Level Rem called "Readwise Books" - **please don't rename, move or delete this document otherwise the plugin won't be able to find where to save your highlights!**
- Readwise highlights are stored as children of the Readwise book they belong to.
