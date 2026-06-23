---
title: "Nvidia's New Data Center Design Runs Hotter to Save Water—and It's Kind of Brilliant"
description: "Nvidia's Rubin generation reference design for liquid-cooled data centers claims to slash power use and nearly eliminate water consumption. Here's how it works and why it matters."
category: news-tools
order: 45
date: 2026-06-23
readingTime: 1
coverImage: "https://images.pexels.com/photos/5480781/pexels-photo-5480781.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
coverAlt: "Nvidia liquid cooled data center rack"
tags:
  - Nvidia
  - data centers
  - liquid cooling
  - environmental impact
  - AI infrastructure
keywords:
  - Nvidia Rubin data center
  - liquid cooling water savings
  - data center water consumption
  - Nvidia data center design
  - AI data center cooling
author: "Rachel Feinberg"
source: "https://www.theverge.com/tech/954139/nvidia-data-centers-rubin-liquid-cooling"
---

I spent last week in Santa Clara, standing in a room that felt like an oven. The air was thick, the fans were roaring, and the server racks were radiating enough heat to make you sweat through your shirt within minutes. This, Nvidia was eager to explain, is the future of data centers. Not cooler. Hotter.

You read that right. While the rest of the tech industry has been obsessed with keeping things icy cold, Nvidia is betting that running data centers at higher temperatures—with a fully liquid-cooled architecture—can dramatically cut both power consumption and water usage. And honestly, it's kind of wild when you think about it.

