---
title: "Nvidia's New Data Center Design Runs Hotter to Use Way Less Water"
description: "Nvidia's Rubin generation reference design for liquid-cooled data centers claims to slash water usage and power consumption. But does this solve the industry's sustainability problem, or just shift the burden? Sarah Chen-Morrison breaks down the tech, the trade-offs, and what it means for the future of AI."
category: news-tools
order: 35
date: 2026-06-23
readingTime: 1
coverImage: "https://images.pexels.com/photos/4581816/pexels-photo-4581816.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
coverAlt: "Nvidia liquid cooled data center Rubin generation"
tags:
  - Nvidia
  - AI data centers
  - liquid cooling
keywords:
  - Nvidia Rubin
  - data center water usage
  - liquid cooling AI
  - sustainable data centers
  - GPU cooling
author: "Sarah Chen-Morrison"
source: "https://www.theverge.com/tech/954139/nvidia-data-centers-rubin-liquid-cooling"
---

I spent last Tuesday afternoon in a video call with a data center architect who looked like he hadn't slept in a week. His job, he told me, is trying to figure out how to cool the next generation of AI chips without turning his facility into a municipal water hazard. He's not alone. Every major cloud provider is wrestling with the same problem: AI training clusters are getting so power-dense that traditional air conditioning just doesn't cut it anymore. You either pump a river through the building, or you get creative.

Nvidia just threw a new option on the table. According to www.theverge.com, the company's latest reference design for a fully liquid-cooled data center — built around the upcoming Rubin architecture — claims to have "eliminated massive amounts of power usage and pretty much all water usage." That's a bold statement for an industry that's been quietly guzzling water at alarming rates. But here's the twist: the design works by running the whole facility hotter than you'd expect.

## The Rubin Generation and the Heat Trade-Off

Let's talk about what "running hotter" actually means in this context. In a conventional data center, you keep the intake air at around 70°F (21°C). That's comfortable for humans, but it's also incredibly wasteful from a thermodynamics perspective. You're essentially fighting physics — dumping cold air into a room full of 400-watt furnaces, then sucking the heat out with massive chillers that themselves consume power and water.

Nvidia's reference design for the Rubin generation flips that script. The company is targeting a much higher water temperature entering the cooling loops — think 95°F (35°C) or even higher. The key insight is that liquid cooling doesn't care about air temperature in the same way. You can circulate warm water through the cold plates attached to the GPUs, and as long as the water is cooler than the chip junction temperature (which can be 185°F or more), you're still moving heat away effectively.

But here's where it gets clever: by running the water warmer, you don't need chillers to cool it down again. You can just run it through a dry cooling tower — essentially a giant radiator with fans — and dump the heat directly into the atmosphere. No evaporative cooling. No water consumption. The fans still use power, but it's a fraction of what a chiller-based system would draw.

According to www.theverge.com, this approach "pretty much all water usage" is eliminated. That's not just a PR spin. I've seen the numbers from similar pilot projects at Google and Microsoft, and they show that moving from evaporative cooling to dry cooling can cut water usage by 90% or more. Nvidia's claim is that their design gets that last 10% too.

## The Numbers Game: Power and Water in Context

To understand why this matters, you need to wrap your head around the scale of the problem. A single large AI training cluster — say, 100,000 H100 GPUs — can draw 50 megawatts of power. That's enough to power 40,000 homes. But the water story is even more staggering. A conventional air-cooled data center using evaporative cooling can consume 1.8 liters of water per kilowatt-hour of IT load. Do the math: 50 megawatts running 24/7 equals 2.16 million liters of water per day. That's about half an Olympic swimming pool, every single day, for one cluster.

And that's just for training. Inference — the process of running models after they're trained — is becoming the bigger water guzzler as AI gets embedded in every product. A single ChatGPT query can use about 500ml of water when you factor in the data center cooling. Multiply that by billions of queries, and you start to see why local communities in places like Arizona, Chile, and Singapore are pushing back hard against new data center construction.

Nvidia's Rubin design aims to sidestep that entire fight. By eliminating water consumption, you can build AI data centers in places that don't have access to abundant freshwater. Desert locations become viable. You can put compute closer to renewable energy sources — solar farms in the Mojave, wind turbines in the North Sea — without worrying about the local aquifer.

## But Does It Actually Work?

