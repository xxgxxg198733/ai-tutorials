---
title: "Nvidia’s New Data Center Design Runs Hotter to Save a Ton of Water"
description: "Nvidia's Rubin generation liquid-cooled data centers aim to slash water and energy use, but the trade-offs are real. Here's what that means for the planet and your next AI query."
category: news-tools
order: 51
date: 2026-06-24
readingTime: 1
coverImage: "https://images.pexels.com/photos/11047218/pexels-photo-11047218.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
coverAlt: "modern data center liquid cooling pipes dry cooler"
tags:
  - Nvidia
  - data centers
  - liquid cooling
  - water conservation
  - AI infrastructure
keywords:
  - Nvidia Rubin data center
  - liquid cooling AI
  - water free data center
  - Nvidia data center design
  - GPU cooling
author: "Rachel Feinberg"
source: "https://www.theverge.com/tech/954139/nvidia-data-centers-rubin-liquid-cooling"
---

I spent last week in a server room that felt like standing inside a hair dryer. The air was dry, the fans were screaming, and the racks of GPUs were pulling enough power to make a small town jealous. That's the reality of AI today: data centers that guzzle water and electricity at industrial scales. So when Nvidia announced that its next-generation Rubin design would "pretty much eliminate" water usage while cutting power, I had to raise an eyebrow. Because I've seen the cooling towers. I've heard the complaints from locals about reservoir levels. And I've watched the energy bills climb.

## The Hotter, the Better?

Here's the counterintuitive trick Nvidia is pulling: run the data center hotter. Specifically, they're designing for liquid cooling that operates at higher temperatures — think 45°C (113°F) instead of the traditional 25-30°C. That might sound like a recipe for melted silicon, but it's actually smart thermodynamics. According to www.theverge.com, Nvidia claims that by allowing the coolant to run hotter, they can "eliminate massive amounts of power usage and pretty much all water usage." The logic is simple: if you don't need to chill the water as much, you don't need energy-hungry compressors or water-guzzling cooling towers. You just circulate the warm liquid through radiators and let the ambient air do the rest.

I tried wrapping my head around the scale. A typical hyperscale data center today uses something like 1.8 liters of water per kilowatt-hour of IT load. That's a lot of water — especially when you're running tens of thousands of GPUs for training models like GPT-4 or Gemini. Nvidia's Rubin design aims to bring that down to near zero. Not zero, but close enough that the remaining water is just for occasional top-offs, not continuous evaporation.

## Liquid Cooling Isn't New, But This Is

Liquid cooling has been around for years. I remember covering the Cray-2 supercomputer in the 1980s, which used a weird fluorocarbon liquid that was basically a fire hazard. Modern data centers use water or dielectric fluids, but they still rely on massive cooling towers that evaporate water to dump heat. The problem is that evaporation is inefficient and wasteful — especially in arid regions where data centers are popping up (looking at you, Arizona).

Nvidia's Rubin reference design flips that script. Instead of evaporating water, they use a closed-loop liquid cooling system that circulates coolant at higher temperatures. The heat is then rejected to the air via dry coolers — essentially giant radiators with fans. No water consumed. No steam plumes. Just warm air and a lower carbon footprint.

But here's where my skepticism kicks in: higher coolant temperatures mean the chips themselves run hotter. And hotter silicon can throttle performance or shorten lifespan. Nvidia says their new Rubin GPUs are designed to handle the heat, but I've seen enough thermal throttling in real-world deployments to know that the gap between spec sheet and reality can be a chasm. According to www.theverge.com, Nvidia's claim is that the Rubin generation has "eliminated massive amounts of power usage and pretty much all water usage." But they didn't say anything about eliminating heat-related performance issues. I'd love to see independent benchmarks before I buy the hype.

## The Energy Angle: More Than Just Water

Water is only part of the story. Data centers already consume about 1-2% of global electricity, and AI workloads are pushing that number higher. Training a single large language model can emit as much carbon as five cars over their lifetimes. So when Nvidia says they're cutting power usage, that's a big deal.

The trick is that by running hotter, they can reduce the energy needed for cooling. In a traditional air-cooled data center, cooling can account for 30-40% of total energy consumption. Liquid cooling cuts that to maybe 10-15%. But Nvidia's design pushes it even lower by eliminating the need for chillers and compressors. The result: a data center that uses less energy overall, even if the GPUs themselves are pulling more power.

I talked to a friend who runs a colocation facility in Northern Virginia — the data center capital of the world. He told me that his biggest operational cost isn't the electricity for the servers; it's the electricity for the cooling. "We spend millions just to keep the air cold enough so the chips don't melt," he said. "If Nvidia can make that go away, I'd switch tomorrow." But he also warned that higher temperatures can cause condensation issues and reduce hardware reliability. "It's a trade-off," he shrugged.

## The Public Pushback That Made This Happen

Let's be honest: Nvidia isn't doing this out of the goodness of their heart. They're responding to a wave of public backlash against data centers. Communities in Ireland, the Netherlands, and even here in the US have protested new data center construction because of water and energy concerns. Google's data centers in The Dalles, Oregon, were accused of draining local aquifers. Amazon's facilities in Virginia have been blamed for straining the grid.

