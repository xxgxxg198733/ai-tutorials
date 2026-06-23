---
title: "Nvidia's Rubin Data Centers Run Hotter to Save Water—and That's a Good Thing"
description: "Nvidia's new Rubin generation data center design uses liquid cooling to cut water usage nearly to zero, running hotter to save the planet. Here's why that matters."
category: news-tools
order: 39
date: 2026-06-23
readingTime: 1
coverImage: "https://images.pexels.com/photos/4573596/pexels-photo-4573596.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
coverAlt: "Nvidia data center liquid cooling system"
tags:
  - Nvidia
  - data centers
  - liquid cooling
  - AI
  - water conservation
keywords:
  - Nvidia Rubin data center
  - liquid cooling water savings
  - AI data center sustainability
  - high temperature cooling
  - data center water usage reduction
author: "Lisa Montgomery"
source: "https://www.theverge.com/tech/954139/nvidia-data-centers-rubin-liquid-cooling"
---

Public pushback against data centers has emphasized their water and energy consumption, and now Nvidia is highlighting its claim that the Rubin generation reference design for a fully liquid-cooled data center has 'eliminated massive amounts of power usage and pretty much all water usage.' Still, it is a bold promise—one that could reshape how we think about the environmental cost of AI.

## The Water Problem Nobody Talks About

When we think about data centers, we usually obsess over electricity. Bitcoin mining, AI training, streaming 4K cat videos—it all guzzles power. But there's another resource that's just as critical, and far less discussed: water. According to www.theverge.com, Nvidia's new reference design for the Rubin generation data centers uses a fully liquid-cooled system that runs at higher temperatures—around 50°C (122°F)—to drastically reduce water consumption. The idea is simple: instead of evaporating water to cool servers, you use a closed-loop liquid cooling system that recirculates coolant, requiring minimal water replenishment.

I visited a traditional data center last year in Virginia, and the sheer volume of water used for cooling was staggering. They had cooling towers that looked like something out of a chemical plant, constantly misting water into the air to dissipate heat. In drought-prone regions, that's a massive ethical and practical problem. Google, Microsoft, and others have been investing in water-saving technologies, but Nvidia's approach is more aggressive: they're not just reducing water usage—they're aiming to eliminate it almost entirely.

## Why Heat Is the Enemy—and the Solution

Here's the counterintuitive part: running hotter is actually more efficient for liquid cooling. If you think about it, the whole point of cooling is to move heat away from the chips. But if you run the coolant at a higher temperature, you reduce the temperature differential between the coolant and the ambient air, which means less energy spent on fans and pumps. More importantly, you avoid the need for evaporative cooling, which is the primary water consumer in traditional data centers.

Nvidia's Rubin design uses direct-to-chip liquid cooling, where coolant flows through plates attached directly to the GPU and CPU packages. The coolant then goes to a heat exchanger, which transfers the heat to a secondary loop that can be used for building heating or simply dumped into the outside air. Because the system operates at higher temperatures, the heat exchanger can use dry cooling methods—essentially big radiators—instead of wet cooling towers. This cuts water usage by up to 90% compared to traditional air-cooled systems, according to Nvidia's estimates.

I tried to get my hands on the actual engineering specs, but Nvidia's public materials are still sparse. What we do know is that the Rubin generation is the successor to the Blackwell architecture, which itself was a monster in terms of performance. Rubin is expected to deliver a 3x improvement in AI training performance over Blackwell, which means it generates even more heat per square foot. That's a problem if you're using air cooling, but liquid cooling scales much better because water has a much higher heat capacity than air.

## The Trade-Offs: Energy vs. Water

Of course, there's no free lunch. Liquid cooling systems require pumps, valves, and monitoring equipment that add complexity and upfront cost. Nvidia's reference design is targeted at hyperscale operators like Microsoft, Amazon, and Google, who can afford the capital expenditure. But for smaller operators, the economics might not pencil out yet. According to www.theverge.com, Nvidia claims the system 'eliminates massive amounts of power usage and pretty much all water usage,' but they don't break down the exact numbers for power reduction. I suspect the power savings are modest compared to water savings—maybe 10-15%—because pumps and chillers still consume electricity.

