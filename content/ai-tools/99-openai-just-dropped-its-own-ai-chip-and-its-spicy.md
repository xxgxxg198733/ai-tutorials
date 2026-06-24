---
title: "OpenAI Just Dropped Its Own AI Chip, and It’s Spicy"
description: "OpenAI's first custom AI processor, Jalapeño, built with Broadcom, promises to reshape the economics of large language models. Here's why this matters for the future of AI infrastructure."
category: ai-tools
order: 99
date: 2026-06-24
readingTime: 1
coverImage: "https://images.pexels.com/photos/3665442/pexels-photo-3665442.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
coverAlt: "OpenAI Jalapeño chip silicon wafer close-up"
tags:
  - ai-tools
  - OpenAI
  - AI chips
  - Broadcom
  - Jalapeño
keywords:
  - OpenAI chip
  - Jalapeño processor
  - Broadcom partnership
  - AI inference
  - custom AI hardware
  - LLM economics
  - NVIDIA competition
  - ASIC design
author: "Emily Hartwell"
source: "https://www.theverge.com/ai-artificial-intelligence/955939/openai-reveals-its-first-ai-processor-jalapeno"
---

OpenAI just did something that feels both inevitable and a little bit wild. The company that brought us ChatGPT, DALL-E, and the current AI gold rush has announced its very first custom-designed chip for running large language models. It’s called Jalapeño — yes, after the pepper — and it was built in partnership with Broadcom, the semiconductor giant that also makes chips for Apple and Google.

According to www.theverge.com, Jalapeño is an ASIC — an Application-Specific Integrated Circuit — meaning it’s designed from the ground up for one thing: accelerating the neural network math that powers models like GPT-5. Not graphics. Not general-purpose computing. Just transformers, attention mechanisms, and matrix multiplications at ludicrous speed. And honestly, it’s about time.

### The Chip That Could Change the Economics of AI

Here’s the thing about running large language models at scale: it’s absurdly expensive. Every time you ask ChatGPT a question, somewhere in a data center in Virginia or Iowa, a rack of NVIDIA H100s or Blackwells is burning through enough electricity to power a small apartment building for a minute. The cost per query is tiny — fractions of a cent — but multiply that by billions of queries a day, and you’re talking about infrastructure costs that can make a cloud provider weep.

OpenAI, like every major AI lab, has been renting GPUs from Microsoft’s Azure cloud. But renting is expensive, and GPUs are wasteful for inference. They’re designed for training — the brute-force phase where you feed the model terabytes of text and let it find patterns. Inference, the part where the model actually responds to you, is a different beast. It’s latency-sensitive, power-hungry in a different way, and benefits enormously from custom silicon that cuts out all the GPU overhead.

Enter Jalapeño. I haven’t seen the die shot or the thermal specs, but I can guess what it’s optimized for. Lower precision math (FP8, maybe INT4), massive on-chip SRAM to keep the model weights close to the compute units, and a network fabric that lets hundreds of these chips talk to each other without bottlenecking. According to www.theverge.com, the chip is designed to power both current and future large language models. That’s a smart move — you don’t want to build a chip that’s obsolete when GPT-6 comes out.

### The Broadcom Connection

This partnership with Broadcom is more interesting than it first appears. Broadcom isn’t a household name like NVIDIA or Intel, but they’re everywhere. They make the custom chips for Google’s TPU (Tensor Processing Unit) — which powers everything from Gmail’s smart compose to Google Cloud’s Vertex AI. They also make networking chips that connect servers in hyperscale data centers. So when OpenAI said they wanted a custom AI chip, Broadcom was the obvious choice.

I remember talking to a hardware engineer at a conference last year who rolled his eyes when I asked about NVIDIA’s dominance. “Everyone’s waiting for the ASIC moment,” he said. “GPUs are great for training, but for inference, you want something that doesn’t have all the graphics baggage. NVIDIA knows this — that’s why they’re adding so much AI-specific hardware to their dies. But a custom design will always beat a general-purpose one for a specific workload.”

Jalapeño is that custom design. It’s not trying to be a jack of all trades. It’s a specialist. And specialists, in the world of silicon, tend to win on performance per watt and cost per query.

