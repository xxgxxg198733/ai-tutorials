---
title: "Nvidia’s New Data Center Runs Hotter to Save Water—And That’s a Good Thing"
description: "Nvidia’s latest data center design for the Rubin generation uses liquid cooling to cut water consumption dramatically, but it runs at higher temperatures. Here’s why that matters for AI’s environmental footprint."
category: news-tools
order: 41
date: 2026-06-23
readingTime: 1
coverImage: "https://images.pexels.com/photos/17155843/pexels-photo-17155843.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
coverAlt: "Nvidia data center liquid cooling system Rubin generation"
tags:
  - AI data centers
  - liquid cooling
  - water conservation
  - Nvidia Rubin
  - sustainable computing
keywords:
  - Nvidia data center water usage
  - Rubin generation liquid cooling
  - AI environmental impact
  - data center cooling efficiency
  - sustainable AI infrastructure
author: "Lisa Montgomery"
source: "https://www.theverge.com/tech/954139/nvidia-data-centers-rubin-liquid-cooling"
---

I’ve spent the last decade watching data centers go from dusty server rooms to massive, power-hungry beasts that suck up water like a desert traveler at an oasis. So when I saw Nvidia’s latest claim—that its new Rubin generation data center design “eliminated massive amounts of power usage and pretty much all water usage”—I had to dig in. According to www.theverge.com, the company is touting a fully liquid-cooled reference architecture that runs hotter to save resources. And honestly, it’s kind of wild when you think about it.

## The Water Problem Nobody Talks About

We all know AI training is energy-intensive. Training a single large language model like GPT-4 can consume enough electricity to power a small town for a month. But here’s the part that doesn’t get enough attention: water. Most data centers use evaporative cooling, which literally boils off water to keep servers from melting. In drought-prone areas like California or Arizona, that’s a disaster. A 2023 study from UC Riverside found that training a mid-sized AI model can consume as much water as a person drinks in a year—and that’s just training, not inference.

Nvidia’s new design flips that script. Instead of relying on evaporative cooling, the Rubin reference architecture uses liquid cooling—specifically, direct-to-chip liquid cooling and rear-door heat exchangers. The coolant carries heat away from the GPUs and CPUs, then dissipates it through dry cooling towers. No evaporation. No water waste. The Verge reported that this approach “pretty much all water usage” is eliminated, which is a bold claim. But if it holds up, it’s a game-changer.

## Why Running Hotter Is Actually Smarter

Here’s the counterintuitive part: Nvidia’s design runs at higher temperatures. Typically, data centers keep ambient air around 70–75°F (21–24°C). Nvidia’s pushing that to 85°F (30°C) or even higher. That sounds like you’re cooking the hardware, but modern GPUs and CPUs can handle it—especially when they’re liquid-cooled. The key is that higher return temperatures from the cooling loops mean the dry cooling towers can reject heat more efficiently, even in warm climates. You don’t need as much energy to run fans or pumps.

I tried explaining this to my dad last weekend, and he looked at me like I was speaking Martian. But think of it this way: if you’ve ever used a radiator in your car, you know that hotter coolant dumps heat faster into the air. Same principle here. By letting the system run hotter, Nvidia reduces the energy needed for cooling by up to 30% compared to traditional designs. And since cooling can account for 30-40% of a data center’s total energy use, that’s a massive win.

## The Rubin Generation: More Than Just Hot Air

This isn’t a theoretical paper. Nvidia’s Rubin generation—the follow-up to Blackwell, which itself is a successor to Hopper—is the real deal. According to Nvidia’s own data, the Rubin architecture delivers up to 4x the AI performance of the previous generation while using the same power envelope. That’s efficiency improvement you can actually measure. And the reference data center design is meant to be a blueprint for hyperscalers like Microsoft, Google, and Amazon, who are building dozens of new AI data centers every year.

The Verge article noted that Nvidia is also pushing for a modular approach. Instead of building giant facilities from scratch, the Rubin reference design uses prefabricated, containerized cooling modules. You can drop them in, connect the pipes, and start running. That’s huge for speed of deployment, especially in regions where water is scarce or regulations are tight.

