---
sidebar_position: 1
slug: /setup/chat/setup
description: Setting up the chat features browser source  
---

# Chat Features Setup

## Adding the Browser Source

1. Add a new browser source to your streaming software.  

2. In the URL box, point the browser source to the TTS URL

   ```text
   https://peepostream.com/obs/tts
   ```
:::note
This URL is different then the dock URL, and only plays TTS everything and chat commands.
:::

4. Click save, then right-click on the browser source and click "Interact". A window will pop up where you can interact with the browser source. Use this window to sign in.

5. The browser source should become transparent after signing in.
---

## Controlling the Audio Output

There are two methods to control the audio levels while using TTS everything, listed in order of recommendation:

1. [Chat Commands](#chat-commands)
2. [Controlling via Streaming software](#controlling-via-streaming-software) *(advanced)*

### Chat Commands

The easiest way to control your TTS is through chat commands. These allow you to adjust settings from your stream chat. These [Chat Commands](/rewards/commands/#tts-everything) will enable you to perform all the docks functions. When combined with a [Stream Deck](/setup/streamdeck) you can control peepoStream with a single button!

### Controlling via Streaming Software

Controlling audio through the streaming software is beneficial because it allows you to easily control which audio track the TTS messages will play through.

1. Open the Browser Source properties
2. Enable the "Control Audio via OBS" checkbox
3. Open "Advanced Audio Properties"
4. Find your TTS browser source name in the list
5. Change the "Audio Monitoring" property to "Monitor and Output"

You can now adjust the volume of the TTS through the streaming software's audio mixer using the volume slider.
