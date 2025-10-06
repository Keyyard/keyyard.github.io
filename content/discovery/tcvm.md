---
title: "Tree Capitator & Vein Miner Addon"
slug: "tcvm"
tags:
  - addon
  - free
description: "Tree Capitator and Vein Miner Addon Mod for Minecraft."
date: "2025-10-06"
image: "/discovery/tcvm/banner2.webp"
downloads:
  - label: "Tree Capitator & Vein Miner - With Controller v6.1.0"
    url: "/discovery/tcvm/tcvm610.mcaddon"
    notes: "Performance costing"
  - label: "Tree Capitator & Vein Miner - Optimized no controller v6.2.0"
    url: "/discovery/tcvm/tcvmOptv620.mcpack"
    notes: "Performance optimized, only BP, no controller item"
github: https://github.com/Keyyard/Minecraft-Tree-Capitator-and-Vein-Miner-Addon
---

![Thumbnail](/discovery/tcvm/banner2.webp)

This addon makes resource gathering faster and more convenient.

## Credits

This addon was created by @keyyard.

### Contributors

- Worldwidebrine: commands in version 0.0.2
- [GlitchyTurtle](https://github.com/GlitchyTurtle): algorithms suggestion
- [Trea Beane](https://github.com/TreaBeane): algorithms suggestion
- [Beyond64](https://github.com/OsmaanGani): controller item

## Features

- **Tree Capitator and Vein Miner Controller:** allows enabling and disabling TCVM.
- **Tree Capitator:** tree-felling when using axes and sneaking.
- **Vein Miner:** vein mining when using pickaxes and sneaking.
- **Enchantment Support:** respects Fortunes, Unbreaking, Silk Touch where applicable.
- **Durability Drain:** using TCVM drains tool durability so balance is preserved.
- **No Limit Optimized Performance:** the addon will not limit the number of blocks broken in a chain; instead it processes chains in small turns to avoid large single-frame work that causes lag.
- **Both:** both features activate only when using the correct tool while sneaking.

![Crafting](/discovery/tcvm/crafting.webp)

## Tree Capitator

To activate Tree Capitator, ensure you are using an axe and sneaking (crouch) while breaking the bottom log of a tree.

- Break the bottom block of a tree, and the entire tree will fall down.
- Works for all tree types (oak, birch, jungle, spruce, etc.).
- Supports nether trees like crimson and warped.
- Supports large/huge trees and new tree types such as mangrove and cherry.
- **Note:** Tree Capitator avoids mangrove roots to prevent unintended biome damage.

![Tree Capitator](/discovery/tcvm/img5.webp)
![Tree Capitator](/discovery/tcvm/img4.webp)

## Vein Miner

To activate Vein Miner, ensure you are using a pickaxe and sneaking while breaking a block in an ore chain.

- Breaking one block in an ore chain causes the connected ore chain to break and drop items.
- Works for all ore types, including nether ores and special blocks like nether debris.
- Supports gravel-style chains when used in the appropriate game contexts.

![Vein Miner](/discovery/tcvm/img3.webp)
![Vein Miner](/discovery/tcvm/img2.webp)

## Enchantment Support

This addon respects common enchantments:

- **Unbreaking:** reduces how quickly tools lose durability when used with TCVM.
- **Fortune:** increases drop quantities for ores.
- **Silk Touch:** allows collecting blocks instead of drops when applicable.

![Silk Touch](/discovery/tcvm/silk_touch.gif)
![Fortune](/discovery/tcvm/fortune.gif)

## Preview Videos

![Preview](/discovery/tcvm/banner.webp)
Preview available above — click the thumbnail to open on YouTube.

## FAQ (Frequently Asked Questions)

**Q: Why is this addon on my GitHub?**

A: This addon is hosted publicly to encourage collaboration and transparency. It’s open-source so contributors can propose improvements and fixes via pull requests.

**Q: Can I use this addon in Creative Mode?**

A: Yes — it works in Creative as well for faster testing and building.

**Q: Are there compatibility issues with other addons?**

A: The addon is designed to be compatible with many other addons. Conflicts are possible if other addons modify the same block-breaking logic; test in a controlled environment.

**Q: How do I install the Tree Capitator and Vein Miner Addon?**

1. Download the addon files from the GitHub release or MCPEDL (trusted host).
2. Import the addon into Minecraft Bedrock (open the .mcpack or follow the platform’s installation instructions).

**Q: Is this addon available for Bedrock Edition or Java Edition?**

A: This addon targets Bedrock Edition.

**Q: Can I modify or redistribute this addon?**

A: Modifying or redistributing this addon without permission from the creator is not permitted. You may fork the repository and create your own version (you will be credited for contributions). For commercial licensing or redistribution requests, contact the author.