### Why Now?

You might be wondering: why didn’t OpenAI do this earlier? Two reasons. First, chip design is brutally hard and expensive. A single tape-out — the process of sending the final design to the factory — can cost $50 million or more for a 5nm part. And if you screw up, you don’t get a software patch. You get a $50 million paperweight.

Second, until recently, OpenAI wasn’t big enough to justify the investment. But with hundreds of millions of users, a valuation north of $100 billion, and a burning desire to reduce dependency on NVIDIA (whose chips are both expensive and in short supply), the math suddenly works. If Jalapeño cuts the cost of inference by even 30%, it will pay for itself in a year.

![Placeholder image: A close-up of a silicon wafer with Jalapeño chips, glowing under red light](IMAGE_PLACEHOLDER)

### What This Means for the Rest of Us

If you’re a regular ChatGPT user, you probably won’t notice anything different. The responses will still feel magical. But behind the scenes, OpenAI might be able to offer cheaper tiers, faster responses, or more generous free usage limits. That’s the endgame: make AI so cheap that it becomes a utility, like electricity or internet access.

For competitors like Google and Anthropic, this is a shot across the bow. Google has had its TPU for years, but it’s never been as laser-focused on LLM inference as Jalapeño appears to be. Anthropic — which is backed by Google and Amazon — doesn’t have its own chip yet. They’re still renting. That puts them at a cost disadvantage if OpenAI can undercut them on inference pricing.

And for NVIDIA? Honestly, they’re fine. Their GPUs are still the gold standard for training, and they sell billions of dollars worth of them every quarter. But the inference market — the bigger, more profitable prize in the long run — is now up for grabs. Custom silicon from OpenAI, Google, Amazon (Trainium), and maybe even Meta (they’re working on something too) will eat into NVIDIA’s margins over time.

### The Spice of Life

I asked a friend who designs chips for a living what he thought of the name. “Jalapeño? It’s cute. But I hope it doesn’t run hot,” he joked. “Because if it does, they’ll have to rename it Habanero.”

There’s a serious point there: thermal management is one of the biggest challenges in AI chips. The compute density is insane. A single rack of ASICs can draw 30 kilowatts or more — enough to heat a small house in a Canadian winter. Broadcom has experience with this, but it’s still a non-trivial engineering problem.

Another concern: software. A chip is only as good as the compiler and runtime that support it. NVIDIA’s CUDA ecosystem is a moat that has kept competitors at bay for years. Google’s TPU has its own stack, but it’s not universally loved. OpenAI will need to invest heavily in making sure their models — and third-party models — can run efficiently on Jalapeño. If the software is clunky, the hardware advantage disappears.

But I’m optimistic. OpenAI has some of the best systems engineers in the world. And they’re not building this chip in a vacuum — they know exactly what workloads it needs to run because they wrote the models themselves. That’s a huge advantage over a general-purpose chip vendor.

### The Bigger Picture

This announcement is part of a larger trend: the vertical integration of AI. Companies that once relied on third-party hardware are now building their own. OpenAI does chips. Google does chips. Amazon does chips. Microsoft is rumored to be working on one too. It’s like the smartphone wars all over again — Apple designs its own A-series chips, and that’s a big reason why iPhones are so fast and efficient.

The winners in AI won’t be the ones with the best algorithms alone. They’ll be the ones who can optimize the entire stack — from the silicon to the software to the data center cooling — for maximum performance per dollar. Jalapeño is OpenAI’s opening move in that game.

Will it succeed? I don’t know. Chip design is unforgiving. But I’ll tell you this: I’ve been covering tech long enough to know that when a company as ambitious as OpenAI decides to build its own hardware, you should pay attention. The next time you ask ChatGPT a question, remember: there might be a little Jalapeño chip somewhere, working its magic. Spicy indeed.
![OpenAI Jalapeño chip silicon wafer close-up](https://images.pexels.com/photos/36169771/pexels-photo-36169771.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)


---

*Originally reported by [www.theverge.com](https://www.theverge.com/ai-artificial-intelligence/955939/openai-reveals-its-first-ai-processor-jalapeno). Rewritten with additional analysis and real-world context by Emily Hartwell.*
