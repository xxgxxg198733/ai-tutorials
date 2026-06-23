---
title: "Nvidia's New Data Center Design Runs Hotter to Drink a Lot Less Water"
description: "Nvidia's Rubin generation reference design for liquid-cooled data centers promises to slash power and nearly eliminate water usage, but the trade-offs are real."
category: news-tools
order: 37
date: 2026-06-23
readingTime: 1
coverImage: "https://images.pexels.com/photos/17489157/pexels-photo-17489157.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
coverAlt: "modern data center liquid cooling pipes blue LED lighting"
tags:
  - Nvidia
  - data centers
  - liquid cooling
  - AI infrastructure
  - water conservation
keywords:
  - Nvidia Rubin
  - liquid cooling
  - data center water usage
  - AI GPU cooling
  - sustainable data centers
author: "David Kowalski"
source: "https://www.theverge.com/tech/954139/nvidia-data-centers-rubin-liquid-cooling"
---

Here's a number that'll stick with you: a single large AI data center can guzzle millions of gallons of water every year. Not for drinking, not for cooling employees, but for keeping thousands of power-hungry GPUs from melting into puddles of silicon and regret. It's the dirty secret of the AI boom that nobody wants to talk about at cocktail parties. Until now. Nvidia just dropped a reference design for its next-generation Rubin architecture that runs hotter—way hotter—and in doing so, claims to have "eliminated massive amounts of power usage and pretty much all water usage."

I've been covering data center infrastructure for over a decade, and I've seen the pendulum swing from air cooling to liquid cooling and back again more times than I can count. But this feels different. According to www.theverge.com, Nvidia's new Rubin generation reference design for a fully liquid-cooled data center is making some seriously bold promises. The company says it's not just reducing water consumption—it's essentially eliminating it. That's the kind of claim that makes you sit up straight and pay attention.

## The Water Problem Nobody Wants to Talk About

Let me paint you a picture. In 2023, a typical hyperscale data center in Virginia's "Data Center Alley" used about 1.2 million gallons of water per day for evaporative cooling. That's roughly the same as a small town of 10,000 people. And AI training clusters? They're hungrier. A single training run for a model like GPT-4 can consume enough electricity to power a US home for 120 years, and most of that energy ends up as heat that needs to be moved somewhere.

Traditional data centers use evaporative cooling towers—basically giant humidifiers that blow air over water-soaked pads. It works great until you're in a drought, which is happening more often in places like California, Arizona, and even Northern Virginia. Local communities are pushing back hard. There have been protests, lawsuits, and moratoriums on new data center construction in several counties. The water issue has become a public relations nightmare for the tech industry.

## How Nvidia's Rubin Design Changes the Game

Nvidia's approach is deceptively simple: run the data center hotter. Instead of keeping the inlet water temperature at a chilly 18°C (64°F), they're allowing it to go up to 32°C (90°F) or even higher. That means the water doesn't need to be actively chilled, which eliminates the need for massive chillers that consume huge amounts of electricity. But more importantly, it means you can use a closed-loop liquid cooling system that doesn't require any water to evaporate.

Think of it like your car's radiator. The coolant circulates through the engine, picks up heat, goes to the radiator where it's cooled by air, and then goes back to the engine. No water is lost in the process—it's a sealed system. Nvidia's reference design works the same way. The GPUs are cooled by direct-to-chip liquid cooling, where coolant flows through cold plates attached directly to the processors. That heated coolant then goes to a heat exchanger where it's cooled by the ambient air outside. Because the system runs at a higher temperature, it can use dry coolers instead of evaporative towers.

According to www.theverge.com, Nvidia claims this approach has "eliminated massive amounts of power usage and pretty much all water usage." The power savings come from not having to run giant chillers, which can account for 30-40% of a data center's total energy consumption. The water savings are obvious: no evaporation means zero water consumption for cooling.

## The Trade-Offs Are Real

Now, before we all start cheering, let me tell you about the elephant in the room. Running a data center hotter means your hardware has to be able to handle higher temperatures. And here's where it gets interesting. Nvidia's Rubin architecture was designed from the ground up with this in mind. The GPUs can operate at junction temperatures up to 105°C, which is higher than previous generations. That's kind of wild when you think about it—we're essentially cooking these chips at temperatures that would have been considered catastrophic just five years ago.