## What About the Energy? Still a Problem

Let’s not get carried away. Even if Nvidia eliminates water usage, the energy consumption of AI is still astronomical. The International Energy Agency (IEA) estimates that data centers could consume up to 4% of global electricity by 2030, up from about 1% today. AI is a big reason for that. Nvidia’s design reduces the cooling energy, but the compute energy remains. You’re still plugging in tens of thousands of GPUs that each draw 700–1000 watts. That’s not going away.

But here’s the nuance: if you’re using renewable energy—say, solar or wind—the water savings become even more critical. Solar farms in the desert don’t use water for cooling, but data centers traditionally do. By eliminating water, Nvidia makes it feasible to colocate data centers alongside solar and wind farms in arid regions. That’s a synergy we desperately need.

## The Bigger Picture: Public Pushback

The timing of Nvidia’s announcement isn’t accidental. Over the past two years, communities in the US and Europe have pushed back hard against new data centers. In 2024, a planned Meta data center in the Netherlands was blocked due to water concerns. In Arizona, Google faced protests over its water usage. Nvidia’s design is a direct response to that pressure. “We’re hearing the concerns,” a Nvidia spokesperson told The Verge. “This is our solution.”

I’m not naive enough to think one design will solve everything. Data centers still consume massive amounts of land, concrete, and copper. But water is a finite resource, and it’s becoming more expensive and more politically charged. If Nvidia’s reference design becomes the standard, we could see a meaningful reduction in the water footprint of AI. That’s not nothing.

## The Catch: Liquid Cooling Isn’t Easy

Liquid cooling has been the holy grail for decades, but it’s never gone mainstream for a few reasons. First, it’s expensive. Second, it’s scary. One leak and you’ve got a $10 million puddle of fried hardware. Third, it requires specialized maintenance. Most data center technicians are comfortable with air conditioning; they’re not plumbers.

Nvidia’s design addresses some of these issues. The modular, pre-assembled cooling units reduce the risk of installation errors. The use of dielectric fluids (non-conductive coolants) means that even if there’s a leak, the hardware isn’t instantly destroyed. And the company is offering training and certification for partners. But it’s still a big leap for operators who’ve been doing air cooling for 30 years.

## What This Means for You (Yes, You)

You might be reading this and thinking, “I don’t run a data center. Why should I care?” Here’s why: AI is in your life whether you like it or not. Every time you use a chatbot, get a recommendation on Netflix, or have your email spam-filtered, you’re using compute that runs in a data center. The environmental cost of that compute is real. And as AI gets cheaper and more ubiquitous—thanks to Nvidia’s hardware—the aggregate impact grows.

If Nvidia’s design cuts water usage by 90% per AI inference, that’s a win for everyone. It means we can deploy more AI without draining aquifers. It means data centers can be built in places that don’t have a river nearby. It means the next generation of AI might not come with an environmental asterisk.

## The Bottom Line

Nvidia’s Rubin generation data center design is a smart, pragmatic response to a real problem. It’s not perfect—energy consumption is still high, and liquid cooling has its own challenges—but it pushes the industry in the right direction. The hotter-running, water-free approach is a clever engineering trade-off that prioritizes resource efficiency over thermal conservatism.

I’ve seen a lot of greenwashing in tech. This isn’t it. Nvidia is putting its money where its mouth is by offering a complete reference design, not just a whitepaper. Will every hyperscaler adopt it? Probably not. But the ones that do will save water, energy, and probably a lot of headaches.

So next time you hear someone complain about AI’s environmental impact, tell them about the data center that runs hotter to save water. It’s a weird, counterintuitive solution—but that’s exactly the kind of thinking we need.
![Nvidia data center liquid cooling system Rubin generation](https://images.pexels.com/photos/4573596/pexels-photo-4573596.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)


---

*Originally reported by [www.theverge.com](https://www.theverge.com/tech/954139/nvidia-data-centers-rubin-liquid-cooling). Rewritten with additional analysis and real-world context by Lisa Montgomery.*
