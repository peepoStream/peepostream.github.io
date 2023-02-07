---
sidebar_position: 2
slug: /account/permissions
description: Understanding why peepo requires its Twitch permissions
---

# Permissions

## List of Permissions

![Screenshot of Login Permissions](https://cdn.discordapp.com/attachments/1036846058325680148/1068432084366004296/image.png)

### Grant or remove the moderator role from users in your channel

The peepoStream bot requires the Moderator role to ensure it can access all the channel information it needs. This permission is used to automatically add the bot as your channel's moderator rather than manually linking and modding the bot.  

### Grant or remove the VIP role from users in your channel

This permission is used for VIP-related mod actions. Without creating any [Mod Action](/docs/rewards/actions) rewards this permission will not be used.

### Manage Channel Points custom rewards and their redemptions on your channel

This permission is used to manage [Channel Point Rewards] automatically (https://dashboard.twitch.tv/viewer-rewards/channel-points/rewards) when you create, edit, or delete [TTS](/docs/rewards/tts) or [Mod Action](/docs/rewards/actions) rewards created in our dashboard.

### Get a list of all subscribers to your channel and check if a user is subscribed to your channel

Used for Channel Activity feed, which displays recent follows, subscriptions, and bits.

### Manage your channel's predictions

This is a necessary permission for an upcoming feature.

### Manage your channel's polls

This is a necessary permission for an upcoming feature.

### View your email address

This is used for contact information to send things like billing receipts.

### Manage AutoMod in channels where you have the moderator role

This is included in the scope "channel:manage:moderators" by Twitch, which is the same permission needed for ["Grant or remove moderator[...]"](#grant-or-remove-the-moderator-role-from-users-in-your-channel). We do not change AutoMod settings in any channels, including yours.

### View your channel's Bits information

This is a necessary permission for the upcoming extension.

### Ban or unban users in channels where you have the moderator role

This is included in the scope "channel:moderate" by Twitch, which is required to perform any moderation actions in your channel. We do not make any moderation actions in any channel but your own, and only if you have the [Timeout Mod Action](/docs/rewards/actions/#ban--timeout) setup.

## Revoking Permissions

You can revoke peepoStream's permissions at any time by going to your [Twitch Connections](https://www.twitch.tv/settings/connections), scrolling down to "Other Connections", finding peepoStream in the list, then clicking "Disconnect".