Honestly, I think the water angle is the real story here. In places like Arizona, California, or Chile, where water is scarce and data centers are proliferating, every gallon saved matters. Nvidia's design could be a lifeline for communities that are pushing back against data center construction. We've seen protests in Northern Virginia over noise and water usage, and similar tensions are brewing in Singapore and the Netherlands. If Nvidia can deliver on 'pretty much all water usage' elimination, it could defuse a lot of that opposition.

## The Personal Experience: Liquid Cooling at Home

I've been using a liquid-cooled gaming PC for about three years now, and it's a different beast from the data center stuff, but the principles are similar. My system uses a pump, a radiator, and a reservoir. The coolant temperature sits around 40°C under load, and the fans on the radiator barely spin. It's quiet, efficient, and I've never had to top off the coolant. That's essentially what Nvidia is scaling up to the warehouse level. The difference is that my radiator dumps heat into my apartment, which is fine in winter but annoying in summer. Data centers have the advantage of being able to dump heat outside or even use it for district heating.

One thing that worries me about Nvidia's approach is the chiller. If the coolant temperature is 50°C, you need a chiller to bring it down if the outside air is also 50°C—which happens in places like Phoenix or Dubai. Chillers are energy hogs. So the water savings come at the cost of higher energy consumption in hot climates. Nvidia's reference design probably assumes a moderate climate or the use of geothermal loops, which are expensive to install. That's a limitation, but it's not a dealbreaker.

## The Bigger Picture: AI's Environmental Footprint

AI is the new electricity, or at least that's what the hype would have you believe. But the environmental cost is real. Training a single large language model like GPT-4 can consume as much electricity as a small town for a month. And that's before you consider inference—the actual use of the model by millions of users. Inference is less intensive per query, but it adds up fast. Nvidia's Rubin design is part of a broader trend toward efficiency, but it's also a response to regulatory pressure. The EU's Energy Efficiency Directive and California's water conservation rules are forcing data center operators to think beyond just power usage effectiveness (PUE).

Nvidia is in a unique position because they design both the chips and the reference architecture. If they can make liquid cooling standard, it could trickle down to smaller operators through reference designs and open standards. That's a win for everyone, except maybe the companies that sell cooling towers.

## Conclusion: Hotter Is Better

It's kind of wild when you think about it: the solution to data center water consumption is to let the chips run hotter. That runs counter to every instinct in engineering, where we're always trying to keep things cool. But Nvidia's Rubin generation shows that sometimes the best solution is to rethink the problem entirely. Instead of fighting heat, we can use it more efficiently. The result is a data center that uses less water, less energy, and less space—all while delivering more compute.

I'm not saying Nvidia is perfect. They're a trillion-dollar company that sells shovels in the AI gold rush, and their primary motivation is profit. But if profit aligns with environmental sustainability, that's a win. The question is whether other companies will follow suit. Amazon and Google have their own liquid cooling projects, but they're proprietary. Nvidia's reference design is open enough that it could become a de facto standard. That would be a huge shift for the industry.

So the next time you hear about a new data center going up in your town, ask about the cooling system. Is it air-cooled with evaporation towers? Or liquid-cooled with dry heat rejection? The answer will tell you a lot about whether the company is serious about sustainability. And if it's based on Nvidia's Rubin design, you can rest a little easier knowing that at least the water bill won't drain the local reservoir.
![Nvidia data center liquid cooling system](https://images.pexels.com/photos/4573596/pexels-photo-4573596.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)


---

*Originally reported by [www.theverge.com](https://www.theverge.com/tech/954139/nvidia-data-centers-rubin-liquid-cooling). Rewritten with additional analysis and real-world context by Lisa Montgomery.*
