---
sidebar_position: 3
slug: /rewards/actions
description: Understanding what each mod action does
---

# Mod Actions

## Ban / Timeout

The user will be prompted to enter the username of any non-moderator to be temporarily timed out.
The timeout duration can be customized on a per-reward basis. The default duration is 60 seconds.
:::note
You can immediately end any user's timeout by overwriting it. The command below will overwrite any existing timeout with a single-second timeout.

```text
/timeout username 1
```

:::

## VIP

The redeemer of the reward will be given the VIP role.  
:::caution
VIPs are unaffected by slow, sub-only, and follower-only modes. They can also post links in chat *even when links are disabled in your moderation settings*.
:::
:::info
The amount of VIPs on a channel at any given time is limited by your progress on the "[Build a Community](https://dashboard.twitch.tv/analytics/achievements)" achievement—the number of VIPs scales per unique chatters in a stream, up to 100 VIPs max. See the table below for details.

<table>
<tr>
<td>Unique Chatters</td>
<td>5</td>
<td>10</td>
<td>15</td>
<td>20</td>
<td>25</td>
<td>50</td>
<td>100</td>
<td>200</td>
</tr>
<tr>
<td>Number of VIP's</td>
<td>10</td>
<td>20</td>
<td>30</td>
<td>40</td>
<td>50</td>
<td>60</td>
<td>80</td>
<td>100</td>

</tr>
</table>
:::

## Steal VIP

Removes VIP role from a specified VIP user and applies it to the redeemer.  
