---
sidebar_position: 1
slug: /setup/dock/obs
description: Setting up the Dock in OBS Studio  
---

# OBS Dock

:::caution

The Browser Source and Dock are incompatible with OBS version 27 or prior.

:::

### Video Walkthrough

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/o_Ko21KCJu4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Or, follow the steps below:

### Open Dock Manager

Select "Custom Browser Docks..."  
![Location of Custom Browser Docks menu under Docks tab](@site/static/img/OBS_Menu_Custom_Dock.png)

### Add the peepoStream Dock

![Details Filled in on the Custom Dock Manager](@site/static/img/OBS_Custom_Dock_Manager.png)  

#### Name

The dock name can be set to whatever you like. In the above example, it has been named "TTS".

#### URL

The dock URL must be set to:

```text
https://peepostream.com/obs/dock
```

### Sign In

If it is your first time adding the Dock to OBS, you will be presented with a window showing a "Sign in with Twitch" button on a green background. After signing in, you will see the TTS player. You can drag this window anywhere you like in OBS.

:::caution
If you close the peepoStream Dock, you will not receive alerts. You can reopen added docks from the Docks dropdown at the top of OBS.
:::
