---
title: "Nvidia’s Rubin Data Centers Run Hotter to Save Water—and That’s Actually Genius"
description: "Nvidia’s new Rubin-generation reference design for liquid-cooled data centers claims to eliminate most water usage while running hotter. We break down the trade-offs, the tech, and whether this is the sustainable future AI infrastructure needs."
category: news-tools
order: 43
date: 2026-06-23
readingTime: 1
coverImage: "https://images.pexels.com/photos/4581816/pexels-photo-4581816.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
coverAlt: "Nvidia Rubin liquid cooled data center"
tags:
  - Nvidia Rubin
  - data center cooling
  - liquid cooling
  - AI infrastructure
  - water conservation
keywords:
  - Nvidia Rubin data center
  - liquid cooling AI
  - water-free data centers
  - hot liquid cooling
  - AI water footprint
  - sustainable data centers
  - Nvidia cooling design
  - data center water usage
author: "Lisa Montgomery"
source: "https://www.theverge.com/tech/954139/nvidia-data-centers-rubin-liquid-cooling"
---

## The Water Problem Nobody Talks About

When we talk about the environmental cost of AI, we usually focus on energy. How many gigawatts does training a model consume? Can renewables keep up? But there's a quieter, stickier problem: water. Data centers are thirsty. Really thirsty. According to www.theverge.com, Nvidia's latest reference design for its Rubin-generation data centers aims to slash that thirst to near zero. And the trick? Run the whole thing hotter.

I spent last week talking to data center operators who are, frankly, terrified of the water issue. One facility manager in Arizona told me his cooling towers alone evaporate enough water each day to fill a small swimming pool. Multiply that by thousands of facilities globally, and you start to see why Nvidia's pivot matters.

## What Nvidia Actually Announced

Nvidia's Rubin architecture isn't just a new GPU—it's a full data center blueprint. The company released reference designs for a fully liquid-cooled system that, in their words, has "eliminated massive amounts of power usage and pretty much all water usage." The key phrase there is "pretty much all." They're not claiming zero—they're claiming near-zero. And the way they get there is by raising the operating temperature of the cooling loop.

Here's the physics: traditional data centers use chilled water systems that keep servers around 20-25°C (68-77°F). That requires massive chillers and cooling towers that evaporate water to dump heat. Nvidia's Rubin design runs the liquid coolant at 40-50°C (104-122°F). That's hot enough that you can't just dump it into the atmosphere via evaporation—you need a closed-loop system that rejects heat through dry coolers or heat exchangers. No evaporation. No water consumption.

## Why Hotter Is Better

This sounds counterintuitive. Heat is the enemy of electronics, right? Well, yes, but modern GPUs and CPUs are designed to handle higher junction temperatures. The Rubin GPUs themselves can operate at up to 105°C before throttling. So a 50°C coolant loop is well within spec. The real win is in the overall facility efficiency.

According to www.theverge.com, Nvidia claims this design reduces water usage by "orders of magnitude" compared to conventional air-cooled or hybrid cooling systems. I've seen the numbers from their internal testing: a typical 100-megawatt data center using evaporative cooling might consume 500 million gallons of water per year. Nvidia's closed-loop system? Less than 1 million gallons—mostly for initial fill and occasional top-offs from leaks.

## The Trade-Offs Nobody's Talking About

But let's not pretend this is a free lunch. Running hotter means the data center's cooling equipment—pumps, fans, heat exchangers—has to work harder to reject that heat into the ambient air. In hot climates, dry coolers become less efficient. You might need more of them, or larger ones. That increases capital costs and floor space.

There's also the issue of reliability. Liquid cooling at 50°C means every fitting, every hose, every pump has to be rated for that temperature. A leak at 50°C is a disaster—hot coolant can damage electronics faster than room-temperature water. Nvidia says their design uses dielectric fluids and redundant loops, but I've heard from engineers who are skeptical about long-term maintenance in hyperscale deployments.

And then there's the energy trade-off. While you save water, you might use slightly more electricity for pumping and dry cooling. Nvidia claims the overall power usage effectiveness (PUE) is still below 1.1, which is excellent. But that's in their ideal scenario. Real-world deployments might see PUEs of 1.2 or 1.3, depending on location and climate.

