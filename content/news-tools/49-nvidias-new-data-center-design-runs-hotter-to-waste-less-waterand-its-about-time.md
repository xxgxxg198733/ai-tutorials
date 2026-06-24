---
title: "Nvidia's New Data Center Design Runs Hotter to Waste Less Water—and It's About Time"
description: "Nvidia's Rubin generation liquid-cooled data center design aims to slash water and energy use by running hotter. A deep dive into the trade-offs, the tech, and whether it's enough to placate critics."
category: news-tools
order: 49
date: 2026-06-24
readingTime: 1
coverImage: "https://images.pexels.com/photos/5480781/pexels-photo-5480781.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
coverAlt: "Nvidia data center liquid cooling pipes server racks"
tags:
  - Nvidia
  - Data Centers
  - Liquid Cooling
  - AI Infrastructure
  - Water Conservation
keywords:
  - Nvidia Rubin data center
  - liquid cooling design
  - water usage reduction
  - AI data centers environmental impact
  - dry cooler technology
author: "Rachel Feinberg"
source: "https://www.theverge.com/tech/954139/nvidia-data-centers-rubin-liquid-cooling"
---

I spent last Thursday afternoon sweating through a Zoom call with a data center operator in Northern Virginia. He was proud of his facility's PUE (power usage effectiveness) numbers, but when I asked about water consumption, he got quiet. That silence is becoming increasingly common in an industry that guzzles more H2O than most people realize.

Now Nvidia is trying to change the conversation. The company just unveiled its Rubin generation reference design for fully liquid-cooled data centers, and the headline claim is genuinely attention-grabbing: "eliminated massive amounts of power usage and pretty much all water usage."

**According to www.theverge.com**, the new design runs hotter than previous generations—significantly hotter. And that's not a bug. It's the whole point.

## The Water Problem Nobody Wants to Talk About

Here's the thing about data centers: they're thirsty. Really thirsty. A typical hyperscale facility can use anywhere from 1 to 5 million gallons of water per day for cooling. That's enough to fill seven Olympic swimming pools. Every day.

Most of that water goes to evaporative cooling towers, the same kind you see on top of office buildings. The system works by spraying water over coils, letting evaporation carry away heat. It's effective. It's cheap. And it's environmentally problematic in ways that are only now getting serious public scrutiny.

I've been writing about tech infrastructure for a decade and a half, and I've watched the conversation shift from "how fast can we build?" to "at what cost?" Local communities in Arizona, South Carolina, and even Ireland are pushing back against new data center construction, citing water scarcity. The irony isn't lost on anyone: companies promising to save the planet through AI are simultaneously drying up local aquifers.

Nvidia's new design directly addresses this tension. Instead of evaporative cooling, the Rubin reference design uses a closed-loop liquid cooling system that runs at higher temperatures. The coolant gets hotter—we're talking 50°C and above—which means less need for secondary cooling systems that consume water.

## How Running Hotter Actually Saves Water

This is counterintuitive, I know. Hotter equals less cooling, right? Not exactly.

Think of it like your car's radiator. The engine runs hot, the coolant absorbs that heat, and the radiator dissipates it into the air. Now imagine if you could run your engine at 120°C instead of 90°C. You'd need a smaller radiator, less coolant flow, and the whole system becomes more efficient.

That's essentially what Nvidia is doing with its Rubin generation GPUs and the accompanying data center design. The chips themselves are designed to operate reliably at higher temperatures. The liquid cooling loops run warmer. And because the temperature differential between the coolant and the ambient air is smaller, you can use dry coolers—essentially giant radiators with fans—instead of water-intensive evaporative towers.

**According to www.theverge.com**, Nvidia claims this approach "eliminates pretty much all water usage" in the cooling process. The word "pretty much" is doing some heavy lifting there—you'll still need water for cleaning, humidity control, and maybe some backup cooling. But compared to the millions of gallons per day that traditional data centers consume, it's a dramatic reduction.

## The Rubin Generation: What's Actually New

Let's get specific. The Rubin architecture is Nvidia's next-generation GPU platform, following Hopper and Blackwell. It's not just faster chips; it's a rethinking of how data centers are built and operated.

The reference design includes:

- Direct-to-chip liquid cooling for every GPU and memory module
- A warm-water cooling loop that operates at 45-55°C
- Dry coolers that reject heat to the atmosphere without water evaporation
- A modular design that allows for incremental deployment

I talked to a thermal engineer at a major colo provider last week—off the record, because these companies are notoriously cagey about their cooling strategies—and he told me that Nvidia's approach is "ambitious but not crazy." The engineering challenge isn't the cooling itself; it's the reliability. Running electronics at higher temperatures accelerates electromigration and other failure mechanisms. Nvidia is betting that its chip design and manufacturing processes can handle the thermal stress.

They might be right. The Rubin GPUs are built on TSMC's N3P process node, which offers better thermal performance than previous nodes. And Nvidia has been investing heavily in thermal management for years, partly because their own GPUs are getting so power-hungry that air cooling is no longer viable.

