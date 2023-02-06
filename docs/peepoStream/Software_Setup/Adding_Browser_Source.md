---
sidebar_position: 3
slug: /setup/browser-source
description: Using peepoStream as a browser source
---

# Browser Source

## Adding the Browser Source

1. Add a new browser source to your streaming software.  

2. In the URL box, point the browser source to the Dock URL

   ```text
   https://peepostream.com/obs/dock
   ```

4. Click save, then right-click on the browser source and click "Interact". A window will pop up where you can interact with the browser source. Use this window to sign in.

5. Drag the browser source out of view to hide it, but don't disable it in your source list.

---

## Controlling the Audio Output

There are three methods to control the audio levels while using a browser source, listed in order of recommendation:

1. [Chat Commands](#chat-commands)
2. [Interacting with the Source](#interacting-with-the-source)
3. [Controlling via Streaming software](#controlling-via-streaming-software) *(advanced)*

### Chat Commands

The easiest way to control your TTS is through chat commands. These allow you to adjust the dock settings from your stream chat. These [Chat Commands](/docs/rewards/commands) will enable you to perform all the docks functions. When combined with a [Stream Deck](/docs/setup/streamdeck) you can control peepoStream with a single button!

### Interacting with the Source

As we did when setting up the TTS source, you can use your streaming software's "Interact" feature by right-clicking the browser source and clicking "Interact" in the menu. This will open a new window where you can control the dock's features.

:::note
The browser source must be active in your source list, or nothing will appear in the interact window.
:::

### Controlling via Streaming Software

Controlling audio through the streaming software is beneficial because it allows you to easily control which audio track the TTS messages will play through.

1. Open the Browser Source properties
2. Enable the "Control Audio via OBS" checkbox
3. Open "Advanced Audio Properties"
4. Find your TTS browser source name in the list
5. Change the "Audio Monitoring" property to "Monitor and Output"

You can now adjust the volume of the TTS through the streaming software's audio mixer using the volume slider.