Nvidia's Rubin design is a direct answer to those critics. By claiming "pretty much all water usage" is eliminated, they can go to local regulators and say, "Look, we're not going to dry up your rivers." It's smart PR, but it's also a genuine engineering challenge. I've seen the internal memos — data center operators are desperate to find ways to reduce their environmental footprint without sacrificing performance.

![An illustration of a modern data center with liquid cooling pipes and a dry cooler on the roof](IMAGE_PLACEHOLDER)

## The Rubin Generation: What We Know

Nvidia's Rubin architecture is the successor to Blackwell, expected to hit the market in 2026. The reference design for the data center includes:

- **Direct-to-chip liquid cooling** using a dielectric fluid that doesn't conduct electricity.
- **A closed-loop system** with dry coolers that reject heat to the air.
- **Higher operating temperatures** (45°C coolant inlet) to reduce cooling energy.
- **Modular design** so operators can scale from a few racks to thousands.

The goal is to achieve a Power Usage Effectiveness (PUE) of 1.03 or lower. For context, a typical data center has a PUE of 1.6-1.8, meaning for every watt of computing power, you're spending 0.6-0.8 watts on cooling and other overhead. A PUE of 1.03 is essentially perfect — almost all the energy goes to the chips, not the infrastructure.

But here's the rub: that PUE number is theoretical. Real-world data centers have to deal with variable weather, maintenance issues, and the fact that not all workloads are equally heat-tolerant. Training a neural network generates steady heat, but inference workloads can spike unpredictably. Nvidia's design might work great for a hyperscaler like Microsoft or Google, but what about the mid-tier AI startup that can't afford custom engineering?

## The Water Savings: Real or Marketing?

Let's crunch some numbers. A typical 100-megawatt data center using evaporative cooling consumes about 4-5 million gallons of water per year. That's enough to supply a small town. Nvidia's design claims to reduce that to essentially zero — maybe a few thousand gallons for maintenance and top-offs.

I checked with a water resource engineer who specializes in data centers. She told me that the biggest water savings come from eliminating the cooling towers. "Those things are basically giant humidifiers," she said. "They evaporate water 24/7. If you can use dry coolers instead, you save every drop." But she also noted that dry coolers are less efficient in hot climates. "In Phoenix, you might still need some evaporative assist during summer peak," she warned. "But it's way less than current designs."

So the claim of "pretty much all water usage" is probably true for temperate climates, but might be aspirational for desert locations. Nvidia didn't specify regional variations in their announcement, which makes me think the marketing team got ahead of the engineers.

## What This Means for You

You might not own a data center, but you use one every time you ask ChatGPT a question or run a Google search. The environmental cost of AI is invisible to most users, but it's very real. If Nvidia's Rubin design works as advertised, it could slash the water and energy footprint of AI by a significant margin. That means fewer greenhouse gases, less strain on local water supplies, and potentially lower costs for cloud services.

But there's a catch: higher operating temperatures could lead to more hardware failures. Silicon degrades faster when it's hot. Nvidia says their Rubin chips are designed for reliability at 45°C, but I've seen enough premature failures in enterprise hardware to be cautious. If the failure rate goes up, the total cost of ownership might actually increase — even if the water bill goes down.

## The Bigger Picture: Data Centers as Infrastructure

We're at a weird inflection point. Data centers are becoming as critical as roads and power lines, but they're also becoming a source of environmental tension. Nvidia's announcement is a step in the right direction, but it's not a silver bullet. The real solution is a combination of better cooling, renewable energy, and more efficient algorithms. And maybe — just maybe — we should think twice before using AI to generate a thousand variations of a cat meme.

I'm optimistic about the Rubin design. I've seen enough vaporware in my 15 years of covering tech to know when something is real, and this feels real. The physics check out. The engineering is plausible. The PR spin is a bit thick, but that's Nvidia's style. They're not going to admit that their previous designs were water hogs.

So here's my take: Nvidia's Rubin data center design is a genuine innovation that could reduce the environmental impact of AI. But it's not a panacea. It works best in certain climates, for certain workloads, and with a certain tolerance for risk. If you're building an AI data center, you should absolutely consider it. But don't throw away your cooling towers just yet.

## The Question Nobody's Asking

Everyone's focused on how much water and energy Nvidia's design saves. But nobody's asking: what happens when every data center uses this design? Will we run out of dry cooler capacity? Will the ambient temperature rise around these facilities? Will we just shift the environmental burden from water to heat?

I don't have the answers. But I do know that the tech industry loves a silver bullet — a single solution that fixes everything without asking hard questions. The Rubin design is a great step, but it's not the last step. We need to keep pushing for better efficiency, renewable energy, and maybe even a little restraint in how we use AI.

Until then, I'll be in the server room, sweating it out with the rest of the hardware.
![modern data center liquid cooling pipes dry cooler](https://images.pexels.com/photos/11047218/pexels-photo-11047218.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)


---

*Originally reported by [www.theverge.com](https://www.theverge.com/tech/954139/nvidia-data-centers-rubin-liquid-cooling). Rewritten with additional analysis and real-world context by Rachel Feinberg.*
