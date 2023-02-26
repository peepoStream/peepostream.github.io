---
sidebar_position: 1
slug: /setup/chat/command
description: Setting up a TTS Command in chat
---

# TTS Command

:::caution
For TTS Commands to play you need to setup the [Chat Features browser source](/setup/chat/setup).
:::

For the TTS Command to start working, you will need to enable the feature on the [TTS Dashboard](https://peepostream.com/tts). From here you can also manage the voice used, the volume, and wether or not the chatter's name should be read before each message. The selected voice will apply to both [TTS Everything](/setup/chat/ttse) and the TTS Chat Command.

After this any message sent with `~tts` at the start will be read out in the selected voice.

![TTS Command in the dashboard toggled to Enabled.](@site/static/img/Chat_Commands_Enabled.png)

:::info
Messages read count towards your [Monthly Quota](/account/billing#plans), and it is not currently possible to use AI voices with the TTS Command. The prefix `~tts` cannot currently be changed.
:::