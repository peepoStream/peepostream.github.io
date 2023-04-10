---
sidebar_position: 1
slug: /setup/browser
description: Using peepoStream's browser source
---

# Browser Source

## Adding the Browser Source

1. Add a new browser source to your streaming software.  

2. In the URL box, point the browser source to the following URL:

   ```text
   https://peepostream.com/obs/browser
   ```

<div style={{textAlign: 'center'}}>

![Browser source properties with the URL filled in](@site/static/img/Browser_Source_Config.png)

</div>

4. Click ok.

5. Right-click on the browser source and click "Interact". A window will pop up where you can interact with the browser source. Use this window to sign in.

<div style={{textAlign: 'center'}}>

![Interact in the Menu](@site/static/img/Interact_Menu.png)

</div>

---

## Controlling the Audio Output

There are three methods to control the audio levels while using a browser source, listed in order of recommendation:

1. [peepoStream Dock](/setup/dock/)
2. [Chat Commands](#chat-commands)
3. [Controlling via Streaming software](#controlling-via-streaming-software) *(advanced)*

### peepoStream Dock
Please see the [dock setup article](/setup/dock) for more information.

### Chat Commands

The easiest way to control your TTS is through chat commands. These allow you to adjust the dock settings from your stream chat. These [Chat Commands](/config/commands/) will enable you to perform all the docks functions. When combined with a [Stream Deck](/setup/streamdeck) you can control peepoStream with a single button!

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