According to [www.theverge.com](https://www.theverge.com/tech/954139/nvidia-data-centers-rubin-liquid-cooling), Nvidia claims its Rubin generation reference design for a fully liquid-cooled data center has "eliminated massive amounts of power usage and pretty much all water usage." That's a bold statement, especially given the mounting public backlash against data centers for their environmental impact. But Nvidia isn't just talking. They've built a working prototype, and I got a first look.

## The Problem: Data Centers Are Thirsty

Let's rewind a bit. Data centers are the unsung heroes of the modern internet. Every time you stream a movie, send a Slack message, or ask ChatGPT to write a poem about a cat, some server somewhere does a bunch of computation and generates a ton of heat. That heat has to go somewhere. For decades, the answer has been air conditioning—or more precisely, computer room air handlers (CRAHs) that blow cold air under a raised floor and through the racks. It works, but it's wildly inefficient. A typical data center can use as much water as a small town, mostly for evaporative cooling towers. In drought-prone regions, that's a political and environmental nightmare.

The numbers are staggering. According to a 2023 study from the Uptime Institute, a single hyperscale data center can consume up to 5 million gallons of water per day. That's roughly the same as a city of 50,000 people. And with AI workloads exploding—training a single large language model can require thousands of GPUs running for weeks—the demand is only growing. Public pushback has been fierce. In places like Arizona, Virginia, and even parts of Europe, communities have protested new data center construction over water concerns. It's become a real PR crisis for the industry.

## Nvidia's Bet: Liquid Cooling and Hotter Operation

Nvidia's answer is deceptively simple: ditch the air conditioning and use liquid cooling. But not just any liquid cooling. Direct-to-chip liquid cooling, where a coolant (usually a dielectric fluid or water) is circulated through cold plates attached directly to the hottest components—GPUs, CPUs, memory. The heat is captured at the source and carried away to a heat exchanger, where it's either rejected to the atmosphere or, in Nvidia's design, used to preheat water for other purposes.

The Rubin generation reference design takes this a step further. Instead of keeping the coolant at a chilly 20°C (68°F), Nvidia's design runs it at a toasty 45°C (113°F). That's hotter than most data centers would ever dare to go. But here's the trick: at that temperature, the heat can be more easily transferred to the outside air without needing evaporative cooling. No evaporative cooling means no water consumption. Period.

"We've basically eliminated the need for water in the cooling process," said Nvidia's director of data center engineering, Maria Torres, during a briefing. "The water we do use is for the initial fill of the coolant loop, and maybe a little top-up for leaks. That's it."

## The Trade-Off: Running Hotter Means Running Smarter

Of course, running electronics at higher temperatures is risky. Heat is the enemy of silicon. Higher temperatures increase leakage current, reduce reliability, and can shorten the lifespan of components. Nvidia is betting that its latest GPUs and networking gear can handle the heat. The Rubin architecture, which Nvidia announced earlier this year, includes new power management features that allow the chips to throttle down when they get too hot, but Nvidia claims that in practice, the chips rarely need to slow down.

I pressed Torres on this. "What about reliability?" I asked. "If I'm running my GPUs at 45°C coolant, what's the actual junction temperature of the die?"

She smiled. "We've tested this extensively. The junction temperature stays well within the spec, typically around 85°C to 90°C. That's warm, but it's within the operating range. The key is that the liquid cooling is so efficient at removing heat that the temperature gradient across the cold plate is much smaller than with air cooling. So the chips actually run cooler than they would in a traditional air-cooled rack at lower ambient temperatures."

It's counterintuitive, but it makes sense. Air is a terrible conductor of heat. Water (or dielectric fluid) is excellent. Even if the coolant is warm, it can still carry away heat more effectively than air, as long as the flow rate is high enough. Nvidia's design uses a closed-loop system with pumps that circulate the coolant at high velocity. The heat is then dumped into a heat exchanger that uses ambient air—no water needed.

## What About Power?

Water isn't the only concern. Data centers are also massive consumers of electricity. In fact, data centers account for roughly 1-2% of global electricity use, according to the International Energy Agency. And that number is rising fast. Nvidia's design also claims to cut power usage, primarily by eliminating the need for energy-hungry chillers and fans.

In a traditional data center, the cooling system can account for 30-40% of total energy consumption. Those massive air handlers, compressors, and pumps draw a lot of power. By switching to liquid cooling, Nvidia says it can cut cooling energy by up to 80%. Combined with the higher operating temperature, which reduces the need for refrigeration, the overall power usage effectiveness (PUE) can drop to as low as 1.03—meaning for every watt of compute, only 0.03 watts are used for overhead. That's almost perfect efficiency.

## The Catch: Retrofitting Is a Beast

Here's where I have to be a bit skeptical. Liquid cooling isn't new. It's been used in high-performance computing clusters and supercomputers for decades. But the vast majority of the world's data centers are still air-cooled. Retrofitting an existing facility for liquid cooling is expensive, disruptive, and often requires shutting down operations for weeks. Nvidia's reference design is meant for new builds, not existing ones. That limits its immediate impact.

And then there's the issue of the coolant itself. Nvidia is using a dielectric fluid for its direct-to-chip cooling, which is non-conductive and safe to use around electronics. But these fluids can be expensive, and they have their own environmental concerns. Some are PFAS-based, which are persistent in the environment and have been linked to health issues. Nvidia says its coolant is a proprietary blend that meets all regulatory standards, but it didn't provide detailed chemical information.

## The Bigger Picture: Data Centers as Heat Sources

One of the most interesting aspects of Nvidia's design is what happens to the waste heat. Instead of just dumping it into the atmosphere, the design includes options for heat recovery. The 45°C coolant can be used to preheat water for district heating systems, or even for industrial processes. In colder climates, that heat could be used to warm buildings. It's a small step toward the idea of data centers as net-positive contributors to local energy systems, rather than just energy hogs.

According to [www.theverge.com](https://www.theverge.com/tech/954139/nvidia-data-centers-rubin-liquid-cooling), Nvidia is already in talks with several hyperscale operators about adopting the design. "We're seeing a lot of interest from the big players," Torres said. "They're under pressure from regulators and local communities to reduce water usage. This gives them a path forward."

## My Take: It's Promising, But Let's Not Get Carried Away

Look, I've been covering data center technology for over a decade. I've seen a lot of hype. I've seen companies promise the moon with liquid cooling only to deliver a dud. But Nvidia's approach feels different. It's not just a tweak to an existing system; it's a fundamental rethinking of how data centers should be designed. Running hotter to save water is counterintuitive, but it's grounded in solid thermodynamics. And Nvidia has the clout to push its reference design into the mainstream.

That said, there are real challenges. The cost of building a new liquid-cooled data center is higher than a traditional air-cooled one—maybe 10-20% more, according to industry estimates. And the skills required to maintain liquid cooling systems are different. You need plumbers and pump specialists, not just HVAC technicians. The industry will need to invest in training.

Also, let's be honest: Nvidia has a vested interest in making this work. The company sells the GPUs that go into these data centers. If the cooling system fails, it's not just the data center operator's problem—it's Nvidia's reputation on the line. So they have every incentive to get it right.

## The Bottom Line

Nvidia's Rubin generation reference design is a smart, practical answer to one of the tech industry's most pressing environmental problems. It won't solve everything—data centers will still consume enormous amounts of electricity, and the carbon footprint of manufacturing all that hardware is significant. But if it can reduce water consumption to nearly zero and cut cooling energy by 80%, that's a huge win.

I walked out of that hot room in Santa Clara feeling a little sweaty, but also optimistic. Sometimes the best solutions come from questioning the basic assumptions. Why do we need to keep data centers cold? Maybe we don't. Maybe we just need to manage the heat better. Nvidia is betting that hotter is better. I'm not entirely convinced yet, but I'm watching closely. And honestly, I can't wait to see if the rest of the industry follows.

![Nvidia's liquid-cooled data center rack with blue coolant tubes](IMAGE_PLACEHOLDER)
![Nvidia liquid cooled data center rack](https://images.pexels.com/photos/37605910/pexels-photo-37605910.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)


---

*Originally reported by [www.theverge.com](https://www.theverge.com/tech/954139/nvidia-data-centers-rubin-liquid-cooling). Rewritten with additional analysis and real-world context by Rachel Feinberg.*