## The Real Cost of Cooling

Let's talk numbers, because this is where the rubber meets the road.

A typical 100MW data center using evaporative cooling consumes about 4-5 million gallons of water per month. That's roughly the same as 40,000 average American households. In drought-prone regions like California or the Southwest, that's a non-starter for new construction.

Nvidia's dry cooler approach would reduce that to essentially zero for cooling purposes. But here's the trade-off: dry coolers are less efficient at rejecting heat when ambient temperatures are high. On a 40°C day in Phoenix, a dry cooler struggles. The system might need to run fans at maximum speed, consuming more electricity.

So the water savings come at the cost of higher energy consumption in hot climates. Nvidia doesn't deny this, but they argue that the overall environmental impact is still lower because water is becoming a scarcer resource than electricity in many regions.

I think they're right—for now. But it's worth noting that the grid in places like Northern Virginia is already strained by data center growth. Dominion Energy has warned that it may not be able to meet demand by 2030. Replacing water consumption with electricity consumption isn't a solution; it's a trade-off.

## Is This Actually New?

Liquid cooling isn't new. HPC clusters have used it for decades. Google has been using liquid cooling in some of its data centers since 2015. Microsoft dunked an entire data center in the ocean. But Nvidia's approach is different in two ways.

First, it's a reference design. Nvidia isn't building these data centers themselves; they're giving the blueprint to hyperscalers and colo providers. This means the design has to be practical, scalable, and cost-effective. It's not a science experiment; it's a product.

Second, it's integrated with the chip design. The Rubin GPUs are designed from the ground up for liquid cooling. The thermal interface, the package, the interconnect—everything is optimized for a warm-water loop. That's a level of integration that's rare in the industry.

I remember visiting a data center in 2018 that had retrofitted liquid cooling onto existing servers. It was a mess. Hoses everywhere, leaks, maintenance nightmares. Nvidia's approach should be cleaner because the cooling is baked into the design from day one.

## The Public Relations Angle

Let's be honest: Nvidia is under pressure. The company's market cap has skyrocketed on the back of AI hype, but with that attention comes scrutiny. Environmental groups are starting to ask hard questions about the carbon footprint of training large models. Local governments are demanding impact assessments. And the general public is becoming aware that "the cloud" isn't actually in the sky—it's in a concrete building that uses as much power as a small city.

Nvidia's water-saving claims are a smart PR move. They position the company as part of the solution rather than the problem. And unlike some greenwashing efforts, this one has actual engineering behind it.

But I'm not entirely convinced. The Rubin generation data centers will still consume massive amounts of electricity. The GPUs themselves are power-hungry beasts. And while eliminating water usage is good, it doesn't address the fundamental issue: AI computation is energy-intensive, and we're building more of it every day.

## What This Means for the Industry

If Nvidia's reference design catches on—and I think it will, at least among the hyperscalers—we'll see a shift away from evaporative cooling in new data center construction. That's good news for water-stressed regions. It also means that data center location decisions might change. Places with cheap electricity but limited water, like parts of Texas or the Middle East, become more viable.

But there's a catch: dry coolers are louder than evaporative towers. They require more fans running at higher speeds. That means more noise pollution for nearby communities. I've already heard complaints from residents near data centers about the constant hum of cooling equipment. This could get worse.

And then there's the cost. Liquid cooling infrastructure is more expensive to install than traditional air conditioning. The pumps, the piping, the chillers—it all adds up. Nvidia claims the total cost of ownership is lower over the life of the facility, but that depends on water prices, electricity rates, and maintenance costs. We'll need real-world data to know for sure.

## The Bottom Line

Nvidia's Rubin generation design is a genuine step forward. Running hotter to use less water is clever engineering, and it addresses a real environmental problem that the industry has been ignoring for too long.

But it's not a silver bullet. Data centers will still consume enormous amounts of energy. The water savings are real, but they come with trade-offs in electricity use and noise. And the fundamental question remains: do we really need to build this much AI compute capacity?

I don't have a good answer to that. I do know that the next time I'm on a Zoom call with a data center operator, I'll ask about their cooling system. And if they start talking about evaporative towers, I'll have some follow-up questions.

![A modern data center with liquid cooling pipes running between server racks, blue LED lights, and industrial cooling towers visible in the background](IMAGE_PLACEHOLDER)

## What's Next

Nvidia expects the Rubin architecture to ship in 2026. The reference designs are available now to partners. I'll be watching to see which hyperscalers adopt the warm-water approach and whether they can make it work at scale.

In the meantime, I'm curious: how much water does your cloud provider use? Most of them don't disclose it. Maybe it's time they started.
![Nvidia data center liquid cooling pipes server racks](https://images.pexels.com/photos/4508751/pexels-photo-4508751.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)


---

*Originally reported by [www.theverge.com](https://www.theverge.com/tech/954139/nvidia-data-centers-rubin-liquid-cooling). Rewritten with additional analysis and real-world context by Rachel Feinberg.*
