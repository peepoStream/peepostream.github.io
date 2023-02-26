---
sidebar_position: 1
slug: /rewards/create
description: Setting up rewards in peepoStream
---

# Creating a Reward

:::caution
For TTS rewards to play you need to setup the [Reward Source](/setup/dock).
:::

## Video Walkthrough

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Bz1Kn1QOBjo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Create the Reward
peepoStream will perform an action on point redemption if you configure it in the dashboard. To add a channel point action:
1. Open the [channel points manager](https://peepostream.com/redemptions) and click "+Create New"
2. Select the Reward Type you want to create.
3. Options specific to your selected reward type will appear on the top half. The bottom half will always display the configuration options for Twitch Rewards.
4. Fill out the configuration options, then click the green "Save" button. peepo will create the reward with the specified options on Twitch.

---
## Configuration Options

See the diagram below to see how the fields in the "Twitch Options" panel correspond to the Twitch Reward created.

![Diagram of Twitch Options panel on peepoStream Dashboard](@site/static/img/Twitch_Options_Diagram_1.png)
![Diagram of a Twitch Reward on Twitch](@site/static/img/Twitch_Options_Diagram_2.png)

### Global Cooldown Time

If this field is populated, a reward redemption from any user will temporarily stop all users from redeeming it for the specified amount of time. This can be set anywhere from 1 minute to 7 days. After the cooldown expires, the reward can be redeemed again, and the cycle repeats. Leave empty for no cooldown between redemptions.

### Limit per Stream

Inputting a number here will only allow the reward to be redeemed that many times during each stream. Any user redeeming the reward will count towards the usage total. After the total number is reached, the reward will be unredeemable until the next stream. Leave empty for no limits per stream.

### Limit per User per Stream

This option controls the maximum number of redemptions for each user. Leave empty for no limits per user.

---

## Actions

![Actions on the Channel Point Dashboard](@site/static/img/Rewards_Actions.png)

### Save

Clicking this when creating a reward will automatically create the corresponding reward on Twitch. Clicking this when editing a previously created reward will apply changes to the configuration.

### Cancel

When inspecting an existing reward, this button will discard all changes made since the last Save.

### Delete

This button will remove the reward from peepoStream and Twitch when inspecting an existing reward. This action cannot be undone.

