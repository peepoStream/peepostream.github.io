---
sidebar_position: 1
slug: /tts/create
description: Setting up rewards in peepoStream
---

# Creating a Reward

:::caution
For TTS rewards to play you need to set up the [Browser Source](/setup/browser).
:::

## Create the Reward
peepoStream will configure your rewards automatically when you create them on the Dashboard. To add a reward:
1. Open the [TTS Dashboard](https://peepostream.com/tts) and find the voice you want to use. Click on it, then click "+ Add" in the popup that appears.
2. Required settings will be filled in automatically, and can be tweaked to your liking.
3. Click the green "Save" button to publish your reward!


---
## Configuration Options

See the diagram below to see how each of the configuration options corresponds to the Twitch Reward created.
<div style={{textAlign: 'center'}}>

![Diagram of peepoStream options and how they affect the reward](@site/static/img/Reward_Diagram.png)

</div>

### Reward Name

**Required.** Name of the reward.

### Cost

**Required.** Cost of the reward in Channel Points.

### Description

**Optional.** The flavor text shown under the reward when selected on Twitch.

### Global Cooldown Time

**Optional.** If this field is populated, a reward redemption from any user will temporarily stop all users from redeeming it for the specified amount of time. This can be set anywhere from 1 minute to 7 days. After the cooldown expires, the reward can be redeemed again, and the cycle repeats. Leave empty for no cooldown between redemptions.

### Limit per Stream

**Optional.** Inputting a number here will only allow the reward to be redeemed that many times during each stream. Any user redeeming the reward will count towards the usage total. After the total number is reached, the reward will be unredeemable until the next stream. Leave empty for no limits per stream.

### Limit per User per Stream

**Optional.** This option controls the maximum number of redemptions for each user. Leave empty for no limits per user.

### Background Color

**Optional.** The color behind the reward icon. Click the input box to bring up a color picker.

### Skip Queue

Your [Reward Queue](https://www.twitch.tv/popout/reward-queue) is a list of all rewards redeemed on your channel. Usually, rewards redeemed will stay in this queue until manually "Marked as Complete" to allow the streamer to refund channel points if the reward is unable to be completed. Enabling this toggle will no longer have messages appear in this queue.

:::caution
If skip queue is enabled, you will not be able to refund channel points for TTS messages to viewers.
:::

### Show Alert

Displays the TTS message and requester's name on the browser source Overlay. Off by default.

---

## Actions

### Save

Clicking this when creating a reward will automatically create the corresponding reward on Twitch. Clicking this when editing a previously created reward will apply changes to the configuration.

### Cancel

When inspecting an existing reward, this button will discard all changes made since the last Save.

### Delete

This button will remove the reward from peepoStream and Twitch when inspecting an existing reward. This action cannot be undone.

:::info
Messages read count towards your [Monthly Quota](/account/billing#plans), and it is not possible to use AI voices with TTS Everything.
:::