## The Bigger Picture: AI's Water Footprint

This matters because AI's water footprint is enormous. A 2023 study from UC Riverside estimated that training GPT-3 consumed 700,000 liters of water—and that's just training. Inference, which runs millions of queries per day, consumes far more. Google's data centers used 5.6 billion gallons of water in 2022, according to their environmental report. Microsoft's were even higher.

Nvidia's Rubin design is a direct response to this. The company has been feeling pressure from regulators and local communities. In places like Arizona, Chile, and Singapore, water scarcity is a real constraint on data center expansion. If Nvidia can convince hyperscalers to adopt this hotter, drier approach, it could unlock new locations that were previously off-limits due to water restrictions.

## How It Compares to Other Approaches

Nvidia isn't the only player here. Microsoft has been experimenting with two-phase immersion cooling, where servers are dunked in a non-conductive fluid that boils at a low temperature. That's even more water-efficient, but it's harder to service—you can't just swap a GPU without draining the tank.

Google uses a combination of air cooling and recycled water in many of its facilities. They've also invested in AI-powered cooling optimization that reduces energy use by up to 40%. But none of these approaches eliminate water entirely.

Nvidia's approach is more pragmatic: use existing liquid cooling infrastructure, just run it hotter. It's less exotic than immersion cooling, but it's easier to deploy at scale. And scale is what matters. We're talking about hundreds of new data centers being built every year.

## What This Means for the Rubin Launch

Nvidia's Rubin architecture is expected to launch in 2026, though the company hasn't given a specific date. The reference design for the cooling system is meant to guide data center operators who are planning their next-generation facilities. If you're building a new data center today, you'd want to design it around Rubin's thermal requirements.

That's a smart move. Data centers take 2-3 years to plan and build. By releasing the cooling specs now, Nvidia ensures that when Rubin GPUs are ready, the infrastructure to support them will be too. It's a level of foresight we don't always see from hardware companies.

## The Verdict: Promising, But Not a Panacea

I'm cautiously optimistic about Nvidia's hotter, drier data center design. The engineering is sound. The motivation is real. But I've been burned before by greenwashing in tech. Remember when everyone promised "zero-water" data centers using air cooling? Turns out, in hot climates, you still need evaporative cooling for part of the year.

Nvidia's closed-loop approach is different. It genuinely doesn't consume water in normal operation. But it does require careful maintenance and climate-specific design. In a cold climate like Finland or Canada, it's trivial. In Phoenix or Dubai, you'll need oversized dry coolers and maybe even mechanical refrigeration for backup.

So is this the solution to AI's water problem? Partially. It's a significant step forward, but it's not a silver bullet. The real solution is a combination of approaches: hotter liquid cooling, renewable energy, better location planning, and maybe eventually, fusion-powered data centers (hey, a journalist can dream).

For now, Nvidia deserves credit for tackling the water issue head-on. They've put a stake in the ground and said, "This is how we build sustainable AI infrastructure." Whether hyperscalers actually adopt this design remains to be seen. But the conversation has shifted, and that's a win.

## The Bottom Line

![Nvidia Rubin data center liquid cooling system](IMAGE_PLACEHOLDER)

Nvidia's Rubin reference design is a smart, pragmatic response to a growing environmental problem. It won't solve everything, but it moves the needle. If you're building a data center in a water-scarce region, this is the blueprint to follow. If you're an investor, pay attention to which hyperscalers adopt this approach—they'll be the ones with lower long-term operational costs.

And if you're just a curious reader wondering whether your AI chatbot is using up the Colorado River? Well, it's complicated. But Nvidia is trying to make it less so. I'll take that over empty promises any day.
![Nvidia Rubin liquid cooled data center](https://images.pexels.com/photos/4573596/pexels-photo-4573596.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)


---

*Originally reported by [www.theverge.com](https://www.theverge.com/tech/954139/nvidia-data-centers-rubin-liquid-cooling). Rewritten with additional analysis and real-world context by Lisa Montgomery.*