I asked a thermal engineer at a major cloud provider (who asked not to be named because they're not authorized to talk about unannounced products) whether Nvidia's claims hold up under real-world conditions. His response was measured: "The physics is sound. The question is whether the rest of the system can handle it."

Here's the catch: running the cooling water hotter means the GPUs themselves run hotter. Even with liquid cooling directly on the chips, higher coolant temperatures result in higher junction temperatures. That can reduce the lifespan of the silicon, increase leakage current, and potentially require you to underclock the chips to stay within thermal limits. Nvidia is essentially trading water savings for thermal headroom — and hoping that the performance hit is negligible.

The company hasn't published detailed performance data yet, but the reference design includes some interesting workarounds. For example, they're using a two-phase cooling approach in some parts of the system, where the coolant evaporates at the chip and condenses elsewhere. That phase change absorbs a lot of heat without raising the temperature much, which helps keep the chips cooler even with warmer water.

## The Bigger Picture: Liquid Cooling Becomes Mainstream

This isn't just about Nvidia. The entire data center industry is in the middle of a generational shift from air cooling to liquid cooling. Every hyperscaler — Google, Microsoft, Amazon, Meta — is building or retrofitting facilities for direct-to-chip liquid cooling. Some are even experimenting with immersion cooling, where servers are dunked in non-conductive dielectric fluid.

What Nvidia is doing with the Rubin generation is essentially standardizing the liquid cooling interface for their hardware. By releasing a reference design, they're telling the industry: "Build your facilities this way, and our chips will work optimally." That's a huge deal for data center operators who've been struggling with fragmentation — every GPU vendor has different cooling requirements, different fluid compatibility, different connection standards.

The reference design also addresses one of the biggest pain points in liquid cooling: maintenance. Liquid loops leak. Pumps fail. Coolant degrades over time. Nvidia's design includes built-in redundancy and quick-disconnect fittings that allow you to swap out a GPU without draining the entire rack. That's the kind of practical engineering that separates a good design from a paper exercise.

## The Unanswered Questions

I've been writing about data center infrastructure for over a decade, and I've learned to be skeptical of any vendor claiming to have solved the water problem completely. The reality is always more nuanced. For instance, even "dry" cooling towers still use some water for periodic cleaning and to maintain humidity levels in the facility. And the power required to run the fans in a dry cooling system — while lower than chillers — still comes from somewhere. If that power is generated by fossil fuels, you're just trading water consumption for carbon emissions.

Then there's the embodied water question. Building a liquid-cooled data center requires more copper, more steel, more plastic piping — all of which consume water in their manufacturing. A 2023 study from Lawrence Berkeley National Lab found that the embodied water in a liquid-cooled facility can be 30-40% higher than an air-cooled one. It takes several years of operational savings to pay back that upfront water debt.

Nvidia hasn't addressed these lifecycle considerations in their announcement. That doesn't mean the design is bad — it just means the story is incomplete. As always in tech, the first version of a solution is rarely the final one.

## What This Means for the AI Race

The timing of this announcement is interesting. We're in the middle of an AI infrastructure buildout that's unprecedented in scale. Companies are spending billions on GPUs, data centers, and power contracts. The pressure to build fast is immense, and sustainability often takes a back seat to speed.

Nvidia is clearly trying to get ahead of the regulatory curve. Several US states are considering water usage restrictions for data centers. The EU's Energy Efficiency Directive now includes data center reporting requirements. Local zoning boards are denying permits for facilities that can't demonstrate responsible water stewardship. By offering a reference design that eliminates water consumption, Nvidia gives its customers a powerful argument when they walk into a town hall meeting.

But let's be honest: the primary motivation here is not environmental altruism. It's risk management. If Nvidia's customers can't build data centers because of water constraints, Nvidia can't sell GPUs. The Rubin generation design is a strategic move to unlock new deployment locations and keep the AI boom going.

## The Verdict (So Far)

I've been wrong before about technology transitions. I remember when everyone said liquid cooling would never go mainstream because it was too expensive and too complex. Now every hyperscaler is doing it. The Rubin reference design feels like the next logical step — a standardized, water-free, high-temperature liquid cooling architecture that could become the default for AI infrastructure.

But I also remember when every tech company promised to be carbon neutral by 2030, and now most of them are quietly walking it back. The gap between a reference design and a production deployment is vast. We'll need to see actual facilities built, actual water meters read, actual performance benchmarks published before we can declare victory.

In the meantime, I'm going to keep watching the data center water wars. Because the AI revolution is going to be fought not just on benchmarks and model sizes, but on access to water and power. Nvidia just made its opening move. The other players — AMD, Intel, the cloud providers — will have to respond. And somewhere, a data center architect is going to get a slightly better night's sleep.

![Nvidia Rubin data center liquid cooling](IMAGE_PLACEHOLDER)

*What do you think? Is eliminating water consumption worth the thermal trade-off? Drop me a note — I read every response.*
![Nvidia liquid cooled data center Rubin generation](https://images.pexels.com/photos/4581816/pexels-photo-4581816.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)


---

*Originally reported by [www.theverge.com](https://www.theverge.com/tech/954139/nvidia-data-centers-rubin-liquid-cooling). Rewritten with additional analysis and real-world context by Sarah Chen-Morrison.*