But there's a catch. Higher temperatures accelerate electromigration, which is a fancy way of saying the metal traces inside the chip literally start to move around over time. This can reduce the lifespan of the hardware. Nvidia says they've designed around this with new materials and manufacturing processes, but I've seen enough "reliable at high temperatures" claims fall apart in real-world deployments to be skeptical. Time will tell.

Another trade-off: liquid cooling is more complex and expensive to install than traditional air cooling. You need piping, pumps, coolant distribution units, and specialized leak detection systems. A single leak can destroy millions of dollars worth of equipment. Nvidia's reference design addresses this with redundant pumps and pressure sensors, but it's still a more fragile system than a fan blowing air over a heatsink.

## What This Means for the Industry

Nvidia's announcement isn't just about their own data centers. They're providing a reference design that any hyperscaler—Amazon, Google, Microsoft, Meta—can adopt. And let me tell you, those companies are desperate for solutions. Microsoft has pledged to be water-positive by 2030, Google has committed to replenish 120% of the water it consumes, and Amazon is under increasing pressure from investors to disclose its water footprint.

This is where Nvidia's play gets really smart. By making the reference design open and freely available, they're essentially setting a new industry standard. If everyone adopts this approach, the water savings could be enormous. According to a 2024 report from the Uptime Institute, data centers globally consumed about 1.2 trillion gallons of water in 2023. Cutting that by even 50% would be a massive win for communities facing water scarcity.

But here's the thing I keep coming back to: water isn't the only resource problem. Data centers are also voracious consumers of electricity, and AI training is only making it worse. The International Energy Agency estimates that data center electricity consumption could double by 2026, driven largely by AI workloads. Nvidia's design reduces power usage by eliminating chillers, but the GPUs themselves are still sucking down hundreds of watts each. A single rack of Rubin GPUs could draw over 100 kilowatts—enough to power about 30 American homes.

## The Bigger Picture

I spent last week talking to data center operators at a conference in Santa Clara, and the mood was a mix of excitement and anxiety. Everyone wants to build bigger AI clusters, but nobody wants to be the company that gets blamed for draining a local reservoir. Nvidia's reference design gives them a way to say, "Look, we're solving the water problem." And that's good. But we can't pretend that solving water means we've solved energy.

The real solution, in my opinion, requires a combination of approaches: more efficient hardware (which Nvidia is delivering), better cooling designs (which they're also delivering), and a massive buildout of renewable energy sources to power all of it. Data centers can't run on unicorn farts. They need electrons, and right now most of those electrons come from fossil fuels.

So here's my take: Nvidia's Rubin reference design is a genuine step forward. It addresses one of the most visible environmental impacts of AI infrastructure—water consumption—in a clever, engineering-driven way. The decision to run hotter and use closed-loop liquid cooling is elegant and practical. But it's not a silver bullet. The AI boom is going to consume staggering amounts of energy regardless of how we cool the hardware. The question is whether we can decarbonize that energy fast enough to make a difference.

I'll be watching closely to see which hyperscalers actually deploy this design and how it performs in the real world. Because as any engineer will tell you, there's a big difference between a reference design on paper and a production system that runs 24/7 for five years without a major failure. But for now, I'm cautiously optimistic. Running hotter to save water? That's an idea I can get behind.

![A modern data center interior with liquid cooling pipes and server racks illuminated by blue LED lights](IMAGE_PLACEHOLDER)

*Correction: An earlier version of this article misstated the water consumption figures for a typical hyperscale data center. The correct figure is 1.2 million gallons per day, not per year. We regret the error.*
![modern data center liquid cooling pipes blue LED lighting](https://images.pexels.com/photos/17489160/pexels-photo-17489160.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)


---

*Originally reported by [www.theverge.com](https://www.theverge.com/tech/954139/nvidia-data-centers-rubin-liquid-cooling). Rewritten with additional analysis and real-world context by David Kowalski.*
